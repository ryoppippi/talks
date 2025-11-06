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

<!--
talk: 初めまして、ryoppippi です。ccusage を作りました。
talk: Claude Code Meetup Tokyo に合わせて 2025-10-16 に UK から到着したばかりです。
talk: まずはターミナル視点で Claude Code の話をさせてください。
-->

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

https://zenn.dev/ryoppippi/articles/6c9a8fe6629cd6

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
talk: GitHub Star は 8,500 を超えています。
-->

---
layout: image
image: /npm.jpeg
backgroundSize: contain
---

<!--
talk: npm ダウンロード数は累計 50 万を突破しました。
talk: リリースから 5 か月も経たずにここまで来られたのはコミュニティのおかげです。
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
layout: image
title: またしても何も知らない
image: https://blogimg.goo.ne.jp/user_image/4e/33/f26648a242349393ccc3c06f49df0bbb.jpg
backgroundSize: contain
---

<!--
これが大事になるとは思っても見なかった
-->

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
layout: image
image: /this-is-how-i-was-born.png
backgroundSize: contain
---

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

# ccusageがもたらしたもの

---
layout: default
---

# ccusageがもたらしたもの

<v-clicks>

- Claude Code 利用者の増加
- Claude Code のDXの向上
- 周辺ツールの充実
  - `cc`なんとか系ツール群の登場
- mcp/subagentなどの概念の普及
- ユーザーのToken/Context Windowへの解像度向上

</v-clicks>

---
layout: default
---

# 例: <span v-click> serena </span>

<div flex='~ justify-center'>
    <SlidevVideo v-click autoplay controls w-200>
        <source src="https://private-user-images.githubusercontent.com/35432522/475806037-ab78ebe0-f77d-43cc-879a-cc399efefd87.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA2NzYyOTYsIm5iZiI6MTc2MDY3NTk5NiwicGF0aCI6Ii8zNTQzMjUyMi80NzU4MDYwMzctYWI3OGViZTAtZjc3ZC00M2NjLTg3OWEtY2MzOTllZmVmZDg3Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDE3VDA0Mzk1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU3MWM4NDg1MjdjNTZjNzMwOTU0M2Y3YTM1OWFiZjllZWM1ODY2ODIzMDE2ZDlkYzUxMDNiNGE2MDBiMTM1NDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.a2PhThWWDhkKWrEkOQMuFs9t9AABi05R7e9Kw4Ii1Yg" type="video/mp4" />
    </SlidevVideo>
</div>

---
layout: section
---

# 君たちはどう生きるか

---
layout: default
---

# Agentの社会実装を担う我々

<v-clicks>

- Claude Codeと戯れることでLLMの理解を深めた
  - Tool Usage
  - MCP
  - Subagents
  - Context Window Management
- 知見をCoding Agent以外の領域で応用してほしい
  - [ Claude Agent SDK ](https://docs.claude.com/en/api/agent-sdk/overview)
  - [AI SDK](https://ai-sdk.dev/docs/introduction)
  - [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)

</v-clicks>

---
layout: center
---

```ts
import { query } from '@anthropic-ai/claude-agent-sdk';

for await (const message of query({
	prompt: 'implement a cli to echo string using gunshi',
	options: {
		mcpServers: {
			gunshi: {
				command: 'bunx',
				args: ['sitemcp', 'https://gunshi.dev'],
			}
		},
		allowedTools: ['mcp__gunshi__indexOfGunshi', 'mcp__gunshi__getDocumentOfGunshi']
	}
})) {
	if (message.type === 'result' && message.subtype === 'success') {
		console.log(message.result);
	}
}
```

---
layout: center
---

# Agentを社会実装していこう

---
class: text-center
transition: view-transition
---

<h1 font-serif text-4xl mt-20 important-mb-16>Thanks to</h1>

<div flex="~ gap-18 items-center justify-center" >
  <div flex="~ col items-center" v-click>
    <img src="https://github.com/nyatinte.png" rounded-full w-30 mb4 view-transition-contributor-nyatinte duration-1000 />
    <div>NakamuraTakumi</div>
    <div font-mono text-sm op50>@nyatinte</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="https://github.com/a-c-m.png" rounded-full w-30 mb4 view-transition-contributor-a-c-m duration-1000 />
    <div>Alex McFadyen</div>
    <div font-mono text-sm op50>@a-c-m</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="https://github.com/ben-vargas.png" rounded-full w-30 mb4 view-transition-contributor-ben-vargas duration-1000 />
    <div>Ben Vargas</div>
    <div font-mono text-sm op50>@ben-vargas</div>
  </div>
</div>

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
