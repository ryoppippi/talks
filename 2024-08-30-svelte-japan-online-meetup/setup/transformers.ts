// setup/transformers.ts
import { budouxCodeblock } from '@ryoppippi/slidev-transformer-budoux';
import { defineTransformersSetup } from '@slidev/types';

export default defineTransformersSetup(() => {
	return {
		pre: [],

		preCodeblock: [budouxCodeblock('ja')], // Set the default language (optional)
		postCodeblock: [],
		post: [],
	};
});
