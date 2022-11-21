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
		class="bg-[var(--bg-color)] fixed h-[90vh] left-0 w-2/3 lg:w-120 p-10 z-1 overflow-y-scroll border-r-2 border-[var(--text-scnd-color)] scrollbar scrollbar-rounded scrollbar-thumb-color-current scrollbar-track-color-transparent"
	>
		<a class="btn block p-3 mb-3" href="/">Home</a>
		{#each dir.subdirs as item}
			<SideBarEntry dir={item} />
		{/each}
	</nav>
{/if}
