<script>
  import { lang } from '@store/site';
  import En from '$lib/components/content/Footer/En.svelte';
  import Zh from '$lib/components/content/Footer/Zh.svelte';

  const footer = { en: En, zh: Zh };
</script>

<svelte:component this={footer[$lang]} />
