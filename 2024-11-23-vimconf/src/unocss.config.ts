import { mergeConfigs, presetWebFonts } from 'unocss';
import config from '../../unocss.config';

export default mergeConfigs([
	config,
	{
		shortcuts: {
			'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
		},
		presets: [
			presetWebFonts({
				fonts: {
					sans: 'DM Sans',
					strong: 'Rubik Iso',
					fast: 'Ubuntu',
					hand: 'Caveat',
				},
			}),
		],
	},
]);
