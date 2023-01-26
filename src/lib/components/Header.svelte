<script>
	import { page } from "$app/stores"
</script>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		height: 3rem;
		top: 0;
		background: rgba(0, 0, 127, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		z-index: 1;
	}
	a:hover {
		color: var(--color-theme-1);
	}

	h1 {
		font-weight: bold;
		font-size: 2rem;
		padding: 0;
		margin: 0;
		text-align: left;
		color: #38D;
		padding: 0 0.6rem;
	}

	.dark {
		color: #358;
	}

</style>

<header>
	<a href="/" on:click={() => location.reload()}><h1>HELLO<span class="dark">WORLD</span></h1></a>
</header>
