<script>
  import { misc } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import LevelingCost from '$lib/components/LevelingCost.svelte';

  const characterLevelKeys = ['heros-wit', 'adventurers-experience', 'mora-level'];
  const characterAscensionKeys = ['jewel', 'normal-boss', 'local-specialty', 'common-material', 'mora-ascension'];

  function getTotal(data) {
    const result = {};
    for (const property in data) {
      for (const key of Object.keys(data[property].cost)) {
        let id = data[property].cost[key].id;
        if (id && result[id]) {
          result[id] += data[property].cost[key].count;
        } else {
          result[id] = data[property].cost[key].count;
        }
      }
    }
    return result;
  }

  const charTotal = getTotal($misc.leveling.data.character);
</script>

<svelte:head>
  <title>{$l10n['leveling-cost'][$lang]} | Genshin Notes</title>
</svelte:head>

<h1>{$l10n['leveling-cost'][$lang]}</h1>

<div id="content">
  <div class="header">
    <div class="content-row">
      <div class="empty" />
      <div class="levelup">{$l10n['level-up'][$lang]}</div>
      <div class="ascension">{$l10n['ascension'][$lang]}</div>
    </div>
  </div>

  {#each Object.entries($misc.leveling.data.character) as [id, data], n}
    <div class="content-row row" class:alt={n % 2 === 1}>
      <div class="content-row group separator">
        <div class="content-row level">{data.id}</div>
      </div>
      <div class="content-row group separator">
        {#each characterLevelKeys as key}
          <LevelingCost id={data.cost[key].id} count={data.cost[key].count} rarity={data.cost[key].rarity} />
        {/each}
      </div>
      <div class="content-row group">
        {#each characterAscensionKeys as key}
          <LevelingCost id={data.cost[key].id} count={data.cost[key].count} rarity={data.cost[key].rarity} />
        {/each}
      </div>
    </div>
  {/each}

  <div class="content-row row total">
    <div class="content-row group separator">
      <div class="content-row level">{$l10n['total'][$lang]}</div>
    </div>
    <div class="content-row group separator">
      <LevelingCost id="heros-wit" count={charTotal['heros-wit']} rarity="4" />
      <LevelingCost id="adventurers-experience" count={charTotal['adventurers-experience']} rarity="3" />
      <LevelingCost id="mora" count={charTotal['mora-level']} rarity="3" />
    </div>
    <div class="content-row group">
      <div class="content-col">
        <LevelingCost id="jewel2" count={charTotal['jewel2']} rarity="2" />
        <LevelingCost id="jewel3" count={charTotal['jewel3']} rarity="3" />
        <LevelingCost id="jewel4" count={charTotal['jewel4']} rarity="4" />
        <LevelingCost id="jewel5" count={charTotal['jewel5']} rarity="5" />
      </div>
      <LevelingCost id="normal-boss" count={charTotal['normal-boss']} rarity="4" />
      <LevelingCost id="local-specialty" count={charTotal['local-specialty']} rarity="1" />
      <div class="content-col">
        <LevelingCost id="common-material1" count={charTotal['common-material1']} rarity="2" />
        <LevelingCost id="common-material2" count={charTotal['common-material2']} rarity="3" />
        <LevelingCost id="common-material3" count={charTotal['common-material3']} rarity="4" />
      </div>
      <LevelingCost id="mora" count={charTotal['mora-ascension']} rarity="3" />
    </div>
  </div>
</div>

<style lang="scss">
  #content {
    font-size: 0.9em;
    margin-bottom: 20px;
  }

  .header {
    font-size: 0.9em;
    font-weight: bold;
    border-bottom: 1px solid var(--theme-divider);
    text-align: center;
    padding: 3px 0;

    @media only screen and (max-width: 960px) {
      display: none;
    }

    .empty {
      width: 101px;
    }

    .levelup {
      width: 261px;
    }

    .ascension {
      width: 420px;
    }
  }

  .row {
    font-size: 0.9em;
    border-bottom: 1px dotted var(--theme-border-light);

    @media only screen and (max-width: 960px) {
      border-bottom: 0;
    }

    &:hover {
      background: var(--theme-main-bg-hover);
    }
  }

  .group {
    display: inline-flex;
    padding: 5px 10px 10px;

    @media only screen and (max-width: 960px) {
      width: 50%;
    }

    .level {
      color: var(--theme-text-body-highlight);
      font: bold 1em var(--theme-main-font);
      align-items: center;
    }
  }

  .separator {
    border-right: 1px dotted var(--theme-border-light);
    margin-right: 1px;

    @media only screen and (max-width: 960px) {
      border-right: 0;
      margin-right: 0;
    }
  }

  .level {
    font-size: 1.2rem;
    width: 80px;
    justify-content: center;
  }
</style>
