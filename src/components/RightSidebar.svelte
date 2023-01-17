<script lang="ts">
	import { onMount } from "svelte";
	let headings: NodeListOf<HTMLHeadingElement>;
	let current = "";

	onMount(() => {
		headings = document.querySelectorAll("article :is(h1,h2,h3)");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						current = entry.target.id;
					}
				});
			},
			{
				threshold: 1,
			}
		);
		headings.forEach((heading) => {
			observer.observe(heading ?? new HTMLElement());
		});
	});
</script>

<nav class="w-20% z-1 fixed right-10 display-none 2xl:block">
	<h1 class="text-xl font-bold mb-4">Table of Contents</h1>
	{#if headings}
		{#each headings as heading}
			<a
				class="block p-2 rounded-lg border-2 {heading.id === current
					? 'border-2 border-[var(--text-scnd-color)]'
					: 'border-transparent'}"
				href={"#" + heading.id}>{heading.innerText}</a
			>
		{/each}
	{/if}
</nav>
