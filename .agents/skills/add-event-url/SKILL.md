---
name: add-event-url
description: Fetch event info from a URL using agent-browser and add/update the talk README.md
argument-hint: <url> [directory]
allowed-tools: Bash, Write, Read, Edit, Glob, AskUserQuestion
---

# Add Event URL

Open a given URL with agent-browser, extract event information, and create or update a talk's README.md.

## Arguments

- `$0`: URL to fetch event information from (required)
- `$1`: Talk directory name in `YYYY-MM-DD` format (optional — if not provided, infer from the page or ask the user)

## Instructions

1. Open the URL with agent-browser:

   ```bash
   ./agent-browser open "$URL" && ./agent-browser wait --load networkidle && ./agent-browser snapshot -i
   ```

   The agent-browser binary is located at `/Users/ryoppippi/.config/claude/skills/agent-browser/agent-browser`.

2. Extract relevant event information from the page using `./agent-browser get text` or `./agent-browser eval`. Look for:
   - Event title
   - Event date
   - Event organiser/group name
   - The canonical event URL (connpass, etc.)
   - Any article or recording links

3. Close the browser session when done:

   ```bash
   ./agent-browser close
   ```

4. If `$1` (directory) is not provided:
   - Try to infer the date from the extracted event info
   - Check if a matching directory already exists using `Glob`
   - If ambiguous, ask the user which directory to use or whether to create a new one

5. Check if the target directory and README.md already exist:
   - If README.md exists, read it and update/add the relevant fields (e.g. `eventLink`, `article`, `videoLink`)
   - If README.md does not exist, read a recent existing talk's README.md as reference for format, then create a new one with the extracted metadata

6. For README.md frontmatter, use these fields as appropriate:
   - `title`: Talk title
   - `date`: Event date in `YYYY-MM-DD` format
   - `lang`: `ja` or `en`
   - `event`: Event name / organiser
   - `eventLink`: Event page URL
   - `article`: Article or report URL (if applicable)
   - `videoLink`: Recording URL (if applicable)

7. If the URL points to an article or report (not an event page), find the matching talk directory by date or title, and add it as an `article` field.

## Validation

- Always confirm with the user before creating a new directory
- If updating an existing README.md, show what will be changed before applying
- Do not overwrite existing fields unless the user explicitly asks
