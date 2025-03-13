<script lang="ts">
	import './ProductCard.css';

	interface Props {
		productName: string;
		productImage: string;
		productPrice: number;
	}

	const { productName, productImage, productPrice }: Props = $props();
</script>

<h1>this si a product Card</h1>
<h2>{productName}</h2>
<img src={productImage} alt={productName} />
<p>{productPrice} + '£'</p>
