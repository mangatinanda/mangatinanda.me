---
title: "What MCP Gets Right (and Where It's Overhyped)"
description: "A working engineer's take on the Model Context Protocol: the real problem it solves, the three primitives that matter, and where the hype outruns reality."
publishedAt: "2026-06-05"
tags: ["AI", "MCP", "Architecture"]
---

## The problem MCP actually solves

Every team building with LLMs runs into the same wall. You want the model to reach your stuff: your database, your docs, your ticketing system, your internal APIs. So you write an integration. Then a new model shows up, or a new tool, and you write it again. With N apps and M data sources you end up maintaining N times M integrations, and every one of them breaks on its own schedule.

The Model Context Protocol, which Anthropic open sourced in late 2024, tries to collapse that math. Each app speaks one client protocol. Each data source exposes one server protocol. So N times M becomes N plus M. People call it "USB-C for AI," and for once the analogy holds up. It's a standard connector, not a product.

That's the thing to get straight first. MCP isn't a new capability. Function calling already let models invoke tools. MCP is a standard, and standards feel boring right up until the day they save you from writing the same glue for the fifth time.

## The three primitives, and which ones matter

An MCP server exposes three kinds of things. In practice they don't matter equally.

- Tools: functions the model can call, like search a record, run a query, or create an issue. The model decides when to use them. This is where most of the real value lives.
- Resources: data the app can read, closer to GET endpoints. A file, a record, an API response. Useful, though usually the host app loads these, not the model.
- Prompts: reusable prompt templates the server ships. Nice idea. I rarely see them earn their keep.

If you're sizing up MCP for something real, look hard at the tools story first. The rest is supporting cast.

## Local vs remote, and why the transport matters

MCP runs over two transports, and the one you pick quietly decides your security posture.

stdio runs the server as a local subprocess, talking over stdin and stdout. It's what powers the filesystem and git servers you already use in Claude Code or Cursor. Simple, and isolated at the process level.

Streamable HTTP runs the server as a web service. This is how you expose something over the internet, and the second you do, auth stops being optional.

A lot of the confusion online is people blurring these two together. A local dev tool and an internet-facing service have completely different threat models, and MCP won't sort that out for you.

## What it gets right

Two things genuinely won me over.

First, the ecosystem moved fast because the protocol stayed small. Inside a year there were good servers for GitHub, Postgres, Slack, filesystems, and plenty more, plus registries to find them. A small, tight spec is exactly what you want. It's the whole reason this spread so quickly.

Second, it's a real win for anyone shipping a tool. If you expose an API, writing an MCP server means every MCP-aware client can use you with zero custom work. Cloudflare went all in here, running MCP servers on Workers and putting their AI Gateway in front for auth and rate limiting. That's the version of this that holds up at scale.

## Where it's overhyped

Now the part the hype cycle skips over.

MCP is plumbing, not magic. It standardizes how a model reaches a tool. It says nothing about whether that's the right tool, whether the model uses it well, or whether the output is any good. The hard problems, retrieval quality and evals and guardrails, are still sitting exactly where you left them.

A clean wrapper around a confusing API is still a confusing API. I've watched people MCP-ify an endpoint and then act surprised when the model keeps tripping over it. If a human finds your API confusing, so will the model.

Then there's blast radius. The moment you expose write-capable tools over HTTP, you've stood up an internet-facing surface that a probabilistic system gets to drive. "The model can do anything in my app now" is a great demo line and a scary production one. Keep the tools narrow. Default to read-only.

And you probably don't need to build one yet. For most teams the high-leverage move today is consuming existing servers from a client. Building and running your own pays off when you've got a real consumer and a clear set of tools to expose, not because it turned up on a roadmap.

## How I'd actually approach it

If I were wiring MCP into something real, say exposing a Django app's data to an assistant, I'd start small. One or two read-only tools, search a record and read a record. stdio while I'm developing locally. And a firm rule that anything which writes gets scoped and authed before it goes anywhere near HTTP.

Then I'd hold the whole thing to a single question: does the model get measurably more useful, judged against an eval set instead of a gut feeling? If the answer is no, MCP isn't your problem, and bolting on more tools won't fix it.

That's the lens I'd hand anyone weighing it up. MCP is a good standard solving a real N-times-M problem. It is not a shortcut around the unglamorous work: designing tools well, building retrieval that actually retrieves, and writing evals that tell you the truth. Get those right and MCP makes them portable. Skip them, and all it does is help a model reach your mess faster.
