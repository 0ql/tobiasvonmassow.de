<script lang="ts">
	import { fly } from "svelte/transition";
	import { state } from "../config";
	import type { Dir } from "../env";
	import SideBarEntry from "./SideBarEntry.svelte";

	export let dir: Dir;
</script>

{#if $state.hamburgertoggle}
	<nav
		transition:fly={{ duration: 500, x: -1500, opacity: 1 }}
		class="mt-10vh fixed h-[90vh] left-0 w-2/3 lg:w-120 p-4 md:p-10 z-1 overflow-y-scroll border-r-2 border-[var(--text-scnd-color)] md:scrollbar scrollbar-rounded scrollbar-thumb-color-current scrollbar-track-color-transparent"
		style="backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);"
	>
		<a class="btn block p-2 md:p-3 mb-3" href="/">Home</a>
		<a class="btn block p-2 md:p-3 mb-3" href="/gesetze">Gesetze</a>
		{#each dir.subdirs as item}
			<SideBarEntry dir={item} />
		{/each}
	</nav>
{/if}
