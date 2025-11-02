---
title: 'AI-Optimised Vim Keybindings: HCI-Driven HITL Interfaces'
transition: view-transition
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
layout: cover
glowSeed: 4
---

# AI-Optimised Vim Keybindings:
## HCI-Driven HITL Interfaces

{@ryoppippi}

<div abs-br mx-10 mb-10 flex="~ col gap-4 items-end" text-left>
  <img src='/vimconf2025.png' w-40 />
  <div text-sm opacity-75 mt--4>2nd November 2025</div>
</div>

---
src: '../reuse/personal-stackone.md'
---

---
layout: default
class: flex items-center justify-center 
---

<Youtube id="tBY3RxTrhkM" size-full  :class="$clicks > 0 ? 'op50' : ''" />


<div text="7xl black bold " absolute bottom-50 left-20 rotate-15 animate="pulse duration-500" bg-white v-click :class="$clicks > 1 ? 'op50': '' ">
  Brought My Job Opportunity in the UK
</div>

<div text="8xl black bold " absolute bottom-50 left-50 rotate--15 animate="pulse duration-500" bg-white v-click>
  Thank you vimconf!!
</div>


---
layout: section
---

# Keymappings

---
layout: section
---

# Why we need better keymappings?

---
layout: section
---

# We hate REPEATING

---
layout: default
---

# But the issue is...

- hard to notice our own **repetitive** habits.
- hard to notice vim/neovim features we don't use.
- hard to find better keymappings for our own habits.

---
layout: section
---

# We need our Vim sensei!!

---
layout: section
---

# How to find our own vim tutor?

---
layout: section
---

# `"use AI"`

---
layout: section
---

# [ryoppippi/nvim-in-the-loop](https://github.com/ryoppippi/nvim-in-the-loop)

---
layout: default
---

# [ryoppippi/nvim-in-the-loop](https://github.com/ryoppippi/nvim-in-the-loop)

- collect user editing logs with `on_key`
- save logs as JSONL
- find repetitive patterns
- suggest better lua keymapping code with LLM!

---
layout: image
image: /suggestion.jpeg
backgroundSize: contain
---


<!-- $ bun run src/cli.ts --suggestions-only -->
<!-- [ai-keymap] Analyzing log at /Users/ryoppippi/.local/share/nvim/ai_keymap/keystrokes.jsonl ... -->
<!-- 1. [n] map <leader>ws => sequence : % s / \s\+$ / / <CR> -->
<!--    recommended mapping: :silent! %s/\s\+$//<CR> -->
<!--    rationale: This mapping replaces the repetitive command ': %s/\s\+$//' (trim trailing whitespace) with a concise shortcut, reducing cognitive load and keystrokes for a common cleanup operation. -->
<!--    lua: vim.keymap.set("n", "<leader>ws", ":silent! %s/\\s\\+$//<CR>", { desc = "AI-suggested: compress : → % → s → / → \s\+$ → / → / → <CR>" }) -->
<!-- 2. [n] map <leader>td => sequence : g / TODO / d <CR> -->
<!--    recommended mapping: :g/TODO/d<CR> -->
<!--    rationale: This mapping compresses the frequent ':g/TODO/d' command (delete all lines containing TODO) into a quick leader shortcut, minimizing repetitive typing and context switching. -->
<!--    lua: vim.keymap.set("n", "<leader>td", ":g/TODO/d<CR>", { desc = "AI-suggested: compress : → g → / → TODO → / → d → <CR>" }) -->
<!-- 3. [n] map <leader>cl => sequence : % s / console\.log / logger.debug / g <CR> -->
<!--    recommended mapping: :%s/console\.log/logger.debug/g<CR> -->
<!--    rationale: This shortcut executes the full substitution of 'console.log' to 'logger.debug' across the file, streamlining a repetitive refactor pattern into a single, memorable mapping. -->
<!--    lua: vim.keymap.set("n", "<leader>cl", ":%s/console\\.log/logger.debug/g<CR>", { desc = "AI-suggested: compress : → % → s → / → console\.log → / → logger.debug → / → g → <CR>" }) -->
<!-- 4. [n] map <leader>bd => sequence : g / ^$ / d <CR> -->
<!--    recommended mapping: :g/^$/d<CR> -->
<!--    rationale: This mapping quickly deletes all blank lines in the buffer, replacing the verbose ':g/^$/d' command with a fast leader shortcut for common file cleanup. -->
<!--    lua: vim.keymap.set("n", "<leader>bd", ":g/^$/d<CR>", { desc = "AI-suggested: compress : → g → / → ^$ → / → d → <CR>" }) -->
<!-- 5. [n] map <leader>vc => sequence : % s / var  / const  / g <CR> -->
<!--    recommended mapping: :%s/var /const /g<CR> -->
<!--    rationale: This mapping automates the global replacement of 'var' with 'const', reducing the need to repeatedly type the substitution command during code modernization. -->
<!--    lua: vim.keymap.set("n", "<leader>vc", ":%s/var /const /g<CR>", { desc = "AI-suggested: compress : → % → s → / → var  → / → const  → / → g → <CR>" }) -->
<!-- 6. [n] map <leader>w => sequence c i w -->
<!--    recommended mapping: ciw -->
<!--    rationale: This mapping shortens the common 'ciw' (change inner word) operation to a two-key sequence, reducing finger travel and cognitive effort for frequent word edits. -->
<!--    lua: vim.keymap.set("n", "<leader>w", "ciw", { desc = "AI-suggested: compress c → i → w" }) -->
<!-- ~/g/g/r/nvim-in-the-loop main• 13.4s ❱ -->

---
layout: default
---

# Results

- successfully detected repetitive patterns like:
- suggested better keymappings that reduce keystrokes and cognitive load.
  - removing `TODO:` comments -> `<leader>td`
  - removing `console.log` -> `<leader>cl`
  - and various others...

---
layout: default
---

# Future Work

- evaluate effectiveness of suggested keymappings
- long-term adaptation with user feedback

---
layout: section
---

# Happy vim life with AI!
