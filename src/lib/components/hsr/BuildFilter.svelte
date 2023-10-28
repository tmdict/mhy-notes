<script>
  import { slide } from 'svelte/transition';
  import { hsrBuildsFilters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';

  export let filterHeader;
  export let filterKey;
  export let filter;
  export let showFilter;

  function addAll(filters, type) {
    hsrBuildsFilters.resetByType(type);
    filters.forEach((item) => hsrBuildsFilters.updateCommonFilter(type, item));
  }

  function isRelic(key) {
    return key === 'relic' || key === 'ornament';
  }
</script>

<h4><a href="/#" on:click|preventDefault={() => (showFilter = !showFilter)}
  >{filterHeader}
  <span class="show">{#if showFilter}-{:else}+{/if}</span></a
></h4>
{#if showFilter}
  <div class="content-row filter" transition:slide>
    {#each filter as key}
      <a class:active={$hsrBuildsFilters[filterKey].common.includes(key)} href="/#" on:click|preventDefault={() => hsrBuildsFilters.updateCommonFilter(filterKey, key)}>
        <div class="item">
          {#if !['stat', 'type'].includes(filterKey)}
            <img class={filterKey} src="/img/hsr/{filterKey}/{key}.png" title={key} alt={key} />
          {/if}
          {isRelic(filterKey) ? '' : $l10n[key][$lang]}
        </div>
      </a>
    {/each}
    <a href="/#" on:click|preventDefault={() => addAll(filter, filterKey)}>
      <div class="item">
        {$l10n['all'][$lang]}
      </div>
    </a>
    <a href="/#" on:click|preventDefault={() => hsrBuildsFilters.resetByType(filterKey)}>
      <div class="item">
        {$l10n['clear-all'][$lang]}
      </div>
    </a>
  </div>
{/if}

<style lang="scss">
  h4 {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 0.8em;
    
    a {
      color: var(--theme-site-primary-main);

      &:hover {
        color: var(--theme-site-primary-alt);
        text-decoration: none;
      }

      .show {
        color: var(--theme-site-primary-alt);
      }
    }
  }

  .filter {
    margin: 5px 15px 15px;

    a {
      display: flex;
      align-items: center;
      margin: 0 5px 5px 0;
      padding: 5px 10px;
      border: 1px solid var(--theme-border-light);

      &:hover {
        text-decoration: none;
        color: var(--theme-site-secondary-alt);
      }

      &.active {
        background-color: var(--theme-bg-container-alt);
        border: 1px solid var(--theme-site-primary-main);

        &:hover {
          background: var(--theme-bg-container-main);
        }
      }

      .item {
        display: flex;
        align-items: center;

        img {
          height: 20px;

          &.path,
          &.element {
            margin-right: 5px;
          }

          &.relic,
          &.ornament {
            height: 40px;
          }
        }
      }
    }
  }
</style>
