<script>
  import { toast } from '@zerodevx/svelte-toast';
  import { browser } from '$app/environment';
  import { localData } from '@store/localdata';
  import { l10n, lang, toastOption } from '@store/site';

  // Support drag and drop in the future
  function getFilesFromInputEvent({ target }) {
    const files = target.files ? [...target.files] : [];
    target.value = ''; // Reset value so file can be uploaded again
    return files;
  }

  const onFile = (getFilesFunction) => (event) => {
    const files = getFilesFunction(event);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const imported = JSON.parse(reader.result);
        $localData = imported;
        if (browser) {
          localStorage.setItem('tmdict.genshin.data', reader.result);
        }
        toast.push('Import successful!', $toastOption['success']);
      } catch (err) {
        toast.push(`Import failed: ${err}`, $toastOption['error']);
      }
    };
    reader.readAsText(files[0]);
  };
</script>

<span class="file-upload">
  <label for="file-import">
    <span class="import">{$l10n['import-data'][$lang]}</span>
  </label>

  <input
    type="file"
    name="file-import"
    id="file-import"
    accept="application/json"
    required
    on:input={onFile(getFilesFromInputEvent)}
  />
</span>

<style lang="scss">
  .file-upload {
    .import {
      color: var(--theme-primary-blue);

      &:hover {
        cursor: pointer;
        color: var(--theme-primary-red);
        text-decoration: underline dotted;
      }
    }

    input {
      display: none;
    }
  }
</style>
