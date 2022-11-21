<script>
  import { characters, misc, rarity } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  //const scaling = $misc.scaling.data;

  let scaling = Object.keys($misc.scaling.data)
    .sort((a, b) => $characters[b].released.localeCompare($characters[a].released) || b.localeCompare(a))
    .map((char) => ({ ...$misc.scaling.data[char], id: char }));

  //console.log(asd);

  const colors = {
    hp: 'common',
    atk: 'common',
    def: 'common',
    em: 'sp',
    cr: 'sp',
    cdmg: 'sp',
    er: 'sp',
    anemo: 'anemo',
    cryo: 'cryo',
    dendro: 'dendro',
    electro: 'electro',
    geo: 'geo',
    heal: 'none',
    hydro: 'hydro',
    physical: 'none',
    pyro: 'pyro',
    'base-atk': 'none',
    'normal-attack': 'none',
    'elemental-skill': 'none',
    'elemental-burst': 'none'
  };

  let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>{$l10n['character-scaling'][$lang]} | Genshin TL;DR</title>
</svelte:head>

<div id="character-scaling">
  <h1>{$l10n['character-scaling'][$lang]}</h1>

  <div class="content-row header sticky">
    <div class="col name">{$l10n['name'][$lang]}</div>
    <div class="col base-stat">{$l10n['base-stat'][$lang]}</div>
    <div class="col normal-attack">{$l10n['a'][$lang]}</div>
    <div class="col elemental-skill">{$l10n['e'][$lang]}</div>
    <div class="col elemental-burst">{$l10n['q'][$lang]}</div>
    <div class="col ascension-1">{$l10n['ascension'][$lang]} 1</div>
    <div class="col ascension-4">{$l10n['ascension'][$lang]} 4</div>
    <div class="col flex const">{$l10n['constellation'][$lang]}</div>
  </div>

  {#each scaling as data}
    <div class="content-row scale">
      <div class="col icon">
        <Icon
          id={data.id}
          title={$characters[data.id] ? $characters[data.id].data[$lang].name : data.id}
          src="character/{data.id}"
          rarity={$rarity[data.id]}
          size="50px"
          margin="0"
        />
      </div>
      <div class="col"><b>{$characters[data.id].data[$lang].name}</b></div>
      <div class="col">
        {#if windowWidth < 960}<b>{$l10n['base-stat'][$lang]}:</b> {/if}
        <span class={colors[data.ascension]}>{$l10n[data.ascension][$lang]}</span>
      </div>
      <div class="col">
        {#if windowWidth < 960 && data.a.length > 0}<b>{$l10n['a'][$lang]}:</b> {/if}
        {#each data.a as a, i}
          {i > 0 ? ', ' : ''}
          <span class={colors[a]}>{$l10n[a][$lang]}</span>
        {/each}
      </div>
      <div class="col">
        {#if windowWidth < 960 && data.e > 0}<b>{$l10n['e'][$lang]}:</b> {/if}
        {#each data.e as e, i}
          {i > 0 ? ', ' : ''}
          <span class={colors[e]}>{$l10n[e][$lang]}</span>
        {/each}
      </div>
      <div class="col">
        {#if windowWidth < 960 && data.q > 0}<b>{$l10n['q'][$lang]}:</b> {/if}
        {#each data.q as q, i}
          {i > 0 ? ', ' : ''}
          <span class={colors[q]}>{$l10n[q][$lang]}</span>
        {/each}
      </div>
      <div class="col">
        {#if windowWidth < 960 && data.a1.length > 0}<b>{$l10n['ascension'][$lang]} 1:</b> {/if}
        {#each data.a1 as a1, i}
          {i > 0 ? ', ' : ''}
          <span class={colors[a1]}>{$l10n[a1][$lang]}</span>
        {/each}
      </div>
      <div class="col">
        {#if windowWidth < 960 && data.a4.length > 0}<b>{$l10n['ascension'][$lang]} 4:</b> {/if}
        {#each data.a4 as a4, i}
          {i > 0 ? ', ' : ''}
          <span class={colors[a4]}>{$l10n[a4][$lang]}</span>
        {/each}
      </div>
      <div class="col flex">
        {#if windowWidth < 960 && data.const > 0}<b>{$l10n['constellation'][$lang]}:</b> {/if}
        {#each data.const as con, i}
          {#each Object.entries(con) as [cname, cstats]}
            {#if i}<br />{/if}
            <b>{cname}:</b>
            {#each cstats as cstat, j}
              {j > 0 ? ', ' : ''}
              <span class={colors[cstat]}>{$l10n[cstat][$lang]}</span>
            {/each}
          {/each}
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  #character-scaling {
    margin-bottom: 20px;
  }

  .header {
    font-size: 0.8em;
    font-weight: bold;
    border-bottom: 1px solid var(--theme-divider);

    @media only screen and (max-width: 960px) {
      display: none;
    }

    &.sticky {
      position: -webkit-sticky; /* for Safari */
      position: sticky;
      top: 0;
      align-self: flex-start; /* <-- this is the fix */
      background-color: var(--theme-main-bg-color);
    }

    .col {
      padding: 0 5px;
    }

    .name {
      margin-left: 80px;
    }
  }

  .col {
    flex: 0 1 100px;
    padding: 5px;

    &.icon {
      flex-basis: 80px;
    }

    &.flex {
      flex-grow: 1;
    }
  }

  .scale {
    font-size: 0.9em;
    align-items: center;
    border-bottom: 1px dotted var(--theme-border-light);

    &:hover {
      background: var(--theme-main-bg-hover);
    }
  }

  .common {
    color: var(--theme-main-text-normal);
  }

  .sp {
    color: var(--theme-text-body-highlight);
  }

  .anemo {
    color: #33ccb3;
    font-weight: bold;
  }

  .cryo {
    color: #98c8e8;
    font-weight: bold;
  }

  .dendro {
    color: #7bb42d;
    font-weight: bold;
  }

  .electro {
    color: #d376f0;
    font-weight: bold;
  }

  .geo {
    color: #cfa726;
    font-weight: bold;
  }

  .hydro {
    color: #1c72fd;
    font-weight: bold;
  }

  .pyro {
    color: #e2311d;
    font-weight: bold;
  }
</style>