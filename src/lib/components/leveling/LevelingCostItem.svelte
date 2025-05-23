<script>
  import { images } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let id;
  const mora = ['mora-level', 'mora-ascension'].includes(id);

  export let imgSrc = mora ? 'mora' : id;
  export let count = -1;
  export let rarity = -1;
</script>

<div class="icon" class:empty={count < 1} class:mora>
  {#if count > 0}
    <Icon {id} src={$images[`/src/lib/img/leveling-cost/${imgSrc}.png`]} {rarity} size="30px" margin="0" />
    <div class="count">{count.toLocaleString('en-US')}</div>
  {:else}
    <div class="placeholder"></div>
  {/if}
</div>

<style lang="scss">
  .icon {
    min-width: 80px;
    height: 30px;
    display: flex;
    margin: 5px 10px;
    background-color: var(--theme-bg-highlight-alt);
    border-radius: 5px 5px 5px 5px;
    align-items: center;

    &.empty {
      background: none;

      @media only screen and (max-width: 960px) {
        display: none;
      }
    }

    &.mora {
      min-width: 100px;
    }

    .placeholder {
      width: 30px;
      height: 30px;
    }

    .count {
      font-size: 0.8rem;
      font-weight: bold;
      text-align: center;
      padding-left: 5px;
    }
  }
</style>
