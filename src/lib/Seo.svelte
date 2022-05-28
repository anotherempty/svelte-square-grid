<script>
  import SvelteSeo from "svelte-seo";

  let title = "Svelte Square Grid";
  let description =
    "A simple square based grid for Svelte. Can help you to easily create an image gallery like Artstation's, Windows 8 start menu, Android's photo gallery and more.";
</script>

<SvelteSeo
  {title}
  {description}
  keywords="svelte, svelte-component, square, grid, image gallery"
  openGraph={{
    title: title,
    description: description,
    url: "https://anotherempty.github.io/svelte-square-grid/",
    type: "website",
    images: [
      {
        url: "https://www.example.com/images/og-image.jpg",
        width: 850,
        height: 650,
        alt: "Example",
      },
    ],
  }}
/>
