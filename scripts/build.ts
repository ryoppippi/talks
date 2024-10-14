#!/usr/bin/env bun

import p from 'node:path';
import { $ } from 'bun';
import matter from 'gray-matter';
import { glob } from 'tinyglobby';
import * as ufo from 'ufo';
import * as v from 'valibot';

const ROOT_URL = 'https://talks.ryoppippi.com/';

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

/* generate json */
{
	const projectMDs = await glob('*/README.md', {
		onlyFiles: true,
		absolute: true,
	});

	const urlSchema = v.pipe(v.string(), v.url());
	const schema = v.object({
		title: v.string(),
		date: v.date(),
		event: v.string(),
		eventLink: v.optional(urlSchema),
		videoLink: v.optional(urlSchema),
		link: v.optional(v.array(urlSchema)),
		content: v.string(),
		urls: v.array(urlSchema),
	});

	const results = [];
	for (const projectMD of projectMDs) {
		const md = await $`cat ${projectMD}`.text();
		const { data, content } = matter(md);

		const projectDirName = p.relative(root, p.dirname(projectMD));
		const distPath = p.join(rootDist, projectDirName);

		const urls: string[] = [];

		/* find url */
		if (await Bun.file(p.join(distPath, 'index.html')).exists()) {
			console.log('exists', distPath);
			const url = ufo.joinURL(ROOT_URL, p.relative(rootDist, distPath));
			urls.push(url);
		}

		/* find pdf */
		const pdfPath = await glob(p.join(distPath, '*.pdf'), { onlyFiles: true });
		if (pdfPath.length > 0) {
			console.log('exists', pdfPath[0]);
			const pdf = ufo.joinURL(ROOT_URL, p.relative(rootDist, pdfPath[0]));
			urls.push(pdf);
		}

		const result = v.safeParse(schema, {
			...data,
			content,
			urls,
		});
		if (!result.success) {
			console.error({
				issues: result.issues,
				path: p.dirname(projectMD),
				data,
			});
			continue;
		}

		results.push(result.output);
	}

	await Bun.write(p.join(rootDist, 'talks.json'), JSON.stringify(results, null, 2));
}
