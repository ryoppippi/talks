# Repository Guidelines

## Project Structure & Module Organization

Date-stamped folders such as `2024-11-19/` or `2024-08-30/` hold individual Slidev talks; each contains `slides.md`, supporting Vue overrides, and a `public/` asset bucket. Shared tooling and configuration live at the repo root: `scripts/build.ts` orchestrates multi-talk builds and feed generation, `vite.config.ts` holds the shared Slidev markdown setup plus the Vite+ lint, format, test, and pre-commit configuration, `unocss.config.ts` centralises styling rules, and `reuse/` stores reusable content. The build output is written to `dist/` (ignored in VCS) during CI or manual builds.

The `reuse/PersonalIntro.vue` component renders the shared self-introduction layout. Markdown front matter for intro slides should import it and provide content via slots. For StackOne branding, use `reuse/personal-stackone.md`, which already injects the GitHub magic link `{@StackOneHQ}` so Slidev renders the avatar automatically.

Slide markdown supports GitHub-style cards via `markdown-it-magic-link`; wrap the handle in braces like `{@ryoppippi}` to auto-link and show the avatar. Use this for companies or individuals whenever a GitHub profile is available.

## Build, Test, and Development Commands

The toolchain is [Vite+](https://viteplus.dev) (`vp`) on pnpm; Node.js is pinned through `devEngines` in `package.json`, and `nix develop` provides `vp`. Install dependencies with `vp install`. Use `pnpm run new` to scaffold a fresh talk folder via Slidev. Develop a specific deck with a workspace filter, e.g. `vp run --filter ./2024-11-19 dev` to open the local server. `vp run build` performs a full repo build: it runs every talk’s Slidev build, copies PDFs, and regenerates `dist/talks.json` plus `dist/feed.xml`. Run `vp check` to lint (Oxlint) and check formatting (Oxfmt), and `vp check --fix` to apply fixes; the pre-commit hook runs `vp staged`. Deployments are published through Cloudflare Pages using `vp run deploy` once `dist/` is up to date.

## Coding Style & Naming Conventions

Linting and formatting use Oxlint and Oxfmt through Vite+, configured in the root `vite.config.ts`. Oxfmt does not understand Slidev markdown, so `*.md` files are excluded from formatting; keep slide markdown tidy by hand. Scripts are ESM TypeScript that Node.js runs directly through type stripping, so use only erasable type syntax and import local modules with their `.ts` extension. Use tabs and single quotes (the formatter enforces this). Name new talk directories as `YYYY-MM-DD-*` so workspace filtering remains predictable, and keep slide filenames descriptive if you add additional Markdown entry points.

## Testing Guidelines

`vp test` runs the Vitest suite under `scripts/`, which checks every talk `README.md` front matter against the feed schema; import test APIs from `vite-plus/test`. Before committing, run `vp run --filter ./<talk> build` for the deck you touched, plus `vp run build` to confirm feeds regenerate. When exporting speaker PDFs, prefer `vp run --filter ./<talk> export` so shared scripts can copy artefacts into `dist/` automatically. Attach regenerated PDFs to the relevant talk folder and keep exports under version control as required by the event.

## Commit & Pull Request Guidelines

Commit history follows Conventional Commits (`type(scope): summary`), frequently using `chore(deps)` for maintenance. Keep messages imperative and scoped to a single change. PRs should include: a concise description of the talk or tooling update, links to the event or recording (mirroring frontmatter in `README.md` inside the talk folder), and screenshots or export diffs when visual changes occur. Always note the commands you ran (e.g. `vp run build`) so reviewers can reproduce your checks.

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

## Documentation & Comments

refer https://sli.dev/llms.txt or search for "slidev" in mcp servers such as deepwiki or context7
