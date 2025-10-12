---
title: 'claude codeの進化とccusage、そしてこれから'
theme: default
transition: fade-out
mdc: true
highlighter: shiki
css: unocss
colorSchema: dark
---

---
layout: cover
class: items-center justify-center text-center
background: https://anthropic.com/images/claude-terminal.png
backgroundOpacity: 0.18
---

# claude codeの進化とccusage、そしてこれから

### Terminalから始まるLLM革命

@ryoppippi ・ GitHub: ryoppippi/ccusage

<div class="flex flex-col items-center gap-2 mt-6 text-sm opacity-70">
  <span>Claude Code Meetup Tokyo ─ 2025-10-17</span>
</div>

---
layout: center
class: grid gap-10 md:grid-cols-[1fr,1.4fr] items-center px-16
---

<img src="https://pbs.twimg.com/profile_images/1345183412617789441/lDzpVPwZ.jpg" class="rounded-full w-44 h-44 object-cover shadow-xl border border-white/20" alt="ryoppippi avatar" />

<div class="text-left space-y-3">
  <h2 class="text-3xl font-semibold">自己紹介</h2>
  <ul class="text-lg opacity-85 leading-relaxed">
    <li>ryoppippi / StackOne の AI エンジニア & Neovimmer</li>
    <li>ccusage 開発者 ─ Claude Code CLI usage 可視化ツール <small>(Zenn: 2025-05-30 公開)</small></li>
    <li>2025-05 から Terminal 中心で Claude Code を運用</li>
    <li>LLM を CLI から社会にエンパワーする未来を描いています</li>
  </ul>
  <p class="text-sm opacity-60">X: 3,719 followers / Verified</p>
</div>

---
src: '../reuse/personal-stackone.md'
---

---
layout: center
class: px-16
---

## 今日のアジェンダ

1. ccusage の始まりと初期ミッション  
2. コミュニティでの拡散とダウンロードの波  
3. Claude Code の進化タイムライン  
4. 新しい制限と運用インパクト  
5. Coding Agent への波及  
6. 拡張性 ─ MCP / slash / plugin system  
7. 「使い放題」が変えたマインドセット  
8. これからの未来像と自分たちの役割

<p class="text-sm opacity-60 mt-6 italic">すべて Terminal / CLI 視点で深掘りします。</p>

---
layout: section
---

# ccusageはこうして生まれた

---
layout: two-cols
class: items-center gap-12
---

::left::
### 2025-05-30
- Zenn 記事で ccusage v0.1 公開  
- Claude Code の JSONL ログを DuckDB で解析  
- /context /usage が無かったため自作で可視化

::right::
| 日付 | 出来事 |
|------|--------|
| 2025-05-29 | CLI で usage を読み解く必要性に気付く |
| 2025-05-30 | 初リリース & 記事公開 |
| 2025-06-02 | 日次 / 月次レポートを追加 |

<p class="text-xs opacity-60 mt-4">Serena README で紹介された「公式機能の穴」を埋めたのが出発点。</p>

---
layout: center
class: px-16
---

## 名前の由来

- コミュニティで「Claude Code = cc」と呼ばれ始めた流れに乗っただけ  
- usage を一目でわかる CLI にしたい → `ccusage`  
- Terminal で打ちやすく、ネームスペースもシンプル

<pre class="mt-6"><code>ccusage daily --file ~/Library/Application\ Support/Claude/logs.jsonl</code></pre>

---
layout: image-right
image: https://raw.githubusercontent.com/ryoppippi/ccusage/main/docs/public/screenshot.png
class: items-center
---

## v0.3 までに入れたこと

- 日次 / 月次 / セッション / Blocks レポート  
- CLI だけで結果を完結させるための ANSI テーブル  
- 解析の 97% を Claude Code と会話して開発

<p class="text-xs opacity-60 mt-8">「Terminal で完結できる」ことが adoption を後押し。</p>

---
layout: section
---

# コミュニティに広がった理由

