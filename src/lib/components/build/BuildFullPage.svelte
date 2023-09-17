<script>
  import { l10n, lang } from '@store/site';
  import { characters } from '@store/gamedata';
  import BuildArtifactSet from '$lib/components/build/BuildArtifactSet.svelte';
  import BuildCharacter from '$lib/components/build/BuildCharacter.svelte';
  import BuildMainStats from './BuildMainStats.svelte';
  import BuildManage from '$lib/components/build/BuildManage.svelte';
  import BuildNotes from '$lib/components/build/BuildNotes.svelte';
  import BuildSource from '$lib/components/build/BuildSource.svelte';
  import BuildStats from '$lib/components/build/BuildStats.svelte';
  import BuildWeapons from '$lib/components/build/BuildWeapons.svelte';

  export let build;
  export let link;
  // Delete does not show in full page because build object is dynamically generated
  // from URL, and generated URL doesn't contain custom build ID; Build ID is
  // only available in local storage  builds
  export let allowEdit = true;
</script>

<div class="content-row header">
  <BuildCharacter character={build.character} constellation={build.constellation} size="80px" />
  <div class="content-row name">
    <h1>{$characters[build.character].data[$lang].name} · {build.name[$lang] ? build.name[$lang] : build.name[lang.default()]} <a href="./build#{link}">#</a></h1>
  </div>
</div>

<div class="content-col build">
  <div class="build-box types">
    <span class="build-heading">{$l10n['type'][$lang]}:</span>
    {#each build.type as type, i}
      {i !== 0 ? ' · ' : ''}{$l10n[type] ? $l10n[type][$lang] : type}
    {/each}
  </div>
  <div
    class="content-row build-info align-center"
    style={$lang === 'en' ? '--text-size: 0.8rem' : '--text-size: 0.9rem'}
  >
    <div class="content-row">
      <div class="content-row build-box weapons">
        <BuildWeapons weapons={build.weapon} />
      </div>
      <div class="content-row build-box artifacts">
        <BuildArtifactSet artifacts={build.artifact} --artifact-margin="0 15px 0 0" />
      </div>
    </div>
  </div>
  <div class="content-row build-details">
    <div class="content-row build-box mainstat-stats">
      <BuildMainStats mainstat={build.mainstat} />
      <BuildStats stats={build.stats} />
    </div>
    <div class="build-box notes">
      <BuildNotes {build} />
    </div>
    <div class="build-box sources">
      <BuildSource references={build.source} />
    </div>
    {#if allowEdit}
      <BuildManage {build} />
    {/if}
  </div>
</div>

<style lang="scss">

  .build {
    @media only screen and (max-width: 960px) {
      width: 440px;
    }
  }

  .header {
    padding: 10px;
    align-items: center;

    h1 {
      margin-left: 20px;
      text-align: left;

      a {
        text-decoration: none;
      }
    }
  }

  .types {
    font-size: 0.9rem;
    margin: 0 5px;
    border-top: 1px dotted var(--theme-border-light);
    border-bottom: 1px dotted var(--theme-border-light);

    .build-heading {
      margin-right: 5px;
    }
  }

  .build-info {
    min-height: 95px;

    .weapons {
      width: 165px;
    }

    .artifacts {
      min-width: 270px;
    }
  }

  .build-details {
    height: auto;
    font-size: 0.9rem;
    line-height: 1.5em;
    padding: 5px;
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
