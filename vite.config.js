import { sveltekit } from "@sveltejs/kit/vite"
import basicSsl from "@vitejs/plugin-basic-ssl"
import * as fs from 'fs'
import * as path from 'path'

/** doRewrap - wraps an assembled by @sveltejs/adapter-static project 
 * into a module that can be loaded/called from another application. */
const doRewrap = ({ cssClass }) => {
	try {
		if (fs.existsSync(path.resolve(__dirname, 'dist/bundle.js'))) {
			return
		}
	} catch(e) {}
	console.log("\nStart re-wrapping...")
	fs.readFile(path.resolve(__dirname, 'dist/bundle.html'), 'utf8', function(err, data){
		if (!data) {
			console.log(`[Error]: No bundle.html generated, check svelte.config.js -> config.kit.adapter -> fallback: "bundle.html"`)
			return
		}
		let matchData = data.match(/(?<=<script\b[^>]*>)([\s\S]*?)(?=<\/script>)/gm)
		if (matchData) {
			let cleanData = matchData[0].trim()
				.replace(`document.querySelector('[data-sveltekit-hydrate="45h"]').parentNode`, `document.querySelector(".${cssClass}")`)
			fs.writeFile(path.resolve(__dirname, 'dist/bundle.js'), cleanData, (err) => {
				if (err)
					console.log(err)
				else {
					try {
						fs.rename(path.resolve(__dirname,'dist/index.page'), path.resolve(__dirname, 'dist/index.html'), (err) => { })
					} catch (e) { }
					try {
						fs.unlinkSync(path.resolve(__dirname, 'dist/bundle.html'))
					} catch (e) { }
					console.log("Finished: bundle.js + index.html have been regenerated.\n")
				}
			})
		} else 
			console.log(`[Error]: No proper <script> tag found in bundle.html`)
	})
}

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		https: true,
		port: 5005
	},
	plugins: [sveltekit(), basicSsl(),
		{
			name: 'postbuild-command', 
			closeBundle: {
				order: 'post',
				handler() {
					setTimeout(() => doRewrap({ cssClass: "overlay" }), Math.random()*500+500)
				}
			}
		}
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
}

export default config
