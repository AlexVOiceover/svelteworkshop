<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Bag from './Bag.svelte';
	import type { Product } from '$lib/mockData';

	// Mock data for the bag component
	const mockItems: Product[] = [
		{
			id: '1',
			name: 'Spicy Dragon Noodles',
			category: 'Spicy',
			handle: 'spicy-dragon-noodles',
			price: 5.99,
			availableStock: 10,
			images: [
				'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp'
			],
			description: 'Spicy dragon noodles description',
			quantity: 2
		},
		{
			id: '2',
			name: 'Seaweed Whisper',
			category: 'Seafood',
			handle: 'seaweed-whisper',
			price: 6.49,
			availableStock: 5,
			images: [
				'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp'
			],
			description: 'Seaweed whisper description',
			quantity: 1
		}
	];

	const emptyItems: Product[] = [];

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/Bag',
		component: Bag,
		tags: ['autodocs']
	});
</script>

<Story name="With Items" args={{ items: mockItems }} />

<Story name="Empty Bag" args={{ items: emptyItems }} />