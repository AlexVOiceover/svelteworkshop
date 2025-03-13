<script lang="ts">
	import type { Product } from '$lib/mockData'; // Adjust the path according to your project structure

	export let items: Product[];
</script>

<div class="rounded bg-gray-100 p-4 shadow">
	<h2 class="mb-2 text-lg font-semibold">Bag Items</h2>
	<ul>
		{#each items as item}
			<li class="flex justify-between py-1">
				<span>{item.name}</span>
				<span>{item.price} £</span>
			</li>
		{/each}
	</ul>
</div>
