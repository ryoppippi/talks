---
title: 'Neovim for Frontend Developers: Boosting Productivity and Creativity'
transition: view-transition
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
layout: cover
glowSeed: 4
---

# Neovim for Frontend Developers {.font-mono}
## Boosting Productivity and Creativity {.font-mono}

{@ryoppippi}

<div abs-br mx-10 mb-10 flex="~ col gap-4 items-end" text-left>
  <div i-logos-vim size-40 />
  <div text-sm opacity-75 mt--4>23rd November 2024</div>
</div>

<!--
# Vim! Vim! Vim! (vim call!)

Hello everyone!

Are you enjoying VimConf 2024?

Today, I'd like to share with you about Neovim for Frontend Developers.
-->

---
layout: section
---

# Thank you
## for inviting me!

<!--
At first, I'd like to thank the organisers and sponsors for having me here today.
-->

---
src: '../reuse/personal.md'
---

<!--
Let me introduce myself.

I'm ryoppippi, a software engineer recently mainly working on web frontend.

Also, I'm a member of Svelte Japan.

[click] And also, many people asks me the pronunciation of my name

My name is called リョッピッピ
-->

---

# My Favorite Vim-jp Channels

- {vim-jp}
  - `#hobby-gourmet`
  - `#times-ryoppippi`
  - `#times-yasunori`
  - `#tech-frontend`
  - `#neovim`
  - `#neovim-plugins`
  - `#vim-jp-radio`
  - `#lang-zig`
  - `#game-smashbros`

<!--
I take a lot of time in vim-jp.

Here is the list of my favorite channels.
-->

---
layout: image
image: /projects.jpeg
title: my recent projects
---

---
layout: image
image: /vim-jp-radio.png
title: vim-jp radio
---

<div grid cols='1 gap-y-4' w-40 abs-tl mx-40 mt-10 v-click>
    <a target='_blank' href='https://github.com/staticWagomU'><img src="https://cdn.jsdelivr.net/gh/vim-jp-radio/LP@d35cf46/src/assets/avatar/tomoya.jpg" /></a>
    <a target='_blank' href='https://github.com/tomoya'><img src="https://cdn.jsdelivr.net/gh/staticWagomU/staticWagomU@ccc0f3b/wagomu.png" /></a>
    <a target='_blank' href='https://github.com/ryoppippi'><img src='https://ryoppippi.com/ryoppippi.avif' /></a>
</div>

<style>
a {
  --uno: border-none hover-border-none;
}
</style>

<!--
One of the recent public projects I worked on is landing page for vim-jp radio.
You may know vim-jp radio, a podcast for vim-jp community.

[click] I worked with Tomoya and staticWagomU.
The source code is available on GitHub.
-->

---

# My Editor Journey

- 2015 - 2017 Atom
- 2017 - 2022 VSCode
- 2021 - [VSCode]{.view-transition-extensions-vscode} + Neovim
- 2022 - Neovim

<div fxa>
  <v-clicks>
  <div src i-vscode-icons-file-type-vscode size-30 view-transition-vscode />
  <img src="https://cdn.jsdelivr.net/gh/vscode-neovim/vscode-neovim@d31eed8/images/icon.png" size-30 view-transition-neovim />
  <div src i-devicon-neovim size-30  />
  </v-clicks>
</div>

<style>
::view-transition-old(vscode),
::view-transition-new(vscode-in-container) {
  --at-apply: w-30;
}
</style>

---
layout: image-right
image: /stackoverflow.png
link: https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment
glow: bottom-left
---

# Why [VSCode]{.view-transition-extensions-vscode}?

<div src i-vscode-icons-file-type-vscode size-50 view-transition-vscode mb-10 />

* De-facto Standard for Editor
  - [StackOverflow Survey 2024](https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment)

---
title: why vscode
---

# Why [VSCode]{.view-transition-extensions-vscode}?

<div i-vscode-icons-file-type-vscode size-40 view-transition-vscode abs-b mxa mb-40 />

