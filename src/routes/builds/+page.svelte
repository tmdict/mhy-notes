<script>
  import { l10n, lang } from '@store/site';
  import Builds from '$lib/components/Builds.svelte';
</script>

<svelte:head>
  <title>{$l10n['character-builds'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['character-builds'][$lang]}</h1>

<Builds />
