<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import contributors from '../contributors.json';

const GAP = 12;
const MIN_SIZE = 40;

const gridEl = ref<HTMLElement | null>(null);
const containerSize = ref({
	width: 1920,
	height: 1080,
});

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
	const el = gridEl.value;
	if (!el) return;

	const updateSize = (entry: ResizeObserverEntry) => {
		const box = Array.isArray(entry.contentBoxSize)
			? entry.contentBoxSize[0]
			: entry.contentBoxSize;

		if (box) {
			containerSize.value = {
				width: box.inlineSize,
				height: box.blockSize,
			};
		} else {
			containerSize.value = {
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			};
		}
	};

	resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) updateSize(entry);
	});
	resizeObserver.observe(el);
});

onBeforeUnmount(() => {
	if (gridEl.value && resizeObserver) {
		resizeObserver.unobserve(gridEl.value);
	}
	resizeObserver?.disconnect();
});

const grid = computed(() => {
	const total = contributors.length || 1;
	const ratio =
		containerSize.value.width && containerSize.value.height
			? containerSize.value.width / containerSize.value.height
			: 16 / 9;

	const columns = Math.max(3, Math.round(Math.sqrt(total * ratio)));
	const rows = Math.max(1, Math.ceil(total / columns));

	return { columns, rows };
});

const avatarSize = computed(() => {
	const { width, height } = containerSize.value;
	const { columns, rows } = grid.value;

	if (!width || !height) return MIN_SIZE;

	const availableWidth = width - GAP * (columns - 1);
	const availableHeight = height - GAP * (rows - 1);

	const maxCellWidth = availableWidth / columns;
	const maxCellHeight = availableHeight / rows;

	return Math.max(MIN_SIZE, Math.min(maxCellWidth, maxCellHeight));
});

function getAvatarStyle(login: string) {
	return {
		viewTransitionName: `contributor-${login.toLowerCase()}`,
	};
}
</script>

<template>
	<div
		ref="gridEl"
		class="contributors-grid"
		:style="{
			'--columns': grid.columns,
			'--rows': grid.rows,
			'--gap': `${GAP}px`,
			'--avatar-size': `${avatarSize}px`,
		}"
	>
		<img
			v-for="contributor of contributors"
			:key="contributor"
			:src="`https://github.com/${contributor}.png`"
			:alt="contributor"
			:style="getAvatarStyle(contributor)"
			loading="lazy"
		>
	</div>
</template>

<style scoped>
.contributors-grid {
	display: grid;
	grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
	gap: var(--gap);
	padding: var(--gap);
	inline-size: 100%;
	block-size: 100%;
	align-items: center;
	justify-items: center;
}

.contributors-grid img {
	inline-size: min(100%, var(--avatar-size));
	block-size: min(100%, var(--avatar-size));
	border-radius: 9999px;
	object-fit: cover;
	box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contributors-grid img:hover,
.contributors-grid img:focus-visible {
	transform: translateY(-4px) scale(1.03);
	box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
}
</style>
