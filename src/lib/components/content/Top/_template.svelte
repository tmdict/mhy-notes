<script>
  import { l10n, lang } from '@store/site';
</script>

<div id="intro">
  <slot name="intro" />
</div>

<h4><a href="/builds">{$l10n['character-builds'][$lang]}</a></h4>

<div class="section">
  <slot name="builds" />
</div>

<!--h4><a href="/achievements">{$l10n['commission-achievements'][$lang]}</a></h4>

<div class="section">
  <slot name="achievements" />
</div-->

<h4><a href="/materials">{$l10n['weekly-mat'][$lang]}</a></h4>

<div class="section">
  <slot name="materials" />
</div>

<style lang="scss">
  #intro {
    padding: 0 20px 20px;
  }

  h4 {
    padding: 0 20px 5px;
  }

  .section {
    padding: 0 20px 20px;
    border-top: 1px dotted var(--theme-border-light);
  }
</style>
