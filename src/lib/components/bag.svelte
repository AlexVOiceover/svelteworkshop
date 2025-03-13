<script lang="ts">
	import { bagItems, bagItemCount } from '$lib/stores';
	$: total = $bagItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	function totalCartAmount() {
		return $bagItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	}

	function calculateTotal(): number {
		return $bagItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
	}

</script>

<div id="bag" class="rounded bg-gray-100 p-4 shadow">
	<h1 class="mb-4 text-lg font-semibold">Bag Items</h1>
	<ul>
		{#each $bagItems as item}
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
