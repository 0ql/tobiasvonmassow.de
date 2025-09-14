<script lang="ts">
	import { fly } from "svelte/transition";
	import { state } from "../config";
</script>

<nav
	class="box-border fixed w-full h-10vh p-8 border-b-solid border-b-2 border-[var(--text-scnd-color)] z-10 flex justify-between items-center"
	style="backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);"
>
	<div>
		<a
			aria-label="Menu"
			href="/overview"
			title="Menu"
			on:click|preventDefault={() =>
				state.setKey("hamburgertoggle", !state.get().hamburgertoggle)}
			class="text-current"
			><div
				class="text-4xl i-mdi-hamburger cursor-pointer
        {$state.hamburgertoggle
					? 'transition-duration-0.5s rotate-90'
					: 'transition-duration-0.5s rotate-0'}"
			></div></a
		>
	</div>
	<div class="flex gap-4 items-center">
		{#if $state.globetoggle}
			<button
				title="Deutsch"
				aria-label="Deutsch"
				transition:fly={{ x: 50, duration: 300 }}
				class="text-3xl i-circle-flags-de"
				on:click={() => {
					state.setKey("lang", "de");
					state.setKey("globetoggle", false);
				}}
			></button>
			<button
				title="English"
				aria-label="English"
				transition:fly={{ x: 50, duration: 300 }}
				class="text-3xl i-circle-flags-en"
				on:click={() => {
					state.setKey("lang", "en");
					state.setKey("globetoggle", false);
				}}
			></button>
		{/if}
		<button
			title="Languages"
			aria-label="Languages"
			on:click={() => state.setKey("globetoggle", !$state.globetoggle)}
			class="text-current text-4xl i-mdi-earth cursor-point hover:transition-duration-0.3s hover:color-[var(--primary)]"
		></button>
		<a
			title="Github"
			aria-label="Github"
			href="https://github.com/0ql"
			class="text-current text-4xl i-mdi-github hover:transition-duration-0.3s hover:color-[var(--primary)]"
		></a>
		{#if $state.theme === "light_classic"}
			<button
				title="Lightmode"
				aria-label="Lightmode"
				on:click={() => state.setKey("theme", "dark_classic")}
				class="text-4xl i-heroicons-outline-sun hover:transition-duration-0.3s hover:color-[var(--primary)] cursor-pointer text-current"
			></button>
		{:else}
			<button
				title="Darkmode"
				aria-label="Darkmode"
				on:click={() => state.setKey("theme", "light_classic")}
				class="text-4xl i-heroicons-outline-moon cursor-pointer hover:transition-duration-0.3s color-current"
			></button>
		{/if}
	</div>
</nav>
