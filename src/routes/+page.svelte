<script>
  import { l10n, lang } from '@store/site';
  import En from '$lib/components/content/Top/En.svelte';
  import Zh from '$lib/components/content/Top/Zh.svelte';

  const links = [
    {
      name: 'character-builds',
      url: 'builds',
      updated: '2022-12-17'
    },
    {
      name: 'character-stat-scaling',
      url: 'character-scaling',
      new: true,
      updated: '2023-01-30'
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
      updated: '2023-01-30'
    },
    {
      name: 'weekly-boss-mat',
      url: 'weekly-boss-materials',
      new: true,
      updated: '2023-01-30'
    },
    {
      name: 'commission-achievements',
      url: 'achievements',
      new: true,
      updated: '2023-02-05'
    }
  ];

  const top = { en: En, zh: Zh };
</script>

<svelte:head>
  <title>Genshin Notes</title>
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
