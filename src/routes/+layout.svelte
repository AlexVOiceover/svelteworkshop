<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { bagItemCount } from '$lib/stores';
	// import Bag from '$lib/components/Bag.svelte';
	// let { children } = $props();

	let itemCount = 0;
	bagItemCount.subscribe((value) => {
		itemCount = value;
	});
</script>

<NavBar bagItemCount={itemCount} />

<main class="container mx-auto p-4">
	<slot />
</main>
