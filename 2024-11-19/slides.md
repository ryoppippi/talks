---
title: 'Neovim for Frontend Developers: Boosting Your Dev with some Plugins'
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

<div abs-tr mx-10 mt-15 flex="~ col gap-4 items-end" text-left>
  <img src="https://raw.githubusercontent.com/vim-conf-live/neovimconf.live/refs/heads/main/years/2024/priv/static/images/logo.svg" w-40 />
  <div text-sm opacity-75 mt--4>17th November 2024</div>
</div>

<!--
Hello everyone!

Are you enjoying neovimconf 2024?

Today, I'd like to share with you about Neovim for Frontend Developers.
-->

---
src: '../reuse/personal.md'
---

---

# My Editor Journey

- 2015 - 2017 Atom
- 2017 - 2022 VSCode
- 2021 - [VSCode]{.view-transition-extensions-vscode} + Neovim
- 2022 - Neovim

<div fxa>
  <v-clicks>
  <div src i-vscode-icons-file-type-vscode size-30 view-transition-vscode />
  <img src="https://cdn.jsdelivr.net/gh/vscode-neovim/vscode-neovim@d31eed8/images/icon.png" size-30 />
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

# [VSCode]{.view-transition-extensions-vscode} is the King

<div src i-vscode-icons-file-type-vscode size-50 view-transition-vscode mb-10 />

- De-facto Standard for Editor
  - [StackOverflow Survey 2024](https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment)

<!--
As you know, VSCode is the most popular editor in the world.

According to the StackOverflow Survey 2024, VSCode is the most popular editor.
-->

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

# Why [Neovim]{.view-transition-extensions-neovim}?

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

# Are you scared of migrating to [Neovim]{.view-transition-extensions-neovim}?

<div i-devicon-neovim size-40 view-transition-neovim abs-b mxa mb-40 />

<v-clicks>
  <div text-4xl font-hand absolute top-50 left-30 rotate--13>Extensions/Plugins?</div>
  <div text-4xl font-hand absolute top-50 left-160 rotate-13>Auto completion?</div>
  <div text-4xl font-hand absolute top-100 left-30 rotate-13>File Management?</div>
  <div text-4xl font-hand absolute top-100 left-160 rotate--13>AI</div>
</v-clicks>

<!--
I switched to Neovim and use it for about three years.

I love it but some people think like this.

[click] Are there any enough extensions or plugins?

[click] Is auto-complete as good as VSCode?

[click] How do you manage files?

[click] Can I use AI?
-->

---
layout: section
---

# Demo

<!--
So, in this talk, I'd like to share with you my workflow with Neovim.

At first, create an exazmple project
In this example, I'll create a svelte project using the brand-new sv command.
This includes svelte5, sveltekit and tailwind.

Next, lets open the project with neovim.
I'm using floating terminal.
As you know, this is all happens in terminal, so you can switch between terminal and editor easily! cool right?

Lets start coding. As you can see, there is a auto completion powered by LSP. Also, you can get variable type information.

OK, now use svelte module. Can you see that onMount function is auto-imported?

In this example , I create page files and a page server file which is tyically used in sveltekit project

The last thing I gonna mention is integrating with browser inspector.
Modern web fronted frameworks have a feature that allows you to jump source code from browser dev mode.
This is really useful.
Some people think that this works only on VSCode or GUI editors, but if you configure it properly, you can use it on Neovim

That was my Demo! how was it?
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

...

<!--
There are many other plugins I didn't mention in this talk.

I'll upload this slide to my GitHub repository, so please check it out.
-->

---
layout: section
---

# Thank you!
