<script lang="ts">
	import { bagItems as storeBagItems } from '$lib/stores';
	import type { Product } from '$lib/mockData';
	
	export let items: Product[] = [];
	
	// Use passed items or store items
	$: displayItems = items.length > 0 ? items : $storeBagItems;
	
	function calculateTotal(): number {
		return displayItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	}
</script>

<div id="bag" class="rounded bg-gray-100 p-4 shadow">
	<h1 class="mb-4 text-lg font-semibold">Bag Items</h1>
	<ul>
		{#each displayItems as item}
			<li class="flex justify-between py-1">
				<span>{item.name}</span>
				<span>{item.quantity} x</span>
				<span>{item.price} £</span>
			</li>
		{/each}
	</ul>
	<div class="mt-4 text-lg font-semibold">
		Total: £{calculateTotal()} 
	</div>
</div>
