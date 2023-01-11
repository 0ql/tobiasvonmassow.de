import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import Unocss from '@unocss/astro'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
export default defineConfig({
	site: "https://tobiasvonmassow.de",
	integrations: [mdx(), sitemap(), svelte(), Unocss({
		presets: [
			presetUno(),
			presetIcons(),
			presetScrollbar()
		]
	})],
	markdown: {
		shikiConfig: {
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'dracula',
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: [],
			wrap: false,
		},
	},
	vite: {
		plugins: [ViteYaml()]
	}
});
