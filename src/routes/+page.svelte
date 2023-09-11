<script>
  import { l10n, lang } from '@store/site';
  import En from '$lib/components/content/Top/En.svelte';
  import Zh from '$lib/components/content/Top/Zh.svelte';

  // Migrate domain
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
      window.location.replace(`https://mhy.tmdict.com/#${encoded}_migrating`);
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

  const links = [
    {
      name: 'character-builds',
      url: 'builds',
      updated: '2023-06-04'
    },
    {
      name: 'character-stat-scaling',
      url: 'character-scaling',
      updated: '2023-06-04'
    },
    {
      name: 'leveling-cost',
      url: 'leveling-cost',
      updated: '2022-12-02'
    },
    {
      name: 'talent-materials',
      url: 'talent-materials',
      new: true,
      updated: '2023-08-18'
    },
    {
      name: 'weekly-boss-mat',
      url: 'weekly-boss-materials',
      new: true,
      updated: '2023-08-18'
    },
    {
      name: 'commission-achievements',
      url: 'achievements',
      updated: '2023-02-05'
    }
  ];

  const top = { en: En, zh: Zh };
</script>

<svelte:head>
  <title>mHY-notes</title>
</svelte:head>

<svelte:component this={top[$lang]} />

{#each links as link, i}
  <a href="/{link.url}">
    <div class="content-col link" class:alt={i % 2 === 0}>
      <div class="content-row">
        <div class="name">{$l10n[link.name][$lang]}</div>
        <div class="label" class:new={link.new}>{link.updated}</div>
      </div>
    </div>
  </a>
{/each}

<style lang="scss">
  a {
    color: var(--theme-text-normal);

    &:hover {
      text-decoration: none;
    }

    .link {
      padding: 10px 10px 10px 20px;
      color: var(--theme-text-normal);
      line-height: 1.2em;

      &:hover {
        background: var(--theme-main-bg-hover);
        cursor: pointer;
      }

      .content-row {
        align-items: start;
      }

      .name {
        color: var(--theme-text-body-highlight);
        font: 2.2rem var(--theme-header-font);
        margin: 10px 5px;

        @media only screen and (max-width: 540px) {
          font-size: 1.6rem;
          width: 100%;
        }
      }

      .label {
        color: var(--theme-text-body-highlight-alt3);
        background: var(--theme-label-bg-highlight);
        font-size: 0.85rem;
        margin: 0 5px 5px;
        padding: 2px 10px;
        border-radius: 10px;

        @media only screen and (max-width: 540px) {
          font-size: 0.7rem;
          padding: 2px 10px;
        }
      }

      .new {
        color: var(--theme-text-body-highlight-alt4);
      }
    }
  }
</style>
