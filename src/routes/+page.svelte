<script>
  import { lang } from '@store/site';
  import En from '$lib/components/content/Top/En.svelte';
  import Zh from '$lib/components/content/Top/Zh.svelte';

  const top = { en: En, zh: Zh };
</script>

<svelte:head>
  <title>Genshin TL;DR</title>
</svelte:head>

<h1>TL;DR</h1>

<svelte:component this={top[$lang]} />

<style lang="scss">
  h1 {
    text-align: center;
    padding-left: 20px;
  }
</style>
