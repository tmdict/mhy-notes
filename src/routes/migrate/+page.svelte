<script>
  import { browser } from '$app/environment';
  import { localData } from '@store/localdata';
  import lzstring from 'lz-string';

  if (browser) {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    if (currentUrl.includes('genshin.tmdict')) {
      const encoded = lzstring.compressToEncodedURIComponent(JSON.stringify($localData));
      console.log(encoded);
      window.location.replace(`http://mhy.tmdict.com/migrate#${encoded}`);
    }
    
    if (currentUrl.includes('mhy.tmdict')) {
      console.log(window.location.hash.substring(1));
      const decoded = JSON.parse(lzstring.decompressFromEncodedURIComponent(window.location.hash.substring(1)));
      console.log(decoded);
      browser && localStorage.setItem('tmdict.genshin.data', JSON.stringify(decoded));
      console.log('migration complete')
    }
  }
</script>

<svelte:head>
  <title>Migration | mHY-notes</title>
</svelte:head>

<div class="top" />
