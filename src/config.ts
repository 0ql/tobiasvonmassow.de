import { map } from 'nanostores'
import type { LanguageFile, State } from './env'
// @ts-ignore
import langs from "./langs.yaml"

export const state = map<State>({
	lang: "de",
	theme: "light-classic",
	hamburgertoggle: false,
	globetoggle: false,
	rendercards: false
})

export const lang = map<LanguageFile>(langs[state.get().lang])

const set_property = (key: string, value: string) => document.documentElement.style.setProperty(key, value)

const set_dark_classic = () => {
	set_property("--prim-color", "#a78bfa")
	set_property("--bg-color", "#18181b")
	set_property("--bg-scnnd-color", "#242424")
	set_property("--text-color", "#d4d4d8")
	set_property("--text-scnd-color", "#52525b")
}

const set_light_classic = () => {
	set_property("--prim-color", "#a78bfa")
	set_property("--bg-color", "#e4e4e7")
	set_property("--bg-scnnd-color", "#d2d2d9")
	set_property("--text-color", "#18181b")
	set_property("--text-scnd-color", "#52525b")
}

state.subscribe((_, key) => {
	if (key === "lang") lang.set(langs[state.get().lang])
	else if (key === "theme") {
		if (state.get().theme === "dark_classic") set_dark_classic()
		else if (state.get().theme === "light_classic") set_light_classic()
	}
})
