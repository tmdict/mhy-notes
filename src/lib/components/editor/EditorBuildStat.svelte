<script>
  import { availableInputs, buildEditor } from '@store/editor';
  import { l10n, lang } from '@store/site';
  import EditorDropdownList from '$lib/components/editor/EditorDropdownList.svelte';
  import EditorTextField from '$lib/components/editor/EditorTextField.svelte';

  export let statKey;
  const keys = buildEditor.getKeys.stat(statKey);
</script>

<div class="content-row">
  <EditorDropdownList
    id={keys.statName}
    label={$l10n['stats-priority'][$lang]}
    list={$availableInputs.stat}
    l10n={$availableInputs.stat.reduce((acc, c) => ({ ...acc, [c]: $l10n[c][$lang] }), {})}
    width="160px"
    bind:selected={$buildEditor[keys.statName]}
  />
  <EditorTextField
    id={keys.statVal}
    label={$l10n['stats-reference'][$lang]}
    placeholder={$l10n['optional'][$lang]}
    width="260px"
    bind:value={$buildEditor[keys.statVal]}
  />
</div>
