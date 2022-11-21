/// <reference types="astro/client" />

export type MenuEntry = {
	name: string
	dest: string
	opened?: boolean
	desc?: string
	langs?: string[]
	menu?: MenuEntry[]
}

export type LanguageFile = {
	lang: string
	overview: string
	selfdesc: string
	slug: {
		na: string
	}
	more: string
	portfolio: {
		icon: string
		title: string
		href: string
		desc: string
	}[]
	menu: MenuEntry[]
}

export type State = {
	lang: string
	theme: string
	hamburgertoggle: boolean
	globetoggle: boolean
	rendercards: boolean
}

declare module "langs.yaml" {
	const obj: Record<string, LanguageFile>
	export default obj
}

export type Dir = {
	name: string
	path: string
	subdirs: Dir[]
	files: string[]
};
