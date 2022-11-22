<script>
  import { slide } from 'svelte/transition';
  import { lang } from '@store/site';
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

<div class="content-row build" class:alt on:click={toggleDetails} on:keydown={toggleDetails}>
  <div
    class="content-row build-info align-center"
    style={$lang === 'en' ? '--text-size: 0.8rem' : '--text-size: 0.9rem'}
  >
    <div class="content-row build-box">
      <BuildCharacter character={build.character} constellation={build.c} />
      <div class="content-row type">
        {#if build.type.includes('meta')}
          <span style="color:var(--theme-primary-gold)">★</span>
        {:else if build.type.includes('whale')}
          <img style="width:20px" src="/img/whale.png" alt="whale" />
        {/if}
      </div>
      <div class="content-row build-box name">
        {build.name[$lang] ? build.name[$lang] : build.name[lang.default()]}
      </div>
    </div>
    <div class="content-row">
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
      <div on:click|stopPropagation on:keydown|stopPropagation class="build-box notes">
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

    .type {
      width: 40px;
      align-items: center;
      padding: 0 0 0 15px;
    }

    .name {
      width: 90px;
      align-items: center;
    }

    .weapons {
      width: 205px;
    }

    .artifacts {
      min-width: 410px;

      @media only screen and (max-width: 460px) {
        min-width: 320px;
      }
    }

    @media only screen and (max-width: 960px) {
      .artifacts,
      .weapons {
        border-top: 1px dotted var(--theme-border-light);
      }
    }
  }

  .build-details {
    height: auto;
    font-size: 0.9rem;
    padding-bottom: 10px;

    .mainstat-stats,
    .notes,
    .sources {
      border-top: 1px dotted var(--theme-border-light);
    }

    .notes {
      &:hover {
        cursor: default;
      }
    }

    .mainstat-stats {
      @media only screen and (max-width: 390px) {
        gap: 10px;
      }
    }

    .notes {
      min-width: 320px;
      max-width: 410px;
    }
  }
</style>
