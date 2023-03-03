<script defer>
	// @ts-nocheck
	import { onMount } from 'svelte';
	let deviceList = [];
	onMount(async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/CorvusRom-Devices/jenkins/main/devices.json'
		);
		const json = await response.json();
		deviceList = json;
		delete deviceList['Rom Generic'];
	});
</script>

<main class="mt-48 mb-12 lg:mx-32 mx-8">
	<h1 class="lg:text-5xl text-3xl font-bold text-center">Downloads</h1>
	<h2 class="lg:text-2xl text-xl font-bold my-2">Devices:</h2>
	{#if deviceList.length === 0}
		<h3 class="lg:text-xl text-lg font-bold my-2">Loading...</h3>
	{/if}
	<div class="flex lg:gap-4 gap-2 flex-wrap">
		{#each Object.entries(deviceList) as devices}
			<a href={`#${devices[0]}`}><button class="p-2 bg-primary rounded-lg">{devices[0]}</button></a>
		{/each}
	</div>
	<a href="#"
		><button class="fixed lg:bottom-12 lg:right-12 bottom-6 right-6 p-2 rounded-full bg-primary">
			<img src="https://ik.imagekit.io/corvus/arrow.svg" width="20px" alt="arrow" />
		</button></a
	>
	<div>
		{#each Object.entries(deviceList) as devices}
			<h1 id={devices[0]} class="font-bold text-2xl pt-12 scroll-pt-32 snap-y">
				{devices[0]}
			</h1>
			<div class="rounded-lg my-2 grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
				{#each Object.entries(devices[1]) as device}
					<div
						class="bg-light-black p-5 rounded-lg lg:my-5 my-2 flex flex-col justify-between items-left"
					>
						<div>
							<h2 class="font-bold text-xl">{device[1].device}</h2>
							<h3 class="text-md italic">{device[0]}</h3>
							<h4>Maintainer: <span class="font-bold">{device[1].maintainer}</span></h4>
						</div>
						<a href={device[1].download}
							><button class="p-2 bg-primary rounded-lg mt-2">Download</button></a
						>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</main>
