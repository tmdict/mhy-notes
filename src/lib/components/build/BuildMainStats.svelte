<script>
  import { l10n, lang } from '@store/site';
  import BuildMainStat from '$lib/components/build/BuildMainStat.svelte';

  export let mainstat;
</script>

<div class="content-col mainstat">
  <div class="build-heading">{$l10n['artifact-mainstats'][$lang]}</div>
  <BuildMainStat type="sands-of-eon" stats={mainstat.sand} />
  <BuildMainStat type="goblet-of-eonothem" stats={mainstat.goblet} />
  <BuildMainStat type="circlet-of-logos" stats={mainstat.circlet} />
</div>

<style lang="scss">
  .mainstat {
    width: 165px;
  }
</style>
