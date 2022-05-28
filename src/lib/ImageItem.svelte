<script>
  import randomWords from "random-words";
  import { rand, randHexColor, capitalize } from "./helpers";

  const sprites = [
    "male",
    "female",
    "human",
    "identicon",
    "initials",
    "bottts",
    "avataaars",
    "jdenticon",
    "gridy",
    "micah",
  ];

  export let imgUrl;
  export let author;
  let avatarUrl = `https://avatars.dicebear.com/api/${
    sprites[rand(sprites.length - 1)]
  }/${author}.svg?background=%23${randHexColor()}`;

  const formaters = [capitalize, (word) => word, (word) => word.toUpperCase()];

  const formater = formaters[rand(formaters.length)];
</script>

<div class="item relative" let:index let:itemSize>
  <img src={imgUrl} alt={imgUrl} class="object-cover w-full h-full" />
  <div
    class="desc absolute bottom-0 h-full w-full flex items-end"
    style="position: absolute; bottom:0; height: 100%; width: 100%; display:flex; align-items:end;"
  >
    <div class="w-full flex items-start p-3">
      <img
        src={avatarUrl}
        alt={author}
        style="width:2.5em; height: 2.5em; border-radius: 50%;"
      />
      <div class="text-white px-3">
        <div class="text-xl leading-6 -mt-1">
          {randomWords({
            min: 1,
            max: 5,
            formatter: formater,
          }).join(" ")}
        </div>
        <div class="text-sm">
          {author}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .item:hover > .desc {
    opacity: 1;
  }
  .desc {
    opacity: 0;
    transition: opacity 175ms linear;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 70%
    );
  }
</style>
