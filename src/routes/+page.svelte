<script>
  import { l10n, lang } from '@store/site';
  import En from '$lib/components/content/Top/En.svelte';
  import Zh from '$lib/components/content/Top/Zh.svelte';

  const links = [
    {
      name: 'character-builds',
      url: 'builds',
      type: 'genshin-impact',
      updated: '2023-10-08'
    },
    {
      name: 'character-stat-scaling',
      url: 'character-scaling',
      type: 'genshin-impact',
      updated: '2023-10-08'
    },
    {
      name: 'commission-achievements',
      url: 'achievements',
      type: 'genshin-impact',
      updated: '2023-02-05'
    },
    {
      new: true,
      name: 'craftable-weapons',
      url: 'craftable-weapons',
      type: 'genshin-impact',
      updated: '2023-10-26'
    },
    {
      name: 'hsr-builds',
      url: 'hsr/builds',
      type: 'honkai-star-rail',
      updated: '2023-10-13'
    },
    {
      name: 'links',
      url: 'hsr/links',
      type: 'honkai-star-rail',
      updated: '2023-10-25'
    },
    {
      name: 'leveling-cost',
      url: 'leveling-cost',
      type: 'genshin-impact',
      updated: '2022-12-02'
    },
    {
      new: true,
      name: 'talent-materials',
      url: 'talent-materials',
      type: 'genshin-impact',
      updated: '2023-10-27'
    },
    {
      name: 'links',
      url: 'links',
      type: 'genshin-impact',
      updated: '2023-10-25'
    },
    {
      new: true,
      name: 'weekly-boss-mat',
      url: 'weekly-boss-materials',
      type: 'genshin-impact',
      updated: '2023-10-27'
    }
  ].sort((a, b) => b.updated.localeCompare(a.updated));

  const top = { en: En, zh: Zh };
</script>

<svelte:head>
  <title>mHY-notes</title>
</svelte:head>

<svelte:component this={top[$lang]} />

{#each links as link, i}
  <a class:first={i === 0} href="/{link.url}">
    <div class="content-col link" class:alt={i % 2 === 0}>
      <div class="content-row">
        <div class="name">{$l10n[link.name][$lang]}</div>
        <div class="type {link.type}">{$l10n[link.type][$lang]}</div>
        <div class="label">{link.updated}</div>
        {#if link.new}<div class="new">Updated</div>{/if}
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

    &.first .link {
      border-top: 2px solid var(--theme-site-primary-main);
    }

    .link {
      padding: 10px 10px 10px 20px;
      line-height: 1.2em;

      &:hover {
        background: var(--theme-bg-highlight);
        cursor: pointer;

        .name {
          color: var(--theme-site-primary-main);
        }
      }

      .content-row {
        align-items: start;
      }

      .name {
        color: var(--theme-text-normal);
        font: 2.2rem var(--theme-header-font);
        margin: 10px 5px;

        @media only screen and (max-width: 540px) {
          font-size: 1.6rem;
          width: 100%;
        }
      }

      .type,
      .label,
      .new {
        background: var(--theme-bg-site);
        font-size: 0.85rem;
        margin: 0 5px 5px;
        padding: 2px 10px;
        border-radius: 10px;

        @media only screen and (max-width: 540px) {
          font-size: 0.7rem;
          padding: 2px 10px;
        }
      }

      .type {
        font-weight: bold;
      }

      .type.genshin-impact {
        color: #72a6c0;
      }

      .type.honkai-star-rail {
        color: #6c6192;
      }

      .label {
        color: #bfbfbf;
      }

      .new {
        color: #f7d87c;
      }
    }
  }
</style>
