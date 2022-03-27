<script>
  import { l10n, lang } from '@store/site';
  import ExportData from '$lib/components/ExportData.svelte';
  import ImportData from '$lib/components/ImportData.svelte';
  import ManageDataEn from '$lib/components/content/ManageData/En.svelte';
  import ManageDataZh from '$lib/components/content/ManageData/Zh.svelte';

  let show = false;
  const content = { en: ManageDataEn, zh: ManageDataZh };
</script>

<a href="/#" class="important" on:click|preventDefault={() => (show = !show)}>{$l10n['manage-data'][$lang]}</a>
{#if show}
  <div class="manage-data">
    <p>
      <ImportData /> · <ExportData />
    </p>
    <p class="tip">
      <svelte:component this={content[$lang]} />
    </p>
  </div>
{/if}

<style lang="scss">
  .important {
    color: var(--theme-primary-red);
  }

  .manage-data {
    text-align: center;
    max-width: 600px;
    min-width: 300px;
    margin: 10px auto;

    .tip {
      font-size: 0.9em;
    }
  }
</style>
