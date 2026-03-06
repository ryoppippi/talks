#!/usr/bin/env bun

import { readdir, symlink, lstat, rm, readlink, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const checkMode = process.argv.includes("--check");

let hasErrors = false;

const AGENTS_SKILLS = join(ROOT, ".agents", "skills");
const CLAUDE_SKILLS = join(ROOT, ".claude", "skills");

await mkdir(CLAUDE_SKILLS, { recursive: true });

const agentSkillDirs = await readdir(AGENTS_SKILLS);
const claudeSkillEntries = await readdir(CLAUDE_SKILLS);

const expectedTarget = (name: string) => `../../.agents/skills/${name}`;

const linkedSkills = await Promise.all(
	agentSkillDirs.map(async (name) => {
		const s = await lstat(join(AGENTS_SKILLS, name));
		if (!s.isDirectory()) return null;

		const dst = join(CLAUDE_SKILLS, name);

		if (checkMode) {
			try {
				const existing = await lstat(dst);
				if (!existing.isSymbolicLink()) {
					console.error(`❌ Skill not a symlink: .claude/skills/${name}`);
					hasErrors = true;
					return null;
				}
				const target = await readlink(dst);
				if (target !== expectedTarget(name)) {
					console.error(`❌ Skill symlink incorrect: .claude/skills/${name}`);
					hasErrors = true;
					return null;
				}
				return name;
			} catch {
				console.error(`❌ Skill missing: .claude/skills/${name}`);
				hasErrors = true;
				return null;
			}
		} else {
			try {
				const existing = await lstat(dst);
				if (existing.isSymbolicLink()) {
					const target = await readlink(dst);
					if (target === expectedTarget(name)) return name;
				}
				await rm(dst, { recursive: true, force: true });
			} catch {
				// doesn't exist
			}

			await symlink(expectedTarget(name), dst);
			return name;
		}
	}),
);

const validSkills = linkedSkills.filter((n): n is string => n !== null);
const expectedSkillNames = new Set(validSkills);
const skillOrphans = claudeSkillEntries.filter(
	(name) => !expectedSkillNames.has(name),
);

if (!checkMode) {
	await Promise.all(
		skillOrphans.map(async (name) => {
			await rm(join(CLAUDE_SKILLS, name), { recursive: true, force: true });
			console.log(`Removed orphan skill: .claude/skills/${name}`);
		}),
	);
}

if (skillOrphans.length > 0 && checkMode) {
	skillOrphans.forEach((name) => {
		console.error(`❌ Orphan skill: .claude/skills/${name}`);
	});
	hasErrors = true;
}

if (checkMode && hasErrors) {
	console.error("\n❌ Skills are not in sync!");
	console.error("Run: bun scripts/sync-skills.ts");
	process.exit(1);
} else if (checkMode) {
	console.log("✅ Skills are in sync!");
} else {
	console.log(
		`Synced ${validSkills.length} skills: .agents/skills/ -> .claude/skills/ (symlinks)`,
	);
}
