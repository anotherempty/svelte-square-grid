# Svelte Square Grid

A simple square **based** grid for Svelte. <br> Can help you to easily create an image gallery like Artstation's, Windows 8 start menu, Android's photo gallery and more.
![demo screenshot](https://i.ibb.co/KGd0v5M/Opera-Snapshot-2022-05-28-222239-localhost.png)

[See the demo](https://anotherempty.github.io/svelte-square-grid/)

## Installation

```shell
npm install svelte-square-grid
```

## Usage

```svelte
<script>
import SquareGrid from 'svelte-square-grid';
</script>

<SquareGrid itemCount={50}>
  <div 
    slot="item" 
    let:index 
    let:itemSize
    style="border: 1px solid red;">
    {index}: {itemSize}
  </div>
</SquareGrid>
```

### Component Props

| Prop        | Type              | Default     | Description                                                           |
|-------------|-------------------|-------------|-----------------------------------------------------------------------|
| itemCount   | number            | 0           | number of items to insert inside the grid                             |
| colCount    | number            | 4           | number of columns                                                     |
| gap         | number            | 0           | gap size                                                              |
| breakpoints | Array\<Breakpoint> | [] | change grid display based on screen size, see below for an example |


```ts
interface Breakpoint {
	colCount: number;
	gap: number;
	width: number;
}
  
/** MUST be sorted along width in ascending order */
export let breakpoints = [
	{
		colCount: 2,
		gap: 0,
		width: 600 // 600px and below
	},
	{
		colCount: 3,
		gap: 0,
		width: 768 // between 601px and 768px
	},
	{
		colCount: 5,
		gap: 10,
		width: 992
	},
	{
		colCount: 6,
		gap: 10,
		width: 1200
	},
	{
		colCount: 8,
		gap: 10,
		width: Infinity // more than 1200px
	}
];
```

### Slot props

| Prop     | Type     | Description                                                         |
|----------|----------|---------------------------------------------------------------------|
| index    | number   | index of the item inside the grid                                   |
| itemSize | number   | size of a square inside of the grid : gridWidth / columnCount       |

### Spanning

A `span` *action* is available to set column and row spanning, takes `direction` and `amount` as parameters

```svelte
<script>
import SquareGrid, { span } from "svelte-square-grid";
</script>

<SquareGrid itemCount={50}>
  <div 
    slot="item"
    let:index
    use:span={{ direction: index % 3 === 0 ? "row" : "", amount: 2 }}
    use:span={{ direction: index % 5 === 0 ? "col" : "", amount: 2 }}
    style="border: 1px solid red;">
    {index}: {itemSize}
  </div>
</SquareGrid>

```

### Example

[See the REPL](https://svelte.dev/repl/5ab1e524a3fd4bdd9ae59377a019ebd4?version=3.48.0)

## License

Distributed under the [MIT License](https://github.com/anotherempty/svelte-square-grid/blob/master/LICENSE.txt).