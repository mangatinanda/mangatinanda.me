---
title: "I Built Outlay Solo With AI Agents. Then Real Money Hit It."
description: "How I built a multi-tenant expense app my household actually uses, leaning on AI coding agents, and kept it production-grade: 227 tests, a blocking CI, tenancy proven end to end, and the agent tooling checked into the repo."
publishedAt: "2026-07-12"
tags: ["AI-assisted development", "Next.js", "Testing"]
---

## Three people, one ledger, zero patience for a wrong rupee

227 tests, one developer, and three people at home who notice the second a rupee lands in the wrong ledger. That's Outlay. My brother, my wife, and I run our household money through it every day, and it's live at outlay.mangatinanda.me.

It's built for us, so it's opinionated about us. The currency is INR with en-IN digit grouping, so a lakh reads like a lakh. Multi-household workspaces keep "home" and "the farm" apart, each with its own currency and accent color, because one of the ledgers is a family farm and tractor fuel is not a grocery. The CSV importer sniffs out columns and drops duplicate rows, because before this we lived in a spreadsheet and I wanted the spreadsheet's history without the spreadsheet.

I didn't build it for a portfolio. I built it to answer one question I cared about: can you go solo, lean hard on AI coding agents, and still ship something you'd trust with real money?

## Agent-built software demos beautifully. Then someone writes to it.

An agent will hand you an app that demos beautifully and falls over the first time real data hits it. A clean build stays clean until something writes to it wrong. A screen recording proves nothing. My bar sat past the demo: it had to survive my wife importing a year of expenses while my brother splits a bill in the next room.

So the proof is 227 tests across 48 files, run against the real schema. 27 of those files are integration tests that apply the real Drizzle migrations to an in-memory libSQL database, driven by the same libSQL client that runs in production: a local file in dev, Turso in prod, one driver across all three. No mocks. Each of the 27 builds the production schema straight from the migration files and fires real queries at it, because a mock would paper over the exact bug I lose sleep about, the one where the schema and the query quietly disagree.

CI runs the lot on every push and refuses the merge if anything goes red. The blocking job installs with a frozen lockfile on Node 24, then runs Biome, a typecheck, the full suite, and a production build, in that order. One failure anywhere and the branch stays out. Four Playwright specs run in a second job I've kept non-blocking for now, because end-to-end is a young signal I don't trust as a gate yet; it graduates once it earns it. And before I call anything done, I open it in a browser and use it like my brother would.

## The test I'd show you first

Give me one test to prove the whole thing and it's `switch-household-isolation`. It logs in, drops a marker expense into House A, switches to House B, and checks that the marker is gone and the row counts don't line up. The moment House B can see House A's money, that test goes red and the merge dies. Tenancy here is a test that fails the instant I break it, not a promise buried in a design doc.

## The architecture is the argument

One person can't out-discipline a multi-tenant bug by hand, so Outlay pushes the guarantee into its shape. It's server-first Next.js 16.2.7 on React 19.2.7. Reads are plain async functions awaited inside a Server Component. Writes are Server Actions. There's no hand-written REST API touching the app's own data. (A few route handlers exist for the notification poll, a cron cleanup, and Auth.js and the service worker, and that's the whole list.) That shape is what let one person enforce production-grade properties by construction instead of by remembering to.

**Tenancy you can't forge from a browser.** A client component can't import the database or run a query, so household scope never leaves the server's hands. The browser never sends a household id. Every write re-resolves the household server-side, treats the cookie as a hint and membership as the truth, filters on the household id, and checks the returned rows aren't empty. Come back empty and the action says "not found," never "forbidden," so a probing request can't map what exists. The proxy (Next 16's renamed middleware) isn't the wall, because Server Actions accept POSTs on their own. The wall is the `WHERE` clause in every action, and a 287-line scoping test keeps it standing.

