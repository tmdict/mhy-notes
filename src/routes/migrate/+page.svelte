<script>
  import { browser } from '$app/environment';
  import { localData } from '@store/localdata';
  import lzstring from 'lz-string';

  if (browser) {
    console.log($localData)
    const currentUrl = window.location.href;
    console.log(currentUrl);

    if (currentUrl.includes('genshin.tmdict')) {
      const encoded = lzstring.compressToEncodedURIComponent(JSON.stringify($localData));
      console.log(encoded);
      window.location.replace(`http://mhy.tmdict.com/#${encoded}_migrating`);
    }
    
    if (currentUrl.includes('mhy.tmdict') && window.location.hash) {
      if (window.location.hash.slice(-10) === '_migrating') {
        const decoded = JSON.parse(lzstring.decompressFromEncodedURIComponent(window.location.hash.substring(1, window.location.hash.length - 10)));
        console.log(decoded);
        if (decoded.achievements) {
          browser && localStorage.setItem('tmdict.genshin.data', JSON.stringify(decoded));
          window.location = window.location + '_migration-complete';
          window.location.reload();
        }
      }
      console.log('migration complete')
    }
  }
</script>

<svelte:head>
  <title>Migration | mHY-notes</title>
</svelte:head>

<div class="top" />
