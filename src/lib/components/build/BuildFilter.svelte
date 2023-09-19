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
    <ul transition:slide={{ duration: 200 }}>
      <li>
        <div
          class="list-text"
          role="button"
          tabindex="0"
          on:click={() => buildsFilters.resetByType(filter.name)}
          on:keydown={() => buildsFilters.resetByType(filter.name)}
        >
          {$l10n['all'][$lang]}
        </div>
      </li>
      {#each filter.filter as item}
        <BuildFilterItem name={filter.name} type={filter.type} {item} />
      {/each}
      <li>
        <div class="list-text" on:click={() => buildsFilters.reset()} role="button" tabindex="0" on:keydown={() => buildsFilters.reset()}>
          {$l10n['clear-all'][$lang]}
        </div>
      </li>
    </ul>
  {/if}
</div>

<style lang="scss">
  .filter {
    margin-bottom: 25px;
  }

  h4 {
    font-size: 0.85em;
    border-bottom: 1px dotted var(--theme-border-light);

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

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      font-size: 0.8em;
      border-bottom: 1px dotted var(--theme-border-light);

      &:hover {
        background: var(--theme-bg-highlight);
        cursor: pointer;
      }

      .list-text {
        padding: 2px 5px;
      }
    }
  }
</style>
