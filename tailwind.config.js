/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', 'sans'],
			},
			fontSize: '1.6rem',
			container: {
				center: true,
			},
			colors: {
				orange: {
					100: 'hsl(26, 100%, 55%)',
					200: 'hsl(25, 100%, 94%)',
				},
				blue: {
					100: 'hsl(220, 13%, 13%)',
					200: 'hsl(219, 9%, 45%)',
					300: 'hsl(220, 14%, 75%)',
					400: 'hsl(223, 64%, 98%)',
				},
			},
		},
	},
	plugins: [require('daisyui')],
}
