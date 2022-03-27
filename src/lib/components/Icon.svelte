<script>
  import { tooltip } from '$lib/util/tooltip';

  export let id;
  export let title = id;
  export let src;
  export let rarity = -1;
  export let size = '60px';
  export let margin = '10px';
  export let ext = 'png';
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
  <img src="/img/{src}.{ext}" {title} alt={id} style="--icon-size: {size}" />
</div>

<style lang="scss">
  .icon {
    margin: var(--icon-margin, 10px);

    &.rarity-1 img,
    &.rarity-2 img,
    &.rarity-3 img,
    &.rarity-4 img,
    &.rarity-5 img,
    &.rarity-sp img {
      background-size: var(--icon-size, 60px);
    }

    img {
      width: var(--icon-size, 60px);
    }
  }
</style>
