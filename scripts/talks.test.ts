import { readFile } from 'node:fs/promises';
import p from 'node:path';
import { glob } from 'tinyglobby';
import { describe, expect, it } from 'vite-plus/test';
import * as z from 'zod';
import { parseTalkReadme, ROOT_URL } from './talks.ts';

const root = p.join(import.meta.dirname, '..');
const readmes = await glob('*/README.md', { cwd: root, onlyFiles: true });

describe('talk README frontmatter', () => {
	it.each(readmes)('%s is valid', async (readme) => {
		const result = parseTalkReadme(await readFile(p.join(root, readme), 'utf8'));
		expect(result.error && z.prettifyError(result.error)).toBeUndefined();
	});
});

describe('parseTalkReadme', () => {
	it('puts links on the talks site first', () => {
		const md = `---
title: t
date: 2024-01-01
lang: en
event: e
links:
  - https://example.com/
---
`;
		const result = parseTalkReadme(md, [`${ROOT_URL}2024-01-01`]);
		expect(result.data?.links).toEqual([`${ROOT_URL}2024-01-01`, 'https://example.com/']);
	});
});
