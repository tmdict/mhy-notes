<script>
  import { l10n, lang } from '@store/site';

  export let type;
  export let stats;
</script>

<div class="content-row mainstat">
  <div class="icon">
    <img src="/img/artifact-piece/{type}.png" alt={type} />
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
    padding: 4px 0;

    .icon {
      margin: 0 5px 0 2px;

      img {
        width: 20px;
        background: #999;
      }
    }
  }
</style>
