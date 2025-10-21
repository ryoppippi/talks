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
(30 sec)

*Vim! Vim! Vim! (vim call!)*

Hello everyone!

Are you enjoying VimConf 24?

*( gesture to the audience )*

Today, I'd like to share with you about Neovim for web Frontend Developers.

so let's get started!
-->

---
layout: section
---

# Thank you
## for inviting me!

<!--
30 sec

At first, I'd like to thank the organisers, sponsors, and of course, you for inviting me to speak at VimConf 24.

I'm really excited to be here today.

When I started using Neovim, I cannot imagine this kind of wonderful opportunity.

Thank you so much!
-->

---
src: '../reuse/personal.md'
---

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
I take a lot of time in vim-jp everyday.

I love those channels sooo much!
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
  <a target='_blank' href='https://github.com/tomoya'><img src="https://cdn.jsdelivr.net/gh/vim-jp-radio/LP@d35cf46/src/assets/avatar/tomoya.jpg" /></a>
  <a target='_blank' href='https://github.com/staticWagomU'><img src="https://github.com/staticWagomU.png" /></a>
  <a target='_blank' href='https://github.com/ryoppippi'><img src='https://ryoppippi.com/ryoppippi.avif' /></a>
</div>

<style>
a {
  --uno: border-none hover-border-none;
}
</style>

<!--
One of the recent public projects I worked on is the landing page for vim-jp radio.
You may know vim-jp radio, a Japanese podcast for engineers.

[click] I worked with Tomoya-san and wagomu-san.
This project is open source, so you can check out the code on GitHub.
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

[click] Then, I moved to VSCode in 2017.

[click] In 2021, I started using vscode-neovim extension, and this was my first vim experience.

[click] in 2022, I switched to Neovim.

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
  <div text-2xl absolute top-45 left-100>TypeScript first</div>
  <div text-2xl font-hand absolute top-10 left-100 text='2xl center'>Good for<br/>modern Web Frontend <br/>Development<br/> 👇</div>
  <div text-2xl absolute top-45 left-170>Lots of Extensions</div>
  <div text-2xl font-hand abs-tr top-25 right-10 rotate-13 text='2xl'>Extensions are<br/> written in TypeScript<br/>👇</div>
  <div text-2xl absolute top-110 left-90>No need to pay money!!</div>
</v-clicks>

<!--
So, why do people use VSCode, especially for web frontend development?

[click] VSCode is a GUI editor, so it's easy to use.

[click] VSCode is written in TypeScript...

[click] which means that it's good for modern web frontend development.

Also the extensions are really easy to use. You can start development out of the box.

[click] There are a lot of extensions available.

[click] And they are written in TypeScript, so library authors can share codes easily.

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
So, my choice is Neovim.

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
I don't think you guys thnink like this, but some people think like:
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
So, why do I use Neovim actually?

[click] Neovim is hackable.

[click] Neovim is keyboard-friendly. You can do everything with a keyboard.

[click] Neovim is easy to customize.

[click] When you use plugins, you can just write Vim script or Lua and it is easy to publish it on GitHub.

[click] Neovim is terminal-friendly. Dvelopment tools are heavily rely on terminal. Neovim is a terminal-based editor, so it's easy to integrate with other tools.

[click] Neovim is fast and lightweight.
-->

---
layout: section
---

# Do [Neovim]{.view-transition-extensions-neovim} REALLY work for web frontend development?

<!--
But, can we REALLY use Neovim for web frontend development?

Because it looks hard to configure and use.
-->

---
title: web frontend development is too complicated
---

# Web Frontend Development is too complicated

<div grid='~ cols-4' v-click='1'>
  <div mxa mya>
    <img src='/frontend-files.png' w-60/>
  </div>

  <div mxa>
    <LongcatHead class='w-31' v-click='2'/>
    <LongcatBody class='w-31' v-click='3'/>
    <LongcatBody class='w-31' v-click='4'/>
    <LongcatBody class='w-31' v-click='5'/>
    <LongcatBody class='w-31' v-click='6'/>
    <LongcatTail class='w-31' v-click='7'/>
  </div>

  <div mxa text-2xl grid-col-span-2>

  <v-clicks at='+2'>

  - Config files
    - Vite / Webpack / Tailwind CSS ...
    - ESLint / Prettier ...
  - Package.json / Lock file
  - Assets ( Images / Icons / Fonts )
  - CSS
    - SCSS / SASS / CSS Modules
    - Tailwind CSS
  - JavaScript / TypeScript
  - Markups
    - TSX / JSX
    - Svelte / Vue / Astro

  </v-clicks>

  </div>