**The database-backed app that couldn't build because it had no database.** This one cost me an evening. Every DB-backed page is `force-dynamic`, so the build itself needs no database, which is fortunate, because CI and Vercel Preview don't have one. Should have been fine. But `next build` still imports the db module while it collects page data, and my libSQL client opened its connection the instant it was imported. Preview builds died on `LibsqlError: URL_INVALID`. Read that back: a database app that can't build for want of a database. The fix was a build-phase-only lazy Proxy that constructs the real client on first use, which `force-dynamic` pages never reach at build time. Then I pinned it with a regression test that counts `createClient` calls and proves the connection is deferred, not switched off. You don't design that one at a whiteboard. You ship it and get bitten.

**The parts no agent handled for me.** A raw `throw` inside a Server Action reaches the client as an opaque rejection the UI can't render. So every action is wrapped in a small `safeAction` that returns a documented `{ error }` envelope. The order inside the wrapper matters more than the wrapper does: it calls `unstable_rethrow` first, because `redirect()` and `notFound()` are built as thrown values and have to sail straight through. Reverse those two lines and you swallow your own redirects. `revalidatePath` is manual, per-path, hardcoded into every action; miss one and the user reads a stale page with no error and no warning, and the only thing standing between me and that bug is a rule I wrote down. `React.cache()` dedupes reads inside a request, so "await your data in the component" doesn't turn into a stack of duplicate round-trips.

**Two cracks I left showing.** "Server-first for everything" isn't quite true, and I stopped pretending. Two reads wouldn't fit the shape. Client-triggered pagination fires after render from a client component, so `loadMoreActivity` and `loadNotifications` are Server Actions repurposed as reads. A roughly 60-second unread-count poll is the one GET route I wrote to feed the UI, with a comment in the code owning why it's there. I left both as commented asterisks instead of dressing them up, because naming a crack costs less than defending a story that isn't true.

## The half agents don't touch

The agents did the typing. I was the PM, the tech lead, and the reviewer, and the result held because of the discipline around the speed, not the speed. Every feature ran the same gauntlet: brainstorm, then a committed design spec, then a plan of small TDD tasks, then execution, then an adversarial multi-agent review where each finding gets verified on its own before anyone's allowed to fix it. One feature left behind 12 task briefs, 12 reports, and 15 per-commit review diffs. It reads like a team's PR history. It's one guy and a lot of scaffolding.

The scaffolding is version-controlled too, which is the point. The agent's context lives in the repo: a layered set of `CLAUDE.md` files, broad at the root and narrower deeper in the tree, plus a committed memory file the next session reads before anything else, plus a docs generator on a hook that fires only when the feature-surface hash changes. A fresh session starts oriented instead of re-deriving the codebase from scratch every morning.

And I let the design move as my own thinking moved. Auth went from a shared passcode, to Google sign-in, to per-user households. Per-user landed, and the old plan said delete the passcode. I kept it and recast it as a deliberate, secret superadmin instead, because a passcode is a gate, not an identity, and I wanted one master key I chose on purpose rather than a fuzzy everyday one. I also ripped out my own onboarding flow, a full-screen "create your first household" wall, the day I admitted it felt like a wall. Deleting a feature you built because it feels wrong is part of the job.

### The automation I wrote to help me shipped the bugs

Then my own tooling turned on me. I'd written an auto-format hook to tidy files on save, the kind of quiet helper you set up once and forget. It stripped an import I'd added right before its first use, and the code broke. Another day it stripped a dependency out of a React effect, and my nav progress bar hung for about eight seconds on every navigation while I hunted for a cause that wasn't in any code I'd written. The bug was in the thing I built to prevent bugs. Worth remembering the next time you wire up a hook at 1am and trust it by morning.

## The one question I hold it to

Can the client forge state? It can't reach the database, and every scope gets re-resolved on the server, so multi-tenant isolation is bought by construction rather than by my vigilance. That's the strongest thing this build gives me, and it's the one property I'd stake the family ledger on. Everything else, the tests, the CI, the `safeAction` wrapper, the `revalidatePath` calls, is discipline no tool enforces for me.

Going solo with agents didn't make the unglamorous work vanish. It made that work faster to produce and, if I got lazy, faster to skip. The agent will always hand me something that demos. Making it survive three people and a wrong rupee is still mine to do.
