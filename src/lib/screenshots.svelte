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

<main id="screenshots" class="pt-32">
	<section class="py-16 bg-light-black rounded-lg">
		<div class="lg:mx-64 mx-2 pb-8 flex items-center justify-end lg:text-4xl text-2xl font-bold">
			Screenshots
		</div>
		<div class="overflow-hidden">
			<div class="swiper-container lg:cont" bind:this={container}>
				<div class="swiper-wrapper">
					{#each items as item}
						<div class="swiper-slide">
							<img class="rounded-lg" src={item.image} alt="Corvus" width="250px" />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.cont {
		width: clamp(13rem, 50vw, 50rem);
		margin: 0 auto;
		overflow: hidden;
	}
</style>
