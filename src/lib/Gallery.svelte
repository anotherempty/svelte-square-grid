<script>
  import { onMount } from "svelte";
  export let colCount = 4;
  export let gap = 0;
  export let itemCount = 0;
  export let breakpoints = [];

  let winWidth;
  let gridWidth;
  let itemSize = 0;

  const span = (node, { direction, amount }) => {
    let spanning = { row: "grid-row-end", col: "grid-column-end" }[direction];
    Object.assign(node.style, {
      [spanning]: `span ${amount}`,
    });
  };

  const checkBreakpoint = () => {
    if (breakpoints.length === 0) return;
    if (winWidth <= breakpoints[0].width) {
      colCount = breakpoints[0].colCount;
      gap = breakpoints[0].gap;
      return;
    }
    for (let i = 1; i < breakpoints.length; i++) {
      if (
        winWidth > breakpoints[i - 1].width &&
        winWidth <= breakpoints[i].width
      ) {
        colCount = breakpoints[i].colCount;
        gap = breakpoints[i].gap;
        return;
      }
    }
  };
  onMount(() => {
    checkBreakpoint();
  });

  $: itemSize = (gridWidth - gap * (colCount - 1)) / colCount;
</script>

<svelte:window on:resize={checkBreakpoint} bind:innerWidth={winWidth} />

<div
  class="grid"
  style="--grid-cols:{colCount}; --grid-gap:{gap}px; --item-height:{itemSize}px"
  bind:clientWidth={gridWidth}
>
  {#each { length: itemCount } as item, i}
    <slot name="item" {span} index={i} {itemSize}>
      <div>
        {i}
      </div>
    </slot>
  {/each}
</div>

<style>
  .grid {
    --grid-cols: 2;
    display: grid;
    grid-template-columns: repeat(var(--grid-cols), 1fr);
    gap: var(--grid-gap);
    grid-auto-rows: var(--item-height);
    grid-auto-flow: dense;
  }
</style>
