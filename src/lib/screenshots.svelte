<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import SwiperCore, {
		Autoplay,
		Pagination,
		Navigation
	} from 'swiper'; /* importing swiper/core throws error in build */

	import 'swiper/swiper.min.css';

	let container, swiper, next, prev;
	onMount(() => {
		SwiperCore.use([Autoplay, Pagination, Navigation]);
		swiper = new Swiper(container, {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: next,
				prevEl: prev
			}
		});
		return () => {
			swiper.destroy();
		};
	});

	const items = [
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		},
		{
			image: 'https://ik.imagekit.io/corvus/Screenshot_20230215-091848_RavenWalls.png'
		}
	];
</script>

<main class="py-16">
  <div class="mx-64 py-8 flex items-center justify-end text-4xl font-bold">Screenshots</div>
	<div class="overflow-hidden">
		<div class="swiper-container cont" bind:this={container}>
			<div class="swiper-wrapper">
				{#each items as item}
					<div class="swiper-slide">
						<img class="rounded-lg" src={item.image} alt="Corvus" width="250px" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	.cont {
		width: 50vw;
		margin: 0 auto;
		overflow: hidden;
	}
</style>
