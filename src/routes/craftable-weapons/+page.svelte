<script>
  import { browser } from '$app/environment';
  import { slide } from 'svelte/transition';
  import { rarity, weapons as weaponsData } from '@store/gamedata';
  import { localData } from '@store/localdata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';
  import CraftableWeaponsEn from '$lib/components/content/CraftableWeaponsFaq/En.svelte';
  import CraftableWeaponsZh from '$lib/components/content/CraftableWeaponsFaq/Zh.svelte';
  import ManageData from '$lib/components/ManageData.svelte';

  let showFaq = false;

  const faq = { en: CraftableWeaponsEn, zh: CraftableWeaponsZh };

  const data = {
    northlander: {
      bow: {
        'prototype-crescent': 0,
        'hamayumi': 0,
        'compound-bow': 0,
      },
      catalyst: {
        'prototype-amber': 0,
        'hakushin-ring': 0,
        'frostbearer': 0,
        'mappa-mare': 0,
      },
      claymore: {
        'prototype-archaic': 0,
        'katsuragikiri-nagamasa': 0,
        'snow-tombed-starsilver': 0,
        'whiteblind': 0,
      },
      polearm: {
        'prototype-starglitter': 0,
        'kitain-cross-spear': 0,
        'dragonspine-spear': 0,
        'crescent-pike': 0,
      },
      sword: {
        'prototype-rancour': 0,
        'amenoma-kageuchi': 0,
        'iron-sting': 0,
      }
    },
    midlander: {
      bow: {
        'kings-squire': 0,
        'song-of-stillness': 0,
      },
      catalyst: {
        'fruit-of-fulfillment': 0,
        'flowing-purity': 0,
      },
      claymore: {
        'forest-regalia': 0,
        'tidal-shadow': 0,
      },
      polearm: {
        'moonpiercer': 0,
        'rightful-reward': 0,
      },
      sword: {
        'sapwood-blade': 0,
        'finale-of-the-deep': 0,
      }
    }
  };
  
  // Initialize craftable weapon data
  if ($localData['billets'] && Object.keys($localData['billets']).length === 0) {
    $localData = { ...$localData, billets: data };
    browser && localStorage.setItem('tmdict.genshin.data', JSON.stringify($localData));
  }

  function updateCount(billet, type, name, count) {
    const updated = $localData['billets'][billet][type][name] + count;
    $localData['billets'][billet][type][name] = (updated < 0) ? 0 : ((updated > 5) ? 5 : updated);
    browser && localStorage.setItem('tmdict.genshin.data', JSON.stringify($localData));
  }
</script>

<svelte:head>
  <title>{$l10n['craftable-weapons'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['craftable-weapons'][$lang]}</h1>

<div class="menu">
  <a href="/#" on:click|preventDefault={() => (showFaq = !showFaq)}>{$l10n['faq'][$lang]}</a>
  <span class="menu-separator" />
  <ManageData />
</div>

{#if showFaq}
  <div id="faq" transition:slide>
    <svelte:component this={faq[$lang]} />
  </div>
{/if}

<div id="content">
  {#each Object.entries($localData['billets']) as [billet, craftables]}
    <div class="content-row billet">
      {#each Object.entries(craftables) as [type, weapons]}
        <div class="content-col type">
          <div class="header">
            <Icon id="{billet}-{type}" src="billet/{billet}-{type}" />
          </div>
          {#each Object.entries(weapons) as [weapon, count]}
            {@const details = $weaponsData[weapon] ? $weaponsData[weapon].data[$lang] : false}
            <div class="content-row weapon">
              <div class="weapon-icon" role="presentation">
                <Icon
                  id={weapon}
                  src="weapon/ascension/{weapon}"
                  rarity={$rarity[weapon]}
                  hasTooltip={true}
                  tooltipContent={`
                    <span class="heading">${details ? details['name'] : weapon}</span><br />
                    <span class="highlight">${$l10n['sub-stat'][$lang]}:</span> ${
                      $weaponsData[weapon] ? $l10n[$weaponsData[weapon].subStat][$lang] : ''
                  }<br />
                    ${
                      details && details['passiveName']
                        ? '<span class="highlight">' +
                          details['passiveName'] +
                          ':</span> ' +
                          details['passiveDescription']
                            .replace(/{{/g, '<span style="color:var(--theme-site-secondary-main)">')
                            .replace(/}}/g, '</span>')
                            .replace(/\/{2}/g, '</span>/<span style="color:var(--theme-site-secondary-main)">')
                        : ''
                    }
                  `}
                />
              </div>
              <div class="content-col info">
                <div class="name">{details ? details['name'] : weapon}</div>

                <div class="content-row">
                  <span
                    class="remove-input"
                    role="button"
                    tabindex="0"
                    on:click={() => updateCount(billet, type, weapon, -1)}
                    on:keydown={() => updateCount(billet, type, weapon, -1)}>-</span
                  >
                  <div class="count r{count}">{count}</div>
                  <span
                    class="add-input"
                    role="button"
                    tabindex="0"
                    on:click={() => updateCount(billet, type, weapon, 1)}
                    on:keydown={() => updateCount(billet, type, weapon, 1)}>+</span
                  >
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  #content {
    margin: 20px 0;
    min-width: 260px;
  }

  .billet {
    border-top: 1px solid var(--theme-site-primary-main);
    justify-content: center;

    .type {
      flex: 1 1 0;
      margin-bottom: 40px;

      .header {
        border-bottom: 1px dashed var(--theme-border-gold);
        background: var(--theme-bg-highlight);
        margin-bottom: 15px;
        padding-bottom: 15px;
      }

      .weapon {
        flex-wrap: nowrap;
        margin-bottom: 15px;

        .weapon-icon:hover {
          cursor: pointer;
        }

        .info {
          margin-top: 10px;
          min-width: 65px;

          .name {
            font-size: 0.8em;
            font-weight: bold;
          }

          .count {
            color: var(--theme-site-primary-alt);
            font-size: 1.2em;
            font-weight: bold;
            margin: 5px;
          }

          .r0 {
            color: var(--theme-text-normal);
          }

          .r5 {
            color: var(--theme-site-primary-main);
          }

          .add-input,
          .remove-input {
            width: 30px;
            height: 20px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            background-color: var(--theme-bg-highlight-alt);

            &:hover {
              cursor: pointer;
              color: var(--theme-site-primary-alt);
              background-color: var(--theme-bg-highlight);
            }
          }
        }
      }
    }
  }
</style>
