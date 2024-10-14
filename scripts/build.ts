#!/usr/bin/env bun

import p from 'node:path';
import { $ } from 'bun';
import { glob } from 'tinyglobby';

const root = p.join(__dirname, '..');
const rootDist = p.join(root, 'dist');
$.cwd(root);

await $`rm -rf dist`;

await $`bun run --filter '*' build`;

/* copy pdfs */
{
	const pdfs = await glob('*/*.pdf', {
		onlyFiles: true,
	});
	for (const pdf of pdfs) {
		const projectDirName = p.dirname(pdf);
		await $`mkdir -p ${p.join(rootDist, projectDirName)}`;
		await $`cp ${pdf} ${p.join(rootDist, projectDirName)}/`;
	}
}

/* copy redirects */
await $`cp -r _redirects ${rootDist}/`;
