---
title: 'OSSで世界と戦うには - ccusageの舞台裏'
transition: view-transition
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
layout: cover
glowSeed: 4
---

# OSSで世界と戦うには
## ccusageの舞台裏

{@ryoppippi}

<div abs-br mx-10 mb-10 flex="~ col gap-4 items-end" text-left>
  <img src="/findy-conf.png" w-48 />
</div>

---
src: '../reuse/personal-rork.md'
---

<!--
talk: StackOne / Neovim / AI ops 自己紹介。
-->

<!--
talk: 初めまして、ryoppippi です。ccusage を作りました。
-->

---
layout: section
---

# 宣伝

---
layout: section
---

<div class="font-britti inline-flex items-end gap-1.5">
    <span class="text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-white">
      Rork
    </span>
    <span class="text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-orange-400">
      Max
    </span>
  </div>

---
layout: image
image: /rork-max-hero.png
backgroundSize: contain
---

<!-- talk: 先日、Rork Maxというプロダクトをリリースしました。完全バイブコーディングでswiftでiosアプリを作れてしまう革命的なプロダクトです。 -->

<!--
talk: もし興味があればぜひ触ってみてください！
-->

---
layout: section
---

https://rork.com/ja/max

---
layout: section
---

<!-- talk: ccusage の位置づけを一言で。 -->

# ccusage とは

---
layout: quote
---

>「Maxプランでこんなに得してる！」とニヤニヤするためのCLIツール

<div class="flex justify-end">

https://ryoppippi.com/blog/2025-05-29-zenn-6c9a8fe6629cd6-ja

</div>

---

# Subcommands

- daily
- monthly
- weekly
- blocks
- session
- statusline

<!--
豊富なサブコマンド
-->

---
layout: image
title: ccusage screenshot
image: https://ccusage.com/screenshot.png
class: items-center justify-center
---

---
layout: image
image: https://api.star-history.com/svg?repos=ryoppippi/ccusage&type=Date&theme=dark&type=timeline&legend=bottom-right
backgroundSize: contain
---

<!--
talk: GitHub Star は 1万 を超えています。
talk: npm ダウンロード数は累計 90 万を突破しました。
talk: ここまで来られたのはコミュニティのおかげです。
-->

---
layout: section
---

# ことの発端

---
layout: section
---

# 2025年5月29日

---
title: ミロさん
class: flex items-center justify-center
---

<!-- https://x.com/ml0_1337/status/1927585666755362933 -->
<!-- ミロさん -->
<div relative>
  <Tweet id="1927585666755362933" cards="hidden" mt--4 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px" />
</div>

---
layout: center
---

これでCLI作ったら面白いのでは？

---
layout: default
---

# うおお〜作るぞ〜

- ブログに触発されて1時間ほどでプロトタイプが完了
- README / Publish / Zenn記事公開まで3時間弱

---
layout: image
image: /zenn.png
---

<!--
Zennにも記事を書いた
-->

---
layout: image
image: /zenn1.png
---

<!--
Zennにも記事を書いた
-->

---

<div relative>
<!-- oikonさん -->
<!-- https://x.com/oikon/status/1928282969401348123 -->
<Tweet id="1928282969401348123" cards="hidden" ml--45 mt--4 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px"  />

<!-- https://x.com/ml0_1337/status/1928273708902121679 -->
<Tweet id="1928273708902121679"  absolute bottom-5 right-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

<!-- https://x.com/tegnike/status/1928339032687124986 -->
<Tweet id="1928339032687124986" absolute top-5 left-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

<!-- https://x.com/shintaro_sprech/status/1928357123047493923 -->
<Tweet id="1928357123047493923" absolute top--20 left-20 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

<!-- https://x.com/__syumai/status/1940205816868741150 -->
<Tweet id="1940205816868741150" absolute bottom-5 left-10 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />
</div>

---
layout: section
---

# 2025年6月3日

---
layout: section
---

# `costUSD`の削除

---

