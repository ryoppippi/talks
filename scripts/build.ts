#!/usr/bin/env bun

import p from 'node:path';
import { $ } from 'bun';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { glob } from 'tinyglobby';
import * as ufo from 'ufo';
import * as z from 'zod';

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

{
	const projectMDs = await glob('*/README.md', {
		onlyFiles: true,
		absolute: true,
	});

	const urlSchema = z.string().url();
	const schema = z.object({
		title: z.string(),
		date: z.date(),
		lang: z.enum(['ja', 'en']),
		event: z.string(),
		eventLink: urlSchema.optional(),
		videoLink: urlSchema.optional(),
		content: z.string(),
		links: z.array(urlSchema).transform(links =>
			links.filter(l => l.startsWith(ROOT_URL)).concat(links.filter(l => !l.startsWith(ROOT_URL))),
		),
	});

	const results = [];
	for (const projectMD of projectMDs) {
		const md = await $`cat ${projectMD}`.text();
		const { data, content } = matter(md);

		const projectDirName = p.relative(root, p.dirname(projectMD));
		const distPath = p.join(rootDist, projectDirName);

		const { links = [] } = data as { links: string[] };

		/* find url */
		if (await Bun.file(p.join(distPath, 'index.html')).exists()) {
			console.log('exists', distPath);
			const url = ufo.joinURL(ROOT_URL, p.relative(rootDist, distPath));
			links.push(url);
		}

		/* find pdf */
		const pdfPath = await glob(p.join(distPath, '*.pdf'), { onlyFiles: true });
		if (pdfPath.length > 0) {
			console.log('exists', pdfPath[0]);
			const pdf = ufo.joinURL(ROOT_URL, p.relative(rootDist, pdfPath[0]));
			links.push(pdf);
		}

		const result = schema.safeParse({
			...data,
			content,
			links,
		});
		if (!result.success) {
			console.error(`Invalid frontmatter in ${projectDirName}:`);
			console.error(z.prettifyError(result.error));
			continue;
		}

		results.push(result.data);
	}

	results.sort((a, b) => b.date.getTime() - a.date.getTime());

	await Bun.write(p.join(rootDist, 'talks.json'), JSON.stringify(results, null, 2));

	/* generate rss */
	const feed = new Feed({
		title: 'ryoppippi talks',
		description: 'ryoppippi talks',
		copyright: `MIT 2024 © ryoppippi`,
		id: ROOT_URL,
		link: ROOT_URL,
	});

	for (const talk of results) {
		feed.addItem({
			title: talk.title,
			id: talk.links[0],
			link: talk.links[0],
			date: talk.date,
			content: talk.content,
		});
	}

	await Bun.write(p.join(rootDist, 'feed.xml'), feed.rss2());
}
