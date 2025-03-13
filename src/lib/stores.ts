import type { Product } from '../lib/mockData';
import { writable } from 'svelte/store';
export const bagItemCount = writable(0);
export const bagItems = writable<Product[]>([]);
