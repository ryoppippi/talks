# Research Notes – AIAU Claude Code Meetup (2025-10-17)

## Event

- **Claude Code Meetup Tokyo** runs on 17 Oct 2025 at Mercari HQ in Roppongi, with ryoppippi presenting “claude codeの進化とccusage、そしてこれから.” citeturn2view0

## Claude Code Timeline (2025 Highlights)

- **Feb 24** – Anthropic unveils Claude Code alongside the Claude 3.7 Sonnet model as an “agentic” coding companion, pushing beyond IDE plugins into terminal-first workflows. citeturn5news23
- **May 22** – Claude 4 Opus launch emphasises multi-hour autonomous coding sessions and positions Claude Code as production-ready rather than a preview experiment. citeturn10news19
- **Jun 18** – Remote MCP servers let engineers connect services such as Sentry and Linear without local daemons, deepening Claude Code’s tooling orchestration. citeturn10search0
- **Jul 17** – Quiet reductions to Claude usage ceilings frustrate Max subscribers, proving why third-party monitors like ccusage matter even for “unlimited” plans. citeturn4search1
- **Jul 28** – Anthropic formalises new weekly usage limits (overall plus Opus-specific), reframing Claude Code as a managed resource instead of a bottomless agent. citeturn4search2
- **Aug 21** – Release v1.0.86 introduces `/context`, giving native diagnostics on active buffers while still lacking plan-level analytics. citeturn5search1
- **Sep 29** – v2.0.0 ships checkpoints, hooks, a VS Code beta, and finally `/usage`, signalling a shift toward workflow automation baked into Claude Code. citeturn0search0turn5search1
- **Oct 9** – Plugin system debuts, bundling slash commands, sub-agents, MCP servers, and hooks into shareable packages to extend Claude Code without exposing the core. citeturn0search1

## ccusage Milestones

- **Community traction** – The GitHub project sits around 8.5k stars and 258 forks, reflecting demand for transparent Claude Code telemetry. citeturn8view0
- **Adoption signal** – Weekly npm downloads hover near 30k, showing continued installs even after Claude shipped `/usage`. citeturn12search0
- **Feature positioning** – ccusage remains the go-to for detailed session, block, and live monitoring dashboards that complement (rather than duplicate) Claude’s built-in `/usage`. citeturn7search0

## Themes to Emphasise in Slides

- **Terminal-native culture** – Centre Neovim + CLI workflows to align with meetup expectations and differentiate from Anthropic’s VS Code messaging. (Derived from talk brief.)
- **Mindset shift from “free” to “aware”** – Show how “unlimited” access nudged engineers into context engineering, prompt craft, MCP orchestration, and policy literacy—skills needed for deploying Claude SDK agents responsibly. citeturn10search0turn4search2turn0search0
- **Ecosystem arc** – Trace how community tools (ccusage, remote MCP servers, plugin marketplaces) and Anthropic releases have iterated together, highlighting collaborative evolution over replacement. citeturn10search0turn0search1turn7search0
