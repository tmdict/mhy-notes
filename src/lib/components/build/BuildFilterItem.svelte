<script>
  import { buildsFilters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let name;
  export let type;
  export let item;
</script>

<div class="filter-item"
  class:active={$buildsFilters[name].quick === item || $buildsFilters[name].common.includes(item)}
  role="presentation"
>
  <div
    class="quick list-{type === 'icon' ? 'icon' : 'text'}"
    class:active={$buildsFilters[name].quick === item}
    role="button"
    tabindex="0"
    on:click={() => buildsFilters.updateQuickFilter(name, item)}
    on:keydown={() => buildsFilters.updateQuickFilter(name, item)}
  >
    {#if type === 'icon'}
      <Icon
        id={item}
        src="{name}/{item}"
        ext={name === 'vision' ? 'svg' : 'png'}
        size="35px"
        margin="0"
      />
    {:else}
      {$l10n[item][$lang]}
    {/if}
  </div>
  <div
    class="common list-{type}"
    class:active={$buildsFilters[name].common.includes(item)}
    role="button"
    tabindex="0"
    on:click={() => buildsFilters.updateCommonFilter(name, item)}
    on:keydown={() => buildsFilters.updateCommonFilter(name, item)}
  ></div>
</div>

<style lang="scss">
  .filter-item {
    display: flex;
    font-size: 0.8em;
    margin: 5px;
    align-items: stretch;
    border: 1px solid var(--theme-border-light);

    &.active {
      font-weight: bold;
      color: var(--theme-site-primary-main);
      border: 1px solid var(--theme-site-primary-main);
    }

    .quick {
      padding: 2px 5px;
      min-width: 60px;
      border-right: 1px dotted var(--theme-border-light);
      overflow-wrap: anywhere;

      &:hover {
        background: var(--theme-bg-highlight);
        cursor: pointer;
      }

      &.active {
        background: var(--theme-bg-highlight);

        &:hover {
          background: var(--theme-bg-highlight);
        }
      }
    }

    .common {
      width: 35px;

      &:hover {
        background: var(--theme-bg-highlight);
        cursor: pointer;
      }

      &.active {
        background: var(--theme-bg-highlight);
      }
    }
  }
</style>
