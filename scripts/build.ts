#!/usr/bin/env bun

import p from 'node:path';
import { $ } from 'bun';
import { glob } from 'tinyglobby';

const root = p.join(__dirname, '..');
const rootDist = p.join(root, 'dist');
$.cwd(root);

await $`rm -rf dist`;

/* build and copy dist to parent dist */
{
/* build */
	await $`bun run --filter '*' build`;

	const packageFiles = (await glob('*/src/package.json', {
		onlyFiles: true,
	})).sort();

	/* copy dist to parent dist recursively */
	for (const packageFile of packageFiles) {
		const srcDir = p.dirname(packageFile);
		const projectDist = p.join(srcDir, 'dist');
		const projectDirName = p.dirname(srcDir);
		await $`mkdir -p ${p.join(rootDist, projectDirName)}`;
		await $`cp -r ${projectDist}/* ${p.join(rootDist, projectDirName)}/`;
	}
}

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