---
layout: image
image: https://api.star-history.com/svg?repos=ryoppippi/ccusage&type=Date&theme=dark
class: items-end justify-end
backgroundSize: contain
backgroundPosition: center
---

<div class="bg-black/70 backdrop-blur rounded-2xl p-6 max-w-lg ml-auto mr-10 mb-10">
  <h2 class="text-xl font-semibold">GitHub Star の急伸</h2>
  <ul class="text-sm leading-relaxed opacity-85">
    <li>7月の利用制限ニュースで一気に注目</li>
    <li>海外 Reddit / X でバズ → 「Maxユーザー必須ツール」に</li>
    <li>Raycast 拡張や Homebrew tap など派生が登場</li>
  </ul>
</div>

---
layout: center
class: px-16
---

## npm ダウンロードの波

| 指標 | 2025-10-11 時点 |
|------|----------------|
| 累計ダウンロード | 516,967 |
| 直近 7 日平均 | 約 30k / day |
| 最新バージョン | 16.2.0 (2025-10) |
| 主要派生 | Raycast, Homebrew, MCP サーバー |

<p class="text-sm opacity-70 mt-4">Reddit r/ClaudeAI と海外ブログが「Claude 使うなら ccusage」を合言葉に。</p>

---
layout: image-right
image: /ccusage-live.png
class: items-center
---

## Live monitor の気付き

- ブロック更新タイミングでチームのリズムが丸見え  
- Prompt / MCP 呼び出しの重さがリアルタイムでわかる  
- /usage 公式導入後も「深掘りダッシュボード」として継続利用

<p class="text-xs opacity-60 mt-8">Terminal から即開けるので Neovim ↔ usage が数秒。</p>

---
layout: section
---

# スポンサーとサポーター達

---
layout: center
class: px-16
---

## Greg からのバックアップ

- Claude Code 初期から大量のログ提供と検証支援  
- Max プランの境界ケースを一緒に洗い出し  
- ccusage の英語 README も Greg のレビューで International 化

<p class="text-sm opacity-60 mt-4">コミュニティのスポンサーが OSS を押し上げてくれました。</p>

---
layout: image
image: /toyokumo.png
class: items-center justify-center
---

## Thanks OSS Award (Toyokumo)

- 近日発表予定の受賞スライドを先取り  
- ccusage が「AI coding ツールの利用状況を計算するツール」として選出  
- サポート金額は 2025 年後半の開発にフル投入予定

<p class="text-xs opacity-60 mt-6">公式発表前なのでここだけの話としてお楽しみください。</p>

---
layout: section
---

# Claude Code の進化を追う

---
layout: two-cols
class: gap-12 items-start
---

::left::
### 2025-05 → 06
- Terminal での agentic coding が GA  
- Slash commands `/command` `/search` が実装  
- Remote MCP による SaaS 連携が解禁

::right::
### 2025-07 → 08
- 利用制限のサイレント導入で usage 監視が必須に  
- `/context` が公式搭載  
- ccusage は Raycast + CLI の二刀流で応戦

---
layout: two-cols
class: gap-12 items-start
---

::left::
### 2025-09
- Autonomy update: チェックポイント & マルチステップ  
- `/usage` コマンドがようやく公式入り  
- Workspace Graph でエージェント視点が強化

::right::
### 2025-10
- Plugin system 公開（Slash + MCP + Hooks を束ねる）  
- Terminal から plugin bundle を管理可能  
- 閉じた仕様でも CLI 勢には再現性が高い

---
layout: center
class: px-14
---

## 制限導入で何が変わったか

| プラン | 旧 | 新 (2025-07〜) |
|--------|----|----------------|
| Pro | 実質無制限 | 週 40〜80 時間目安 |
| Max | 「Higher limit」表記のみ | 5 時間単位 + 週上限が明文化 |

