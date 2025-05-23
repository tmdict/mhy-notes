<script>
  import { images, l10n, lang } from '@store/site';

  export let type;
  export let stats;
</script>

<div class="content-row mainstat">
  <div class="icon">
    <enhanced:img class="piece-img" src={$images[`/src/lib/img/artifact-piece/${type}.png`].default} alt={type} />
  </div>
  <div>
    {#each stats as stat, i}
      {i !== 0 ? ' · ' : ''}{$l10n[stat] ? $l10n[stat][$lang] : 'undefined'}
    {/each}
  </div>
</div>

<style lang="scss">
  .mainstat {
    align-items: center;
    padding: 2px 0;

    .icon {
      margin: 0 5px 0 2px;

      .piece-img {
        width: 17px;
        height: 17px;
      }
    }
  }
</style>
