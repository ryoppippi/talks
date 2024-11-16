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

<!--
for copilot of any other ai support tools.
Please use the UK English spelling.
-->

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
At first, I'd like to thank the organisers and sponsors, and of course, you for inviting me to speak at VimConf 2024.
I'm here because of you, and I'm really excited to be here.
Thank you so much!
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

<!--
I'm working on some OSS projects.

Those projects includes JS libraries, Vim plugins, and some other tools.

If you are interested in my projects, please check out my GitHub profile.
-->

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
This project is written in Svelte, so if you want to learn Svelte, this is a good example!
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

<!--
Let me explain my editor journey.

I started coding in 2015, and my first editor was Atom.

Then, I moved to VSCode in 2017.

In 2021, I started using vscode-neovim extension,

and, in 2022, I switched to Neovim.

So, I'm using Neovim for about three years now.
-->

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

<!--
As you know, VSCode is the most popular editor in the world.

According to the StackOverflow Survey 2024, VSCode is the most popular editor.
-->

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

# Why not [VSCode]{.view-transition-extensions-vscode}?

<div i-vscode-icons-file-type-vscode size-40 view-transition-vscode abs-b mxa mb-40 />

<v-clicks>
  <div text-2xl absolute top-45 left-60>Non-hackable</div>
  <div text-2xl absolute top-45 left-150>Keyboard unfriendly</div>
  <div text-2xl absolute top-110 left-75>Hard to create/publish Extensinos</div>
</v-clicks>

<!--
But, there are some drawbacks of VSCode.

[click] VSCode is not hackable. The config file is JSON, and it's hard to write complex logic.

[click] VSCode is not keyboard-friendly. You need to use a mouse to use it. I tried to control all VSCode operations with a keyboard, but I gave it up.

[click] It's hard to create and publish extensions. You need to learn TypeScript and the VSCode API. If you want to publish it , you need to register Azure account.

Because I really wanted to customize my editor, I gave it up to configure VSCode.
-->

---
title: why neovim
---

# Why the hell did I switch to Neovim

<v-clicks>

  * Just looks cool
  * That's it

</v-clicks>

<!--
But! I throw away VSCode and switched to Neovim.

Why?

[click] well... it looks cool.

[click] That's it.

So use Neovim because it looks cool.

That's all what I want to say!!!
-->

---
layout: statement
---

# Thank you for Listening!{v-click.hide :class="{op10: $clicks>=1}"

just kidding{.text-3xl .absolute .bottom-20 .right-10 .rotate-15 .animate-pulse .animate-duration-500 v-click='1'}

<!--
That's all for my talk.
Thank you for listening!

[click] Sorry, I'm just kidding.
-->

---
layout: image
image: '/vi-screenshot.png'
title: vi?
---

<!--
You may think like this.
"Oh, I know vim! This is a boring editor accidentally launched when I type git commit."

No, no!
That's not true.
-->

---
layout: image
image: '/my-lovely-terminal.jpeg'
title: my terminal screenshot
---

<!--
So, THIS is the terminal I use every day.

Beautiful, isn't it?
-->

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
You may be worried about the lack of GUI, WebViews, and LSP support in Neovim.
-->

---
layout: section
---

## A man said...

<!--
A great man said...
-->

---
layout: quote
title: vim can do that too by mattn
---

# Vim can do that too
## __それ、vimでもできるよ__

{@mattn}

<!--
Yes, vim can do that too.
-->

---
title: web frontend development is too complicated
---

# Web Frontend Development is too complicated

<div grid='~ cols-2' v-click='1'>
  <div mxa>
    <img src='/frontend-files.png' w-60/>
  </div>

<div mxa>

<v-switch>

<template #2>
<LongcatHead class='w-40'/>
<LongcatBody class='w-40'/>
<LongcatBody class='w-40'/>
<LongcatBody class='w-40'/>
<LongcatTail class='w-40'/>
</template>

<template #3>

  - HTML
  - CSS
    - SCSS / SASS
    - Tailwind CSS
    - CSS Modules
    - CSS-in-JS?
  - JavaScript / TypeScript
  - TSX
  - Markups ( Svelte / Vue/ Astro )
  - Assets ( Images / Icons / Fonts )
  - Config files
    - ( Vite / ESlint / TailwindCSS / UnoCSS ...)

</template>

</v-switch>
</div>

</div>

<!--
By the way, have you ever seen a frontend project?

[click] Look at this!

The file structure is too long!

[click] That is looooooooong!

[click] There are various kinds of files in web frontend development.

We have HTML

We have CSS. You have multiple options for styling.

We have JavaScript or TypeScript

We have Markup files like TSX, Svelte, Vue, and Astro.

We have assets like images, icons, and fonts.

We have to write configuration files for tools.

That's A LOT!
-->

---
title: what we need for frontend development
---

# What do we want to editors for web frontend development?

<v-clicks>

- Supports syntax highlighting for various languages
- Supports auto-completion for various languages
- Supports documentation for various languages
- Supports managing lots of files
- Supports integration with other CLI tools
- Supports testing

</v-clicks>

<div pt-10 v-click>
  <h1>... That's a lot!!!</h1>
