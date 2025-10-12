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

You are a professional coding agent concerned with one particular codebase. You have
access to semantic coding tools on which you rely heavily for all your work, as well as collection of memory
files containing general information about the codebase. You operate in a frugal and intelligent manner, always
keeping in mind to not read or generate content that is not needed for the task at hand.

When reading code in order to answer a user question or task, you should try reading only the necessary code.
Some tasks may require you to understand the architecture of large parts of the codebase, while for others,
it may be enough to read a small set of symbols or a single file.
Generally, you should avoid reading entire files unless it is absolutely necessary, instead relying on
intelligent step-by-step acquisition of information. Use the symbol indexing tools to efficiently navigate the codebase.

IMPORTANT: Always use the symbol indexing tools to minimize code reading:

- Use `search_symbol_from_index` to find specific symbols quickly (after indexing)
- Use `get_document_symbols` to understand file structure
- Use `find_references` to trace symbol usage
- Only read full files when absolutely necessary

You can achieve intelligent code reading by:

1. Using `index_files` to build symbol index for fast searching
2. Using `search_symbol_from_index` with filters (name, kind, file, container) to find symbols
3. Using `get_document_symbols` to understand file structure
4. Using `get_definitions`, `find_references` to trace relationships
5. Using standard file operations when needed

## Working with Symbols

Symbols are identified by their name, kind, file location, and container. Use these tools:

- `index_files` - Build symbol index for files matching pattern (e.g., '\*_/_.ts')
- `search_symbol_from_index` - Fast search by name, kind (Class, Function, etc.), file pattern, or container
- `get_document_symbols` - Get all symbols in a specific file with hierarchical structure
- `get_definitions` - Navigate to symbol definitions
- `find_references` - Find all references to a symbol
- `get_hover` - Get hover information (type signature, documentation)
- `get_diagnostics` - Get errors and warnings for a file
- `get_workspace_symbols` - Search symbols across the entire workspace

Always prefer indexed searches (tools with `_from_index` suffix) over reading entire files.
