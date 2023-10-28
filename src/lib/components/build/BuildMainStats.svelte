<script>
  import { l10n, lang } from '@store/site';
  import BuildMainStat from '$lib/components/build/BuildMainStat.svelte';

  export let mainstat;
  export let showHeader = true;
</script>

<div class="content-col mainstats">
  <div class="build-heading" class:hidden={!showHeader}>{$l10n['artifact-mainstats'][$lang]}</div>
  <BuildMainStat type="sands-of-eon" stats={mainstat.sand} />
  <BuildMainStat type="goblet-of-eonothem" stats={mainstat.goblet} />
  <BuildMainStat type="circlet-of-logos" stats={mainstat.circlet} />
</div>

<style lang="scss">
  .mainstats {
    width: 170px;

    @media only screen and (max-width: 460px) {
      width: 160px;
    }
  }

  .hidden {
    display: none;
  }
</style>
