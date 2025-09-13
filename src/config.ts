import { map } from 'nanostores'
import type { LanguageFile, State } from './env'
// @ts-ignore
import langs from "./langs.yaml"

export const state = map<State>({
	lang: "de",
	theme: "dark_classic",
	hamburgertoggle: false,
	globetoggle: false,
	rendercards: false
})

export const lang = map<LanguageFile>(langs[state.get().lang])

state.subscribe((val) => {
	lang.set(langs[val.lang])
	// check if running in browser
	if (typeof window === "undefined") return
	document.documentElement.classList.forEach(el => {
		document.documentElement.classList.remove(el)
	})
	document.documentElement.classList.add(val.theme)
	window.localStorage.setItem("theme", val.theme)
})
