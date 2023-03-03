<script>
	// @ts-nocheck
	import Screenshots from '$lib/screenshots.svelte';
	import Specials from '$lib/specials.svelte';
	import Team from '$lib/team.svelte';
</script>

<main id="hero" class="w-screen lg:pt-56 pt-36">
	<div class="flex item-center gap-2 lg:justify-around justify-between">
		<img
			class="block lg:hidden"
			src="https://ik.imagekit.io/corvus/crow2.png?tr=w-130&ik-sdk-version=javascript-1.4.3&updatedAt=1677731135645"
			alt="Corvus"
		/>
		<div class="ml-2">
			<h1 class="lg:text-7xl text-3xl font-extrabold">GET THE RAVEN <br />UNLEASHED</h1>
			<p class="lg:text-2xl text-primary font-medium lg:my-8 my-2">The Experience You Deserve</p>
			<a href="/devices"
				><button class="bg-primary lg:text-base text-sm p-2 rounded-lg font-bold"
					>Download Now!</button
				></a
			>
			<button
				class="lg:text-base text-sm border border-light-primary text-light-primary p-2 mx-3 rounded-lg font-bold"
				>What's New</button
			>
		</div>
		<img
			class="hidden lg:block"
			src="https://ik.imagekit.io/corvus/crow.png?tr=w-400&ik-sdk-version=javascript-1.4.3&updatedAt=1677226946997"
			alt="Corvus"
		/>
	</div>
	<Specials />
	<Team />
	<Screenshots />
</main>
