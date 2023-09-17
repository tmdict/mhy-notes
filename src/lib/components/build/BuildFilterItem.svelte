<script>
  import { buildsFilters } from '@store/filterlist';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let name;
  export let type;
  export let item;
  let isHover = '';
</script>

<li
  class:active={$buildsFilters[name].quick === item || $buildsFilters[name].common.includes(item)}
  on:mouseenter={() => (isHover = item)}
  on:mouseleave={() => (isHover = '')}
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
        size={isHover === item ? '60px' : '35px'}
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
  />
</li>

<style lang="scss">
  li {
    display: flex;
    font-size: 0.8em;
    align-items: center;
    border-bottom: 1px dotted var(--theme-border-menu);

    &.active {
      font-weight: bold;
      color: var(--theme-text-body-highlight);
    }
  }

  .quick {
    width: 95px;
    padding: 5px;
    border-right: 1px dotted var(--theme-border-menu);
    overflow-wrap: anywhere;

    &:hover {
      background: var(--theme-filter-hover-color);
      transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
      cursor: pointer;
    }

    &.active {
      background: var(--theme-filter-active-color);

      &:hover {
        background: var(--theme-filter-active-alt-color);
      }
    }

    &.list-icon {
      padding-left: 5px;
    }
  }

  .common {
    width: 35px;
    min-height: 30px;

    &.list-icon:hover {
      min-height: 70px;
    }

    &:hover {
      background: var(--theme-filter-hover-color);
      transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
      cursor: pointer;
    }

    &.active {
      background: var(--theme-filter-active-color);
      min-height: 45px;

      &:hover {
        background: var(--theme-filter-active-alt-color);
        min-height: 70px;
      }
    }
  }

  // Hover effect
  // Reference: https://codepen.io/techshiva/pen/VNmvWx

  @-webkit-keyframes pop-on-hover {
    50% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      border-right: none;
    }
  }
  @keyframes pop-on-hover {
    50% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      border-right: none;
    }
  }

  li:hover .quick,
  li:focus .quick,
  li:active .quick {
    -webkit-animation-name: pop-on-hover;
    animation-name: pop-on-hover;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    background: var(--theme-filter-hover-color);
  }
</style>
