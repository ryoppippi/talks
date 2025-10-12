# Repository Guidelines

## Project Structure & Module Organization
Date-stamped folders such as `2024-11-19/` or `2024-08-30/` hold individual Slidev talks; each contains `slides.md`, supporting Vue overrides, and a `public/` asset bucket. Shared tooling and configuration live at the repo root: `scripts/build.ts` orchestrates multi-talk builds and feed generation, `unocss.config.ts` and `eslint.config.js` centralise styling rules, while `patches/` and `reuse/` store dependency tweaks and reusable content respectively. The build output is written to `dist/` (ignored in VCS) during CI or manual builds.

## Build, Test, and Development Commands
Install dependencies with `bun install`. Use `bun run new` to scaffold a fresh talk folder via Slidev. Develop a specific deck with Bun’s workspace filter, e.g. `bun run --filter 2024-11-19 dev` to open the local server. `bun run build` performs a full repo build: it runs every talk’s Slidev build, copies PDFs, and regenerates `dist/talks.json` plus `dist/feed.xml`. Lint the codebase with `bun run lint`; auto-fix formatting via `bun run format`. Deployments are published through Cloudflare Pages using `bun run deploy` once `dist/` is up to date.

## Coding Style & Naming Conventions
Follow the shared ESLint + Prettier stack from `@ryoppippi/eslint-config` and `prettier-plugin-slidev`. Bun scripts assume ESM and TypeScript-flavoured JS; keep imports sorted and prefer named exports. Use tabs in JSON and two-space indentation in TypeScript, Markdown, and Vue SFCs (lint rules enforce this). Name new talk directories as `YYYY-MM-DD-*` so workspace filtering remains predictable, and keep slide filenames descriptive if you add additional Markdown entry points.

## Testing Guidelines
There is no standalone unit-test suite; validation happens through Slidev and the aggregate build. Before committing, run `bun run --filter <talk> build` for the deck you touched, plus `bun run build` to confirm feeds regenerate without schema errors. When exporting speaker PDFs, prefer `bun run --filter <talk> export` so shared scripts can copy artefacts into `dist/` automatically. Attach regenerated PDFs to the relevant talk folder and keep exports under version control as required by the event.

## Commit & Pull Request Guidelines
Commit history follows Conventional Commits (`type(scope): summary`), frequently using `chore(deps)` for maintenance. Keep messages imperative and scoped to a single change. PRs should include: a concise description of the talk or tooling update, links to the event or recording (mirroring frontmatter in `README.md` inside the talk folder), and screenshots or export diffs when visual changes occur. Always note the commands you ran (e.g. `bun run build`) so reviewers can reproduce your checks.
