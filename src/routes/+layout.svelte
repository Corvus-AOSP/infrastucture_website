<script>
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<div class="text-white">
	<div class="absolute z-10">
		<Header />
	</div>
	<slot />
	<Footer />
</div>
