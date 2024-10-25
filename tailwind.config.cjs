/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#003ea3',
				sand: '#f2e9de',
				navy: '#001940',
				sky: '#d2eeff'
			}
		},
		fontFamily: {
			primary: 'Century Gothic, sans-serif'
		}
	},

	plugins: []
};

module.exports = config;
