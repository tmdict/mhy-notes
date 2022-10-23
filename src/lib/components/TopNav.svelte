<script>
  import { getContext } from 'svelte';
  import { l10n, lang } from '@store/site';
  import GitIcon from '$lib/svg/git.svelte';
  import ToggleDark from '$lib/svg/moon.svelte';
  import ToggleLight from '$lib/svg/sun.svelte';

  const { theme, toggle } = getContext('theme');

  $: isDark = $theme.name === 'dark';
</script>

<a href="/builds" style="margin-left:0;">{$l10n['builds'][$lang]}</a>
<span class="separator">·</span>
<!--a href="/achievements">{$l10n['achievements'][$lang]}</a>
<span class="separator">·</span-->
<a href="/materials">{$l10n['materials'][$lang]}</a>
<span class="separator">·</span>
<a href="/boss-materials">{$l10n['weekly-boss-mat'][$lang]}</a>
<span class="separator">·</span>
<a href="/links">{$l10n['links'][$lang]}</a>
<span class="separator">·</span>
<div id="svg-icons">
  <a class="last" href="https://github.com/tmdict/genshin-tldr"><GitIcon /></a>
  <div class="theme-toggle" on:click={toggle}>
    {#if isDark}
      <ToggleLight />
    {:else}
      <ToggleDark />
    {/if}
  </div>
</div>

<style lang="scss">
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

  .separator {
    margin: 0 5px;
  }

  #svg-icons {
    display: flex;
    flex-direction: row;
    align-items: center;

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
</style>
