<script lang="ts">
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
	<h1 class="mb-4 text-2xl font-bold">Home Page</h1>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
		{#each products as product}
			<div class="rounded bg-white p-4 shadow">
				<h2 class="mb-2 text-lg font-semibold">{product.name}</h2>
				<p>{product.description}</p>
				<p class="font-bold text-green-600">{product.price} £</p>
				<img
					src={product.images[1]}
					alt={product.name}
					style="width: 20rem; border-radius: 10px;"
				/>
				<button
					class="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
					on:click={() => addToBag(product)}
				>
					Add to Bag
				</button>
			</div>
		{/each}
	</div>
</div>
