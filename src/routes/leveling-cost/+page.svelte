<script>
  import { misc } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import LevelingCostTable from '$lib/components/leveling/LevelingCostTable.svelte';

  const character = {
    level: ['heros-wit', 'adventurers-experience', 'mora-level'],
    ascension: ['jewel', 'normal-boss', 'local-specialty', 'common-material', 'mora-ascension']
  };
  const weapon = {
    level: ['mystic-enhancement-ore', 'mora-level'],
    ascension: ['weapon-ascension', 'common-material-1', 'common-material-2', 'mora-ascension']
  };

  function getTotal(data) {
    const result = {};
    for (const property in data) {
      for (const key of Object.keys(data[property].cost)) {
        let id = data[property].cost[key].id;
        if (result[key] && result[key][id]) {
          result[key][id].count += data[property].cost[key].count;
          if (result[key][id].rarity < 0) {
            result[key][id].rarity = data[property].cost[key].rarity;
          }
        } else if (result[key]) {
          result[key][id] = {
            count: data[property].cost[key].count,
            rarity: data[property].cost[key].rarity
          };
        } else {
          result[key] = {
            [id]: {
              count: data[property].cost[key].count,
              rarity: data[property].cost[key].rarity
            }
          };
        }
      }
    }
    return result;
  }

  const characterTotal = getTotal($misc.leveling.data.character);
  const weaponTotal = getTotal($misc.leveling.data.weapon5);

  console.log(weaponTotal);
</script>

<svelte:head>
  <title>{$l10n['leveling-cost'][$lang]} | Genshin Notes</title>
</svelte:head>

<h1>{$l10n['leveling-cost'][$lang]}</h1>

<div id="character">
  <h4>{$l10n['character-ascension'][$lang]}</h4>
  <div id="content">
    <div class="header">
      <div class="content-row">
        <div class="empty" />
        <div class="levelup">{$l10n['level-up'][$lang]}</div>
        <div class="ascension">{$l10n['ascension'][$lang]}</div>
      </div>
    </div>
    <LevelingCostTable tableData={$misc.leveling.data.character} keys={character} total={characterTotal} />
  </div>
</div>

<div id="weapon5">
  <h4>{$l10n['5star'][$lang]} {$l10n['weapon'][$lang]}</h4>
  <div id="content">
    <div class="header">
      <div class="content-row">
        <div class="empty" />
        <div class="levelup">{$l10n['level-up'][$lang]}</div>
        <div class="ascension">{$l10n['ascension'][$lang]}</div>
      </div>
    </div>
    <LevelingCostTable tableData={$misc.leveling.data.weapon5} keys={weapon} total={weaponTotal} />
  </div>
</div>

<style lang="scss">
  h4 {
    color: var(--theme-primary-red);
    margin: 40px 0 5px;
    text-align: center;
  }

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
  }

  #character {
    .empty {
      width: 81px;
    }

    .levelup {
      width: 321px;
    }

    .ascension {
      width: 520px;
    }
  }

  #weapon5 {
    .empty {
      width: 81px;
    }

    .levelup {
      width: 221px;
    }

    .ascension {
      width: 420px;
    }
  }
</style>
