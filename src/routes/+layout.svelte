<script>
	import Header from "../lib/components/Header.svelte"
	import Footer from "../lib/components/Footer.svelte"
	import "./styles.css"
</script>

<style>
	.app {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	main {
		position: absolute;
		top: 0;
		left: 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 3rem 0;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow: -moz-scrollbars-none;
	}
	main::-webkit-scrollbar {
		display: none;
	}
</style>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
