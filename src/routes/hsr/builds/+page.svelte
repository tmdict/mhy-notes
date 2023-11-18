<script>
  import { slide, fade } from 'svelte/transition';
  import { hsrBuildsFilters } from '@store/filterlist';
  import { hsr } from '@store/hsr';
  import { l10n, lang } from '@store/site';
  import Build from '$lib/components/hsr/Build.svelte';
  import BuildFilter from '$lib/components/hsr/BuildFilter.svelte';
  import HsrBuildFaqEn from '$lib/components/content/HsrBuildFaq/En.svelte';
  import HsrBuildFaqFaqZh from '$lib/components/content/HsrBuildFaq/Zh.svelte';

  const faq = { en: HsrBuildFaqEn, zh: HsrBuildFaqFaqZh };
  const filters = {
    element: {
      values: ['fire', 'ice', 'imaginary', 'lightning', 'physical', 'quantum', 'wind'],
      show: false,
    },
    path: {
      values: ['abundance', 'destruction', 'erudition', 'harmony', 'hunt', 'nihility', 'preservation'],
      show: false,
    },
    type: {
      values: ['dps',  'st', 'aoe', 'support', 'buff', 'debuff', 'sustain', 'shield', 'healer'],
      show: false,
    },
    relic: {
      values: [
        'band-of-sizzling-thunder',
        'champion-of-streetwise-boxing',
        'eagle-of-twilight-line',
        'firesmith-of-lava-forging',
        'genius-of-brilliant-stars',
        'guard-of-wuthering-snow',
        'hunter-of-glacial-forest',
        'knight-of-purity-palace',
        'longevous-disciple',
        'messenger-traversing-hackerspace',
        'musketeer-of-wild-wheat',
        'passerby-of-wandering-cloud',
        'prisoner-in-deep-confinement',
        'the-ashblazing-grand-duke',
        'thief-of-shooting-meteor',
        'wastelander-of-banditry-desert'
      ],
      show: true,
    },
    ornament: {
      values: [
        'belobog-of-the-architects',
        'broken-keel',
        'firmament-frontline-glamoth',
        'fleet-of-the-ageless',
        'inert-salsotto',
        'pan-cosmic-commercial-enterprise',
        'penacony-land-of-the-dreams',
        'rutilant-arena',
        'space-sealing-station',
        'talia-kingdom-of-banditry'
      ],
      show: true,
    },
    stat: {
      values: ['atk', 'breakeff', 'cdmg', 'cr', 'def', 'ehr', 'er', 'fire', 'heal', 'hp', 'ice', 'lightning', 'physical', 'quantum', 'res', 'spd', 'wind'],
      show: true,
    }
  }

  let expandAll = false;
  let showFaq = false;
  let filteredBuilds = $hsr.builds;

  // Init filterlist with filter keys
  hsrBuildsFilters.init(Object.keys(filters));

  $: filteredBuilds = $hsr.builds.filter((b) => {
    // Check each filter type
    for (const f of Object.values($hsrBuildsFilters)) {
      // If at least one filter is set
      if (f.common.length !== 0) {
        // If current entry has a tag that matches the filter
        if (f.common.some((t) => b.tags.has(t))) {
          continue; // Has a match for current filter, move on to next filter type
        } else {
          return false; // No match, short-circuit to next filter type
        }
      }
    }
    // Either there is a matching tag for ALL selected filters, or no filter selected
    return true;
  });

  function expandAllFilters() {
    expandAll = !expandAll;
    Object.keys(filters).forEach((key) => {
      filters[key].show = expandAll;
    })
  }
</script>

<svelte:head>
  <title>{$l10n['hsr'][$lang]} · {$l10n['builds'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['hsr'][$lang]} · {$l10n['builds'][$lang]}</h1>

<div class="menu">
  <a href="/#" on:click|preventDefault={() => expandAllFilters()}>
    {#if !expandAll}{$l10n['expand-all'][$lang]}{:else}{$l10n['close-all'][$lang]}{/if} {$l10n['filters'][$lang]}
  </a>
  <span class="menu-separator" />
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a>
</div>

{#if showFaq}
  <div id="faq" transition:slide>
    <svelte:component this={faq[$lang]} />
  </div>
{/if}

{#each Object.keys(filters) as filterKey}
  <BuildFilter filterHeader={filterKey} filterKey={filterKey} filter={filters[filterKey].values} showFilter={filters[filterKey].show} />
{/each}

<div class="header sticky">
  <div class="content-row">
    <div class="col character">{$l10n['character'][$lang]}</div>
    <div class="col light-cone separator">{$l10n['light-cone'][$lang]}</div>
    <div class="col main-stat">{$l10n['mainstat'][$lang]}</div>
    <div class="col relic separator">{$l10n['relic'][$lang]}</div>
    <div class="col stats">{$l10n['stats-reference'][$lang]}</div>
  </div>
</div>

{#each filteredBuilds as build, i}
  <div transition:fade>
    <Build {build} alt={i % 2 === 1} />
  </div>
{/each}

<style lang="scss">
  .sticky {
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    z-index: 1;
    top: 0;
    align-self: flex-start;
    background: var(--theme-bg-container-main);
  }

  .header {
    font-size: 0.9em;
    font-weight: bold;
    margin-top: 20px;
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
      width: 150px;
    }

    .relic {
      width: 131px;
    }

    .stats {
      margin-left: 9px;
      width: 140px;
    }
  }
</style>
