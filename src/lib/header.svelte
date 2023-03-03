<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function toggleMenu() {
		dispatch('toggleMenu', {});
	}
</script>

<main>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"
		integrity="sha512-F5QTlBqZlvuBEs9LQPqc1iZv2UMxcVXezbHzomzS6Df4MZMClge/8+gXrKw2fl5ysdk4rWjR0vKS7NNkfymaBQ=="
		crossorigin="anonymous"
	></script>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
		integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
		crossorigin="anonymous"
	/>
	<div
		class="flex item-center rounded-lg gap-2 w-screen fixed top-0 left-0 justify-between lg:px-24 px-8 lg:py-8 py-4 items-center"
		style="backdrop-filter: blur(10px); background-color: rgba(33, 33, 43, 0.5);"
	>
		<a href={'/#hero'} class="flex gap-4 items-center">
			<img
				src="https://ik.imagekit.io/corvus/Corvus_Logo.svg"
				alt="Corvus Logo"
				class="lg:w-12 w-8"
			/>
			<h1 class="font-extrabold lg:text-4xl text-xl cursor-pointer">Corvus-Aosp</h1>
		</a>
		<div class="lg:flex hidden justify-evenly font-semibold items-center gap-16">
			<a href={'/#specials'} class="header">Specials</a>
			<a href={'/#screenshots'} class="header">Screenshots</a>
			<a href={'/#hero'} class="header">Team</a>
			<button class="lg:px-4 lg:py-2 px-2 py-1 bg-primary rounded-lg text-sm lg:text-lg"
				>What's New</button
			>
		</div>
		<button class="lg:hidden" on:click={() => toggleMenu()}
			><i class="fas fa-bars text-2xl" /></button
		>
	</div>
</main>

<style>
	.header {
		color: #f4f0ff;
		cursor: pointer;
		padding: 0.25rem 0.25rem;
		border-radius: 0.5rem;
	}
	.header:hover {
		color: #7d6df8;
		cursor: pointer;
		background-color: #7e7efc41;
		padding: 0.25rem 0.25rem;
	}
</style>
