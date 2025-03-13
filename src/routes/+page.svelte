<script lang="ts">
	import Bag from '$lib/components/Bag.svelte';
	import ProductsList from '$lib/components/ProductsList.svelte';
	import type { Product } from '$lib/mockData';
	import products from '$lib/mockData';
	import { bagItemCount, bagItems } from '$lib/stores';


	function addToBag(product: Product) {
		bagItems.update(items => {
        const existingItemIndex = items.findIndex((item) => item.id === product.id);
        
        if (existingItemIndex !== -1) {
            // If item exists, update quantity
            return items.map((item, index) =>
                index === existingItemIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            );
        } else {
            // If item doesn't exist, add to the bag
            return [...items, { ...product, quantity: 1 }];
        }
    });

    // Update total bag count
    updateBagItemCount();
	}

	function updateBagItemCount() {
		bagItems.subscribe(items => {
        const count = items.reduce((acc, item) => acc + (item.quantity || 0), 0);
        bagItemCount.set(count);
    });
	}
    function calculateTotal(items: Product[]): number {
		let total = 0;
		bagItems.subscribe(items => {
			total = items.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
		});
		return total;
	}
	
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-4 text-2xl font-bold" style="display: none;">Home Page</h1>
	<ProductsList products={products} onAddToBag={addToBag} />
</div>
