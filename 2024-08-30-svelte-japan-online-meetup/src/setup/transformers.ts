// setup/transformers.ts
import { budouxCodeblock } from '@ryoppippi/slidev-transformer-budoux';
import { defineTransformersSetup } from '@slidev/types';

export default defineTransformersSetup(() => {
	return {
		pre: [],
		// eslint-disable-next-line ts/no-unsafe-call
		preCodeblock: [budouxCodeblock('ja')], // Set the default language (optional)
		postCodeblock: [],
		post: [],
	};
});
