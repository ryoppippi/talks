import { presetRyoppippi } from '@ryoppippi/unocss-preset';
import slidevUno from '@slidev/client/uno.config.ts';

import { mergeConfigs } from 'unocss';

export default mergeConfigs([
	slidevUno,
	{
		presets: [
			presetRyoppippi(),
		],
	},
]);
