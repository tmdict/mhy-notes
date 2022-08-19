<script>
  import Fuse from 'fuse.js';
  import cloneDeep from 'lodash.clonedeep';
  import { achievements } from '@store/gamedata';
  import { localData } from '@store/localdata';
  import { l10n, lang } from '@store/site';
  import CommissionAchievement from '$lib/components/CommissionAchievement.svelte';
  import ManageData from '$lib/components/ManageData.svelte';
  import { highlight } from '$lib/util/highlight';

  let searchTerm = '';
  let filters = ['mondstadt', 'liyue', 'inazuma'];

  let filteredList = cloneDeep($achievements);
  let currentFilter = { field: '', value: '' };
  let sortByCompletion = false;

  const searchOptions = {
    includeMatches: true,
    minMatchCharLength: 2,
    findAllMatches: true,
    shouldSort: true,
    distance: 20
  };

  $: {
    // 1. filter by search
    if (searchTerm !== '') {
      // Update what language to search for
      const fuse = new Fuse($achievements, {
        ...searchOptions,
        keys: [$lang + '.name', $lang + '.commission', $lang + '.description']
      });
      const results = fuse.search(searchTerm);
      if (results.length > 0) {
        // Highlight and return search results
        // Deep clone results so highlight doesn't modify original results
        filteredList = highlight(cloneDeep(results));
      }
    } else {
      filteredList = cloneDeep($achievements);
    }
    // 2. filter by static filters
    filteredList =
      currentFilter.field == ''
        ? filteredList
        : cloneDeep(filteredList.filter((achievement) => achievement[currentFilter.field] === currentFilter.value));
    // 3. Sort
    filteredList = sortByCompletion ? sortBy(filteredList, 'achievements') : sortBy(filteredList, 'version');
  }

  function sortBy(list, sortField) {
    if (sortField === 'achievements') {
      return list.sort((b, a) => {
        const aComplete = Object.values($localData['achievements'][a.achievement]).every((c) => c === true);
        const bComplete = Object.values($localData['achievements'][b.achievement]).every((c) => c === true);
        return aComplete === bComplete ? 0 : aComplete ? -1 : 1;
      });
    } else {
      return list.sort((a, b) => b[sortField] - a[sortField]);
    }
  }

  function clearAll() {
    filteredList = cloneDeep($achievements);
    currentFilter = { field: '', value: '' };
    sortByCompletion = false;
    searchTerm = '';
  }
</script>

<svelte:head>
  <title>{$l10n['achievements'][$lang]} | Genshin TL;DR</title>
</svelte:head>

<div class="top">
  <h1>{$l10n['commission-achievements'][$lang]}</h1>

  <div class="content-col">
    <input class="search" bind:value={searchTerm} />
    <div class="menu">
      {#each filters as filter}
        <a
          class:active={filter === currentFilter.value}
          href="/#"
          on:click|preventDefault={() => (currentFilter = { field: 'region', value: filter })}>{$l10n[filter][$lang]}</a
        >{' · '}
      {/each}
      <a href="/#" on:click|preventDefault={() => (sortByCompletion = !sortByCompletion)}>{$l10n.completed[$lang]}</a>
      <span class="menu-separator" />
      <a href="/#" on:click|preventDefault={clearAll}>{$l10n['clear-all'][$lang]}</a>
      <span class="menu-separator" />
      <ManageData />
    </div>
  </div>
</div>

{#each filteredList as achievement, i}
  <CommissionAchievement
    {achievement}
    content={achievement[$lang] ? achievement[$lang] : achievement[lang.default()]}
    alt={i % 2 != 0}
  />
{/each}

<style lang="scss">
  .top {
    input {
      width: 90%;
      margin: 0 auto 30px;
      padding: 10px;
      flex: 1 1 auto;
      font-size: 1.4rem;
      line-height: 2rem;
      border-radius: 10px;
      border: 1px solid #aaa;
    }

    .active {
      color: var(--theme-primary-red);
    }
  }
</style>
