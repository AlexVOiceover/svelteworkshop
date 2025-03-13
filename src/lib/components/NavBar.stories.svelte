<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NavBar from './NavBar.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Components/NavBar',
		component: NavBar,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />