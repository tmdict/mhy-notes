<script>
  import { rarity, weapons as weaponsData } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let weapons;
  const data = weapons.reduce((acc, w) => ({ ...acc, [w.name]: $weaponsData[w.name] }), {});
  let isHover = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="content-row align-center">
  {#each weapons as weapon}
    {@const details = data[weapon.name] ? data[weapon.name].data[$lang] : false}
    <div
      class="weapon"
      on:click|stopPropagation
      on:mouseenter={() => (isHover = weapon.name)}
      on:mouseleave={() => (isHover = '')}
    >
      <Icon
        id={weapon.name}
        title={details ? details['name'] : weapon.name}
        src="weapon/{weapon.name === isHover ? 'ascension/' : ''}{weapon.name}"
        rarity={$rarity[weapon.name]}
        size="50px"
        margin="0 2px"
        hasTooltip={true}
        tooltipContent={`
          <span class="highlight">${details ? details['name'] : weapon.name}</span><br />
          <span class="highlight">${$l10n['sub-stat'][$lang]}:</span> ${
          data[weapon.name] ? $l10n[data[weapon.name].subStat][$lang] : ''
        }<br />
          ${
            details && details['passiveName']
              ? '<br /><span class="highlight">' +
                details['passiveName'] +
                ':</span> ' +
                details['passiveDescription']
                  .replace(/{{/g, '<span style="color:var(--theme-primary-blue)">')
                  .replace(/}}/g, '</span>')
                  .replace(/\/{2}/g, '</span>/<span style="color:var(--theme-primary-blue)">')
              : ''
          }
        `}
      />
      {#if weapon.r > 0}<div class="overlay">{weapon.r}</div>{/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .weapon {
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  .overlay {
    top: 36px;
    left: 42px;
  }
</style>
