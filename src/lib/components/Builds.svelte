<script>
  import { builds, buildfilters } from '@store/builds';
  import { filters } from '@store/filterlist';
  import { localData } from '@store/localdata';
  import { l10n, lang } from '@store/site';
  import Build from '$lib/components/build/Build.svelte';
  import BuildFaqEn from '$lib/components/content/BuildFaq/En.svelte';
  import BuildFaqZh from '$lib/components/content/BuildFaq/Zh.svelte';
  import BuildFilter from '$lib/components/build/BuildFilter.svelte';
  import ManageData from '$lib/components/ManageData.svelte';

  let expandAll = false;
  let showFaq = false;
  let filteredBuilds = $builds;
  let filteredSavedBuilds = $localData['builds'];
  filters.init(Object.keys($buildfilters));
  const faq = { en: BuildFaqEn, zh: BuildFaqZh };

  $: {
    filteredBuilds = filterBuilds($builds, Object.values($filters));
    filteredSavedBuilds = filterBuilds($localData['builds'], Object.values($filters));
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

<div class="menu">
  <a href="/builds/edit">{$l10n['create-builds'][$lang]}</a>
  <span class="menu-separator" />
  <a
    href="/#"
    on:click|preventDefault={() => (showFaq = !showFaq)}
    on:keydown|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a
  >
  <span class="menu-separator" />
  <ManageData />
</div>
{#if showFaq}
  <div id="faq">
    <svelte:component this={faq[$lang]} />
  </div>
{/if}
<div id="character-builds">
  <div id="build-list">
    <div class="content-row header">
      <div class="content-row weapons">{$l10n['weapon'][$lang]}</div>
      <div class="content-row artifacts">{$l10n['artifact'][$lang]}</div>
    </div>
    {#if filteredSavedBuilds.length > 0}
      <div class="header"><h4>{$l10n['saved-builds'][$lang]}</h4></div>
      {#each filteredSavedBuilds as build, i}
        <Build {build} alt={i % 2 === 1} showDetail={expandAll} />
      {/each}
      <div class="header" />
      <div class="header" />
    {/if}
    {#each filteredBuilds as build, i}
      <Build {build} alt={i % 2 === 1} showDetail={expandAll} />
    {/each}
  </div>
  <div id="filter-list">
    <div class="expand-builds" on:click={() => (expandAll = !expandAll)} on:keydown={() => (expandAll = !expandAll)}>
      {#if !expandAll}
        <h4>{$l10n['expand-all'][$lang]}</h4>
      {:else}
        <h4>{$l10n['close-all'][$lang]}</h4>
      {/if}
    </div>
    {#each Object.entries($buildfilters) as [n, f]}
      <BuildFilter filter={{ name: n, type: f.type, filter: [...f.filter].sort() }} />
    {/each}
  </div>
</div>

<style lang="scss">
  #character-builds {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 20px;
  }

  #build-list {
    flex: 0 1 820px;
    display: flex;
    flex-direction: column;

    .header {
      font-size: 0.8rem;
      font-weight: bold;
      margin: 5px 4px 0;
      padding: 0 0 5px 5px;
      border-bottom: 1px solid var(--theme-divider);

      @media only screen and (max-width: 940px) {
        display: none;
      }

      .weapons {
        margin-left: 205px;
        width: 205px;
      }
    }
  }

  #filter-list {
    flex: 0 0 130px;
    display: flex;
    flex-direction: column;
    margin: 7px 0 0 5px;
    line-height: 1.4em;

    @media only screen and (max-width: 540px) {
      display: none;
    }

    .expand-builds {
      margin: 0 0 30px;
      border-bottom: 1px dotted var(--theme-border-menu);

      h4 {
        font-size: 0.85em;

        &:hover {
          color: var(--theme-primary-red);
          cursor: pointer;
        }
      }
    }
  }

  #faq {
    padding: 20px;
  }
</style>
