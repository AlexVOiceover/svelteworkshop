<script lang="ts">
	import type { Product } from '$lib/mockData';
	import { language } from '$lib/stores';
	import type { Language } from '$lib/stores';

	export let product: Product;
	export let onAddToBag: (product: Product) => void;

	// Get the description based on selected language
	$: description =
		product.descriptions && product.descriptions[$language]
			? product.descriptions[$language]
			: product.description;

	// Localized strings
	$: categoryLabel = {
		EN: 'Category',
		ES: 'Categoría',
		IT: 'Categoria'
	}[$language];

	$: availabilityLabel = {
		EN: 'Availability',
		ES: 'Disponibilidad',
		IT: 'Disponibilità'
	}[$language];

	$: inStockLabel = {
		EN: 'in stock',
		ES: 'en stock',
		IT: 'in magazzino'
	}[$language];

	$: outOfStockLabel = {
		EN: 'Out of stock',
		ES: 'Agotado',
		IT: 'Esaurito'
	}[$language];

	$: addToBagLabel = {
		EN: 'Add to Bag',
		ES: 'Añadir a la Bolsa',
		IT: 'Aggiungi alla Borsa'
	}[$language];
</script>

<div class="rounded-lg bg-white p-6 shadow-lg">
	<div class="flex flex-col gap-8 md:flex-row">
		<!-- Left column: Product images -->
		<div class="md:w-1/2">
			<img src={product.images[1]} alt={product.name} class="w-full rounded-lg shadow-md" />

			<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
				{#each product.images as image}
					<img
						src={image}
						alt={product.name}
						class="h-24 w-24 cursor-pointer rounded border-2 border-gray-200 object-cover hover:border-blue-500"
					/>
				{/each}
			</div>
		</div>

		<!-- Right column: Product info -->
		<div class="md:w-1/2">
			<h1 class="mb-2 text-3xl font-bold">{product.name}</h1>

			<div class="mb-4 text-2xl font-bold text-green-600">
				{product.price} £
			</div>

			<div class="mb-6">
				<p class="mb-4 text-gray-700">{description}</p>

				<div class="mb-4">
					<span class="font-semibold">{categoryLabel}:</span>
					{product.category}
				</div>

				<div class="mb-4">
					<span class="font-semibold">{availabilityLabel}:</span>
					{#if product.availableStock > 0}
						<span class="text-green-600">{product.availableStock} {inStockLabel}</span>
					{:else}
						<span class="text-red-600">{outOfStockLabel}</span>
					{/if}
				</div>
			</div>

			<button
				class="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
				on:click={() => onAddToBag(product)}
				disabled={product.availableStock === 0}
			>
				{product.availableStock > 0 ? addToBagLabel : outOfStockLabel}
			</button>
		</div>
	</div>
</div>
