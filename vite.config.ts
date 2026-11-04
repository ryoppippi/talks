// @ts-expect-error no types
import Figures from 'markdown-it-image-figures';
import MarkdownItMagicLink from 'markdown-it-magic-link';

import { defineConfig } from 'vite-plus';
import '@slidev/cli';

const ignorePatterns = ['.direnv/**', 'dist/**', 'node_modules/**', '**/public/**'];

export default defineConfig({
	slidev: {
		markdown: {
			markdownItSetup(md) {
				md.use(Figures, {
					figcaption: true,
					lazy: true,
					async: true,
				});
				md.use(MarkdownItMagicLink, {
					linksMap: {
						'vim-jp': {
							link: 'https://vim-jp.org/',
							imageUrl: 'https://vim-jp.org/assets/images/vim2-128.png',
						},
						'Svelte Japan': {
							link: 'https://svelte.jp',
							imageUrl: 'https://cdn.jsdelivr.net/gh/sveltejs/branding/svelte-logo-square.png',
						},
						'ryoppippi.com': {
							link: 'https://ryoppippi.com',
							imageUrl: 'https://ryoppippi.com/ryoppippi.jpg',
						},
						ccusage: { link: 'https://ccusage.com', imageUrl: 'https://ccusage.com/logo.svg' },
						stackone: {
							link: 'https://www.stackone.com/',
							imageUrl: 'https://stackone-logos.com/api/stackone/icon/svg',
						},
					},
				});
			},
		},
	},
	fmt: {
		// oxfmt has no Slidev support and breaks slide separators and component indentation
		ignorePatterns: [...ignorePatterns, '**/*.md'],
		singleQuote: true,
		sortPackageJson: true,
		useTabs: true,
	},
	lint: {
		ignorePatterns,
	},
	staged: {
		'*.{ts,js,vue,json,yaml,yml}': 'vp check --fix',
		'*.nix': 'nix fmt --',
		'{.agents,.claude}/skills/**': () => 'node scripts/sync-skills.ts --check',
	},
});
