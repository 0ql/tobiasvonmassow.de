<script lang="ts">
	import type { Dir } from "../env";

	export let dir: Dir;
	let toggle = true;
</script>

<button
	class="btn p-2 md:p-3 mb-3 w-full text-left leading-normal text-[1rem]"
	on:click={() => (toggle = !toggle)}
>
	{dir.name.replaceAll("_", " ")}
</button>
<div class="border-l-solid border-l-2 border-[var(--text-scnd-color)] pl-3">
	{#if toggle}
		{#each dir.subdirs as item}
			<svelte:self dir={item} />
		{/each}
		{#each dir.files as file}
			<a
				class="btn block p-2 md:p-3 mb-3"
				href={dir.path + file.replaceAll(/\.(mdx|md|astro|svelte)/g, "")}
				>{file
					.replaceAll("_", " ")
					.replaceAll(/\.(mdx|md|astro|svelte)/g, "")}</a
			>
		{/each}
	{/if}
</div>
