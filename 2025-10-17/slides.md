---
title: 'claude codeの進化とccusage、そしてこれから'
subtitle: 'Terminal-firstエージェント運用で見えたもの'
transition: view-transition
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
layout: cover
glowSeed: 18
---

# claude codeの進化とccusage、そしてこれから {.tracking-tight font-700}
## Terminal-firstエージェント運用で見えたもの {.opacity-80}

@ryoppippi

<div abs-br mx-10 mb-10 flex="~ col gap-2 items-end" text-right>
  <div text-base font-bold>Claude Code Meetup Tokyo</div>
  <div text-sm opacity-75>2025-10-17 @ Mercari Roppongi</div>
  <div text-xs opacity-60>aiau.connpass.com/event/369265</div>
</div>

---
layout: center
class: text-3xl leading-tight
---

<div class="flex flex-col gap-6 items-start max-w-3xl">
  <span class="uppercase tracking-[0.35em] text-xs opacity-60">Context</span>
  <span class="font-semibold">Neovimmerが語るClaude Code CLIの現在地</span>
  <p class="text-base opacity-75">
    VSCode拡張の話はしません。5月末からターミナルで触り倒した90日間で何が起き、
    ccusageがどんなマインドチェンジをもたらしたかを共有します。
  </p>
</div>

---
src: '../reuse/personal-stackone.md'
---

---
layout: center
class: px-16
---

<div class="grid gap-8 md:grid-cols-[1fr,1.2fr] items-center">
  <div class="text-left">
    <h2 class="text-3xl font-700 mb-4">今日のフォーカス</h2>
    <ul class="space-y-3 text-base opacity-80">
      <li><strong>May 2025</strong> から今までの Claude Code CLI の進化を月ごとに追う</li>
      <li><strong>ccusage</strong> が /context /usage 不在時代をどう補完したか</li>
      <li><strong>Terminal-first</strong> な運用がもたらしたマインドシフト</li>
      <li><strong>Plugin / MCP / SDK</strong> に向けてエンジニアが備えるべきこと</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
    <h3 class="text-sm uppercase tracking-[0.3em] opacity-60 mb-4">このセッションで扱わないもの</h3>
    <ul class="space-y-2 text-sm opacity-70">
      <li>VSCode拡張のUIやショートカット</li>
      <li>ホワイトボード的なAI “デモ芸”</li>
      <li>Q&Aコーナー</li>
    </ul>
    <p class="text-xs opacity-50 mt-6">→ すべてターミナルとNeovim目線で話します。</p>
  </div>
</div>

---
layout: section
---

# 2025 Timeline
## CLIで感じた進化を月ごとに分解する

---
layout: center
class: px-12
---

<div class="grid gap-6 md:grid-cols-3 text-left text-sm leading-relaxed">
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-05</p>
      <h3 class="text-lg font-semibold mt-2">公開初期と手探り</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>Claude Code GA & Max向けに解禁</li>
        <li>Terminal/Git連携はあるが /context /usage なし</li>
        <li>ログ漁り + shell script で usage を拾う日々</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">5月29日、可視化用に ccusage v0.1 をpush。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-06</p>
      <h3 class="text-lg font-semibold mt-2">CLI文化が芽生える</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>Slash command β（/command, /search）が公開</li>
        <li>MCPサーバーをターミナルで差し替え</li>
        <li>ccusageに Daily / Session / Blocks レポートを実装</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">”使い放題”の裏で、みんなログとにらめっこ。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-07</p>
      <h3 class="text-lg font-semibold mt-2">制限と需要の爆発</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>Maxプランの利用上限がひっそり変更</li>
        <li>Raycast拡張版 ccusage / Live monitor をリリース</li>
        <li>コミュニティが usage を共有 → GitHub Star が跳ねる</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">「Unlimited」は幻 → Context管理こそ武器だと再確認。</p>
  </div>
</div>

---
layout: center
class: px-12
---