</div>

<!--
And actually, the modern web frontend development is too complicated.

By the way, have you ever seen a frontend project?

[click] Looks at this caos of files!

[click] We have configurations for tools.

[click] We have package.json and lock files.

[click] We have assets

[click] We have CSS and styling configurations

[click] Of course, we have JavaScript or TypeScript for logic.

[click] And we have Markup files like TSX, Svelte, Vue, and Astro.

That's a loooooong file structure!

We need to deal with those variety of files in web frontend development.
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
So, what do we want from editors to achieve good developer experience?

[click] We need syntax highlighting.

[click] We need auto-completion.

[click] We need documentation.

These features should be available for various languages.

[click] We need to manage lots of files.

[click] We need integration with other CLI tools.

[click] We need to test our code.

[click] wait.... That's a lot!!!
-->

---
layout: section
---

## Can we REALLY do them with [Neovim]{.view-transition-extensions-neovim}?

<div
  v-motion
  :initial="{y: 200}"
  :enter="{y: 130, x: 650}"
  :leave="{y: 200}"
>
    <div src i-devicon-neovim size-50 rotate--15 />
</div>

<!--
Can we do that with Neovim?
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
layout: section
---

# Demo

<!--
So, in this talk, I'd like to share with you my workflow with Neovim.
Also, I'll break down the plugins and features I use on Neovim.

I'm a little bit nervous, but let's start the demo!
If my demo goes well, give me a big applause!
-->

---
layout: section
---

# Setup a project

<!--
First, create an example project.

In this example, I'll create a Svelte project using the brand-new `sv` command.
-->

---

# Terminal integration

