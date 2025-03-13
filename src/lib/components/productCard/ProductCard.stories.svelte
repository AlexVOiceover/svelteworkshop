<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ProductCard from './ProductCard.svelte';

  // Set up stories for ProductCard
  const { Story } = defineMeta({
    title: 'Components/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    argTypes: {
      productName: { control: 'text' },
      productImage: { control: 'text' },
      productPrice: { control: 'number' },
    }
  });
</script>

<!-- Default product card story -->
<Story 
  name="Default" 
  args={{ 
    productName: 'Sample Product', 
    productImage: 'https://picsum.photos/200/300', 
    productPrice: 99.99 
  }} 
/>

<!-- Expensive product -->
<Story 
  name="Expensive" 
  args={{ 
    productName: 'Premium Product', 
    productImage: 'https://picsum.photos/200/300', 
    productPrice: 999.99 
  }} 
/>

<!-- Budget product -->
<Story 
  name="Budget" 
  args={{ 
    productName: 'Budget Product', 
    productImage: 'https://picsum.photos/200/300', 
    productPrice: 9.99 
  }} 
/>