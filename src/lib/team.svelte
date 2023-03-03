<script>
	let team = [
		{
			name: 'Ritzzz',
			role: 'Founder',
			image: 'https://avatars.githubusercontent.com/u/33751927?v=4',
			github: 'https://github.com/riteshm321',
			telegram: 'https://telegram.dog/ritzz97'
		},
		{
			name: 'Trishiraj',
			role: 'Lead Developer',
			image: 'https://avatars.githubusercontent.com/u/10130963?v=4',
			github: 'https://github.com/StarkDroid',
			telegram: 'https://telegram.dog/ISaidDontTagMe'
		},
		{
			name: 'Ravishanker',
			role: 'Web Developer',
			image: 'https://avatars.githubusercontent.com/u/67329471?v=4',
			github: 'https://github.com/fosslover69',
			telegram: 'https://telegram.dog/fosslover'
		},
		{
			name: 'Hemel',
			role: 'Designer',
			image: 'https://avatars.githubusercontent.com/u/75611659?v=4',
			github: 'https://github.com/H3M3L'
		}
	];
</script>

<main id="team" class="lg:pt-32 lg:mb-32 mb-16 pt-16 xl:mx-32 2xl:mx-64 lg:mx-16 mx-8">
	<section>
		<h1 class="lg:text-4xl text-2xl font-bold text-right">Team</h1>
		<p class="lg:text-xl font-semibold text-right">Meet the team behind Corvus OS</p>
		<div class="flex lg:flex-row flex-col items-center justify-center flex-wrap gap-4 mt-12">
			{#each team as member}
				<div class="card">
					<div>
						<h2 class="text-lg font-bold">{member.name}</h2>
						<p class="italic text-primary">{member.role}</p>
						<div class="flex gap-2 my-2">
							<a href={member.github} target="_blank" rel="noreferrer"
								><img
									src="https://ik.imagekit.io/corvus/Github.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677757762566"
									alt="Github"
									class="w-6 h-6"
								/></a
							>
							<a href={member.telegram} target="_blank" rel="noreferrer"
								><img
									src="https://ik.imagekit.io/corvus/Telegram.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677757742425"
									alt="Telegram"
									class="w-6 h-6"
								/></a
							>
						</div>
					</div>
					<div>
						<img src={member.image} alt={member.name} class="rounded-full w-24 h-24" />
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.card {
		background-color: rgba(33, 33, 43, 0.5);
		border-radius: 10px;
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		width: 20rem;
	}
</style>
