<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from '@storybook/test';
	import ProductsList from './ProductsList.svelte';
	import type { Product } from '$lib/mockData';

	// Mock data for the products list component
	const mockProducts: Product[] = [
		{
			id: '1',
			name: 'Spicy Dragon Noodles',
			category: 'Spicy',
			handle: 'spicy-dragon-noodles',
			price: 5.99,
			availableStock: 10,
			images: [
				'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
				'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
			],
			description:
				'Experience the fiery blast of the Spicy Dragon Noodles, which bring a warming heat that dances on your palate with a distinctive blend of peppers and spices for an unforgettable noodle experience.'
		},
		{
			id: '2',
			name: 'Seaweed Whisper',
			category: 'Seafood',
			handle: 'seaweed-whisper',
			price: 6.49,
			availableStock: 0,
			images: [
				'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
				'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
			],
			description:
				"Dive into the ocean's embrace with Seaweed Whisper, instant noodles that capture the subtle sweetness of seaweed and the savory essence of seafood in every bite."
		}
	];

	// Mock function for goto navigation in Storybook
	// In actual app, this would navigate to product details
	window.goto = fn();

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/ProductsList',
		component: ProductsList,
		tags: ['autodocs'],
		args: {
			onAddToBag: fn()
		},
		// Add a decorator to mock the navigation for Storybook
		decorators: [
			(story) => {
				// Mock the $app/navigation module for Storybook
				// This prevents routing errors in the story
				if (typeof window !== 'undefined') {
					window.goto = (url) => {
						console.log(`Would navigate to: ${url}`);
						return Promise.resolve();
					};
				}
				return story();
			}
		]
	});
</script>

<Story name="Default" args={{ products: mockProducts }} />

<Story name="Empty" args={{ products: [] }} />