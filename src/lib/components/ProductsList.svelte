<script lang="ts">
	import type { Product } from '$lib/mockData';
	import { goto } from '$app/navigation';

	export let products: Product[];
	export let onAddToBag: (product: Product) => void;

	function handleProductClick(product: Product) {
		goto(`/product/${product.handle}`);
	}
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
	{#each products as product}
		<div class="rounded bg-white p-4 shadow">
			<!-- Clickable product card heading and image -->
			<div 
				class="cursor-pointer" 
				on:click={() => handleProductClick(product)}
				on:keydown={(e) => e.key === 'Enter' && handleProductClick(product)}
				role="button"
				tabindex="0"
			>
				<h2 class="mb-2 text-lg font-semibold hover:text-blue-600">{product.name}</h2>
				<img
					src={product.images[1]}
					alt={product.name}
					style="width: 20rem; border-radius: 10px;"
					class="hover:opacity-90 transition-opacity"
				/>
				<p class="mt-2">{product.description.substring(0, 100)}...</p>
				<p class="font-bold text-green-600 mt-2">{product.price} £</p>
			</div>
			
			<!-- Add to bag button remains separate -->
			<button
				class="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				on:click={() => onAddToBag(product)}
			>
				Add to Bag
			</button>
		</div>
	{/each}
</div>