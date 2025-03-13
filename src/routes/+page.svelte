<script lang="ts">
	import { onMount } from 'svelte';
	import Bag from '$lib/components/Bag.svelte';
	import type { Product } from '$lib/mockData';
	import products from '$lib/mockData';

	let bagItems: Product[] = [];

	function addToBag(product: Product) {
		const existingItem = bagItems.find((item) => item.id === product.id);
		if (existingItem) {
			existingItem.quantity = (existingItem.quantity || 1) + 1;
		} else {
			bagItems.push({ ...product, quantity: 1 });
		}
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Home Page</h1>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each products as product}
			<div class="rounded bg-white p-4 shadow">
				<h2 class="mb-2 text-lg font-semibold">{product.name}</h2>
				<p>{product.description}</p>
				<p class="font-bold text-green-600">{product.price} £</p>
				<button
					class="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
					on:click={() => addToBag(product)}
				>
					Add to Bag
				</button>
			</div>
		{/each}
	</div>

	<h2 class="mt-8 mb-4 text-xl font-bold">Your Bag</h2>
	<Bag items={bagItems} />
</div>
