<script>
	// @ts-nocheck
	import Screenshots from '$lib/screenshots.svelte';
	import Specials from '$lib/specials.svelte';
</script>

<main id="hero" class="w-screen pt-56">
	<div class="flex item-center gap-2 mx-2 justify-around">
		<div>
			<h1 class="lg:text-7xl text-3xl font-extrabold">GET THE RAVEN <br />UNLEASHED</h1>
			<p class="lg:text-2xl text-primary font-medium lg:my-8 my-2">The Experience You Deserve</p>
			<a href="/devices"
				><button class="bg-primary lg:text-base text-xs p-2 rounded-lg font-bold"
					>Download Now!</button
				></a
			>
			<button
				class="lg:text-base text-xs border border-light-primary text-light-primary p-2 mx-3 rounded-lg font-bold"
				>What's New</button
			>
		</div>
		<img
			src="https://ik.imagekit.io/corvus/crow.png?tr=w-150,h-130&ik-sdk-version=javascript-1.4.3&updatedAt=1677226946997"
			alt="Corvus"
		/>
	</div>
	<Specials />
	<Screenshots />
</main>
