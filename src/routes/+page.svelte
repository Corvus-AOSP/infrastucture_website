<script>
	// @ts-nocheck
	import Screenshots from '$lib/screenshots.svelte';
	import Specials from '$lib/specials.svelte';
</script>

<main class="mt-56">
	<div class="flex item-center justify-around">
		<div>
			<h1 class="text-7xl font-extrabold">GET THE RAVEN <br />UNLEASHED</h1>
			<p class="text-2xl text-primary font-medium my-8">The Experience You Deserve</p>
			<button class="bg-primary p-2 rounded-lg font-bold">Download Now!</button>
			<button class="border border-light-primary text-light-primary p-2 mx-3 rounded-lg font-bold"
				>What's New</button
			>
		</div>
		<img src="https://ik.imagekit.io/corvus/crow.png?tr=w-400&ik-sdk-version=javascript-1.4.3&updatedAt=1677226946997" alt="Corvus" />
	</div>
	<Specials />
	<Screenshots />
</main>
