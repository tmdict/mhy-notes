<script>
  import { l10n, lang } from '@store/site';

  const guides = [
    {
      name: 'Prydwen.gg',
      lang: ['English'],
      url: 'https://www.prydwen.gg/star-rail/',
      description: 'Guides, character reviews, tier list and more.'
    },
    {
      name: 'NGA: 崩铁|全角色参考面板',
      lang: ['中文'],
      url: 'https://bbs.nga.cn/read.php?tid=36580156',
      description: '全角色收益曲线、圣遗物思路推荐、参考面板属性。'
    },
    {
      name: 'Keqing Mains',
      lang: ['English'],
      url: 'https://hsr.keqingmains.com/',
      description: 'Guides & Theorycrafting.'
    }
  ];

  const resource = [
    {
      name: 'Haku.shin',
      lang: ['English', '中文', '한국어'],
      url: 'https://hsr.hakush.in/',
      description: 'HSR database and tools.'
    },
    {
      name: 'Honey Impact',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://hsr.honeyhunterworld.com/',
      description: 'HSR database and tools.'
    },
    {
      name: 'Star Rail Station',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://starrailstation.com/',
      description: 'HSR database website with a wish history tracker, achievement tracker, and more.'
    },
    {
      name: 'StarDB.gg',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://stardb.gg/',
      description: 'HSR achievement tracker.'
    },
    {
      name: '黑塔 Space',
      lang: ['English', '中文'],
      url: 'https://herta.space/',
      description: '星穹铁道工具。'
    }
  ];
</script>

<svelte:head>
  <title>{$l10n['useful-links'][$lang]} | mHY-notes</title>
</svelte:head>

<h1>{$l10n['useful-links'][$lang]}</h1>

<div id="content">
  <h4>{$l10n['guides'][$lang]}</h4>
  {#each guides as link, i}
    <div class="content-col link" class:alt={i % 2 === 0}>
      <a href={link.url}>
        <div class="content-row">
          <h5>{link.name}</h5>
          {#each link.lang as lang}
            <div class="label">{lang}</div>
          {/each}
        </div>
        <div class="description">{link.description}</div>
      </a>
    </div>
  {/each}

  <h4>{$l10n['resources'][$lang]}</h4>
  {#each resource as link, i}
    <div class="content-col link" class:alt={i % 2 === 0}>
      <a href={link.url}>
        <div class="content-row">
          <h5>{link.name}</h5>
          {#each link.lang as lang}
            <div class="label">{lang}</div>
          {/each}
        </div>
        <div class="description">{link.description}</div>
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  h4 {
    color: var(--theme-site-primary-alt);
    margin: 40px 0 5px;
    text-align: center;
  }

  .link {
    padding: 10px 10px 10px 20px;
    color: var(--theme-text-normal);
    line-height: 1.2em;

    &:hover {
      background: var(--theme-bg-highlight);
      cursor: pointer;
      
      a h5 {
        color: var(--theme-site-primary-alt);
      }
    }

    a {
      color: var(--theme-text-normal);

      &:hover {
        text-decoration: none;
      }

      h5 {
        color: var(--theme-site-primary-main);
        padding-top: 2px;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: normal;
        margin: 0;
      }

      .label {
        color: var(--theme-site-secondary-main);
        background: var(--theme-bg-highlight);
        font-size: 0.85rem;
        margin: 0 5px 5px;
        padding: 2px 10px;
        border-radius: 10px;
      }

      .description {
        padding: 5px;
      }
    }
  }
</style>
