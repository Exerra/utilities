/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
	theme: {
		extend: {
			colors: {
				"darkgreen": "#16331B",
				"pastelgreen": "#D3ECD7",
				beige: {
					light: "#F9F4EF",
					heavy: "#2E2011"
				},
				olive: {
					light: "#D4DAC9",
					heavy: "#212519"
				},
				red: {
					light: "#FEF1F4",
					heavy: "#31040D"
				},
				orange: {
					light: "#FEEDDF",
					heavy: "#321702"
				},
				blue: {
					light: "#D7EDFA",
					heavy: "#062333"
				}
			},
			screens: {
				'3xl': '1600px'
			}
		},
	},
	plugins: [],
};
