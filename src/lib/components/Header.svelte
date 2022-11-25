<script>
  import { getContext } from 'svelte';
  import Icon from './Icon.svelte';
  import LangSelect from '$lib/components/LangSelect.svelte';

  import { l10n, lang } from '@store/site';
  import GitIcon from '$lib/svg/git.svelte';
  import ToggleDark from '$lib/svg/moon.svelte';
  import ToggleLight from '$lib/svg/sun.svelte';

  const { theme, toggle } = getContext('theme');

  $: isDark = $theme.name === 'dark';

  $: isLight = $theme.name === 'light' ? '_l' : '';
  $: topImg = 'top' + isLight;
</script>

<div id="top">
  <div class="content-col iconnavmenu">
    <div class="content-row iconnav">
      <a href="/" on:mouseenter={() => (topImg = 'top_alt' + isLight)} on:mouseleave={() => (topImg = 'top' + isLight)}>
        <Icon id="Genshin-Notes" src={topImg} size="100px" margin="0" />
      </a>

      <div class="content-col nav">
        <div id="name">
          GENSHIN<span class="highlight">notes</span>
        </div>
        <div class="content-row icons">
          <LangSelect />
          <div id="svg-icons">
            <a class="last" href="https://github.com/tmdict/genshin-tldr"><GitIcon /></a>
            <div class="theme-toggle" on:click={toggle} on:keydown={toggle}>
              {#if isDark}
                <ToggleLight />
              {:else}
                <ToggleDark />
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-row menu">
      <div class="group">
        <a href="/builds" style="margin-left:0;">{$l10n['builds'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/character-scaling">{$l10n['character-scaling'][$lang]}</a>
      </div>
      <div class="group">
        <a href="/talent-materials">{$l10n['talent-materials'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/weekly-boss-materials">{$l10n['boss-materials'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/achievements">{$l10n['achievements'][$lang]}</a>
      </div>
      <div class="group last">
        <a href="/links">{$l10n['links'][$lang]}</a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #top {
    flex-flow: row wrap;
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
  }

  .content-col {
    flex: 1 1 auto;
  }

  .content-row {
    font-size: 0.9em;
  }

  #name {
    color: #ccc;
    font-size: 2em;
    margin-bottom: 5px;

    .highlight {
      color: var(--theme-text-header-title-sub);
      font-size: 0.6em;
      vertical-align: top;
    }
  }

  .iconnavmenu {
    align-items: center;

    .iconnav {
      align-items: end;
    }

    .nav {
      margin: 0 10px;

      .icons {
        align-items: center;

        #svg-icons {
          display: flex;
          flex-direction: row;
          margin-left: 5px;

          a:after {
            content: none;
          }

          .theme-toggle {
            margin-left: 10px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    .menu {
      margin-top: 10px;
      justify-content: center;

      .group {
        border-right: 1px dotted var(--theme-border-light);
        margin: 0 10px 0 5px;
        padding-right: 15px;

        @media only screen and (max-width: 460px) {
          border: 0;
        }

        &.last {
          border-right: 0;
        }

        .separator {
          color: #ccc;
          margin: 0 2px;
        }
      }
    }
  }

  a {
    color: var(--theme-text-header-highlight);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 2px;

    &:hover {
      color: var(--theme-link-hover);
    }

    &.last:after {
      content: none;
    }
  }
</style>
