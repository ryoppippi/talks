---
title: 'claude codeの進化とccusage、そしてこれから'
transition: view-transition
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
layout: cover
glowSeed: 4
---

# ccusage
## Claude Code, Agentic Coding, そしてこれから

{@ryoppippi}

<div abs-br mx-10 mb-10 flex="~ col gap-4 items-end" text-left>
  <img src="/aiau.png" w-40 />
  <div class="text-2xl font-semibold">Claude Code Meetup Tokyo</div>
  <div text-sm opacity-75 mt--4>17th October 2025</div>
</div>

---
src: '../reuse/personal-stackone.md'
---

<!--
talk: StackOne / Neovim / AI ops 自己紹介。
-->

---
layout: center
class: text-5xl font-semibold px-12
---

<!-- talk: ccusage の位置づけを一言で。 -->

ccusage とは

---
layout: image
image: https://ccusage.com/screenshot.png
class: items-center justify-center
---

<!--
talk: CLI & Web ダッシュボードを映して概要を語る。
-->

---
title: ミロさん
---

<!-- https://x.com/ml0_1337/status/1927585666755362933 -->
<!-- ミロさん -->
<Tweet id="1927585666755362933" cards="hidden"/>

---
title: oikonさん
---
<!-- https://x.com/oikon48/status/1928282969401348123 -->
<!-- oikonさん -->
<Tweet id="1928282969401348123" cards="hidden"/>


---
title: statusline
class: flex
---

<div class="flex justify-center items-start w-full space-x-6">
  <!-- claude code community -->
  <Tweet id="1937094515396944058" cards="hidden" class="w-1/2" />

  <!-- statusline -->
  <Tweet id="1954272037976842547" scale="0.9" w-120 />
</div>

---
class: text-3xl font-semibold px-12
---
<!-- ccusage is the next github graph -->
<!-- https://x.com/AnkMister/status/1934499508031009156 -->
<Tweet id="1934499508031009156" cards="hidden" />

---
layout: image
image: /npm.jpeg
backgroundSize: contain
---

---
layout: image
image: https://api.star-history.com/svg?repos=ryoppippi/ccusage&type=Date&theme=dark&type=timeline&legend=bottom-right
backgroundSize: contain
---

<!--
talk: 7月の制限導入で急伸した話をここで。
-->

---
src: '../reuse/sponsors.md'
---

<!--
sponsor ありがとうございます。
-->

---
layout: image
image: https://ccusage.com/ccusage_thumbnail.png
---

<!--
Thank you greg
-->

---
layout: image
image: /toyokumo.png
---

<!--
Thanks OSS Award by Toyokumoに選んでいただきました！ありがとうございます🙏
-->

---
layout: section
---

<!-- talk: タイムラインの導入。 -->

# 2025 Timeline

---
layout: center
class: px-12
---

<!-- talk: May〜July をまとめて。 -->

<div class="grid md:grid-cols-3 gap-6 text-left">
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">May</p>
    <p class="text-lg font-semibold mt-2">GA & 手探り</p>
    <p class="text-sm opacity-75 mt-3">/context /usage 不在 → ccusage v0.1 を即公開。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">June</p>
    <p class="text-lg font-semibold mt-2">Slash / MCP</p>
    <p class="text-sm opacity-75 mt-3">/command /search と Remote MCP で CLI 文化が芽生える。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">July</p>
    <p class="text-lg font-semibold mt-2">制限と需要</p>
    <p class="text-sm opacity-75 mt-3">Max の週次キャップ導入。Live monitor を実装。</p>
  </div>
</div>

---
layout: center
class: px-12
---

<!-- talk: August〜October。 -->

<div class="grid md:grid-cols-3 gap-6 text-left">
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">August</p>
    <p class="text-lg font-semibold mt-2">/context 公式化</p>
    <p class="text-sm opacity-75 mt-3">Remote MCP と合わせて二刀流運用に。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">September</p>
    <p class="text-lg font-semibold mt-2">Autonomy update</p>
    <p class="text-sm opacity-75 mt-3">チェックポイント & `/usage` が純正に。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
    <p class="text-xs uppercase opacity-60 tracking-[0.3em]">October</p>
    <p class="text-lg font-semibold mt-2">Plugin system</p>
    <p class="text-sm opacity-75 mt-3">Slash + Sub-agent + MCP + Hooks を bundle。</p>
  </div>
</div>

---
layout: image
image: https://ccusage.com/blocks-live.png
class: items-center justify-center
---

<!--
talk: Live monitor の画面で使用体験を語る。
-->

---
layout: center
class: px-12
---

<!-- talk: 制限のまとめ。 -->

## 制限導入のインパクト

| プラン | Before | After (2025-07~) |
|--------|--------|------------------|
| Pro | 実質無制限 | 週 40–80h 目安 |
| Max | Higher limit (曖昧) | 5h Blocks + 週キャップ |

<p class="text-sm opacity-65 mt-4">Usage 設計 = プロダクト設計へシフト。</p>

---
layout: center
class: px-12
---

<!-- talk: Mindset shift の短文化。 -->

## Mindset Shift

<div class="grid md:grid-cols-2 gap-8 text-lg opacity-85">
  <div class="bg-white/5 border border-white/10 rounded-2xl px-5 py-5">Context を監視する文化が定着</div>
  <div class="bg-white/5 border border-white/10 rounded-2xl px-5 py-5">Prompt + MCP + Tool をセットで設計</div>
</div>

---
layout: center
class: px-12
---

<!-- talk: 他エージェント波及。 -->

## 他エージェントへの波及

<div class="grid md:grid-cols-2 gap-8 text-lg opacity-85">
  <div class="bg-white/5 border border-white/10 rounded-2xl px-5 py-5">Codex CLI が token events を解禁</div>
  <div class="bg-white/5 border border-white/10 rounded-2xl px-5 py-5">Cursor / Windsurf が usage ビューを実装</div>
</div>

---
layout: center
class: px-12
---

<!-- talk: Extensibility summarised。 -->

## Extensibility = Claude Code

<ul class="text-lg opacity-85 space-y-3 text-left">
  <li>MCP で権限と接続先を宣言管理</li>
  <li>Slash commands で会話をマクロ化</li>
  <li>Plugin bundles で再現性と共有を担保</li>
</ul>

---
layout: center
class: px-12
---

<!-- talk: 未来像。 -->

## これからの未来像

<div class="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
  <ul class="text-lg opacity-85 space-y-3 leading-relaxed">
    <li>Terminal 実験 → Claude SDK → 社会デプロイ</li>
    <li>ccusage は Telemetry レイヤーとして継続</li>
    <li>エンジニア主導で LLM をエンパワーする</li>
  </ul>
  <pre class="bg-black/60 backdrop-blur rounded-2xl px-6 py-4 text-sm opacity-70"><code>CLI → usage insight → plugin化 → SDK</code></pre>
</div>

---
layout: center
class: text-center px-12
---

<!-- talk: クロージング。 -->

# Happy Vibe Coding!

