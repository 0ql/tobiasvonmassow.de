import { map } from 'nanostores'
import type { LanguageFile, State } from './env'
// @ts-ignore
import langs from "./langs.yaml"

export const state = map<State>({
	lang: "de",
	theme: "dark-classic",
	hamburgertoggle: false,
	globetoggle: false,
	rendercards: false
})

export const lang = map<LanguageFile>(langs[state.get().lang])

state.subscribe((_, key) => {
	if (key === "lang") lang.set(langs[state.get().lang])
	else if (key === "theme") {
		document.documentElement.classList.forEach(el => {
			document.documentElement.classList.remove(el)
		})
		document.documentElement.classList.add(state.get().theme)
		window.localStorage.setItem("theme", state.get().theme)
	}
})
