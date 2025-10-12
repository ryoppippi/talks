<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		flagIcon?: string
	}>(),
	{
		flagIcon: 'i-flag-gb-4x3 font-300',
	},
)

const slots = useSlots()
</script>

<template>
	<img
		src="https://ryoppippi.com/haichu.avif"
		absolute
		top-5
		left-20
		w-80
	/>

	<div class="text-3xl leading-snug font-500">
		<slot name="headline">
			Software Engineer mainly on <strong>Web Frontend × Machine Learning</strong>
		</slot>
	</div>

	<div
		v-if="slots.affiliation"
		class="mt-6 flex items-center gap-4 text-2xl"
	>
		<slot name="affiliation" />
	</div>

	<div gap-3 fyc class="mt-6 text-2xl">
		<slot name="location">Living in the UK</slot>
		<div :class="props.flagIcon" />
	</div>

	<div class="mt-6 text-2xl">
		<slot name="membership">Member of {vim-jp} / {Svelte Japan}</slot>
	</div>

	<img
		src="https://ryoppippi.com/ryoppippi.avif"
		rounded-full
		w-40
		abs-tr
		mt-32
		mr-30
	/>

	<div
		my-10
		w-min
		flex="~ gap-1"
		items-center
		justify-center
		class="text-xl"
	>
		<div i-ri-user-3-line op50 ma text-xl />
		<div>
			<a
				href="https://ryoppippi.com"
				target="_blank"
				class="border-none! font-300"
				>ryoppippi.com</a
			>
		</div>
		<div i-ri-github-line op50 ma text-xl ml4 />
		<div>
			<a
				href="https://github.com/ryoppippi"
				target="_blank"
				class="border-none! font-300"
				>ryoppippi</a
			>
		</div>
		<div i-tabler-brand-bluesky op50 ma text-xl ml4 />
		<div>
			<a
				href="https://bsky.app/profile/ryoppippi.com"
				target="_blank"
				class="border-none! font-300"
				>@ryoppippi.com</a
			>
		</div>
	</div>

	<slot />
</template>
