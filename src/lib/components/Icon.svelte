<script>
  import { tooltip } from '$lib/util/tooltip';

  export let enhance = true;
  export let src;
  export let id;
  export let title = id;
  export let rarity = -1;
  export let size = '60px';
  export let margin = '10px';
  export let hasTooltip = false;
  export let tooltipContent = '';
</script>

<div
  class="icon {rarity === -1 ? '' : `rarity-${rarity}`}"
  style="--icon-margin: {margin}"
  use:tooltip={{
    enabled: hasTooltip,
    tippy: {
      content: tooltipContent,
      trigger: 'click',
      theme: 'custom',
      animation: 'scale-subtle',
      allowHTML: true
    }
  }}
>
  {#if enhance}
    <enhanced:img
      class="icon-img"
      src={src.default}
      {title} alt={id}
      style="--icon-size: {size}"
      loading="lazy"
    />
  {:else}
    <img class="icon-img" {src} {title} alt={id} style="--icon-size: {size}" loading="lazy" />
  {/if}
</div>

<style lang="scss">
  .icon {
    margin: var(--icon-margin, 10px);

    &.rarity-1 .icon-img,
    &.rarity-2 .icon-img,
    &.rarity-3 .icon-img,
    &.rarity-4 .icon-img,
    &.rarity-5 .icon-img,
    &.rarity-sp .icon-img {
      background-size: var(--icon-size, 60px);
    }

    .icon-img {
      width: var(--icon-size, 60px);
      height: var(--icon-size, 60px);
    }
  }
</style>
