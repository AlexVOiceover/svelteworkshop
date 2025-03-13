<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { bagItemCount } from '$lib/stores';
	let itemCount = 0;
	bagItemCount.subscribe((value) => {
		itemCount = value;
	});

</script>

<NavBar bagItemCount={itemCount} />

<main class="container mx-auto p-4">
	<slot />
</main>
