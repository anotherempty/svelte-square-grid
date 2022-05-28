<script>
  import Seo from "./lib/Seo.svelte";

  import Gallery from "svelte-square-grid";
  import ImageItem from "./lib/ImageItem.svelte";
  import NpmInstall from "./lib/NpmInstall.svelte";

  import InfiniteLoading from "svelte-infinite-loading";

  let images = [];
  let page = 1;

  function infiniteHandler({ detail: { loaded, complete } }) {
    let limit = 20;
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          page += 1;
          images = images.concat(data);
          loaded();
        } else {
          complete();
        }
      });
  }

  let breakpoints = [
    {
      colCount: 2,
      gap: 0,
      width: 700,
    },
    {
      colCount: 3,
      gap: 0,
      width: 1100,
    },
    {
      colCount: 5,
      gap: 0,
      width: 1980,
    },
    {
      colCount: 10,
      gap: 0,
      width: Infinity,
    },
  ];
</script>

<Seo />

<div
  class="head absolute z-10 w-full text-white text-center p-6 pointer-events-none"
>
  <h1 class="text-5xl">Svelte Square Grid</h1>
  <div class="text-white pointer-events-auto my-6">
    <a
      href="https://github.com/anotherempty/svelte-square-grid"
      class="hover:underline">See on Github</a
    >
  </div>
  <NpmInstall />
</div>

<Gallery itemCount={images.length} gap={0} colCount={5} {breakpoints}>
  <ImageItem
    slot="item"
    let:index
    let:itemSize
    imgUrl={`https://picsum.photos/id/${images[index].id}/${Math.ceil(
      itemSize
    )}`}
    author={images[index].author}
  />
</Gallery>

<InfiniteLoading on:infinite={infiniteHandler} />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    position: relative;
  }

  .head {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
