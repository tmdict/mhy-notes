<script>
  import { characters, rarity } from '@store/gamedata';
  import { lang } from '@store/site';
  import IconEnhanced from '$lib/components/IconEnhanced.svelte';

  export let images;
  export let character;
  export let constellation;
  export let size = '50px';
</script>

<div class="content-row character">
  <IconEnhanced
    id={character}
    title={$characters[character] ? $characters[character].data[$lang].name : character}
    iconSrc={images[`/src/lib/img/character/${character}.png`]}
    rarity={$rarity[character]}
    {size}
    margin="0"
  />
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
