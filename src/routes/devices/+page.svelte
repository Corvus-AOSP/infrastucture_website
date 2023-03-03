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
	<h1 class="lg:text-5xl text-3xl font-bold">Downloads</h1>
	<h2 class="lg:text-2xl text-xl font-bold my-2">DeviceList</h2>
	<div>
		{#each Object.entries(deviceList) as devices}
			<h1 class="font-bold text-2xl mt-12">{devices[0]}</h1>
			<div class="rounded-lg my-2 grid lg:grid-cols-5 lg:gap-8 gap-1">
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