<ul class="mt-6 space-y-2 text-base opacity-80">
  <li>Abuse 対策として公式が告知 ─ 実際は 5% 程度に影響</li>
  <li>Terminal 勢は usage 設計を「プロダクト設計」として扱い始めた</li>
  <li>ccusage Live monitor が「計画的な LLM 利用」の基盤に</li>
</ul>

---
layout: section
---

# Coding Agent への波及

---
layout: two-cols
class: gap-10 items-center
---

::left::
### Claude Code を中心に
- CLI でマルチタスク → 「vibe coding」が一般化  
- Neovim からそのまま呼べる体験がカルチャーに  
- MCP server をチームで共有する動きが加速

::right::
### 他エージェントへの影響
| Agent | 反応 |
|-------|------|
| OpenAI Codex CLI | 2025-09 token events 出力を開始 |
| Cursor / Windsurf | Usage ビュー & plugin 構想を急ピッチで導入 |
| Serena, Serena CLI | MCP 対応が ccusage との統合前提に |

---
layout: section
---

# 拡張性が未来を作る

---
layout: center
class: px-16
---

## MCP / Slash / Plugin の三本柱

<div class="grid md:grid-cols-3 gap-6 text-left">
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
    <h3 class="text-lg font-semibold">MCP</h3>
    <p class="text-sm opacity-80">Model Context Protocol で権限と接続先を明示管理。CLI 勢は YAML / JSON schema に馴染みあり。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
    <h3 class="text-lg font-semibold">Slash Commands</h3>
    <p class="text-sm opacity-80">`/context` `/usage` `/command` など、Terminal からの対話をマクロ化。Sub-agent 起動もワンライナー。</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
    <h3 class="text-lg font-semibold">Plugin System</h3>
    <p class="text-sm opacity-80">Hooks + MCP + Slash を zip で共有。クローズドでも `.claude/plugins` を git 管理すれば再現性◎。</p>
  </div>
</div>

<pre class="mt-8"><code>claude /plugin add ccusage-hooks</code></pre>

---
layout: section
---

# Mindset Shift

---
layout: two-cols
class: gap-12 items-start
---

::left::
### 制限前後で変わったこと
- 「Unlimited vibe coding」から「Context 管理が資産」へ  
- Prompt だけでなく Tool / MCP を設計する思考に転換  
- Usage ログを Grafana のように見るのが日常化

::right::
### 学んだ習慣
- Prompt を設定ファイルとしてバージョン管理  
- MCP の権限境界をチームレビュー  
- Terminal の試行錯誤を Plugin Hook に落とし込む

<p class="text-xs opacity-60 mt-6">Expensive AI tools are worth every penny ─ 利用設計が価値になる。</p>

---
layout: section
---

# これからの未来

---
layout: center
class: px-16
---

## Coding を越えて社会へ

<div class="grid gap-8 md:grid-cols-[1.2fr,1fr] items-center">
  <ul class="space-y-3 text-lg opacity-85 leading-relaxed">
    <li>Claude SDK が示す「デプロイされるエージェント」時代の入口</li>
    <li>CLI で培った context window / MCP 設計力はそのままプロダクトに転用可能</li>
    <li>ccusage はその片鱗を支える Telemetry レイヤーとして進化を続ける</li>
    <li>エンジニアが LLM を社会へエンパワーする ─ そのための体験を共有したい</li>
  </ul>
  <div class="rounded-2xl border border-white/10 p-6 text-sm opacity-70 leading-relaxed">
    <p class="font-semibold text-base mb-2">Vision Flow</p>
    <p>Terminal 実験 → Usage 可視化 → Plugin 化 → Claude SDK → 社会デプロイ</p>
  </div>
</div>

---
layout: center
class: text-center px-12
---

## Thank you!

Claude Code + ccusage で作る未来を、一緒に育てましょう。  

GitHub: ryoppippi/ccusage ・ X: @ryoppippi  
Zenn: ryoppippi.com にも記事あります。

<p class="text-sm opacity-60 mt-4">Terminal で語りたい人はぜひ声かけてください。</p>
