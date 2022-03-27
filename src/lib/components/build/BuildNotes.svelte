<script>
  import { l10n, lang } from '@store/site';

  export let build;
</script>

<div class="notes">
  {#if build.talent}
    <span class="build-heading">{$l10n['talent-priority'][$lang]}:</span>
    {build.talent}
    <br />
  {/if}
  {#if build.notes && build.notes[$lang]}
    <br />
    <div class="build-heading">{$l10n['notes'][$lang]}</div>
    {build.notes[$lang]}
  {/if}
</div>
