<script lang="ts">
	import type { Product } from '$lib/mockData'; // Adjust the path according to your project structure

	export let items: Product[];

	function totalCartAmount() {
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}
</script>

<div class="rounded bg-gray-100 p-4 shadow">
	<h2 class="mb-2 text-lg font-semibold">Bag Items</h2>
	<ul>
		{#each items as item}
			<li class="flex justify-between py-1">
				<span>{item.name}</span>
				<span>{item.quantity} x</span>
				<span>{item.price} £</span>
			</li>
		{/each}

		<li class="flex justify-between py-1">
			<span>Total:</span>
			<span>{totalCartAmount()}</span>
		</li>
	</ul>
</div>
