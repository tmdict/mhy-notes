<script>
  import { browser } from '$app/environment';
  import { localData } from '@store/localdata';
  import lzstring from 'lz-string';

  if (browser) {
    const currentUrl = window.location.href;

    if (currentUrl.includes('genshin.tmdict')) {
      const encoded = lzstring.compressToEncodedURIComponent(JSON.stringify($localData));
      window.location.replace(`http://mhy.tmdict.com/#${encoded}`);
    }
    
    if (currentUrl.includes('mhy.tmdict')) {
      console.log(window.location.hash.substring(1));
      const decoded = JSON.parse(lzstring.decompressFromEncodedURIComponent(window.location.hash.substring(1)));
      browser && localStorage.setItem('tmdict.mhy.data', JSON.stringify(decoded));
      console.log('migration complete')
    }
  }
</script>

<svelte:head>
  <title>Migration | mHY-notes</title>
</svelte:head>

<div class="top" />
