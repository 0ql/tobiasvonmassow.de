<script lang="ts">
	export let href: string;
	export let title: string;
	export let desc: string;
	export let icon: string;
</script>

<a {href} class="block btn p-6">
	<span class="flex items-center gap-4">
		<span class="text-3xl {icon}" />
		<span class="text-xl">{title}</span>
	</span>
	<div class="mt-4">{desc}</div>
</a>
