import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: false
		})
	],
	kit: {
		adapter: adapter({
			pages: "dist",
			assets: "dist",
			fallback: "bundle.html",
			precompress: false,
			strict: true
		}),
		appDir: "build"
	}
}

export default config