- [ugaterm.nvim](https://github.com/uga-rosa/ugaterm.nvim) by {@uga-rosa}
- Open any type of terminal in Neovim including floating terminal

<!--
Next, lets open the project in neovim terminal.

I use ugaterm.nvim by uga-rosa.

This plugin enables you to open any type of terminal in Neovim, including floating terminal.

So you can launch dev server in the terminal and switch between terminal and editor easily.
-->

---

<div gap-y-10 fcol>
<div>

# LSP (Language Server Protocol)

- a protocol to communicate between editor and language server

</div>

<div>

# Tree-sitter

- a parser generator tool and an incremental parsing library
- provides syntax highlighting, code folding, and more

</div>
</div>

<!--
Let's talk about LSP and Tree-sitter.

LSP is a protocol to communicate between editor and language server.

LSP provides features like auto-completion, go to definition, and so on.

Also, there is Tree-sitter built in Neovim.

Tree-sitter is a parser generator tool and an incremental parsing library.

They are essential for modern code editors.
-->

---

- Code completion
  - [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) by {@hrsh7th}

- Diagnostics / Information
  - [lsp_lines.nvim](https://git.sr.ht/~whynothugo/lsp_lines.nvim)
  - [nvim-highlight-colors](https://github.com/brenoprata10/nvim-highlight-colors) by {@brenoprata10}

- LSPs
  - [nvim-vtsls](https://github.com/yioneko/nvim-vtsls) by {@yioneko}
  - [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) by {@neovim}
  - [efm-langserver](https://github.com/mattn/efm-langserver) by {@mattn}
  - [sveltejs/language-tools](https://github.com/sveltejs/language-tools) by {@sveltejs}
  - [@tailwindcss/language-server](https://www.npmjs.com/package/@tailwindcss/language-server) by {@tailwindcss}

<!--
For code completion, I use nvim-cmp by hrsh7th.

For diagnostics, I use lsp_lines.nvim to display diagnostics as a virtual text.

Also, nvim-highlight-colors is useful to display color info like tailwind color.

And, I install some LSPs

LSP provides features like auto-completion, go to definition, and so on.
And, tree-sitter provides syntax highlighting and code folding.

so, rich language features like auto-completion

Also auto-import works fine.

Modern web development is complicated

For example, svelte file contains script, style, and markup in a single file.
However, we can use LSP to get auto-completion for each part. Brilliant.

I'm using eslint as a linter in this project, so as I edit the code in a wrong way, the error message is displayed on Neovim
-->

---

# Enhance your editing files

- Make use of the builtin text-objects!

- Surround text with tags, quotes, etc.
  - [mini.surround](https://github.com/echasnovski/mini.surround) by {@echasnovski}
  - [nvim-insx](https://github.com/hrsh7th/nvim-insx) by {@hrsh7th}

- Toggle / switch numbers, symbols, text case, etc.
  - [dial.nvim](https://github.com/monaqa/dial.nvim) by {@monaqa}

- Code suggestion by AI
  - [copilot.lua](https://github.com/zbirenbaum/copilot.lua) by {@zbirenbaum} + nvm-cmp
  - [codecompanion.nvim]( https://github.com/olimorris/codecompanion.nvim ) by {@olimorris}

<!--
Next, enhance your editing files.

Neovim has many built-in text-objects.

This is one of the most powerful features in vim, and this was one of the most surprising features for me when I started using Neovim.

In addition, you can use some plugins to enhance your editing files.

text objects is one of the most powerful features in vim.
So, if you want to change the text in a specific html tag, just type `cit` and type the new text.

mini.surround is a plugin to surround text with tags, brackets, quotes, etc.
with configuration, you can wrap a word with a html with class names like emmet. Also using a word as a function argument is easy.

Recently there are so many plugins to integrate with LLMs, but I'm using codecompanion.nvim because it's simple and easy to use.
In this example, I asked to local LLM to make buttons look better.
-->

---

# Testing

- [neotest](https://github.com/nvim-neotest/neotest) by {@rcarriga}
  - A framework for interacting with tests within NeoVim.
  - You can run tests and see the results in a Neovim

<!--
For testing, I use neotest by nvim-neotest.

neotest is a framework for interacting with tests within Neovim.

In web development, we often execute tests with Jest or Vitest.

With neotest, you can run tests and see the results in Neovim.
-->

---

# File Management

- [oil.nvim](https://github.com/stevearc/oil.nvim)

- made by {@stevearc}
- A plugin to manage files as buffer
- You can yank, delete, and paste files like editing text
- You can use snippet 🎉 {.font-bold}
  - I use [vim-sonictemplate](https://github.com/mattn/vim-sonictemplate) by {@mattn}
- VSCODE cannot do that

<!--
For file management, I use oil.nvim by stevearc.

oil.nvim is a plugin to manage files as buffer.

You can yank, delete, and paste files like editing text.

With snippet library, you can create multiple files at the same time, which is really useful.

SvelteKit uses file-based routing, so, we need to create a files for new pages.
Also, we often create multiple files because there are server and client files.
So combining oil.nvim and snippet library is really useful in this case.
-->

---

# File Switching

- [other.nvim](https://github.com/rgroli/other.nvim) by {@rgroli}
  - You can switch related files easily (ex. sever and client files)

<!--
So, there are many kinds of files in web frontend development.
If we can switch the related files easily, it will be a great help.

other.nvim is a plugin to switch related files easily.

For example, you can switch between server and client files in SvelteKit project.
-->

---

# WebBrowser integration

- [vim-svelte-inspector](https://github.com/ryoppippi/vim-svelte-inspector) by {@ryoppippi}
  - You can integrate browser inspector with Neovim

<!--
Lastly, let's talk about the browser integration for debugging.

vim-svelte-inspector is a plugin to integrate browser inspector with Neovim.

You can click the element in the browser inspector, and the cursor in Neovim will jump to the corresponding source code.
-->

---

# Git Integration

- Git command operation
  - [lazygit](https://github.com/jesseduffield/lazygit) by {@jesseduffield}
  - ```lua
		vim.api.nvim_create_user_command("TG", function()
			vim.cmd.tabe()
			vim.fn.termopen("lazygit", {
				on_exit = function(_, _, _)
					vim.cmd.tabclose()
				end,
			})
			local current_buffer = vim.api.nvim_get_current_buf()
			vim.keymap.set("t", "<esc>", "<esc>", { buffer = current_buffer, remap = false })
		end, { nargs = 0 })
  ```

- [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) by {@lewis6991}
- [git-conflict.nvim](https://github.com/akinsho/git-conflict.nvim) by {@akinsho}

<!--
There are many plugins to integrate with Git.
For example, ありすえ-san is developing Gin.vim.

But I'm using lazygit instead of vim plugins because of the nice UI.
I wrote a simple command to open lazygit in a new tab.

Also, gitsigns.nvim is useful to check blames, and git-conflict.nvim is useful to resolve conflicts.
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

- [nvim-pnpm-catalog-lens](https://github.com/ryoppippi/nvim-pnpm-catalog-lens) by {@ryoppippi}
- [vim-bun-lock](https://github.com/ryoppippi/vim-bun-lock) by {@ryoppippi}
- [nvim-dap](https://github.com/mfussenegger/nvim-dap) by {@mfussenegger}
- [denippet.vim](https://github.com/uga-rosa/denippet.vim) by {@uga-rosa}
- [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) started by {@tjdevries}

...

<!--
There are many other plugins I didn't mention in this talk.

I'll upload this slide to my GitHub repository, so please check it out.
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
