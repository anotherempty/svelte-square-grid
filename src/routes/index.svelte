<script>
	import SquareGrid from '$lib/SquareGrid.svelte';
	import { span } from '$lib/span';
</script>

<SquareGrid itemCount={50}>
	<div
		slot="item"
		let:index
		use:span={{ direction: index % 3 === 0 ? 'col' : '', amount: 2 }}
		use:span={{ direction: index % 5 === 0 ? 'row' : '', amount: 2 }}
		let:itemSize
		style="border:1px solid red;"
	>
		{index} : {itemSize}
	</div>
</SquareGrid>

<style global>
	html,
	body {
		margin: 0;
		padding: 0;
	}
</style>
