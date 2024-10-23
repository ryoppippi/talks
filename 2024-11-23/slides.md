---
theme: apple-basic
layout: intro
title: 'Neovim for Frontend Developers: Boosting Productivity and Creativity'
transition: view-transition
mdc: true
class: bg-#0F0F0F
colorSchema: dark
---

# Neovim for Frontend Developers: Boosting Productivity and Creativity

---
layout: section
---

# Thank you
## for inviting me!

---
layout: image-right
image: /ryoppippi.avif
---

# Who am I?

- {@ryoppippi}
- Living in the UK
- Software Engineer mainly on Web Frontend
- {Svelte Japan}
- {vim-jp}
  <!-- - `#times-ryoppippi` -->
  <!-- - `#times-yasunori` -->
  <!-- - `#tech-frontend` -->
  <!-- - `#neovim` -->
  <!-- - `#neovim-plugins` -->
  <!-- - `#vim-jp-radio` -->
  <!-- - `#lang-zig` -->
  <!-- - `#game-smashbros` -->

![haichu](https://ryoppippi.com/haichu.avif){v-click}

---
layout: bullets
---

# My Favorite Vim-jp Channels

- {vim-jp}
  - `#times-ryoppippi`
  - `#times-yasunori`
  - `#tech-frontend`
  - `#neovim`
  - `#neovim-plugins`
  - `#vim-jp-radio`
  - `#lang-zig`
  - `#game-smashbros`

---
layout: image
image: /projects.avif
---

---
layout: bullets
---

# My Editor Journey

- 2015 - 2017 Atom
- 2017 - 2022 VSCode
- 2021 - VSCode + Neovim
- 2022 - Neovim

<div fxa>
  <v-clicks>
  <img src="/vscode.svg" w-30 view-transition-vscode />
  <!-- TODO Arrow -->
  <img src="/vscode-neovim.avif" w-30 view-transition-vscode-neovim />
  <!-- TODO Arrow -->
  <img src="/neovim.svg" w-30 view-transition-neovim />
  </v-clicks>
</div>

---
layout: image-right
image: /stackoverflow.avif
link: https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment
---

# VSCode is the King

![vscode](/vscode.svg){.view-transition-vscode .mb-10 .w-[50%]}

* De-facto Standard for Editor
  * VSCode is written in TypeScript
  * Extensions are written in TypeScript
  * TypeScript is de-facto lang for Frontend

---
layout: image-right
image: /unocss-vscode.png
---

# Many Extensions are built for VSCode

<!--
TODO: add description why VSCode
-->

---
layout: bullets
---

# Why the hell did I switch to Neovim

<v-clicks>

* Just looks cool
* That's it

</v-clicks>

---
layout: statement
transition: none
---

# Thank you for Listening!{v-click.hide :class="{op30: $clicks>=1}"

just kidding{.text-3xl .absolute .bottom-20 .right-10 .rotate-15 .animate-pulse .animate-duration-500 v-click='1'}

---
layout: image
image: '/my-lovely-terminal.avif'
---

---
layout: bullets
---

# Why the hell did I switch to Neovim

<div flex='~ gap-4'>

<div w='50%'>

## Pros

- Neovim can deal with front-end development
- Hackable
- Keyboard-Driven
- Fast/Lightweight

</div>

<div w='50%'>

## Cons
- No GUI
- No WebViews
- Lack of Language Server Protocol (LSP) support

</div>

</div>

---
layout: section
---

## But can we REALLY do them with Neovim??

<!--
TODO: maybe rewrite the above

You may be worried about the lack of GUI, WebViews, and LSP support in Neovim.
-->

---
layout: section
---

## A man said...

---
layout: quote
---

# Vim can do that too
## __それ、vimでもできるよ__

{@mattn}

---
layout: bullets
---

# LSP

- We have Language Server Protocol (LSP)
- LSP is a protocol to communicate between editor and language server

<!--
TODO: add LSP desc more
-->

---

<!-- LSP Demo -->

<div gcc h-120>
  <SlidevVideo autoplay controls loop slide>
    <source src="/screen-lsp.mp4"/>
  </SlidevVideo>
</div>

---
layout: bullets
---

# Debug

- Debugging is possible with Neovim
- DAP

<!--
TODO: DAP
-->

---
layout: section
---

# Only Neovim can do it!

---
layout: bullets
---

# Let's hack with Neovim!

- oil.nvim
- sippets
- WebBrowser

---
layout: section
---

# Demo

<!--
- snippetとoil.nvimでfileを一気に作る
- denippet でhackableなsnippetを作る
多分５分くらいかかりそう
-->

---
layou: bullets
---

# [oil.nvim](https://github.com/stevearc/oil.nvim)

- made by {@stevearc}
- A plugin to manage files as buffer
- You can yank, delete, and paste files like editing text
- You can use snippet 🎉 {.font-bold}
  - I use [vim-sonictemplate](https://github.com/mattn/vim-sonictemplate)
- VSCODE cannot do that

---
layout: bullets
---

# [denippet.vim](https://github.com/uga-rosa/denippet.vim)

- made by {@uga-rosa}
- snippet library with [ Denops ](https://github.com/vim-denops/denops.vim) by {@lambdalisue}
- Configurable with TypeScript

<!--
TODO: add more example
-->

---
layout: bullets
---

# Web Inspector integration

<!--
# My plugins!
- [nvim-pnpm-catalog-lens](https://github.com/ryoppippi/nvim-pnpm-catalog-lens)
- [vim-bun-lock](https://github.com/ryoppippi/vim-bun-lock)
-->

---
layout: section
---

# Conclusion

---
layout: bullets
---

# Conclusion

- Neovim is a powerful enough editor for Frontend Development
