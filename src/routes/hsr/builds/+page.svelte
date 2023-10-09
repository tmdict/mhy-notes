<script>
  import { slide } from 'svelte/transition';
  import { hsrBuildsFilters } from '@store/filterlist';
  import { hsr } from '@store/hsr';
  import { l10n, lang } from '@store/site';
  import Build from '$lib/components/hsr/Build.svelte';
  import BuildFilter from '$lib/components/hsr/BuildFilter.svelte';
  import HsrBuildFaqEn from '$lib/components/content/HsrBuildFaq/En.svelte';
  import HsrBuildFaqFaqZh from '$lib/components/content/HsrBuildFaq/Zh.svelte';

  const faq = { en: HsrBuildFaqEn, zh: HsrBuildFaqFaqZh };
  const filters = {
    path: ['harmony', 'hunt', 'nihility', 'preservation'],
    element: ['lightning', 'quantum'],
    stat: ['atk', 'crit', 'def', 'ehr', 'er', 'hp', 'lightning', 'quantum', 'res', 'spd'],
    relic: [
      'band-of-sizzling-thunder',
      'genius-of-brilliant-stars',
      'guard-of-wuthering-snow',
      'longevous-disciple',
      'musketeer-of-wild-wheat'
    ],
    ornament: [
      'fleet-of-the-ageless',
      'inert-salsotto',
      'space-sealing-station'
    ]
  }

  let showFilter = true;
  let showFaq = false;

  hsrBuildsFilters.init(['path', 'element', 'stat', 'relic', 'ornament']);
  Object.keys(filters).forEach(filterKey => {
    filters[filterKey].forEach((filterValue) => 
    hsrBuildsFilters.updateCommonFilter(filterKey, filterValue));
  });
</script>

<svelte:head>
  <title>HSR · {$l10n['character-builds'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>HSR · {$l10n['character-builds'][$lang]}</h1>

<div class="menu">
  <a href="/#" on:click|preventDefault={() => (showFilter = !showFilter)}
    >{$l10n['filters'][$lang]}
    {#if showFilter}-{:else}+{/if}</a
  >
  <span class="menu-separator" />
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a>
</div>

{#if showFaq}
  <div id="faq" transition:slide>
    <svelte:component this={faq[$lang]} />
  </div>
{/if}

{#if showFilter}
  <div class="filters" transition:slide>
    {#each Object.keys(filters) as filterKey}
      <BuildFilter filterHeader={filterKey} filterKey={filterKey} filter={filters[filterKey]} />
    {/each}
  </div>
{/if}

<div class="header sticky">
  <div class="content-row">
    <div class="col character">{$l10n['character'][$lang]}</div>
    <div class="col light-cone separator">{$l10n['light-cone'][$lang]}</div>
    <div class="col main-stat">{$l10n['mainstat'][$lang]}</div>
    <div class="col relic separator">{$l10n['relic'][$lang]}</div>
    <div class="col stats">{$l10n['stats-reference'][$lang]}</div>
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

  .stats {
    margin-left: 9px;
    width: 140px;
  }
}
</style>
