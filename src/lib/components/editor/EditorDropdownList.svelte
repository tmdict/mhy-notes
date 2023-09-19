<script>
  import { slide } from 'svelte/transition';

  export let id;
  export let name = id;
  export let label = '';
  export let list = [];
  export let selected = list[0];
  export let width = '200px';
  export let inputWidth = 'auto';
  export let exclude = [];
  export let groups = [];
  export let l10n = {}; // For overriding display value
</script>

<div transition:slide class="input-field" style="--input-width: {width}">
  <label for={id}>{label}</label>
  <select class="input" style="--input-box-width: {inputWidth}" bind:value={selected} {id} {name}>
    {#if groups.length > 0}
      {#each groups as group}
        <optgroup label={group}>
          {#each list[group] as item}
            <option disabled={exclude.includes(item)} value={item}>
              {Object.keys(l10n).length === 0 ? item : l10n[item]}
            </option>
          {/each}
        </optgroup>
      {/each}
    {:else}
      {#each list as item}
        <option disabled={exclude.includes(item)} value={item}>
          {Object.keys(l10n).length === 0 ? item : l10n[item]}
        </option>
      {/each}
    {/if}
  </select>
</div>

<style lang="scss">
  .input-field {
    width: var(--input-width);
  }

  .input:hover {
    cursor: pointer;
    color: var(--theme-site-primary-alt);
  }

  select {
    width: var(--input-box-width);
  }

  label {
    padding: 6px 0 0 13px;
  }
</style>
