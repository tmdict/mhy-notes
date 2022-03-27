<script>
  import { l10n, lang } from '@store/site';

  const links = [
    {
      name: 'Keqing Mains',
      lang: ['English'],
      url: 'https://keqingmains.com/',
      description: 'Comprehensive theorycrafting and guides.'
    },
    {
      name: 'Genshin Community Character Builds',
      lang: ['English'],
      url: 'https://tinyurl.com/genshinbuilds',
      description: 'Character builds by Genshin Impact Helper Team.'
    },
    {
      name: 'Genshin Optimizer',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://frzyc.github.io/genshin-optimizer/#/',
      description: 'Builds, artifacts and character recommendation and optmization tool.'
    },
    {
      name: 'Paimon.moe',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://paimon.moe/',
      description: 'Genshin database website with a information on builds, a wish history tracker, timelines, and more.'
    },
    {
      name: 'Spiral Abyss Analytics',
      lang: ['English', '中文'],
      url: 'https://spiralabyss.org/',
      description: 'Spiral Abyss data analystics contributed by players who with ★36 Abyssal Stars.'
    },
    {
      name: 'ShinShin.moe',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://shinshin.moe/',
      description: 'Genshin card generator to create a collage of your Genshin Impact character builds.'
    },
    {
      name: 'SEELIE',
      lang: ['English', 'Português', 'Español', '中文'],
      url: 'https://seelie.me/',
      description: 'Resource planner and database.'
    },
    {
      name: 'Uncle Dictionary',
      lang: ['English'],
      url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvDFYG19Y9Y-uRH2_LsuIoOsLjefIfKu96WFgjXCcTFX93b9GT3e90QQxic7gWmEL-lQYpfD45O2Z-/pubhtml',
      description: ''
    },
    {
      name: 'gcsim',
      lang: ['English', 'Español', '日本語', '中文'],
      url: 'https://www.gcsim.app/',
      description: 'Team DPS simulator.'
    },
    {
      name: 'gensh.in',
      lang: ['English'],
      url: 'https://www.gensh.in/',
      description: 'Genshin Impact Database.'
    },
    {
      name: 'Genshin Impact Calculator',
      lang: ['English', 'Русский'],
      url: 'https://genshin.aspirine.su/',
      description: 'Damage calculation tool.'
    },
    {
      name: '原神冒险团',
      lang: ['中文'],
      url: 'https://mp.weixin.qq.com/s/Yk5mart2PBupmFL2jKQWmA',
      description: '原神角色攻略、探索解谜、入坑指南。'
    },
    {
      name: 'NGA / 原神冒险团',
      lang: ['中文'],
      url: 'https://bbs.nga.cn/read.php?tid=25843014',
      description: '全角色收益曲线、圣遗物思路推荐、参考面板属性。'
    },
    {
      name: '莫娜占卜铺',
      lang: ['中文'],
      url: 'https://www.mona-uranai.com/',
      description: '圣遗物配装。'
    },
    {
      name: '可莉特调',
      lang: ['中文'],
      url: 'https://genshin.pub/',
      description: '每日素材，养成计算器，圣遗物评分，玩家身份证。'
    },
    {
      name: 'Ysin',
      lang: ['中文'],
      url: 'https://yuanshen.xin/',
      description: '角色练度评测。'
    },
    {
      name: '兎老师',
      lang: ['中文'],
      url: 'https://space.bilibili.com/24889090',
      description: '原神角色推荐榜。'
    },
    {
      name: '椰羊cocogoat',
      lang: ['English', '中文'],
      url: 'https://cocogoat.work/',
      description: '网页圣遗物管理·成就扫描。'
    },
    {
      name: 'Honey Impact',
      lang: ['Multi-lingual · 多语言'],
      url: 'https://genshin.honeyhunterworld.com/',
      description: 'Genshin Impact database and tools.'
    }
  ];
</script>

<svelte:head>
  <title>{$l10n['useful-links'][$lang]} | Genshin TL;DR</title>
</svelte:head>

<div class="top">
  <h1>{$l10n['useful-links'][$lang]}</h1>
</div>

{#each links as link, i}
  <div class="content-col link" class:alt={i % 2 === 0}>
    <a href={link.url}>
      <div class="content-row">
        <h4>{link.name}</h4>
        {#each link.lang as lang}
          <div class="label">{lang}</div>
        {/each}
      </div>
      <div class="description">{link.description}</div>
    </a>
  </div>
{/each}

<style lang="scss">
  .link {
    padding: 10px 10px 10px 20px;
    color: var(--theme-text-normal);
    line-height: 1.2em;

    &:hover {
      background: var(--theme-main-bg-hover);
      cursor: pointer;
    }

    a {
      color: var(--theme-text-normal);

      &:hover {
        text-decoration: none;

        h4 {
          color: var(--theme-link-hover);
        }
      }

      h4 {
        padding-top: 2px;
        font-size: 1rem;
        text-transform: none;
        letter-spacing: normal;
      }

      .label {
        color: var(--theme-text-body-highlight-alt);
        background: var(--theme-label-bg-highlight);
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
