# Advent of Code 2025 — AOC25

This repository contains my solutions for Advent of Code 2025, implemented in TypeScript as a way to practice algorithms, problem solving, and TypeScript tooling.

**Goals:**

- Practice daily puzzle solving and algorithmic thinking
- Learn and apply TypeScript patterns and utilities
- Keep solutions small, readable, and reusable

**Repository structure**

- Each day is in its own folder, e.g. `Day_1/`, containing a solution file and its puzzle input. Typical files:
  - `index.ts` — solution / runner
  - `input.ts` — puzzle input or input loader

**Prerequisites**

- Bun (recommended) to run TypeScript files directly
- No external dependencies required — solutions are runnable with Bun

**Run a solution**

Run a day's solution with Bun (no install step required):

```
bun ./Day_1/index.ts
```

Or if you prefer the `run` command:

```
bun run ./Day_1/index.ts
```

If you ever add a `package.json` and dependencies, you can still use `bun install`.

**Notes**

- Inputs live next to solutions so runs are deterministic and reproducible.
- Solutions aim for clarity over clever golfing; performance improvements are added when interesting.

**Contributing / Personal workflow**

- This is a personal practice repo. Pull requests are welcome for improvements, but don't feel obliged — most changes will be authored by me.
- If you want to suggest refactors or alternate solutions, open an issue or a PR.

Enjoy the puzzles!
