<script>
  import { l10n, lang } from '@store/site';
  import En from '$lib/components/content/Top/En.svelte';
  import Zh from '$lib/components/content/Top/Zh.svelte';

  const links = [
    {
      name: 'builds',
      url: 'builds',
      updated: '2022-11-24'
    },
    {
      name: 'character-scaling',
      url: 'character-scaling',
      updated: '2022-11-23'
    },
    {
      name: 'talent-materials',
      url: 'talent-materials',
      updated: '2022-11-19'
    },
    {
      name: 'weekly-boss-mat',
      url: 'weekly-boss-materials',
      updated: '2022-11-19'
    }
  ];

  const top = { en: En, zh: Zh };
</script>

<svelte:head>
  <title>Genshin TL;DR</title>
</svelte:head>

<svelte:component this={top[$lang]} />

{#each links as link, i}
  <a href="/{link.url}">
    <div class="content-col link" class:alt={i % 2 === 0}>
      <div class="content-row">
        <h1>{$l10n[link.name][$lang]}</h1>
        <div class="label">{link.updated}</div>
      </div>
    </div>
  </a>
{/each}

<style lang="scss">
  h1 {
    text-align: center;
  }

  a {
    color: var(--theme-text-normal);

    &:hover {
      text-decoration: none;
    }

    .link {
      padding: 10px 10px 10px 20px;
      color: var(--theme-text-normal);
      line-height: 1.2em;
      align-items: center;

      &:hover {
        background: var(--theme-main-bg-hover);
        cursor: pointer;
      }

      .content-row {
        align-items: center;
      }

      .label {
        color: var(--theme-text-body-highlight-alt);
        background: var(--theme-label-bg-highlight);
        font-size: 0.85rem;
        margin: 0 5px 5px;
        padding: 2px 10px;
        border-radius: 10px;
      }
    }
  }
</style>
