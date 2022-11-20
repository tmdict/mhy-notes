<script>
  import { getContext } from 'svelte';
  import Icon from './Icon.svelte';
  import LangSelect from '$lib/components/LangSelect.svelte';
  import TopNav from '$lib/components/TopNav.svelte';

  const { theme } = getContext('theme');
  
  $: isLight = $theme.name === 'light' ? '_l' : '';
  $: topImg = 'top' + isLight;
</script>

<div id="top">
  <a href="/" on:mouseenter={() => (topImg = 'top_alt' + isLight)} on:mouseleave={() => (topImg = 'top' + isLight)}>
    <Icon id="Genshin-TL;DR" src={topImg} size="100px" margin="0" />
  </a>

  <div class="content-col">
    <div id="name">
      GENSHIN<span class="highlight">TL;DR</span>
    </div>
    <div class="content-row">
      <TopNav />
      <LangSelect />
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
    margin-left: 10px;
    flex: 1 1 auto;
  }

  .content-row {
    align-items: center;
    font-size: 0.8em;
  }

  #name {
    color: #ccc;
    font-size: 2em;

    @media only screen and (max-width: 460px) {
      margin-bottom: 10px;
    }

    .highlight {
      color: var(--theme-text-header-title-sub);
      font-size: 0.6em;
      vertical-align: top;
    }
  }
</style>
