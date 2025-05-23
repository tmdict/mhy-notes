<script>
  export let id;
  export let name = id;
  export let label = '';
  export let value = '';
  export let width = '520px';
  export let height = '200px';
</script>

<div class="input-field" style="--input-width: {width}; --input-height: {height}">
  <label for={id}>{label}</label>
  <textarea class="input" type="textarea" {id} {name} bind:value></textarea>
</div>

<style lang="scss">
  .input-field {
    width: 100%;
  }

  textarea.input {
    height: var(--input-height);
    padding: 10px;
  }

  label {
    padding: 6px 0 0 13px;
  }
</style>
