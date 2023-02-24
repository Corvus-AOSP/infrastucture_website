/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: '#7D6DF8',
			'light-primary': '#C7C0FC',
			black: '0B0B0E',
      'light-black': 'rgba(33, 33, 43, 0.5)',
			white: '#F4F0FF'
		}
	},
	plugins: []
};
