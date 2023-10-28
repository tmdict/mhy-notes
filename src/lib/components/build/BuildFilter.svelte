<script>
  import { slide } from 'svelte/transition';
  import { buildsFilters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';
  import BuildFilterItem from '$lib/components/build/BuildFilterItem.svelte';

  export let filter;
  let isCollapse = false;

  function updateCollapse() {
    isCollapse = !isCollapse;
  }
</script>

<div class="filter">
  <h4 class={isCollapse ? 'show' : 'collapse'} role="presentation" on:click={updateCollapse} on:keydown={updateCollapse}>
    {$l10n[filter.name][$lang]}
  </h4>
  {#if !isCollapse}
    <div class="content-row" transition:slide={{ duration: 200 }}>
      {#each filter.filter as item}
        <BuildFilterItem name={filter.name} type={filter.type} {item} />
      {/each}
      <a class="clearall" href="/#" on:click|preventDefault={() => buildsFilters.resetByType(filter.name)}>
        {$l10n['all'][$lang]}
      </a>
      ·
      <a class="clearall" href="/#" on:click|preventDefault={() => buildsFilters.reset()}>
        {$l10n['clear-all'][$lang]}
      </a>
    </div>
  {/if}
</div>

<style lang="scss">
  .filter {
    margin-bottom: 25px;

    .content-row {
      align-items: center;
    }

    h4 {
      font-size: 0.85em;
      margin-left: 5px;

      &:hover {
        cursor: pointer;
      }

      &.show:after {
        color: var(--theme-site-primary-alt);
        content: ' + ';
      }

      &.collapse:after {
        color: var(--theme-site-primary-alt);
        content: ' - ';
      }
    }

    .clearall {
      font-size: 0.9em;
      margin: 0 5px;
    }
  }
</style>