# `costUSD`の削除
- Claude Codeのlog fileから `costUSD` フィールドが削除される
- これにより、ccusageの根幹機能が失われる危機に
- [ryoppippi/ccusage#4](https://github.com/ryoppippi/ccusage/issues/4)の報告
- 代替手段の検討、精度の検証、publishまで4時間ほどで完了

<!-- https://x.com/ryoppippi/status/1929920635989381247 -->
<div relative>
    <Tweet id="1929920635989381247" scale="0.7" absolute right-30  transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px"  />
</div>

---
layout: section
---

# じわじわ海外人気

---

<div relative>
<!-- https://x.com/claude_code/status/1937094515396944058 -->
<Tweet id="1937094515396944058" top-5 right-10 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px"  />

<!-- https://x.com/ml0_1337/status/1928273708902121679 -->
<Tweet id="1943014689820045402" absolute top-5 right-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

<!-- https://x.com/jarredsumner/status/1940378429154832881 -->
<Tweet id="1940378429154832881" absolute top--5 left-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click  :class="$clicks > 2 ? ' duration-600' : ''" />

<!-- ccusage is the next github graph -->
<!-- https://x.com/AnkMister/status/1934499508031009156 -->
<Tweet id="1934499508031009156" absolute top--1 left-20 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

</div>

---
layout: section
---

# 2025年6月22日

---
layout: section
---

# `ccusage blocks --live`

---

# `ccusage blocks --live`

- Claude Code には5時間ごとのセッションの概念がある
- `blocks --live` は現在のセッションの使用量をリアルタイムで表示する

---
class: relative
---

<!-- https://x.com/ryoppippi/status/1936534142394798586 -->
<Tweet id="1936534142394798586" absolute top--2 left-50 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl"/>

---

<div relative>
<!-- https://x.com/vedovelli74/status/1951219811070996806 -->
<Tweet id="1951219811070996806" top-5 right-10 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px"  />

<!-- https://x.com/ml0_1337/status/1936598336355852559 -->
<Tweet id="1936598336355852559" absolute top--10 right-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />

<!-- https://x.com/iannuttall/status/1936540238442037352 -->
<Tweet id="1936540238442037352" scale="0.8" absolute top--15 left-10 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />
</div>

---
layout: section
---

# 2025年8月8日22:00

---
layout: section
---

# `/statusline`

---
title: statusline
class: relative
---

<Tweet id="1953927012592366062" scale="0.7" absolute top-0 right-40 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" />

---
layout: section
---

# 2025年8月9日3:00

---
layout: section
---

# `ccusage statusline`

---
title: statusline-ryoppippi
class: relative
---

<!-- https://x.com/ryoppippi/status/1953999610927624338 -->
<Tweet id="1953999610927624338" scale="0.7" absolute top-0 left-70 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" />

<!-- https://x.com/oikon48/status/1954001831010742597 -->
<Tweet id="1954001831010742597" scale="0.7" absolute class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click="+1" />

<!-- https://x.com/iannuttall/status/1954272037976842547 -->
<Tweet id="1954272037976842547" scale="0.8" absolute  left-130 class="important:[&_iframe]:w-300 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click="+1" />

<!--
Statusline発表 好評だった
-->

---
layout: section
---

# 2025年9月11日

---

# Claude Code Analytics API

<div relative>
<!-- https://x.com/claudeai/status/1965871901437472788 -->
<Tweet id="1965871901437472788" top-5 right-10 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px"  v-click/>
</div>

<!--
cc analytics API の発表で、ccusageの存在意義が問われることに。ただ、個人ユーザは使えないとのことで、ccusageの需要はまだまだあると判断。
-->

---
layout: section
---

# 2025年9月29日

---
layout: section
---

# `/usage`

---

# Claude Code 2.0の発表

- `/usage` コマンドが追加
  - official で Claude Code の使用量を確認できるように
  - `ccusage blocks --live`はこれにて役割を終える

- 標準でsessionごとのtoken使用料を常に表示するよう変更

<v-clicks>

- `ccusage blocks --live` の非推奨化

</v-clicks>

<img src="/2-0.jpg" class="w-80 rounded-2xl shadow-xl mxa" />

<!--
とまあ、claude code自体がどんどん便利になっていった
-->

---
layout: section
---

# ccusage Related Projects

---

# ccusage Related Projects

<div flex="~ justify-end gap-6 mt-10">

<!-- https://x.com/nyatinte/status/1935641204106170878 -->
<Tweet id="1935641204106170878" scale="0.7" class="important:[&_iframe]:w-100 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" />

<!-- https://x.com/sivchari/status/1939871193051603119 -->
<Tweet id="1939871193051603119" scale="0.7" class="important:[&_iframe]:w-100 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl"  />

</div>

---
layout: section
---

# そして現在...

---
layout: image
image: /ccusage-apps.png
backgroundSize: contain
---

---
layout: default
---

# ccusage for x!

- amp
- claude code
- openai/codex (codex cli -> cc)
- opencode
- pi agent

---
layout: section
---

# 技術的なお話

---
layout: image
image: /my-cli-stack.png
---

---
layout: default
---

# 大事にしていたこと

- UNIX 哲学
- 速さ
- ユーザーの声

---
layout: section
---

# UNIX哲学

小さな部品を組み合わせて大きな仕事をする

---
layout: default
---

- 最初のversionから `--json` オプションをつけた
  - pipe で 好きなように加工できるように
  - 例: `ccusage daily --json | jq '.[0].costUSD'`
- 機能を最小限に絞る

<v-clicks>
- しかしユーザーの要望で機能は増えていった...
  - daily
  - monthly
  - weekly
  - blocks
  - statusline
</v-clicks>

---
layout: image
image: /noba.jpg
backgroundSize: contain
---

---
layout: section
---

# 速さ

---
layout: default
---

# 速さ

- バンドルサイズを小さく保つ
  - 最新版は **600KB** しかない
- `bun x ccusage`を推奨
  - インストール不要で、常に最新のものが使える

---
layout: default
---

# ccusgeを支える技術スタック

- https://gunshi.dev by {@kazupon}
- byethrow by {@Karibash}
- tsdown by {@sxzz}
- vitepress by {@vuejs}
- vitest by {@vitest}
- 強めのeslint rules (@ryoppippi/eslint-config)

<v-clicks>

どれも新しいOSSだが、bundle sizeに強み

</v-clicks>

---
layout: default
---

# ccusgeを支える技術スタック

- https://gunshi.dev by {@kazupon}
- byethrow by {@Karibash}
- tsdown by {@sxzz}
- <span op50> vitepress by {@vuejs} </span>
- <span op50> vitest by {@vitest} </span>
- <span op50> 強めのeslint rules (@ryoppippi/eslint-config) </span>

どれも新しいOSSだが、bundle sizeに強み

---
layout: default
---

# Coding Agent フレンドリーな開発環境

<div grid="~ cols-2 gap-8">
<div>

**Local**

- nixによる開発環境の均質化
  - nodeだけじゃなくて、周辺のツールも一括管理
- vitest inline test
  - testコードと実装コードを隣り合わせにする
- pre-commit
  - eslint
  - commit message形式

</div>
<div>

**CI/CD**

- CI
  - eslint
  - vitest
- npm publish の自動化
  - GitHub Actionsで、tag pushをトリガーにpublish

</div>
</div>

---
layout: section
---

# ユーザーの声

---
layout: default
---

# ユーザーの声

- 毎日毎日 Twitter をエゴサ
- 毎日issueをチェック、すぐに修正
- できるだけ早くリリース

<!-- talks: 半年で66リリースしている。 -->

<!--
多い時は１日に３回リリースなど
-->

---
layout: default
---

# 大変だったこと

- 速さと軽さを保ちながら機能追加
- 仕事との両立
- 大量のissue/AI生成による大量のPRへの対処

---
layout: section
---

# ccusageがもたらしたもの

---
layout: default
---

# ccusageがClaude Codeへもたらしたもの

- Claude Code 利用者の増加
- Claude Code のDXの向上
- 周辺ツールの充実
  - `cc`なんとか系ツール群の登場
- mcp/subagentなどの概念の普及
- ユーザーのToken/Context Windowへの解像度向上

---
layout: default
---

# 例: <span> serena </span>

<div flex='~ justify-center'>
    <SlidevVideo autoplay controls w-200>
        <source src="/serena.mp4" type="video/mp4" />
    </SlidevVideo>
</div>

---
layout: default
---

# ccusageが私にもたらしたもの

<v-clicks>

  - 知名度
  - コミュニティとの繋がり
  - 代表作
  - 仕事のオファー

</v-clicks>

---
layout: section
---

---
layout: image
title: ccusage screenshot
image: /boris.jpeg
backgroundSize: contain
---

<!-- talk: 先日、claude codeの1周年記念パーティがSFで開催されました -->
<!-- talk: claude codeの作者のborisに先日会いました。知ってくれてました -->

<!-- --- -->
<!-- class: text-center -->
<!-- transition: view-transition -->
<!-- title: pick up contributors -->
<!-- --- -->
<!---->
<!-- <h1 font-serif text-4xl mt-20 important-mb-16>Thanks to</h1> -->
<!---->
<!-- <div flex="~ gap-18 items-center justify-center" > -->
<!--   <div flex="~ col items-center" v-click> -->
<!--     <img src="https://github.com/nyatinte.png" rounded-full w-30 mb4 view-transition-contributor-nyatinte duration-1000 /> -->
<!--     <div>NakamuraTakumi</div> -->
<!--     <div font-mono text-sm op50>@nyatinte</div> -->
<!--   </div> -->
<!---->
<!--   <div flex="~ col items-center" v-click> -->
<!--     <img src="https://github.com/a-c-m.png" rounded-full w-30 mb4 view-transition-contributor-a-c-m duration-1000 /> -->
<!--     <div>Alex McFadyen</div> -->
<!--     <div font-mono text-sm op50>@a-c-m</div> -->
<!--   </div> -->
<!---->
<!--   <div flex="~ col items-center" v-click> -->
<!--     <img src="https://github.com/ben-vargas.png" rounded-full w-30 mb4 view-transition-contributor-ben-vargas duration-1000 /> -->
<!--     <div>Ben Vargas</div> -->
<!--     <div font-mono text-sm op50>@ben-vargas</div> -->
<!--   </div> -->

<!--
</div>
-->

---
layout: section
---

# まとめ
## なぜ、ccusageが成功したのか

---
layout: default
---

- アイデアと、それをいかに早くshipするか
- コミュニティとの密なコミュニケーション
- 開発環境を整え、コントリビュータ

---

<Contributors />

<!--
Also thanks to everyone who has contributed to ccusage itself and the companion tools so far. All your contributions and ideas made it possible for us to build ccusage today. Thank you!

Also, I'd invite you to join us and help out!
-->

<!--
talk: コントリビュータのみなさん、本当にありがとう。あなたたちのおかげでここまで来られました。
-->

---
src: '../reuse/sponsors.md'
---

<!--
sponsor ありがとうございます。
-->

---
layout: center
---

# Big Thanks to

<div flex="~ items-center justify-center gap-6 mt-10">
<img src="https://ccusage.com/ccusage_thumbnail.png" alt="ccusage" class="w-80 rounded-2xl shadow-xl" v-click />
<img src="https://oss.toyokumo.co.jp/_next/image?url=%2Flogo%2Fmain-title.png&w=3840&q=75" alt="Thanks OSS Award by Toyokumo" class="w-60 mb-4" v-click />
  <div flex="~ col items-center" v-click>
    <img src="https://github.com/tomoya.png" rounded-full w-30 mb4 view-transition-contributor-ben-vargas duration-1000 />
    <div>Tomoya Otake</div>
    <div font-mono text-sm op50>@tomoya</div>
  </div>
</div>

<!--
Thanks OSS Award by Toyokumoに選んでいただきました！ありがとうございます🙏
-->

---
layout: section
---

<!-- talk: クロージング。 -->

# Happy Vibe Coding!

---
layout: end
---
