<script>
  import { slide } from 'svelte/transition';
  import { filters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';
  import BuildFilterItem from '$lib/components/build/BuildFilterItem.svelte';

  export let filter;
  let isCollapse = false;

  function updateCollapse() {
    isCollapse = !isCollapse;
  }
</script>

<div class="filter">
  <h4 class={isCollapse ? 'show' : 'collapse'} on:click={updateCollapse} on:keydown={updateCollapse}>
    {$l10n[filter.name][$lang]}
  </h4>
  {#if !isCollapse}
    <ul transition:slide={{ duration: 200 }}>
      <li>
        <div
          class="list-text"
          on:click={() => filters.resetByType(filter.name)}
          on:keydown={() => filters.resetByType(filter.name)}
        >
          {$l10n['all'][$lang]}
        </div>
      </li>
      {#each filter.filter as item}
        <BuildFilterItem name={filter.name} type={filter.type} {item} />
      {/each}
      <li>
        <div class="list-text" on:click={() => filters.reset()} on:keydown={() => filters.reset()}>
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
    border-bottom: 1px dotted var(--theme-border-menu);

    &:hover {
      cursor: pointer;
    }

    &.show:after {
      color: var(--theme-primary-red);
      content: ' + ';
    }

    &.collapse:after {
      color: var(--theme-primary-red);
      content: ' - ';
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      font-size: 0.8em;
      border-bottom: 1px dotted var(--theme-border-menu);

      &:hover {
        background: var(--theme-main-bg-hover);
        cursor: pointer;
      }

      .list-text {
        padding: 2px 5px;
      }
    }
  }
</style>
