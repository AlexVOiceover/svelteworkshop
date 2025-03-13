<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	// let { children } = $props();
</script>

<NavBar />

<main class="container mx-auto p-4">
	<slot />
</main>

<!-- {@render children()} -->
