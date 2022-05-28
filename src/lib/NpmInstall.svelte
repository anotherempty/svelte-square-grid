<script>
  import { fade } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import { clipboard } from "svelte-copy-clipboard-action";

  let npmInstall = "npm i svelte-square-grid";

  let copied = false;
</script>

<div class="">
  <div class="inline-block relative pointer-events-auto">
    <code
      use:clipboard={{ trigger: "click", text: npmInstall }}
      on:copied={() => {
        copied = true;
        setTimeout(() => {
          copied = false;
        }, 2500);
      }}
      class="px-6 py-4 bg-black inline-block cursor-pointer"
    >
      {npmInstall}
    </code>
    {#if copied}
      <div
        in:fade={{ duration: 170 }}
        out:fade={{ duration: 1500, easing: expoOut }}
        class="absolute right-0 top-0 px-6 py-4 w-full text-center bg-black"
      >
        Copied !
      </div>
    {/if}
  </div>
</div>
