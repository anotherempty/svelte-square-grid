<script>
  import Seo from "./lib/Seo.svelte";

  import Gallery from "svelte-square-grid";
  import ImageItem from "./lib/ImageItem.svelte";

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
      width: 700, // 600px and below
    },
    {
      colCount: 3,
      gap: 0,
      width: 1100,
    },
    {
      colCount: 5,
      gap: 0,
      width: Infinity, // more than 1200px
    },
  ];
</script>

<Seo />

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
  }
</style>
