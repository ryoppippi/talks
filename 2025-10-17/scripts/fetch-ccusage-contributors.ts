#!/usr/bin/env bun

const owner = "ryoppippi";
const repo = "ccusage";
const perPage = 100;

const headers: Record<string, string> = {
	"user-agent": "bun",
	accept: "application/vnd.github+json",
};

const token = process.env.GITHUB_TOKEN;
if (token) {
	headers.authorization = `Bearer ${token}`;
}

const usernames = new Set<string>();

const botMatchers = [
	(login: string) => login.toLowerCase().endsWith("[bot]"),
	(login: string) => login.toLowerCase().endsWith("-bot"),
	(login: string) => login.toLowerCase().startsWith("dependabot"),
];

const blockedLogins = new Set([
	"copilot",
	"github-copilot",
	"claudecode",
	"claude-code",
]);

function isBot(login: string) {
	const normalized = login.toLowerCase();
	if (blockedLogins.has(normalized)) return true;
	return botMatchers.some((matcher) => matcher(normalized));
}

for (let page = 1; ; page++) {
	const url = `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=${perPage}&page=${page}`;
	const response = await fetch(url, { headers });

	if (!response.ok) {
		throw new Error(`GitHub API error ${response.status}: ${await response.text()}`);
	}

	const contributors = (await response.json()) as Array<{ login?: string }>;
	if (!Array.isArray(contributors) || contributors.length === 0) {
		break;
	}

	for (const contributor of contributors) {
		if (contributor?.login) {
			const login = contributor.login;
			if (!isBot(login)) {
				usernames.add(login);
			}
		}
	}

	if (contributors.length < perPage) {
		break;
	}
}

const outputPath = new URL("../contributors.json", import.meta.url);
await Bun.write(outputPath, JSON.stringify(Array.from(usernames).sort(), null, 2) + "\n");

console.log(`Saved ${usernames.size} contributors to ${outputPath.pathname}`);
