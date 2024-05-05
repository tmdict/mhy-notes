<script>
  import { l10n, lang } from '@store/site';

  export let stats;
  export let showHeader = true;
</script>

<div class="content-col stats">
  <div class="build-heading" class:hidden={!showHeader}>
    {$l10n['stats-priority'][$lang]} <span class="highlight">({$l10n['stats-reference'][$lang]})</span>
  </div>
  <ol>
    {#each stats as stat}
      {@const [id, value] = Object.entries(stat).flat()}
      <li>
        {$l10n[id] ? $l10n[id][$lang] : 'undefined'}{#if value !== ''}: <span class="highlight">{value}</span>{/if}
      </li>
    {/each}
  </ol>
</div>

<style lang="scss">
  .stats {
    width: 220px;

    @media only screen and (max-width: 460px) {
      width: 200px;
    }
  }

  ol {
    margin: 0;
    padding: 0 0 0 25px;

    li:not(:last-child) {
      padding: 1px 0;
      border-bottom: 1px dotted var(--theme-border-light);
    }
  }

  .hidden {
    display: none;
  }

  .highlight {
    color: var(--theme-site-secondary-main);
  }

  @media only screen and (max-width: 390px) {
    .build-heading .highlight {
      display: none;
    }
  }
</style>
