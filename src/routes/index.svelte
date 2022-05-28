<script context="module">
	// @ts-ignore
	export async function load({ fetch }) {
		const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=5`);

		if (res.ok) {
			return {
				status: res.status,
				props: {
					images: (await res.json()).map((img) => ({
						src: img.download_url,
						width: img.width,
						height: img.height
					}))
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load`)
		};
	}
</script>

<script>
	import SquareGrid from '$lib/SquareGrid.svelte';
	import { span } from '$lib/span';

	export let images;
</script>

<a href="/test">test</a>

<SquareGrid itemCount={images.length}>
	<div
		slot="item"
		let:index
		use:span={{ direction: index % 3 === 0 ? 'col' : '', amount: 2 }}
		use:span={{ direction: index % 5 === 0 ? 'row' : '', amount: 2 }}
		let:itemSize
		style="border:1px solid red;"
	>
		<img src={images[index].src} alt={images[index].src} style="width:100%; height:100%; object-fit:cover;">
	</div>
</SquareGrid>

<style global>
	html,
	body {
		margin: 0;
		padding: 0;
	}
</style>
