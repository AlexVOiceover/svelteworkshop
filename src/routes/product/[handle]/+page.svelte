<script lang="ts">
	import { page } from '$app/stores';
	import { bagItemCount, bagItems } from '$lib/stores';
	import ProductDetail from '$lib/components/ProductDetail.svelte';
	import Bag from '$lib/components/Bag.svelte';
	import products from '$lib/mockData';
	import type { Product } from '$lib/mockData';
	
	// Get the product handle from the URL parameter
	const handle = $page.params.handle;
	
	// Find the product with the matching handle
	const product = products.find(p => p.handle === handle);
	
	function addToBag(product: Product) {
		const existingItemIndex = $bagItems.findIndex((item) => item.id === product.id);
		if (existingItemIndex !== -1) {
			const newBagItems = [...$bagItems];
			const quantity = newBagItems[existingItemIndex].quantity || 1;
			newBagItems[existingItemIndex] = {
				...newBagItems[existingItemIndex],
				quantity: quantity + 1
			};
			bagItems.set(newBagItems);
		} else {
			bagItems.set([...$bagItems, { ...product, quantity: 1 }]);
		}
		updateBagItemCount();
	}
	
	function updateBagItemCount() {
		const count = $bagItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
		bagItemCount.set(count);
	}
	
	function calculateTotal(items: Product[]): number {
		return items.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	}
</script>

<div class="container mx-auto py-8 px-4">
	<div class="mb-8">
		<a href="/" class="text-blue-600 hover:underline flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
			</svg>
			Back to Products
		</a>
	</div>
	
	{#if product}
		<ProductDetail product={product} onAddToBag={addToBag} />
	{:else}
		<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8">
			<p>Product not found. <a href="/" class="underline">Return to products list</a></p>
		</div>
	{/if}
	
	{#if $bagItems.length > 0}
		<div class="mt-12">
			<h2 class="text-xl font-bold mb-4">Your Bag</h2>
			<Bag items={$bagItems} />
			<div class="mt-4 text-lg font-semibold">
				Total: {calculateTotal($bagItems)} £
			</div>
		</div>
	{/if}
</div>