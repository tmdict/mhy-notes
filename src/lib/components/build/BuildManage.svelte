<script>
  import { toast } from '@zerodevx/svelte-toast';
  import lzstring from 'lz-string';
  import { browser } from '$app/environment';
  import { localData } from '@store/localdata';
  import { l10n, lang, toastOption } from '@store/site';
  import { compressBuild, encodeBuild } from '$lib/util/codec';

  export let build;
  let encoded = '';
  try {
    encoded = lzstring.compressToEncodedURIComponent(compressBuild(encodeBuild(build)));
  } catch (err) {
    console.log(`Failed to generate build link: ${err}`);
  }

  function deleteBuild() {
    try {
      const afterDeletion = $localData['builds'].filter((b) => b.id != build.id);
      $localData = { ...$localData, builds: afterDeletion };
      if (browser) {
        localStorage.setItem('tmdict.genshin.data', JSON.stringify($localData));
      }
      toast.push('Build deleted.', $toastOption['success']);
    } catch (err) {
      toast.push(`Something went wrong: ${err}`, $toastOption['error']);
    }
  }
</script>

<div class="menu manage">
  <a href="/builds/build#{encoded}">{$l10n['link'][$lang]}</a>
  <span class="menu-separator" />
  <a href="/builds/edit#{encoded}">{$l10n['edit'][$lang]}</a>
  {#if 'id' in build}
    <span class="menu-separator" />
    <a href="/#" on:click|stopPropagation|preventDefault={deleteBuild}>{$l10n['delete'][$lang]}</a>
  {/if}
</div>

<style lang="scss">
  .manage {
    width: 100%;
    border-top: 1px dotted var(--theme-border-light);
  }
</style>
