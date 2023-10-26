<script>
  import { rarity, weapons as weaponsData } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  let data = {
    northlander: {
      bow: {
        'compound-bow': 0,
        'hamayumi': 0,
        'prototype-crescent': 0
      },
      catalyst: {
        'frostbearer': 0,
        'hakushin-ring': 0,
        'mappa-mare': 0,
        'prototype-amber': 0
      },
      claymore: {
        'katsuragikiri-nagamasa': 0,
        'snow-tombed-starsilver': 0,
        'prototype-archaic': 0,
        'whiteblind': 0
      },
      polearm: {
        'crescent-pike': 0,
        'dragonspine-spear': 0,
        'kitain-cross-spear': 0,
        'prototype-starglitter': 0
      },
      sword: {
        'amenoma-kageuchi': 0,
        'iron-sting': 0,
        'prototype-rancour': 0
      }
    },
    midlander: {
      bow: {
        'compound-bow': 0,
        'hamayumi': 0,
        'prototype-crescent': 0
      },
      catalyst: {
        'frostbearer': 0,
        'hakushin-ring': 0,
        'mappa-mare': 0,
        'prototype-amber': 0
      },
      claymore: {
        'katsuragikiri-nagamasa': 0,
        'snow-tombed-starsilver': 0,
        'prototype-archaic': 0,
        'whiteblind': 0
      },
      polearm: {
        'crescent-pike': 0,
        'dragonspine-spear': 0,
        'kitain-cross-spear': 0,
        'prototype-starglitter': 0
      },
      sword: {
        'amenoma-kageuchi': 0,
        'iron-sting': 0,
        'prototype-rancour': 0
      }
    }
  };

  function updateCount(billet, type, name, count) {
    console.log(billet)
    console.log(type)
    console.log(name)
    console.log(count)
    const updated = data[billet][type][name] + count;
    data[billet][type][name] = (updated < 0) ? 0 : ((updated > 5) ? 5 : updated);
  }
</script>

<svelte:head>
  <title>{$l10n['craftable-weapons'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['craftable-weapons'][$lang]}</h1>

<div id="content">
  {#each Object.entries(data) as [billet, craftables]}
    <div class="content-row billet">
      {#each Object.entries(craftables) as [type, weapons]}
        <div class="content-col type">
          <div class="header">
            <Icon id="{billet}-{type}" src="billet/{billet}-{type}" rarity=4 />
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
    margin-top: 40px;
    min-width: 260px;
  }

  .billet {
    padding: 10px 0;
    border-top: 1px solid var(--theme-site-primary-main);
    justify-content: center;

    .type {
      flex: 1 1 0;
      margin-bottom: 20px;

      .header {
        border-bottom: 1px dashed var(--theme-border-gold);
        margin-bottom: 15px;
        padding-bottom: 15px;
      }

      .weapon {
        flex-wrap: nowrap;
        margin-bottom: 20px;

        .weapon-icon:hover {
          cursor: pointer;
        }

        .info {
          margin-top: 10px;

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
