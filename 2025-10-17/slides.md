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
class: flex items-center justify-center
---

<!-- https://x.com/ml0_1337/status/1927585666755362933 -->
<!-- ミロさん -->
<div relative>
  <Tweet id="1927585666755362933" cards="hidden" mt--4 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px" />
</div>

---
title: oikonさん
---

<div relative>
  <Tweet id="1927585666755362933" cards="hidden" ml--45 mt--4 flex justify-center items-center transition class="important:[&_iframe]:w-230 important:[&_iframe]:rounded-13px" :class="$clicks > 1 ? 'op50 duration-600' : ''" v-click />

  <!-- oikonさん -->
  <!-- https://x.com/oikon/status/1928282969401348123 -->
  <Tweet id="1928282969401348123" cards="hidden" absolute top-15 left-5 class="important:[&_iframe]:w-200 important:[&_iframe]:rounded-13px important:[&_iframe]:shadow-xl" v-click />
</div>

---
title: statusline
class: flex
---

<div class="flex justify-center items-start w-full space-x-6">
  <!-- claude code community -->
    <!-- https://x.com/claude_code/status/1937094515396944058 -->
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
layout: default
class: px-12
---

<!-- talk: May GA & 手探り -->

## May: GA & 手探り

- `/context` `/usage` 不在
- ccusage v0.1 を即公開

---
layout: default
class: px-12
---

<!-- talk: June Slash / MCP -->

## June: Slash / MCP

- `/command` `/search` と Remote MCP で CLI 文化が芽生える

---
layout: default
class: px-12
---

<!-- talk: July 制限と需要 -->

## July: 制限と需要

- Max の週次キャップ導入
- Live monitor を実装

---
layout: default
class: px-12
---

<!-- talk: August /context 公式化 -->

## August: /context 公式化

- Remote MCP と合わせて二刀流運用に

---
layout: default
class: px-12
---

<!-- talk: September Autonomy update -->

## September: Autonomy update

- チェックポイント & `/usage` が純正に

---
layout: default
class: px-12
---

<!-- talk: October Plugin system -->

## October: Plugin system

- Slash + Sub-agent + MCP + Hooks を bundle

---
layout: image
image: https://ccusage.com/blocks-live.png
class: items-center justify-center
---

<!--
talk: Live monitor の画面で使用体験を語る。
-->

---
layout: default
class: px-12
---

<!-- talk: 制限のまとめ。 -->

## 制限導入のインパクト

- **Pro**: 実質無制限 → 週 40–80h 目安
- **Max**: Higher limit (曖昧) → 5h Blocks + 週キャップ
- **結果**: Usage 設計 = プロダクト設計へシフト

---
layout: default
class: px-12
---

<!-- talk: Mindset shift の短文化。 -->

## Mindset Shift

- Context を監視する文化が定着
- Prompt + MCP + Tool をセットで設計

---
layout: default
class: px-12
---

<!-- talk: 他エージェント波及。 -->

## 他エージェントへの波及

- Codex CLI が token events を解禁
- Cursor / Windsurf が usage ビューを実装

---
layout: default
class: px-12
---

<!-- talk: Extensibility summarised。 -->

## Extensibility = Claude Code

- MCP で権限と接続先を宣言管理
- Slash commands で会話をマクロ化
- Plugin bundles で再現性と共有を担保

---
layout: default
class: px-12
---

<!-- talk: 未来像。 -->

## これからの未来像

- Terminal 実験 → Claude SDK → 社会デプロイ
- ccusage は Telemetry レイヤーとして継続
- エンジニア主導で LLM をエンパワーする

```
CLI → usage insight → plugin化 → SDK
```

---
layout: center
class: text-center px-12
---

<!-- talk: クロージング。 -->

# Happy Vibe Coding!

