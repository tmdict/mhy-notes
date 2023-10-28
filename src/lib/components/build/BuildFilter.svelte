<script>
  import { slide } from 'svelte/transition';
  import { buildsFilters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';
  import BuildFilterItem from '$lib/components/build/BuildFilterItem.svelte';

  export let filter;
</script>

<div class="filter">
  <h4>{$l10n[filter.name][$lang]}</h4>
  <div class="content-row">
    {#each filter.filter as item}
      <BuildFilterItem name={filter.name} type={filter.type} {item} />
    {/each}
    <a class="clear" href="/#" on:click|preventDefault={() => buildsFilters.resetByType(filter.name)}>
      {$l10n['clear'][$lang]}
    </a>
    ·
    <a class="clear" href="/#" on:click|preventDefault={() => buildsFilters.reset()}>
      {$l10n['clear-all'][$lang]}
    </a>
  </div>
</div>

<style lang="scss">
  h4 {
    font-size: 0.85em;
    margin-left: 5px;
  }

  .filter {
    margin-bottom: 25px;

    .content-row {
      align-items: center;
    }

    .clear {
      font-size: 0.9em;
      margin: 0 5px;
    }
  }
</style>
