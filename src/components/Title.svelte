<script lang="ts">
	import { lang } from "../config";
	let selfdesc: string = "";
	let interval: NodeJS.Timer;

	lang.subscribe((l) => {
		let i = 0;
		selfdesc = "";
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			if (i === l.selfdesc.length - 1) clearInterval(interval);
			selfdesc += l.selfdesc[i++];
		}, 100);
	});
</script>

<header class="w-full py-[15vh]">
	<h1 class="anim">Tobias von Massow</h1>
	<span class="mt-5 text-lg">
		{selfdesc}
		<span class="inline blink -ml-1">_</span>
	</span>
</header>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	.blink {
		animation: blink 400ms infinite;
	}
</style>
