<script>
  import { l10n, lang } from '@store/site';
  import MaterialBoss from '$lib/components/MaterialBoss.svelte';
  import MaterialDomain from '$lib/components/MaterialDomain.svelte';
</script>

<svelte:head>
  <title>{$l10n['upgrade-material'][$lang]} | Genshin TL;DR</title>
</svelte:head>

<MaterialDomain />
<MaterialBoss />
