<script>
  import { artifacts as artifactsData, rarity } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  export let artifacts;
  const data = artifacts.reduce((acc, a) => {
    const aSet = a.set.reduce((aAcc, aname) => ({ ...aAcc, [aname]: $artifactsData[aname] }), {});
    return { ...acc, ...aSet };
  }, {});
</script>

{#each artifacts as artifact, i}
  <div class="content-row" class:divider={i !== 0}>
    {#each artifact.set as set}
      {@const details = data[set] ? data[set].data[$lang] : false}
      <div class="artifact" role="button" tabindex="0" on:click|stopPropagation on:keydown|stopPropagation>
        <Icon
          id={set}
          title={details ? details['name'] : set}
          src="artifact/{set}"
          rarity={$rarity[set]}
          size="50px"
          margin="0 2px"
          hasTooltip={true}
          tooltipContent={`
          <span class="highlight">${details ? details['name'] : set}</span><br /><br />
          ${
            details
              ? '<span class="highlight">' +
                $l10n['set-2p-bonus'][$lang] +
                ':</span> ' +
                details['2p'] +
                '<br /><span class="highlight">' +
                $l10n['set-4p-bonus'][$lang] +
                ':</span> ' +
                details['4p']
              : ''
          }
        `}
        />
        <div class="overlay">{artifact.p}</div>
      </div>
    {/each}
  </div>
{/each}

<style lang="scss">
  .divider {
    border-left: 1px dashed var(--theme-primary-gold);
    margin-left: 15px;
    padding-left: 15px;
  }

  .artifact {
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  .overlay {
    top: 37px;
    left: 42px;
  }
</style>
