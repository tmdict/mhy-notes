<script>
  import Icon from '$lib/components/Icon.svelte';

  export let id;
  export let imgSrc = ['mora-level', 'mora-ascension'].includes(id) ? 'mora' : id;
  export let count = -1;
  export let rarity = -1;
</script>

<div class="icon">
  {#if count > 0}
    <Icon {id} src="leveling-cost/{imgSrc}" {rarity} size="50px" margin="0" />
    <div class="count">{count.toLocaleString('en-US')}</div>
  {:else}
    <div class="placeholder" />
  {/if}
</div>

<style lang="scss">
  .placeholder {
    width: 50px;
    height: 50px;
  }

  .icon {
    min-width: 50px;
    display: flex;
    position: relative;
    margin: 5px 15px;
  }

  .count {
    position: absolute;
    width: 100%;
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
    top: 42px;
    color: var(--theme-text-overlay);
    background-color: var(--theme-text-overlay-shadow);
    border-radius: 0 0 5px 5px;
  }
</style>
