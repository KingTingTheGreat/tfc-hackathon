import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blaj: "#405FFF",
				offwhite: "#D9D9D9",
			},
			fontFamily: {
				Imprima: ["Imprima", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
