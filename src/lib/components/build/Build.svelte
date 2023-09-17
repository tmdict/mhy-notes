<script>
  import { slide } from 'svelte/transition';
  import { lang } from '@store/site';
  import { characters } from '@store/gamedata';
  import BuildArtifactSet from '$lib/components/build/BuildArtifactSet.svelte';
  import BuildCharacter from '$lib/components/build/BuildCharacter.svelte';
  import BuildMainStats from '$lib/components/build/BuildMainStats.svelte';
  import BuildManage from '$lib/components/build/BuildManage.svelte';
  import BuildNotes from '$lib/components/build/BuildNotes.svelte';
  import BuildSource from '$lib/components/build/BuildSource.svelte';
  import BuildStats from '$lib/components/build/BuildStats.svelte';
  import BuildWeapons from '$lib/components/build/BuildWeapons.svelte';

  export let build;
  export let alt = false;
  export let showDetail = false;

  function toggleDetails() {
    showDetail = !showDetail;
  }
</script>

<div
  class="content-row build"
  class:alt
  role="button"
  tabindex="0"
  on:click={toggleDetails}
  on:keydown={toggleDetails}
>
  <div
    class="content-row build-info align-center"
    style={$lang === 'en' ? '--text-size: 0.8rem' : '--text-size: 0.9rem'}
  >
    <div class="content-row build-box">
      <BuildCharacter character={build.character} constellation={build.c} />
      <div class="content-row character-name">{$characters[build.character].data[$lang].name}</div>
      <div class="content-row build-box name">
        {build.name[$lang] ? build.name[$lang] : build.name[lang.default()]}
      </div>
    </div>
    <div class="content-row build-equipments">
      <div class="content-row build-box weapons">
        <BuildWeapons weapons={build.weapon} />
      </div>
      <div class="content-row build-box artifacts">
        <BuildArtifactSet artifacts={build.artifact} />
      </div>
    </div>
  </div>
  {#if showDetail}
    <div transition:slide={{ duration: 200 }} class="content-row build-details">
      <div class="content-row build-box mainstat-stats">
        <BuildMainStats mainstat={build.mainstat} />
        <BuildStats stats={build.stats} />
      </div>
      <div class="build-box notes" role="button" tabindex="0" on:click|stopPropagation on:keydown|stopPropagation>
        <BuildNotes {build} />
      </div>
      <div class="build-box sources">
        <BuildSource references={build.source} />
      </div>
      <BuildManage {build} />
    </div>
  {/if}
</div>

<style lang="scss">
  .build:hover {
    background: var(--theme-main-bg-hover);
    cursor: pointer;
  }

  .build-info {
    min-height: 80px;
    align-items: center;
    font-size: var(--text-size, 0.8rem);

    .character-name {
      width: 110px;
      align-items: center;
      padding: 0 0 0 20px;
    }

    .name {
      width: 100px;
      align-items: center;
    }

    .weapons {
      width: 165px;
    }

    .artifacts {
      min-width: 270px;
    }

    @media only screen and (max-width: 830px) {
      .build-equipments {
        flex-grow: 1;
        border-top: 1px dotted var(--theme-border-light);
      }
    }
  }

  .build-details {
    height: auto;
    font-size: 0.9rem;
    padding-bottom: 10px;
    border-top: 1px dotted var(--theme-border-light);

    .notes {
      min-width: 300px;

      &:hover {
        cursor: default;
      }
    }

    .sources {
      min-width: 400px;
    }
  }
</style>
