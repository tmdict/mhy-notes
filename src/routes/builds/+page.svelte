<script>
  import { slide } from 'svelte/transition';
  import { builds, buildfilters } from '@store/builds';
  import { buildsFilters } from '@store/filterlist';
  import { localData } from '@store/localdata';
  import { l10n, lang } from '@store/site';
  import Build from '$lib/components/build/Build.svelte';
  import BuildFaqEn from '$lib/components/content/BuildFaq/En.svelte';
  import BuildFaqZh from '$lib/components/content/BuildFaq/Zh.svelte';
  import BuildFilter from '$lib/components/build/BuildFilter.svelte';
  import ManageData from '$lib/components/ManageData.svelte';

  let expandAllFilters = true;
  let showFaq = false;
  let filteredBuilds = $builds;
  let filteredSavedBuilds = $localData['builds'];
  buildsFilters.init(Object.keys($buildfilters));
  const faq = { en: BuildFaqEn, zh: BuildFaqZh };

  $: {
    filteredBuilds = filterBuilds($builds, Object.values($buildsFilters));
    filteredSavedBuilds = filterBuilds($localData['builds'], Object.values($buildsFilters));
  }

  function filterBuilds(list, filters) {
    return list.filter((b) => {
      // Check each filter type
      for (const f of filters) {
        // If at least one filter is set
        if (f.quick !== '' || f.common.length !== 0) {
          // If current entry has a tag that matches the filter
          if (b.tags.some((t) => f.quick === t || f.common.includes(t))) {
            continue; // Has a match for current filter, move on to next filter type
          } else {
            return false; // No match, short-circuit to next filter type
          }
        }
      }
      // Either there is a matching tag for ALL selected filters, or no filter selected
      return true;
    });
  }
</script>

<svelte:head>
  <title>{$l10n['character-builds'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['character-builds'][$lang]}</h1>

<div class="menu">
  <a href="/#" class={expandAllFilters ? 'show' : 'collapse'} on:click|preventDefault={() => expandAllFilters = !expandAllFilters}>
    {#if !expandAllFilters}{$l10n['expand-all'][$lang]}{:else}{$l10n['close-all'][$lang]}{/if} {$l10n['filters'][$lang]}
  </a>
  <span class="menu-separator"></span>
  <a href="/builds/edit">{$l10n['create-builds'][$lang]}</a>
  <span class="menu-separator"></span>
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a>
  <span class="menu-separator"></span>
  <ManageData />
</div>
{#if showFaq}
  <div id="faq">
    <svelte:component this={faq[$lang]} />
  </div>
{/if}
<div id="content">
  {#if expandAllFilters}
    <div id="filter-list" transition:slide={{ duration: 200 }}>
      {#each Object.entries($buildfilters) as [n, f]}
        <BuildFilter filter={{ name: n, type: f.type, filter: [...f.filter].sort() }} />
      {/each}
    </div>
  {/if}
  <div id="build-list">
    <div class="content-row header">
      <div class="content-row weapons">{$l10n['weapon'][$lang]}</div>
      <div class="content-row mainstats">{$l10n['mainstat'][$lang]}</div>
      <div class="content-row substats">{$l10n['stats-priority'][$lang]}</div>
      <div class="content-row artifacts">{$l10n['artifact'][$lang]}</div>
    </div>
    {#if filteredSavedBuilds.length > 0}
      <div class="header"><h4>{$l10n['saved-builds'][$lang]}</h4></div>
      {#each filteredSavedBuilds as build, i}
        <Build {build} alt={i % 2 === 1} />
      {/each}
      <div class="header"></div>
      <div class="header"></div>
    {/if}
    {#each filteredBuilds as build, i (build.character + build.name.en)}
      <Build {build} alt={i % 2 === 1} />
    {/each}
  </div>
</div>

<style lang="scss">
  .menu a {
    &.show:after {
      color: var(--theme-site-primary-alt);
      content: ' + ';
    }

    &.collapse:after {
      color: var(--theme-site-primary-alt);
      content: ' - ';
    }
  }

  #content {
    display: flex;
    flex-flow: column nowrap;
  }

  #filter-list {
    flex: 0 0 130px;
    display: flex;
    flex-direction: column;
    margin: 7px 0 0 5px;
    line-height: 1.4em;
  }

  #build-list {
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;

    .header {
      font-size: 0.8rem;
      font-weight: bold;
      margin: 5px 4px 0;
      border-top: 1px solid var(--theme-site-primary-main);
      border-bottom: 1px solid var(--theme-site-primary-main);

      @media only screen and (max-width: 940px) {
        display: none;
      }

      .weapons {
        margin-left: 160px;
        padding: 5px 0;
      }

      .mainstats {
        margin-left: 71.5px;
        padding: 5px 0;
        padding-left: 15px;
        border-left: 1px dotted var(--theme-border-light);
      }

      .substats {
        margin-left: 85px;
        padding: 5px 0;
      }

      .artifacts {
        margin-left: 106.5px;
        padding: 5px 0;
        padding-left: 25px;
        border-left: 1px dotted var(--theme-border-light);
      }
    }
  }
</style>
