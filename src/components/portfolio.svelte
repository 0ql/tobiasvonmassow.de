<script lang="ts">
	import PortfolioCard from "./portfolioCard.svelte";
	import { lang } from "../config";
	import "./style.css";
</script>

<i
	class="hidden i-mdi-typewriter i-mdi-car-convertible i-mdi-brain i-mdi-reddit i-mdi-home"
></i>
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
		<i class="text-4xl i-mdi-hand-pointing-right point-right"></i>
		<span class="p-5">{$lang.more}</span>
		<i class="text-4xl i-mdi-hand-pointing-left point-left"></i>
	</a>
</section>

<style>
	.i-mdi-hand-pointing-right {
		animation: point 1.2s ease-in-out 0s infinite;
	}
	.i-mdi-hand-pointing-left {
		animation: point 1.2s ease-in-out 0.6s infinite;
	}

	@keyframes point {
		0%,
		100% {
			transform: translateX(-0.3rem);
		}

		50% {
			transform: translateX(0.3rem);
		}
	}
</style>
