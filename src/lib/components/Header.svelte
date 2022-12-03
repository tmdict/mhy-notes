<script>
  import { getContext } from 'svelte';
  import Icon from './Icon.svelte';
  import LangSelect from '$lib/components/LangSelect.svelte';

  import { l10n, lang } from '@store/site';
  import GitIcon from '$lib/svg/git.svelte';
  import ToggleDark from '$lib/svg/moon.svelte';
  import ToggleLight from '$lib/svg/sun.svelte';

  const { theme, toggle } = getContext('theme');
  let spin = false;

  $: isDark = $theme.name === 'dark';
  $: lightExt = !isDark ? '_l' : '';
  $: topImg = 'top' + lightExt;

  function spinIcon(duration) {
    spin = true;
    setTimeout(() => (spin = false), duration);
  }
</script>

<div id="top">
  <div class="content-col content">
    <div class="content-row content-top">
      <a
        href="/"
        on:mouseenter={() => (topImg = 'top_alt' + lightExt)}
        on:mouseleave={() => (topImg = 'top' + lightExt)}
      >
        <Icon id="Genshin-Notes" src={topImg} size="100px" margin="0" />
      </a>

      <div class="content-col nav">
        <div id="name">
          GENSHIN<span class="highlight">notes</span>
        </div>
        <div class="content-row icons">
          <LangSelect />
          <div id="svg-icons">
            <a class="last" href="https://github.com/tmdict/genshin-notes"><GitIcon /></a>
            <div
              class="theme-toggle"
              class:spin-left={spin}
              on:click={toggle}
              on:click={() => spinIcon(650)}
              on:keydown={toggle}
            >
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

    <div class="content-row content-menu">
      <div class="group">
        <a href="/builds" style="margin-left:0;">{$l10n['builds'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/character-scaling">{$l10n['character-scaling'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/leveling-cost">{$l10n['leveling-cost'][$lang]}</a>
      </div>
      <div class="group">
        <a href="/talent-materials">{$l10n['talent-materials'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/weekly-boss-materials">{$l10n['boss-materials'][$lang]}</a>
        <span class="separator">·</span>
        <a href="/achievements">{$l10n['achievements'][$lang]}</a>
        <span class="separator">·</span>
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

  .content {
    align-items: center;

    .content-top {
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

    .content-menu {
      margin-top: 10px;

      .group {
        width: 100%;
        margin: 4px;
        text-align: center;

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

  %spin {
    animation: spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);
  }

  .spin-left {
    @extend %spin;
    @keyframes spin {
      0% {
        transform: scale(0) rotate(0deg);
      }
      100% {
        transform: scale(1) rotate(-720deg);
      }
    }
  }
</style>
