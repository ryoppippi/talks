import MarkdownItMagicLink from 'markdown-it-magic-link';
import { defineConfig } from 'vite';
import '@slidev/cli';

export default defineConfig({
	slidev: {
		markdown: {
			markdownItSetup(md) {
				md.use(MarkdownItMagicLink, {
					linksMap: {
						'vim-jp': { link: 'https://vim-jp.org/', imageUrl: 'https://vim-jp.org/assets/images/vim2-128.png' },
						'Svelte Japan': { link: 'https://svelte.jp', imageUrl: 'https://cdn.jsdelivr.net/gh/sveltejs/branding/svelte-logo-square.png' },
					},
				});
			},
		},
	},
});
