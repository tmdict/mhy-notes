<script>
  import { slide } from 'svelte/transition';
  import { characters, misc, rarity } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';
  import ScalingFaqEn from '$lib/components/content/ScalingFaq/En.svelte';
  import ScalingFaqZh from '$lib/components/content/ScalingFaq/Zh.svelte';

  let scaling = Object.keys($misc.scaling.data)
    .sort((a, b) => $characters[b].released.localeCompare($characters[a].released) || b.localeCompare(a))
    .map((char) => ({ ...$misc.scaling.data[char], id: char }));

  const colors = {
    anemo: 'anemo',
    cryo: 'cryo',
    dendro: 'dendro',
    electro: 'electro',
    geo: 'geo',
    heal: 'none',
    hydro: 'hydro',
    physical: 'physical',
    pyro: 'pyro'
  };

  const statFilter = [
    'hp',
    'atk',
    'def',
    'em',
    'crit-abbr',
    'cr',
    'cdmg',
    'er',
    'pyro',
    'cryo',
    'hydro',
    'electro',
    'geo',
    'anemo',
    'physical',
    'heal'
  ];

  const baseFilter = [
    'base-stat',
    'a',
    'e',
    'q',
    'a1',
    'a4',
    'constellation',
    'sand',
    'goblet',
    'circlet',
    'recommended-talent'
  ];

  const faq = { en: ScalingFaqEn, zh: ScalingFaqZh };

  let showFaq = false;
  let windowWidth;

  let selectedStats = [...statFilter];
  let selectedBase = [];
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>{$l10n['character-scaling'][$lang]} | Genshin TL;DR</title>
</svelte:head>

<h1>{$l10n['character-scaling'][$lang]}</h1>

<div class="menu">
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a>
  <span class="menu-separator" />
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['filters'][$lang]}</a>
</div>

