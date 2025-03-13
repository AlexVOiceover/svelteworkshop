import type { Product } from '../lib/mockData';
import { writable } from 'svelte/store';

export type Language = 'EN' | 'ES' | 'IT';

export const bagItemCount = writable(0);
export const bagItems = writable<Product[]>([]);
export const language = writable<Language>('EN');
