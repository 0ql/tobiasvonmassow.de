<script lang="ts">
	import { lang } from "../config";
	let selfdesc: string = "";
	let interval: NodeJS.Timeout;

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
	<h1 class="font-bold text-5xl mb-8">Tobias von Massow</h1>
	<span class="text-lg">
		{selfdesc}
		<span class="inline blink -ml-1">_</span>
	</span>
</header>

<style>
	@keyframes floatingtext {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}
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
	h1 {
		animation: floatingtext 4s infinite;
	}
</style>
