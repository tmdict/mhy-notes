<script>
  import { buildtypes } from '@store/builds';
  import { buildEditor } from '@store/editor';
  import { l10n, lang } from '@store/site';
  import EditorAutoComplete from '$lib/components/editor/EditorAutoComplete.svelte';

  let selectedOptions = $buildEditor['type'] ? $buildEditor['type'] : [];

  const handleSubmit = (selectedValue) => {
    if (selectedOptions.indexOf(selectedValue) === -1) {
      selectedOptions = [...selectedOptions, selectedValue];
    }
    $buildEditor['type'] = selectedOptions;
  };

  const clearAll = () => {
    selectedOptions = [];
    $buildEditor['type'] = [];
  };
</script>

<div class="content-col">
  <EditorAutoComplete
    id="build-type"
    label={$l10n['build-type'][$lang]}
    placeholder={$l10n['build-type-placeholder'][$lang]}
    options={buildtypes}
    l10n={buildtypes.reduce((acc, t) => ({ ...acc, [t]: $l10n[t][$lang] }), {})}
    onSubmit={handleSubmit}
  />

  <div class="type-label content-row">
    {#each selectedOptions as option}
      <span class="label">{$l10n[option] ? $l10n[option][$lang] : option}</span>
    {/each}
    {#if selectedOptions.length > 0}
      <a class="clear" on:click|preventDefault={clearAll} href="/#">{$l10n['clear-all'][$lang]}</a>
    {/if}
  </div>
</div>

<style lang="scss">
  .type-label {
    margin: 0 8px;
    max-width: 240px;
  }

  .label {
    color: var(--theme-text-normal);
    font-size: 0.85rem;
    background: var(--theme-bg-highlight);
    border: 1px dotted var(--theme-border-light);
    margin: 0 5px 5px;
    padding: 5px;
    border-radius: 10px;
  }

  .clear {
    font-size: 0.8rem;
    margin: 5px 10px;
  }
</style>
