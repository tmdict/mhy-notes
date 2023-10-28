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
    class="content-row build-info"
    style={$lang === 'en' ? '--text-size: 0.8rem' : '--text-size: 0.9rem'}
  >
    <div class="content-row build-box">
      <BuildCharacter character={build.character} constellation={build.c} />
      <div class="content-col names">
        <div class="character-name">
          {$characters[build.character].data[$lang].name}
        </div>
        <div class="build-name">
          {build.name[$lang] ? build.name[$lang] : build.name[lang.default()]}
        </div>
      </div>
    </div>
    <div class="content-row build-equip">
      <div class="weapons">
        <BuildWeapons weapons={build.weapon} />
      </div>
      <div class="artifacts content-row">
        <BuildArtifactSet artifacts={build.artifact} />
      </div>
    </div>
    <div class="content-row build-stat">
      <div class="mainstats">
        <BuildMainStats mainstat={build.mainstat} showHeader={false} />
      </div>
      <div class="stats">
        <BuildStats stats={build.stats} showHeader={false} />
      </div>
    </div>
  </div>
  {#if showDetail}
    <div transition:slide={{ duration: 200 }} class="content-row build-details">
      <div class="notes" role="button" tabindex="0" on:click|stopPropagation on:keydown|stopPropagation>
        <BuildNotes {build} />
      </div>
      <div class="sources">
        <BuildSource references={build.source} />
      </div>
      <BuildManage {build} />
    </div>
  {/if}
</div>

<style lang="scss">
  .build:hover {
    background: var(--theme-bg-highlight);
    cursor: pointer;
  }

  .build-info {
    min-height: 70px;
    align-items: center;
    font-size: var(--text-size, 0.8rem);
    flex-wrap: wrap;

    .build-box {
      padding: 10px;
      flex-wrap: wrap;

      .names {
        width: 80px;
        padding-left: 10px;
        justify-content: center;
        
        .character-name {
          margin-bottom: 5px;
        }

        .build-name {
          color: var(--theme-site-secondary-main);
        }
      }
    }

    .build-equip {
      height: 100%;
      align-items: center;
      border-left: 1px dotted var(--theme-border-light);
      flex-wrap: wrap;
      
      @media only screen and (max-width: 560px) {
        border-left: 0;
      }
      
      @media only screen and (max-width: 930px) {
        height: auto;
      }

      .weapons {
        width: 135px;
        height: 70px;
        padding: 10px;
      }

      .artifacts {
        min-width: 270px;
        height: 70px;
        padding: 10px;
      
        @media only screen and (max-width: 560px) {
          min-width: 0;
        }
      }
    }

    .build-stat {
      min-width: 380px;
      border-left: 1px dotted var(--theme-border-light);
      padding-left: 10px;
      flex-wrap: wrap;
      
      @media only screen and (max-width: 930px) {
        width: 100%;
        border-left: 0;
        border-top: 1px dotted var(--theme-border-light);
      }

      .mainstats {
        width: 160px;
        padding: 5px 10px;
      }

      .stats {
        width: 200px;
        padding: 5px 10px;
      }
    }
  }

  .build-details {
    width: 100%;
    height: auto;
    font-size: 0.9rem;
    padding-bottom: 10px;
    border-top: 1px dotted var(--theme-border-light);

    .notes {
      width: 100%;
      padding: 10px;

      &:hover {
        cursor: default;
      }
    }

    .sources {
      width: 100%;
      padding: 10px;
    }
  }
</style>
