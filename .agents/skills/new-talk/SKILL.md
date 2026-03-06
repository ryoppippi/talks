---
name: new-talk
description: Scaffold a new talk directory with README.md and optionally package.json for Slidev
argument-hint: <date-slug> [readme|slidev]
disable-model-invocation: true
allowed-tools: Bash, Write, Read, Glob
---

# New Talk Scaffolder

Create a new talk directory. README.md is always created. When mode is `slidev`, package.json is also created for Slidev builds.

## Arguments

- `$0`: Directory name in `YYYY-MM-DD` or `YYYY-MM-DD-slug` format (required)
- `$1`: Mode — `readme` or `slidev` (optional — if not provided, ask the user)

## Instructions

1. Parse the directory name from `$0`. Validate it starts with a date in `YYYY-MM-DD` format.
2. If `$1` is not provided, ask the user whether this is a `readme`-only talk or a `slidev` talk.
3. Extract the date portion (first 10 characters) from the directory name.
4. **Before generating files, read a recent existing talk's files as reference.** Use `Glob` to find existing `*/README.md` and `*/package.json` files, then `Read` one of the most recent ones to match the current formatting and conventions exactly.
5. Create the directory if it doesn't exist.

### README.md (always created)

First, read an existing talk's `README.md` (e.g. the most recent one) to match the exact format.

Ask the user for:

- `title`: Talk title
- `lang`: `ja` or `en` (default: `ja`)
- `event`: Event name
- `eventLink` (optional): Event URL

Generate `README.md` following the same YAML frontmatter format as the referenced file. Omit optional fields (like `eventLink`) if not provided.

### package.json (only when mode is `slidev`)

First, read an existing Slidev talk's `package.json` (e.g. the most recent one) to match the exact format and fields.

Ask the user for:

- `slug`: Short name for the package (e.g. `vimconf`, `findy`). Suggest one based on the directory name.

The date portion is the first 10 characters of `$0` (the `YYYY-MM-DD` part).

Generate `package.json` following the same structure as the referenced file, but with the correct date and slug. The `--base` and `--out` paths must use the date portion only (first 10 chars of `$0`), NOT the full directory name with slug. Use tabs for indentation.

## Validation

- If the directory already has a README.md or package.json and the mode would overwrite it, warn the user and ask before proceeding.
- When mode is `slidev`, ensure `--base` and `--out` in the build script match each other and use the correct date.
