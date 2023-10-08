<script>
  import { tooltip } from '$lib/util/tooltip';
  import { hsr } from '@store/hsr';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let build;
  export let alt = false;
</script>

<div class="content-row build" class:alt>
  <div class="content-col char">
    <div class="content-row">
      <img src="/img/hsr/character/{build.character}.png" title={build.character} alt={build.character} />
    </div>
  </div>

  <div class="content-col info">
    <b>{$hsr.character[build.character].data[$lang].name}</b>
    <div class="rarity{$hsr.character[build.character].rarity}">
      {#each Array($hsr.character[build.character].rarity) as _}
        ◆
      {/each}
    </div>
    <div class="sub">
      {#each build.type as type, i}
        {i > 0 ? ' · ' : ''}{$l10n[type][$lang]}
      {/each}
    </div>
  </div>

  <div class="content-col lightcone">
    <div class="content-row">
      {#each build['light-cone'] as lc, i}
        <img src="/img/hsr/light-cone/{lc}.png" title={lc} alt={lc} 
        use:tooltip={{
          enabled: true,
          tippy: {
            content: `
              <span class="highlight">${$hsr['light-cone'][lc].data[$lang].name}</span><br />
              ${$hsr['light-cone'][lc].data[$lang].description
                .replace(/{{/g, '<span style="color:var(--theme-site-secondary-main)">')
                .replace(/}}/g, '</span>')
                .replace(/\/{2}/g, '</span>/<span style="color:var(--theme-site-secondary-main)">')}
            `,
            trigger: 'click',
            theme: 'custom',
            animation: 'scale-subtle',
            allowHTML: true
          }
        }}/>
      {/each}
    </div>
  </div>

  <div class="content-col main-stats separator">
    {#each Object.entries(build.mainstat) as [stat, values]}
      <div class="content-row main-stat">
        <div class="icon">
          <img src="/img/hsr/relic-piece/{stat}.png" title={stat} alt={stat} />
        </div>
        <div>
          {#each values as val, i}
            {$l10n[val][$lang]}{i > 0 ? ' · ' : ''}
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <div class="content-col relics">
    <div class="content-row relic">
        {#each build.relic as relic}
          {#each relic.set as set}
            <div class="piece">
              <Icon
                id={set}
                src="hsr/relic/{set}"
                size="50px"
                margin="0 2px"
                rarity="na"
                hasTooltip={true}
                tooltipContent={`
                <span class="highlight">${$hsr.relic[set].data[$lang].name}</span><br /><br />
                <span class="highlight">${$l10n['set-2p-bonus'][$lang]}:</span> ${$hsr.relic[set].data[$lang]['2p']}<br />
                <span class="highlight">${$l10n['set-4p-bonus'][$lang]}:</span> ${$hsr.relic[set].data[$lang]['4p']}`}
              />
              <div class="overlay">{relic.p}</div>
            </div>
          {/each}
        {/each}
    </div>

    <div class="content-row ornament">
      {#each build.ornament as ornament}
        {#each ornament.set as set}
          <div class="piece">
            <Icon
              id={set}
              src="hsr/relic/{set}"
              size="50px"
              margin="0 2px"
              rarity="na"
              hasTooltip={true}
              tooltipContent={`
              <span class="highlight">${$hsr.ornament[set].data[$lang].name}</span><br /><br />
              <span class="highlight">${$l10n['set-2p-bonus'][$lang]}:</span> ${$hsr.ornament[set].data[$lang]['2p']}`}
            />
            <div class="overlay">{ornament.p}</div>
          </div>
        {/each}
      {/each}
    </div>
  </div>

  <div class="content-col stats separator">
    <ul>
      {#each build.stats as stat}
        {@const [id, value] = Object.entries(stat).flat()}
        <li style='--line-ht: 1.1em'>{$l10n[id][$lang]}: <span class="highlight">{value}</span></li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .build {
    border-bottom: 1px dotted var(--theme-border-light);

    .content-col {
      justify-content: center;

      &.info,
      &.stats {
        justify-content: start;
      }
    }

    .separator {
      border-left: 1px dotted var(--theme-border-light);

      @media only screen and (max-width: 960px) {
        border-left: 0;
        margin: 0;
      }
    }

    .char {
      min-width: 110px;

      img {
        height: 120px;
        margin: 10px;
      }
    }

    .info {
      width: 100px;
      margin: 10px;

      img {
        height: 15px;
      }

      .rarity5 {
        color: var(--theme-rarity-5);
      }

      .rarity4 {
        color: var(--theme-rarity-4);
      }

      .sub {
        font-size: 0.8em;
        line-height: 2em;
      }
    }

    .lightcone {
      width: 220px;

      img {
        height: 120px;
        transform: rotate(-12.5deg);

        &:hover {
          cursor: pointer;
        }
      }
    }

    .relics {
      width: 130px;
      padding-left: 10px;

      .piece {
        margin: 5px 0;
        position: relative;

        &:hover {
          cursor: pointer;
        }

        .overlay {
          top: 35px;
          left: 40px;
        }
      }
    }

    .main-stat {
      width: 130px;
      align-items: center;
      padding: 5px 0 5px 10px;

      .icon {
        margin: 0 5px 0 2px;

        img {
          width: 20px;
        }
      }
    }

    .stats {
      width: 140px;
      padding-top: 10px;

      ul {
        margin: 0;
        padding: 0 0 0 25px;
          list-style: none;

        &:hover {
          cursor: default;
        }

        li {
          font-size: 0.85em;
          margin: 6px 0;
          line-height: 1em; // ZH li line-ht is smaller
          border-bottom: 1px dotted var(--theme-border-light);

          .highlight {
            color: var(--theme-site-secondary-main);
          }
        }
      }
    }
  }
</style>
