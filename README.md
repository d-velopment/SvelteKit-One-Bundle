# SvelteKit-One-Bundle
As **SvelteKit Static Adapter** doesn't provide any solution to have a single `bundle.js` file to be loaded/called to start rendering the application, this "hacky" solution has been developed to explode and re-wrap the project into an initial bundle *(to be used itself as a module of an external application)* and a custom `index.html` to load the bundle from.
The final build is located @ `dist` folder.

### Development preview
```
npm run dev
-> open https://localhost:5005/
```

### Wrapped build preview
```
npm run build
cd dist
python -m http.server --cgi 8082
-> open http://localhost:8082/
```
<sup>* `python` command presumes you have Python preinstalled on your machine, or using macOS.</sup>

### Main differences
- In *svelte.config.js* a static adapter's fallback is configured to temporary `bundle.html` fallback would be converted to `bundle.js`:
```ruby
kit: {
	adapter: adapter({
		...
		fallback: "bundle.html",
		...
	})
```

- Pre-composed *src/static/index.page* would become an *index.html* after the build, contains of `.overlay` element where the running application would be rendered:
```js
...
    <div class="overlay"></div>
    <script type="module" src="./bundle.js"></script>
...
``` 
