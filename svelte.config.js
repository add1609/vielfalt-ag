import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	extensions: [".svelte"],
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false,
		}),
		files: {
			assets: "static",
			hooks: "src/hooks",
			lib: "src/lib",
			params: "src/params",
			routes: "src/routes",
			serviceWorker: "src/service-worker",
			template: "src/app.html",
		},
	},
};

export default config;