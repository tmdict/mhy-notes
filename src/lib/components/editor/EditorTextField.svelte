<script>
  import { slide } from 'svelte/transition';

  export let id;
  export let name = id;
  export let label = '';
  export let value = '';
  export let placeholder = '';
  export let width = '200px';
</script>

<div transition:slide class="input-field" style="--input-width: {width}">
  <label for={id}>{label}</label>
  <input class="input" type="text" {placeholder} {id} {name} bind:value />
</div>

<style lang="scss">
  .input-field {
    width: var(--input-width);
  }

  label {
    padding: 6px 0 0 13px;
  }
</style>
