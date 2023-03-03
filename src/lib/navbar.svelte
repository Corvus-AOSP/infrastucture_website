<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function toggleMenu() {
		dispatch('toggleMenu', {});
	}
</script>

<main>
	<div
		class="block lg:hidden fixed top-0 z-10 flex justify-center items-center w-screen h-screen backdrop-blur-md bg-light-black"
	>
		<div class="p-2 rounded-lg flex flex-col gap-6 items-center mx-2 text-2xl font-bold">
			<button on:click={() => toggleMenu()}><i class="fas fa-times text-4xl" /></button>
			<a href={'/#specials'}><button on:click={() => toggleMenu()}>Specials</button></a>
			<a href={'/#screenshots'}><button on:click={() => toggleMenu()}>Screenshots</button></a>
			<a href={'/#'}><button on:click={() => toggleMenu()}>Team</button></a>
			<button>What's New</button>
		</div>
	</div>
</main>
