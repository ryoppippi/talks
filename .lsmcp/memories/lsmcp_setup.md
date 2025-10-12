---
created: 2025-10-12T20:30:13.628Z
updated: 2025-10-12T20:30:13.628Z
---

# LSMCP Setup for talks Repository

## Project Overview

This is a Slidev talks repository with TypeScript/Vue files organized by date-stamped folders (e.g., 2024-11-19/).

## Project Structure

- **Root config files**: `unocss.config.ts`, `vite.config.ts`, `eslint.config.js`
- **Build scripts**: `scripts/build.ts` - orchestrates multi-talk builds and feed generation
- **Talk directories**: Date-stamped folders like `2024-11-19/`, each containing:
  - `slides.md` - main presentation content
  - `global-bottom.vue` - Vue component overrides
  - `unocss.config.ts`, `vite.config.ts` - per-talk configuration
  - `public/` - asset directory
- **Shared content**: `reuse/` and `patches/` directories

## LSP Configuration Status

✅ **LSP Server**: Fully operational (TypeScript/Vue language server)
✅ **Document Symbols**: Working perfectly
✅ **Hover Information**: Providing type signatures
✅ **Find References**: Successfully finding all symbol references
✅ **Go to Definition**: Working with body inclusion
✅ **Diagnostics**: Available for error checking

## Key Files to Navigate

- `scripts/build.ts:11` - ROOT_URL constant (https://talks.ryoppippi.com/)
- `scripts/build.ts:105` - Feed generation logic
- `scripts/build.ts:57-100` - Main build processing loop
- Individual talk configs in `YYYY-MM-DD/` folders

## Effective Usage

1. Use `lsp_get_document_symbols` to explore file structure
2. Use `lsp_find_references` to trace symbol usage across the codebase
3. Use `lsp_get_definitions` with `includeBody: true` to see full implementations
4. Use `lsp_get_hover` for quick type information
5. Use `lsp_get_diagnostics` to check for TypeScript errors

## Notes

- The symbol index search (`search_symbols`) returns no results, but direct LSP tools work perfectly
- This is expected behavior - rely on document-level LSP tools instead
- File patterns: `**/*.{ts,tsx,vue,js}` covers all source files
- Each talk is a workspace in the Bun monorepo structure
