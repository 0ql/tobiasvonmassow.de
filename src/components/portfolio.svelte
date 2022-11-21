<script lang="ts">
	import PortfolioCard from "./portfolioCard.svelte";
	import { lang } from "../config";
</script>

<div
	class="hidden i-mdi-typewriter i-mdi-car-convertible i-mdi-brain i-mdi-reddit"
/>
<section class="grid gap-6">
	{#each $lang.portfolio as entry}
		<PortfolioCard
			icon={entry.icon}
			title={entry.title}
			href={entry.href}
			desc={entry.desc}
		/>
	{/each}
	<a
		class="btn flex justify-center items-center"
		href="https://github.com/0ql?tab=repositories"
	>
		<div class="text-4xl i-mdi-hand-pointing-right point-right" />
		<div class="p-5">{$lang.more}</div>
		<div class="text-4xl i-mdi-hand-pointing-left point-left" />
	</a>
</section>

<style global>
	.i-mdi-car-convertible {
		animation: convertible 3s ease-in-out 0s infinite;
	}
	@keyframes convertible {
		0%,
		100% {
			transform: translateX(-0.5rem);
		}
		50% {
			transform: translateX(0.5rem);
		}
	}
</style>
