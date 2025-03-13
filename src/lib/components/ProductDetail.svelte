<script lang="ts">
	import type { Product } from '$lib/mockData';
	import { language } from '$lib/stores';

	export let product: Product;
	export let onAddToBag: (product: Product) => void;

	// Get the description based on selected language
	$: description = product.descriptions && product.descriptions[$language] 
		? product.descriptions[$language] 
		: product.description;

	// Localized strings
	$: categoryLabel = {
		'EN': 'Category',
		'ES': 'Categoría',
		'IT': 'Categoria'
	}[$language];

	$: availabilityLabel = {
		'EN': 'Availability',
		'ES': 'Disponibilidad',
		'IT': 'Disponibilità'
	}[$language];

	$: inStockLabel = {
		'EN': 'in stock',
		'ES': 'en stock',
		'IT': 'in magazzino'
	}[$language];

	$: outOfStockLabel = {
		'EN': 'Out of stock',
		'ES': 'Agotado',
		'IT': 'Esaurito'
	}[$language];

	$: addToBagLabel = {
		'EN': 'Add to Bag',
		'ES': 'Añadir a la Bolsa',
		'IT': 'Aggiungi alla Borsa'
	}[$language];
</script>

<div class="bg-white rounded-lg shadow-lg p-6">
	<div class="flex flex-col md:flex-row gap-8">
		<!-- Left column: Product images -->
		<div class="md:w-1/2">
			<img 
				src={product.images[1]} 
				alt={product.name} 
				class="w-full rounded-lg shadow-md"
			/>
			
			<div class="flex mt-4 gap-2 overflow-x-auto pb-2">
				{#each product.images as image}
					<img 
						src={image} 
						alt={product.name} 
						class="w-24 h-24 object-cover rounded border-2 border-gray-200 hover:border-blue-500 cursor-pointer"
					/>
				{/each}
			</div>
		</div>
		
		<!-- Right column: Product info -->
		<div class="md:w-1/2">
			<h1 class="text-3xl font-bold mb-2">{product.name}</h1>
			
			<div class="text-2xl font-bold text-green-600 mb-4">
				{product.price} £
			</div>
			
			<div class="mb-6">
				<p class="text-gray-700 mb-4">{description}</p>
				
				<div class="mb-4">
					<span class="font-semibold">{categoryLabel}:</span> {product.category}
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
				class="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
				on:click={() => onAddToBag(product)}
				disabled={product.availableStock === 0}
			>
				{product.availableStock > 0 ? addToBagLabel : outOfStockLabel}
			</button>
		</div>
	</div>
</div>