<div class="grid gap-6 md:grid-cols-3 text-left text-sm leading-relaxed">
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-08</p>
      <h3 class="text-lg font-semibold mt-2">Slash & Sub-agent 拡張</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>Remote MCPでSaaS連携が現実的に</li>
        <li>/context コマンドが公式入り</li>
        <li>ccusageはRaycast + CLIの二刀流へ</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">CLI勢も「公式の見える化」と二重運用で安心。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-09</p>
      <h3 class="text-lg font-semibold mt-2">Autonomyアップデート</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>チェックポイントとマルチステップ実行</li>
        <li>/usage コマンドがついに公式に</li>
        <li>ccusageはWeb UI + MCPサーバーを提供開始</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">「可視化ツール」が「運用ダッシュボード」へ進化。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-xl p-5 h-full flex flex-col justify-between">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] opacity-60">2025-10</p>
      <h3 class="text-lg font-semibold mt-2">Plugin System 時代へ</h3>
      <ul class="mt-3 space-y-2 opacity-80">
        <li>Plugin bundle: Slash + Sub-agent + MCP + Hooks</li>
        <li>Hookでターミナルコマンドを安全に共有</li>
        <li>Maxでも週次利用上限が明文化</li>
      </ul>
    </div>
    <p class="text-xs opacity-50 mt-4">閉じたエコシステムだけど、CLI勢にはむしろ相性◎。</p>
  </div>
</div>

---
layout: image-right
image: /ccusage-star-history.svg
class: items-center
---

## Usage Visibility = Community Momentum

- 7月の制限変更をきっかけに ccusage のインストールが急増  
  （Weekly npm downloads ≒ 3万 / GitHub ★8.5k）
- 「Unlimited」トレンドから「リソース配分を理解する」ムーブメントへ
- グラフは単なる vanity ではなく、コミュニティ同士で usage ノウハウを共有した記録

<p class="text-xs opacity-50 mt-6">
Star History: api.star-history.com / npm trends: npmjs.com/package/ccusage
</p>

---
layout: center
class: px-14
---

<div class="grid md:grid-cols-[1.1fr,1fr] gap-10 items-center">
  <div class="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">ccusage とは？</h2>
    <p class="opacity-80 leading-relaxed">
      Claude Code の <span class="font-semibold">context / usage / billing blocks</span> を CLI と Web UI で可視化する OSS。
      /usage が公式に来る前から、Maxユーザーの “体感” を数値に変換してきました。
    </p>
    <ul class="mt-6 space-y-3 text-sm opacity-80">
      <li>🖥️ CLI: `ccusage daily|session|blocks` で即時レポート</li>
      <li>🌐 Web: Next.js ダッシュボード + Raycast 拡張</li>
      <li>🧩 MCP: Claudeから直接 ccusage API を叩けるように</li>
      <li>🪄 Toolchain: Hooks経由で Plugin bundle に差し込める</li>
    </ul>
  </div>
  <div class="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
    <img src="/ccusage-dashboard.png" alt="ccusage dashboard screenshot" />
  </div>
</div>

---
layout: center
class: px-12
---

<div class="grid gap-8 md:grid-cols-[1fr,1.1fr] items-center">
  <div class="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
    <img src="/ccusage-live.png" alt="ccusage live monitoring terminal capture" />
  </div>
  <div class="text-left">
    <h2 class="text-2xl font-semibold mb-4">Live Monitor で得た気付き</h2>
    <ul class="space-y-3 text-base opacity-80 leading-relaxed">
      <li>ブロック更新タイミング = チームの作業リズムが見える</li>
      <li>プロンプト / MCP 呼び出しの “重い瞬間” が浮き彫りになる</li>
      <li>CLI上で完結するので Neovim → すぐ usage チェックが可能</li>
      <li>/usage 公式化後も、ccusage は “深掘りアナリティクス” 役に移行</li>
    </ul>
  </div>
</div>

---
layout: section
---

# Claude Code Platform
## Slash, MCP, Pluginが織りなす拡張性

---
layout: center
class: px-16
---

<div class="grid md:grid-cols-3 gap-6 text-left">
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
    <h3 class="text-lg font-semibold">Slash Commands</h3>
    <p class="text-sm opacity-75">
      /command, /search, /context, /usage …  
      CLIから即呼び出せる “会話のマクロ”。
    </p>
    <p class="text-xs opacity-50 mt-auto">ccusageは `mcp://` 経由で結果を即 Slack へ。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
    <h3 class="text-lg font-semibold">MCP & Sub-agents</h3>
    <p class="text-sm opacity-75">
      Remote MCPでSaaSの権限管理を分離。  
      CLI-orientedな人ほど YAML + JSON schema に抵抗がなく、
      “prompts as infra” 文化が加速。
    </p>
    <p class="text-xs opacity-50 mt-auto">ccusageも MCP server を公開し計測を標準化。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
    <h3 class="text-lg font-semibold">Plugin System (Oct 2025-)</h3>
    <p class="text-sm opacity-75">
      Hooks + MCP + Slash をひとまとめに配布。  
      クローズドソースでも CLI勢は `.claude/plugins` をgit管理し、
      チームで再現性を保てる。
    </p>
    <p class="text-xs opacity-50 mt-auto">制限はあるが “Terminal-first” にはむしろ親和性高。</p>
  </div>
