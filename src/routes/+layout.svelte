<script>
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import Navbar from '$lib/navbar.svelte';
	import '../app.css';
	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<div class="text-white">
	<div class="absolute z-10">
		<Header on:toggleMenu={toggleMenu} />
	</div>
	{#if showMenu}
		<Navbar on:toggleMenu={toggleMenu} />
	{/if}
	<slot />
	<Footer />
</div>