{#if showFaq}
  <div id="faq" transition:slide>
    <svelte:component this={faq[$lang]} />
  </div>
{/if}

<div class="filter">
  <ul>
    {#each baseFilter as filter}
      <li><a href="/#">{$l10n[filter][$lang]}</a></li>
    {/each}
  </ul>
</div>

<div class="filter">
  <h4>{$l10n['stats'][$lang]}</h4>
  <ul>
    {#each statFilter as filter}
      <li><a href="/#">{$l10n[filter][$lang]}</a></li>
    {/each}
  </ul>
</div>

<div id="content">
  <div class="content-row header sticky">
    <div class="col name">{$l10n['name'][$lang]}</div>
    <div class="col base-stat separator">{$l10n['base-stat'][$lang]}</div>
    <div class="col normal-attack">{$l10n['a'][$lang]}</div>
    <div class="col elemental-skill">{$l10n['e'][$lang]}</div>
    <div class="col elemental-burst">{$l10n['q'][$lang]}</div>
    <div class="col ascension-1">{$l10n['a1'][$lang]}</div>
    <div class="col ascension-4">{$l10n['a4'][$lang]}</div>
    <div class="col constellation separator">{$l10n['constellation'][$lang]}</div>
    <div class="col sand">{$l10n['sand'][$lang]}</div>
    <div class="col goblet">{$l10n['goblet'][$lang]}</div>
    <div class="col circlet">{$l10n['circlet'][$lang]}</div>
  </div>

  {#each scaling as data, n}
    <div class="content-row row" class:alt={n % 2 === 1}>
      <div class="content-row group basic separator">
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
      </div>

      <div class="content-row group talent">
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['a'][$lang]}:</b>
            {#if windowWidth < 960 && !data.a.length}-{/if}
          {/if}
          {#each data.a as a, i}
            {i > 0 ? ', ' : ''}
            <span class={colors[a]} class:highlight={data.highlight && data['recommended-talent'].includes('a')}
              >{$l10n[a][$lang]}</span
            >
          {/each}
        </div>
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['e'][$lang]}:</b>
            {#if windowWidth < 960 && !data.e.length}-{/if}
          {/if}
          {#each data.e as e, i}
            {i > 0 ? ', ' : ''}
            <span class={colors[e]} class:highlight={data.highlight && data['recommended-talent'].includes('e')}
              >{$l10n[e][$lang]}</span
            >
          {/each}
        </div>
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['q'][$lang]}:</b>
            {#if windowWidth < 960 && !data.q.length}-{/if}
          {/if}
          {#each data.q as q, i}
            {i > 0 ? ', ' : ''}
            <span class={colors[q]} class:highlight={data.highlight && data['recommended-talent'].includes('q')}
              >{$l10n[q][$lang]}</span
            >
          {/each}
        </div>
      </div>

      <div class="content-row group ascension separator">
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['a1'][$lang]}:</b>
            {#if windowWidth < 960 && !data.a1.length}-{/if}
          {/if}
          {#each data.a1 as a1, i}
            {i > 0 ? ', ' : ''}
            <span class={colors[a1]}>{$l10n[a1][$lang]}</span>
          {/each}
        </div>
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['a4'][$lang]}:</b>
            {#if windowWidth < 960 && !data.a4.length}-{/if}
          {/if}
          {#each data.a4 as a4, i}
            {i > 0 ? ', ' : ''}
            <span class={colors[a4]}>{$l10n[a4][$lang]}</span>
          {/each}
        </div>
        <div class="col constellation">
          {#if windowWidth < 960 && !data.const.length}-{/if}
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

      <div class="content-row group artifact">
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['sand'][$lang]}:</b>
            {#if windowWidth < 960 && !data.q.length}-{/if}
          {/if}
          {#each data.sand as stat, i}
            {i > 0 ? ', ' : ''}
            <span class={'highlight ' + colors[stat]}>{$l10n[stat][$lang]}</span>
          {/each}
        </div>
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['goblet'][$lang]}:</b>
            {#if windowWidth < 960 && !data.q.length}-{/if}
          {/if}
          {#each data.goblet as stat, i}
            {i > 0 ? ', ' : ''}
            <span class={'highlight ' + colors[stat]}>{$l10n[stat][$lang]}</span>
          {/each}
        </div>
        <div class="col">
          {#if windowWidth < 960}<b>{$l10n['circlet'][$lang]}:</b>
            {#if windowWidth < 960 && !data.q.length}-{/if}
          {/if}
          {#each data.circlet as stat, i}
            {i > 0 ? ', ' : ''}
            <span class={'highlight ' + colors[stat]}>{$l10n[stat][$lang]}</span>
          {/each}
        </div>
      </div>
    </div>
  {/each}
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
    padding-top: 10px;

    @media only screen and (max-width: 960px) {
      display: none;
    }

    &.sticky {
      position: -webkit-sticky; /* for Safari */
      position: sticky;
      top: 0;
      align-self: flex-start;
      background-color: var(--theme-main-bg-color);
    }

    .col {
      padding: 0 5px;
    }

    .name {
      margin-left: 65px;
    }

    .sand {
      margin-left: 35px;
    }

    .separator {
      margin-right: 11px;
    }
  }

  .row {
    font-size: 0.9em;
    border-bottom: 1px dotted var(--theme-border-light);

    &:hover {
      background: var(--theme-main-bg-hover);
    }
  }

  .group {
    display: inline-flex;
    align-items: center;

    @media only screen and (max-width: 960px) {
      width: 50%;
    }

    &.separator {
      border-right: 1px dotted var(--theme-border-light);
      margin-right: 10px;

      @media only screen and (max-width: 960px) {
        border-right: 0;
        margin-right: 0;
      }
    }

    &.talent .highlight {
      font-weight: bold;
    }

    .col {
      &.icon {
        width: 65px;
        border: 0;
      }

      &.constellation {
        min-width: 110px;
      }
    }
  }

  .col {
    width: 75px;
    padding: 5px;
    overflow-wrap: break-word;

    @media only screen and (max-width: 960px) {
      width: 100%;
      border-bottom: 1px dotted var(--theme-border-light);
    }
  }

  .highlight {
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

  .physical {
    color: var(--theme-text-strong);
    font-weight: bold;
  }

  .pyro {
    color: #e2311d;
    font-weight: bold;
  }

  #faq {
    padding: 0 20px 20px;
  }

  .filter {
    margin: 15px 40px;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      text-align: center;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      justify-content: center;

      li {
        display: list-item;
        margin: 0 5px 5px 0;

        a {
          display: block;
          padding: 5px 10px;
          border: 1px solid var(--theme-border-light);

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
