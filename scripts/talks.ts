import matter from 'gray-matter';
import * as z from 'zod';

export const ROOT_URL = 'https://talks.ryoppippi.com/';

const urlSchema = z.string().url();

export const talkSchema = z.object({
	title: z.string(),
	date: z.date(),
	lang: z.enum(['ja', 'en']),
	event: z.string(),
	eventLink: urlSchema.optional(),
	videoLink: urlSchema.optional(),
	content: z.string(),
	links: z
		.array(urlSchema)
		.transform((links) =>
			links
				.filter((l) => l.startsWith(ROOT_URL))
				.concat(links.filter((l) => !l.startsWith(ROOT_URL))),
		),
});

export function parseTalkReadme(md: string, extraLinks: string[] = []) {
	const { data, content } = matter(md);
	const { links = [] } = data as { links?: string[] };
	return talkSchema.safeParse({
		...data,
		content,
		links: [...links, ...extraLinks],
	});
}
