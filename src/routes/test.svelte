<script>
	import SquareGrid from '$lib/SquareGrid.svelte';
	import { span } from '$lib/span';

	let items = { length: 30 };

	let scrollY = 0;
	let winHeight = 0;
	let bodyHeight = 0;

	function autoload() {
		if (scrollY > 0 && winHeight > 0) {
			console.log(scrollY, winHeight, bodyHeight, scrollY + winHeight);
			if (Math.ceil(scrollY + winHeight) >= bodyHeight) {
				items.length += 5;
			}
		}
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={winHeight} on:scroll={autoload} />

<a href="/">home</a>

<div bind:clientHeight={bodyHeight}>
	<SquareGrid itemCount={items.length}>
		<div slot="item" let:index let:itemSize style="border:1px solid red;">
			{index}
		</div>
	</SquareGrid>
</div>

<style global>
	html,
	body {
		margin: 0;
		padding: 0;
	}
</style>
