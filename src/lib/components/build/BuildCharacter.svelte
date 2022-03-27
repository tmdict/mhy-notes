<script>
  import { rarity } from '@store/gamedata';
  import Icon from '$lib/components/Icon.svelte';

  export let character;
  export let constellation;
  export let size = '50px';
</script>

<div class="content-row character">
  <Icon id={character} src="character/{character}" rarity={$rarity[character]} {size} margin="0" />
  {#if constellation > 0}<div class="overlay">{constellation}</div>{/if}
</div>

<style lang="scss">
  .character {
    position: relative;
  }

  .overlay {
    top: 37px;
    left: 41px;
  }
</style>