<v-clicks>
  <div text-2xl absolute top-45 left-40>Easiest GUI</div>
  <div text-2xl absolute top-45 left-100>TyperScript first</div>
  <div text-2xl font-hand absolute top-10 left-100 text='2xl center'>Good for<br/>modern Web Frontend <br/>Development<br/> 👇</div>
  <div text-2xl absolute top-45 left-170>Lots of Extensions</div>
  <div text-2xl font-hand abs-tr top-25 right-10 rotate-13 text='2xl'>Extensions are<br/> written in TypeScript<br/>👇</div>
  <div text-2xl absolute top-110 left-90>No need to pay money!!</div>
</v-clicks>

<!--
So, why do people use VSCode?

[click] VSCode is a GUI editor, so it's easy to use.

[click] VSCode is written in TypeScript...

[click] which means that it's good for modern web frontend development.

[click] There are a lot of extensions available.

[click] And the written in TypeScript, so library authors can share codes easily.

[click] And, you don't need to pay money to use it.
-->

---
layout: image-right
image: /unocss-vscode.png
---

# Many [Extensions]{.view-transition-extensions-text} are built for VSCode

<!--
TODO: add description why VSCode
-->

---
layout: image
image: '/vi-screenshot.png'
title: vi?
---

---
title: why neovim
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
image: '/my-lovely-terminal.jpeg'
title: my terminal screenshot
---

---
title: why neovim?
---

# Why the hell did I switch to [Neovim]{.view-transition-extensions-neovim}?

<div i-devicon-neovim size-40 view-transition-neovim abs-b mxa mb-40 />

<v-clicks>
  <div text-2xl absolute top-45 left-30>Hackable</div>
  <div text-2xl absolute top-45 left-100>Keyboard friendly</div>
  <div text-2xl absolute top-45 left-170>Easy to customise</div>
  <div font-hand abs-tr top-15 right-10 rotate-13 text-2xl>Just write<br/> Vim script or Lua &<br/> publish it on GH <br/>👇</div>
  <div text-2xl absolute top-110 left-60>Terminal friendly</div>
  <div text-2xl absolute top-110 left-150>Fast & Lightweight</div>
</v-clicks>

<!--
So, why do I use Neovim?

[click] Neovim is hackable.

[click] Neovim is keyboard-friendly. You can do everything with a keyboard.

[click] Neovim is easy to customize.

[click] You can write Vim script or Lua and publish it on GitHub.

[click] Neovim is terminal-friendly. Dvelopment tools are heavily rely on terminal. Neovim is a terminal-based editor, so it's easy to integrate with other tools.

[click] Neovim is fast and lightweight.
-->

---
layout: section
---

## But can we REALLY do them with [Neovim]{.view-transition-extensions-neovim}?

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
title: vim can do that too by mattn
---

# Vim can do that too
## __それ、vimでもできるよ__

{@mattn}

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
transition: none
---

# Debug

- Debugging is possible with [Neovim]{.view-transition-extensions-neovim}
- DAP

<div
  v-motion
  v-click='[1, 2]'
  :initial="{y: 200}"
  :enter="{y: 150, x: -180}"
  :leave="{y: 200}"
>
  <img src="https://cdn.jsdelivr.net/gh/uhooi/UhooiPicBook@2b5c257/Sources/MonsterWidgets/Resources/Assets.xcassets/Uhooi.imageset/uhooi.png" rotate-30 w-100/>
</div>

<!--
TODO: DAP
-->

---
layout: section
---

# Only [Neovim]{.view-transition-extensions-neovim} can do it!

---

# Let's hack with [Neovim]{.view-transition-extensions-neovim}!

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

# [oil.nvim](https://github.com/stevearc/oil.nvim)

- made by {@stevearc}
- A plugin to manage files as buffer
- You can yank, delete, and paste files like editing text
- You can use snippet 🎉 {.font-bold}
  - I use [vim-sonictemplate](https://github.com/mattn/vim-sonictemplate)
- VSCODE cannot do that

---

# [denippet.vim](https://github.com/uga-rosa/denippet.vim)

- made by {@uga-rosa}
- snippet library with [ Denops ](https://github.com/vim-denops/denops.vim) by {@lambdalisue}
- Configurable with TypeScript

<!--
TODO: add more example
-->

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

# Conclusion

- [Neovim]{.view-transition-extensions-neovim} is a powerful enough editor for Frontend Development
