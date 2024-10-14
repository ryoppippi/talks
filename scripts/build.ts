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

/* generate json */
{
	const projects = await glob('*/*.md', {
		onlyFiles: true,
	});
	const projectsData = await Promise.all(
		projects.map(async (project) => {
			const projectDirName = p.dirname(project);
			const content = await $`cat ${project}`;
			const title = content.match(/title: (.*)/)?.[1];
			const description = content.match(/description: (.*)/)?.[1];
			const tags = content.match(/tags: (.*)/)?.[1].split(',').map(tag => tag.trim());
			const pdf = await glob(`${projectDirName}/*.pdf`, {
				onlyFiles: true,
			});
			return {
				title,
				description,
				tags,
				pdf: pdf[0] ? p.join(projectDirName, p.basename(pdf[0])) : undefined,
			};
		}),
	);
	await $`mkdir -p ${rootDist}`;
	await $`echo '${JSON.stringify(projectsData)}' > ${p.join(rootDist, 'projects.json')}`;
}
