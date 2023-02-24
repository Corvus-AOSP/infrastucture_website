<main class="mt-32 bg-light-black rounded-lg">
	<div class="mx-64 py-8 flex items-center justify-end text-4xl font-bold">Specials</div>
	<div class="flex items-center justify-center">
		<div>
			<div class="box-1 mx-1 p-5 my-2 relative bg-light-primary rounded-lg">
                <div class="absolute bottom-6 circle rounded-full bg-primary"></div>
                <div class="lg:text-3xl text-2xl font-bold text-primary">Raven Walls</div>
            </div>
			<div class="box-2 mx-1 p-5 relative my-2 bg-primary rounded-lg">
                <div class="circle absolute bottom-6 right-6 rounded-full bg-light-primary"></div>
                <div class="lg:text-3xl text-2xl font-bold text-light-primary">Corvus Themes</div>
            </div>
		</div>
		<div>
			<div class="box-2 mx-1 relative p-5 my-2 bg-primary rounded-lg">
                <div class="circle absolute right-6 rounded-full bg-light-primary"></div>
                <div class="absolute bottom-5 lg:text-3xl text-2xl font-bold text-light-primary">Corvus Zen</div>
            </div>
			<div class="box-1 mx-1 relative p-5 my-2 bg-light-primary rounded-lg">
                <div class="circle rounded-full bg-primary"></div>
                <div class="absolute bottom-5 lg:text-3xl text-2xl font-bold text-primary">Raven Desk</div>
            </div>
		</div>
	</div>
</main>
<style>
    .box-1 {
        width: clamp(10rem,20vw,20rem);
        height: clamp(5rem,30vh,30rem);
    }
    .box-2 {
        width: clamp(10rem,20vw,20rem);
        height: clamp(5rem,25vh,20rem);
    }
    .circle {
        border-radius: 100%;
        width: clamp(4rem,8vw,5rem);
        height: clamp(4rem,8vw,5rem);
    }
</style>
