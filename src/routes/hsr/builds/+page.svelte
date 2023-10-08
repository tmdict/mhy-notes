<script>
  import { hsr } from '@store/hsr';
  import { l10n, lang } from '@store/site';
  import Build from '$lib/components/hsr/Build.svelte';
</script>

<svelte:head>
  <title>HSR · {$l10n['character-builds'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>HSR · {$l10n['character-builds'][$lang]}</h1>

<div class="header sticky">
  <div class="content-row">
    <div class="col character">{$l10n['character'][$lang]}</div>
    <div class="col light-cone separator">{$l10n['light-cone'][$lang]}</div>
    <div class="col main-stat">{$l10n['mainstat'][$lang]}</div>
    <div class="col relic separator">{$l10n['relic'][$lang]}</div>
    <div class="col reference-stats">{$l10n['reference-stats'][$lang]}</div>
  </div>
</div>

{#each $hsr.builds as build, i}
  <Build {build} alt={i % 2 === 1} />
{/each}

<style lang="scss">

.sticky {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start;
  background: var(--theme-bg-container-main);
}

.header {
  font-size: 0.9em;
  font-weight: bold;
  border-top: 1px solid var(--theme-site-primary-main);
  border-bottom: 1px solid var(--theme-site-primary-main);

  @media only screen and (max-width: 960px) {
    display: none;
  }

  .col {
    width: 75px;
    padding: 3px 5px;
  }

  .separator {
    border-right: 1px dotted var(--theme-border-light);
    margin-right: 10px;

    @media only screen and (max-width: 960px) {
      border-right: 0;
      margin-right: 0;
    }
  }

  .character {
    margin-left: 115px;
    width: 120px;
  }

  .light-cone {
    width: 216px;
  }

  .main-stat {
    width: 130px;
  }

  .relic {
    width: 121px;
  }

  .reference-stats {
    margin-left: 10px;
    width: 140px;
  }
}
</style>