</div>

---
layout: center
class: px-14
---

<div class="grid md:grid-cols-[1fr,0.9fr] gap-10 items-center">
  <div>
    <h2 class="text-2xl font-semibold mb-4">他エージェントへの波及</h2>
    <ul class="space-y-3 text-base opacity-80">
      <li>OpenAI Codex CLI も 9月に token event を出力開始</li>
      <li>Cursor / Windsurf などが usage ビューを急ぎで実装</li>
      <li>MCP準拠ツールが “Claude専用” から “エージェント共通” へ</li>
      <li>ccusage のブロック計算ロジックが他ツールの参考実装に</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-dashed border-white/20 p-6 text-sm opacity-70 leading-relaxed">
    <p class="font-semibold text-base mb-3">Minimalだけど効いたポイント</p>
    <p>「Claudeだけ」の課題を CLIであぶり出した結果、他のcoding agentも
      usage可視化を「標準機能」にせざるを得なくなった。</p>
    <p class="mt-4">→ Claude Code Meetup だけど、この波及効果は覚えておきたい。</p>
  </div>
</div>

---
layout: section
---

# Mindset Shift
## “ただの使い放題” じゃなかった

---
layout: center
class: px-16
---

<div class="grid md:grid-cols-2 gap-10 items-start text-left">
  <div class="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
    <h3 class="text-xl font-semibold mb-4">得られた習慣</h3>
    <ul class="space-y-3 text-base opacity-80 leading-relaxed">
      <li>Context管理を Jenkins や Grafana と同列に扱う</li>
      <li>プロンプトを “設定ファイル” としてバージョン管理</li>
      <li>MCP / Tool の権限境界をチームでレビューする</li>
      <li>CLIでの試行錯誤をそのまま Plugin Hook に落とし込む</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-xl">
    <h3 class="text-xl font-semibold mb-4">制限がもたらした学び</h3>
    <ul class="space-y-3 text-base opacity-80 leading-relaxed">
      <li>“Unlimited” が消えた瞬間、Usage設計 = プロダクト設計になった</li>
      <li>Prompt単体ではなく <strong>Context Window × Toolchain</strong> で最適化</li>
      <li>ccusageのような OSS が組織のAIポリシー策定を後押し</li>
    </ul>
    <p class="text-sm opacity-60 mt-6">→ CLIで培った知見は、この先 Claude SDK や他社エージェントにも直接効いてくる。</p>
  </div>
</div>

---
layout: center
class: px-12
---

<div class="rounded-3xl border border-white/10 bg-white/5 p-12 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] text-left">
  <h2 class="text-3xl font-semibold mb-6">これから描いている未来</h2>
  <p class="text-lg opacity-85 leading-relaxed">
    僕たちが今 CLI で積み上げているのは “コーディング補助” だけじゃありません。<br />
    Claude Code の context window 実験や Tool / MCP の試行錯誤が、
    Claude SDK や他社エージェントを通じて <strong>プロダクトとしてデプロイ</strong> されていく未来を想像しています。
  </p>
  <p class="text-lg opacity-85 leading-relaxed mt-4">
    ccusage がその一翼を担えたことを誇りに思うし、これからもターミナルの現場から
    LLM を社会にエンパワーしていきたい。
  </p>
</div>

---
layout: center
class: text-center px-12
---

<div class="flex flex-col gap-6 items-center">
  <div class="text-4xl font-semibold">ありがとうございました。</div>
  <p class="text-base opacity-70">Slides: ryoppippi/talks · Tooling: claude code + ccusage</p>
  <p class="text-sm opacity-50">このあともTerminalで語りましょう。Q&AはSlackで。</p>
</div>
