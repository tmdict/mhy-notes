<script>
  import { characters, enemies, materials, rarity } from '@store/gamedata';
  import { l10n, lang } from '@store/site';
  import Icon from '$lib/components/Icon.svelte';

  const bossMaterials = Object.values($enemies)
    .filter((enemy) => enemy.enemyType === 'weekly-boss')
    .sort((b1, b2) => (b1.order > b2.order ? 1 : -1))
    .reduce(
      (enemies, boss) => ({
        // Add to list of bosses
        [boss.id]: boss.drop.reduce(
          (drops, drop) => ({
            // Add to list of drops
            [drop]: {
              rarity: $materials[drop].rarity,
              characters: $materials[drop].characters
            },
            ...drops
          }),
          {}
        ),
        ...enemies
      }),
      {}
    );
</script>

<svelte:head>
  <title>{$l10n['upgrade-material'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['weekly-boss-mat'][$lang]}</h1>

<div id="content">
  {#each Object.entries(bossMaterials) as [boss, bossData], idx}
    <div class="content-row boss" class:alt={idx % 2 === 1}>
      <div class="content-row">
        <Icon id={boss} src="enemy/{boss}" size="220px" />

        <div class="content-col">
          {#each Object.entries(bossData) as [name, material]}
            <div class="content-row">
              <Icon id={name} src="material-weekly-boss/{name}" rarity={material.rarity} />
              {#if material.characters.length > 0}
                <div class="content-row">
                  {#each material.characters as character}
                    <Icon
                      id={character}
                      title={$characters[character] ? $characters[character].data[$lang].name : character}
                      src="character/{character}"
                      rarity={$rarity[character]}
                    />
                  {/each}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  #content {
    margin-top: 40px;
    min-width: 260px;
  }

  .boss {
    padding: 10px 0;
    border-top: 1px solid var(--theme-site-primary-main);
  }
</style>
