---
title: "The Agents Write the Code. I Decide When It's Done."
description: "A year of building an internal platform through AI coding agents, seven or eight panes at a time, and the one decision I refused to hand over: when the work is done."
publishedAt: "2026-09-05"
tags: ["AI-assisted development", "Engineering practice"]
---

![Eight terminal panes, one per coding agent, feeding a single card where a person holds the question: done?](/blog/agents-write-the-code.svg)

## The question I couldn't answer was about my own feature

Mid-demo, on a screen I built, someone asked me how a feature worked, a fair question about behavior I had shipped weeks earlier. I own this app. I designed its architecture, wrote the ADR for its auth model, set up the CI that runs on every pull request. And I stood there without an answer, because agents built that feature and I had not read it. I said I would check and come back.

That has happened to me more than once now. I have also watched other developers on the team hit the same moment in their own demos: the same pause, the same "let me get back to you." A year of working through AI coding agents did this to the whole team. It rearranged most of how I ship. One call it never touched, because I never put it on the table.

## My day now runs in seven or eight panes

I'm a full-stack engineer, eleven-plus years in, most of it in product SaaS. Since early this year my day job has been rebuilding an internal platform, the system that runs operations for about twenty programs: a Python/Django API, an admin dashboard, and a user-facing PWA. On the API and the dashboard I'm one contributor among a team. The PWA is mine: the architecture, the auth model, the quality gates, the decisions recorded as ADRs.

On a normal working day I have seven or eight panes open in [Herdr](https://herdr.dev/), a terminal multiplexer built for coding agents, and each pane is an agent working a task on the platform. My day is the loop between them: check a finished diff, answer a blocked question, kick off the next TDD slice, come back twenty minutes later and run the circuit again. After a decade of writing the code myself, I now spend the day on specs and reviews.

For the first months I read every line the agents produced. Around April I stopped. Eight streams of code against one pair of eyes is arithmetic that never closes, and for a while I handled that by falling behind. Saying it out loud was the useful part, because it forced the question: if not my eyes on every line, then what?

## I traded line-reading for a discipline the repo enforces

What I trust now is a process I wrote down, and writing it down was the work. How I work lives in the repo, version-controlled like everything else. An instruction file at the root and path-scoped rules files below it, one for UI work, one for end-to-end tests. Session learnings distilled back into those files, so the next fresh session starts under them. Hooks that lint every edit and typecheck before a session ends. Skills and checklists an agent loads before it starts, so the standard travels with the repo instead of with my attention. In my own side project I go a step further, with committed memory files and a hook that regenerates the feature docs whenever the feature surface changes.

Features run a gauntlet the team built into a harness of our own. A module starts as a coverage document, every line of the business requirement accounted for. From that one source the harness renders the specification, a clickable prototype, the screen designs, the plan and the acceptance tests, so five documents cannot drift apart the way five authors would let them. A provenance check reads each claim in the specification, finds the business line it cites, and refuses any claim that cites nothing real. A panel of persona agents, architect, product owner, DBA, security, and a simplicity skeptic with a veto on new machinery, rules on the architecture before a line is built. The work is then cut into packets, one owner per journey, and built as small TDD tasks in parallel worktrees, each commit proved red against its parent and green at itself.

An adversarial review follows, where each finding gets verified on its own before anyone is allowed to fix it. CI runs on every pull request: typecheck, lint, unit tests, a production build. Live gates and multi-persona end-to-end tests then walk the app as its different kinds of users. Three points stay human on purpose: the business review before the build, any carve-out, and any open point the business document did not settle. The volunteer-rotation subsystem went through that pipeline end to end, agents doing the typing in stepwise TDD tasks, and I can defend its design in a meeting without having read most of its diffs, because I wrote the spec and no task started without a failing test.

This trade has a cost. I used to know my code the way you know your own house in the dark. Now I know its contracts, its decisions, its test suite, its shape. Someone can still ask me a question in a demo that I cannot answer on the spot. I used to be the engineer who had read everything he shipped. I miss that more in front of an audience than I do at my desk.

## The agent never decides when it's done

I have handed the agents a lot: the typing, the test-writing, most of the reading. One call has never moved. The agent does not decide when the work is done. I do the driving.

Driving looks unglamorous up close. I pick which feature runs next and in what order, because eight panes of parallel work will sprint in eight directions without a destination. I write or approve the design spec before a single task spawns. When the review agents raise findings, I hold every fix until the finding has been verified on its own, because agents will agree with each other if you let them. And before I call a feature finished, I open the PWA and use it the way a volunteer or an applicant will, because an agent's definition of done is "the tests pass," and tests pass on the wrong feature more often than anyone admits.

The same rule covers prose. Anything an agent produces that carries my name, my resume, posts like this one, goes through an adversarial fact-check by other agents before it goes out, and I judge the findings myself. This post lost three claims to that check. An agent grading its own work will hand you a confident wrong answer with a green checkmark on it.

## If you're starting now

If you're an engineer at the start of this, one agent open, still reading every line, this is the lens I'd hand you. The reading will not scale, so decide now what replaces it, and make that thing version-controlled. Put how you work into the repo before you add panes: instruction files, committed learnings, the checklists a session loads first. Keep a rule in your head and it dies with the session. Commit it to the repo and every fresh session starts under it.

Then make "done" expensive. CI is the floor: typecheck, lint, tests, a production build on every pull request, and required checks so a red build cannot merge on a deadline. Above the floor, add a review step where a finding has to survive verification before anyone fixes it, because agent review fails toward politeness.

And keep the last call for yourself. Never accept an agent's own claim that the work is finished. Open the thing, use it as the person it was built for, and say done out loud only when you believe it.

You will still get caught in a demo. I did, and I will again, and "I'll check and come back" is an honest sentence I've made my peace with. The line I hold sits elsewhere. The agents write the code, and these days I read little of it, but they have never once decided where the platform goes next or when a feature is done. Those two calls stay with me. Losing the reading cost me some pride in a conference room. Losing the wheel would cost me the platform.
