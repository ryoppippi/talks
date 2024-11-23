自己紹介

Web frontend開発でvim使ってるよ〜〜

この世界だとvscodeを中心に回ってるよ！

- vscodeだと拡張機能が多い
- ユーザーも直感的に触れる
- 大体のFWはVSCode用に拡張機能を作ることが多い
- web viewなので、なんでもやりたい放題
- ↑web開発と親和性が高い

でも僕はvscodeからneovimに移行しました
なんでか？

- coolだから
- キーボードだけで完結する生産性
- カスタマイズ製
  - pluginを作るのも簡単

neovimでもできるよ！っていうのを伝える

- lsp
- debug with browser
- AI

neovimの方がいいよ！

- oil + sonictemplate
- snippet ( denippet )
- 高度な編集機能
- terminal integration

Web frontendのためのplugin開発

- bun
- pnpm

# デモの流れ

- bunx sv create でsvelte projectを作る

- floating terminalを開く ( uga-term )

- tree-sitterの紹介

  - syntax highlightが動いていることを示す

- lspの紹介

  - vtsls, svelte lsp, tailwind-lsp, eslint-lspが導入されていることを示す
  - formatter は動くか ( efm-langserver )
  - 打ってみて補完が出るか (cmp.nvim)
  - auto-importは動くか？
  - hover docは出るか (https://github.com/DNLHC/glance.nvim)
  - tailwindの色は表示されるか ( nvim-highlight-colors )

- dial.nvimでlet/constの切り替え

- text object
- mini.surround で tagでかこむ
- quickrunで実行する

- oil + snippetでfileを生成する

- other.nvim でfileを切り替える

- testを実行する (neotest)

- copilotとcodecompanionでコード生成

- vim-inspectorでbrowserと連携する
