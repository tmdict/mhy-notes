<script>
  import lzstring from 'lz-string';
  import { browser } from '$app/environment';
  import { l10n, lang } from '@store/site';
  import BuildFullPage from '$lib/components/build/BuildFullPage.svelte';
  import { decodeBuild, extractBuild } from '$lib/util/codec';
  import { validator } from '$lib/util/validator';

  let build = {};
  let link = '';

  if (browser) {
    link = window.location.hash.substring(1);
    if (link.length > 0) {
      try {
        build = decodeBuild(extractBuild(lzstring.decompressFromEncodedURIComponent(link)));
      } catch (err) {
        console.log(`Decode failed: ${err}`);
      }
    }
  }
</script>

<svelte:head>
  {#if validator.validateBuild(build, $lang)}
    <title>{build.name[$lang]} | mHY-notes</title>
  {/if}
</svelte:head>

{#if validator.validateBuild(build, $lang)}
  <BuildFullPage {build} {link} />
{/if}
