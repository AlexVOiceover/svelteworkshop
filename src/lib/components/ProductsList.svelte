<script lang="ts">
	import type { Product } from '$lib/mockData';

	export let products: Product[];
	export let onAddToBag: (product: Product) => void;
</script>

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
				on:click={() => onAddToBag(product)}
			>
				Add to Bag
			</button>
		</div>
	{/each}
</div>