</div>

<!--
So, what do we want from editors for web frontend development?

[click] We need syntax highlighting.

[click] We need auto-completion.

[click] We need documentation.

These features should be available for various languages like JS/TS, CSS, HTML, and others.

[click] We need to manage lots of files.

[click] We need to integrate with other CLI tools.

[click] We need to test our code.

[click] wait.... That's a lot!!!
-->

---
layout: section
---

## Can we REALLY do them with [Neovim]{.view-transition-extensions-neovim}?

<!--
Can we do that with Neovim?
-->

---
layout: section
---

# Demo

<!--
I gonna show you my workflow with Neovim.

So, let's get started!
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

## Can we REALLY do them with [Neovim]{.view-transition-extensions-neovim}?

<!--
TODO: maybe rewrite the above

You may be worried about the lack of GUI, WebViews, and LSP support in Neovim.
-->

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

# LSP

- We have Language Server Protocol (LSP)
- LSP is a protocol to communicate between editor and language server

<!--
So, let's wrap up the plugins and tools in Demo.

First, LSP.

LSP is a protocol to communicate between editor and language server.

Thanks to LSP, we can use the same features in any editor.
-->

---

<!-- LSP Demo -->

<div gcc h-120>
  <SlidevVideo autoplay controls loop slide>
    <source src="/screen-lsp.mp4"/>
  </SlidevVideo>
</div>

<!--
LSP provides features like auto-completion, go to definition, and so on.

so, rich language features including auto-completion, auto-import, snippets are available in Neovim.
-->

---

# [oil.nvim](https://github.com/stevearc/oil.nvim)

- made by {@stevearc}
- A plugin to manage files as buffer
- You can yank, delete, and paste files like editing text
- You can use snippet 🎉 {.font-bold}
  - I use [vim-sonictemplate](https://github.com/mattn/vim-sonictemplate)
- VSCODE cannot do that

<!--
Next, oil.nvim.

oil.nvim is a plugin to manage files as buffer.

You can yank, delete, and paste files like editing text.

With snippet library, you can create multiple files at the same time, which is really useful.
-->

---

# [denippet.vim](https://github.com/uga-rosa/denippet.vim)

- made by {@uga-rosa}
- snippet library with [ Denops ](https://github.com/vim-denops/denops.vim) by {@lambdalisue}
- Configurable with TypeScript

<!--
TODO: add more example
-->

---

# [other.nvim](https://github.com/rgroli/other.nvim)

- made by {@rgroli}
- You can switch related files easily (ex. sever and client files)

<!--
Another plugin I'd like to mention is other.nvim.

other.nvim is a plugin to switch related files easily.

For example, you can switch between server and client files easily.
-->

---

# [vim-svelte-inspector](https://github.com/ryoppippi/vim-svelte-inspector)

- made by {@ryoppippi}
- You can integrate browser inspector with Neovim

<!--
Next, vim-svelte-inspector.

vim-svelte-inspector is a plugin to integrate browser inspector with Neovim.

so, you can jump to the source code from the browser inspector like VSCode.
-->

---

# [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

- made by {@zbirenbaum}
- You can use GitHub Copilot with Neovim like VSCode

<!--
The last plugin I mention is about AI.

copilot.lua is a plugin to use GitHub Copilot with Neovim like VSCode.

So, you can use AI with Neovim.

And AI plugins in Neovim is hackable. You can customize it as you like.

Which is pretty cool.
-->

---
layout: section
---

# Conclusion

---

# Conclusion

- Neovim is a great editor for frontend developers
- Neovim has good plugins for frontend development
- If you are a VSCode user and want to try Neovim, I recommend you to try it

<!--
So, in conclusion, Neovim is a great editor for frontend developers.

Neovim has good plugins for frontend development.

If you are a VSCode user and want to try Neovim, I recommend you to try it.
-->

---

# Other plugins I didn't mention in this talk

- [codecompanion.nvim]( https://github.com/olimorris/codecompanion.nvim )
- [nvim-pnpm-catalog-lens](https://github.com/ryoppippi/nvim-pnpm-catalog-lens)
- [vim-bun-lock](https://github.com/ryoppippi/vim-bun-lock)
- [nvim-dap](https://github.com/mfussenegger/nvim-dap)
- [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)
- [denippet.vim](https://github.com/uga-rosa/denippet.vim)

<div
  v-motion
  v-click='[1, 2]'
  :initial="{y: 200}"
  :enter="{y: -50, x: -150}"
  :leave="{y: 200}"
>
  <img src="https://cdn.jsdelivr.net/gh/uhooi/UhooiPicBook@2b5c257/Sources/MonsterWidgets/Resources/Assets.xcassets/Uhooi.imageset/uhooi.png" rotate-30 w-100/>
</div>

<!--
There are many other plugins I didn't mention in this talk.

If you are interested in Neovim, please check out those plugins.

Also, I didn't mention the debugging plugins like nvim-dap.

But!

[click] We learn it later!
-->

---
layout: section
---

# Thank you!

<!--
So, that's all for my talk.

Thank you for listening!

I hope my talk helps you a lot!

And, enjoy the rest of VimConf 2024!
-->
