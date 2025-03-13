<script lang="ts">
	import Bag from '$lib/components/Bag.svelte';
	import ProductsList from '$lib/components/ProductsList.svelte';
	import type { Product } from '$lib/mockData';
	import products from '$lib/mockData';
	import { bagItemCount } from '$lib/stores';

	let bagItems: Product[] = [];

	function addToBag(product: Product) {
		const existingItemIndex = bagItems.findIndex((item) => item.id === product.id);
		if (existingItemIndex !== -1) {
			const newBagItems = [...bagItems];
			const quantity = newBagItems[existingItemIndex].quantity || 1;
			newBagItems[existingItemIndex] = {
				...newBagItems[existingItemIndex],
				quantity: quantity + 1
			};
			bagItems = newBagItems;
		} else {
			bagItems = [...bagItems, { ...product, quantity: 1 }];
		}
		updateBagItemCount();
	}

	function updateBagItemCount() {
		const count = bagItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
		bagItemCount.set(count);
	}

	function calculateTotal(items: Product[]): number {
		return items.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold">Home Page</h1>
	<ProductsList products={products} onAddToBag={addToBag} />

	<h2 class="mt-8 mb-4 text-xl font-bold">Your Bag</h2>
	<Bag items={bagItems} />
	<div class="mt-4 text-lg font-semibold">
		Total: {calculateTotal(bagItems)} £
	</div>
</div>
