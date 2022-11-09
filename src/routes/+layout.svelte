<script>
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import ThemeContext from '$lib/components/ThemeContext.svelte';

  const toastOptions = { duration: 1500 };
</script>

<ThemeContext>
  <main>
    <div id="container">
      <div id="header">
        <Header />
      </div>

      <div id="main">
        <slot />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  </main>
  <SvelteToast options={toastOptions} />
</ThemeContext>

<style lang="scss" global>
  @import 'normalize.css';

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body,
  html {
    font-size: 16px;
    background-color: var(--theme-body-bg-color);
    color: var(--theme-text-normal);
  }

  #container {
    display: flex;
    flex-direction: column;
  }

  #header {
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: 185px;
    background-color: var(--theme-header-bg-color);
    margin: 0 auto;
    padding: 20px 0;
    font-family: var(--theme-main-font);
    border-bottom: 4px var(--theme-divider) solid;

    @media only screen and (max-width: 960px) {
      height: 100%;
      padding-bottom: 5px;
    }
  }

  #main {
    width: 960px;
    min-width: 320px;
    min-height: 200px;
    background-color: var(--theme-main-bg-color);
    margin: -60px auto 0;
    border: 2px solid var(--theme-main-border);
    border-radius: 5px;
    font: 1rem normal var(--theme-main-font);
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 90%), 0 6px 20px 0 rgb(0 0 0 / 20%);

    @media only screen and (max-width: 960px) {
      width: auto;
      margin: 0 auto;
    }
  }

  #footer {
    margin: 20px auto;
    font-family: var(--theme-main-font);
    font-size: 0.8rem;
  }

  p {
    line-height: 1.5em;

    .highlight {
      color: var(--theme-primary-red);
      font-weight: bold;
    }
  }

  a {
    color: var(--theme-primary-blue);
    text-decoration: none;

    &:hover {
      color: var(--theme-primary-red);
      text-decoration: underline dotted;
    }
  }

  ul,
  ol {
    line-height: 1.5em;
  }

  h1 {
    color: var(--theme-text-body-highlight);
    font: 2.4em var(--theme-header-font);
    text-align: center;
    margin-bottom: 30px;
  }

  h2 {
    color: var(--theme-text-main-title);
    font: 2em var(--theme-header-font);
  }

  h3 {
    color: var(--theme-text-normal);
    font: 1.5em var(--theme-header-font);
  }

  h4 {
    color: var(--theme-text-body-highlight);
    font: bold 1em var(--theme-main-font);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0;
  }

  h5 {
    color: var(--theme-primary-red);
    font: bold 1.1em var(--theme-main-font);
    margin: 15px 0;
  }

  .content-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.alt {
      background: var(--theme-main-bg-alt-color);
    }
  }

  .content-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    &.alt {
      background-color: var(--theme-main-bg-alt-color);
    }
  }

  .align-center {
    align-items: center;
  }

  .icon img {
    display: block;
    float: left;
    border-radius: 5px;
  }

  .menu {
    text-align: center;
    min-width: 300px;
    margin: 0 auto 10px;
    padding: 5px 20px;
  }

  .menu-separator {
    margin-left: 5px;
    padding-left: 10px;
    border-left: 1px dotted var(--theme-border-light);
  }

  .build-box {
    padding: 10px;
    flex-wrap: nowrap;
  }

  .build-heading {
    color: var(--theme-primary-red);
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .rarity-1 img {
    background: url('/img/rarity/1.png');
  }

  .rarity-2 img {
    background: url('/img/rarity/2.png');
  }

  .rarity-3 img {
    background: url('/img/rarity/3.png');
  }

  .rarity-4 img {
    background: url('/img/rarity/4.png');
  }

  .rarity-5 img {
    background: url('/img/rarity/5.png');
  }

  .rarity-sp img {
    background: url('/img/rarity/sp.png');
  }

  .overlay {
    position: absolute;
    text-align: right;
    font-size: 12px;
    color: var(--theme-text-overlay);
    font-weight: bold;
    text-shadow: -1px -1px 0 var(--theme-text-overlay-shadow), 1px -1px 0 var(--theme-text-overlay-shadow),
      -1px 1px 0 var(--theme-text-overlay-shadow), 1px 1px 0 var(--theme-text-overlay-shadow),
      -2px -2px 4px var(--theme-text-overlay-shadow), 2px -2px 4px var(--theme-text-overlay-shadow),
      -2px 2px 4px var(--theme-text-overlay-shadow), 2px 2px 4px var(--theme-text-overlay-shadow);
  }

  .input-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 200px;
  }

  .input {
    height: 34px;
    margin: 5px 10px 10px;
    padding: 0px 12px;
    color: var(--theme-text-input);
    background-color: var(--theme-input-bg);
    font-size: 1em;
    line-height: 1.4;
    border: 2px solid var(--theme-main-bg-color);
    border-radius: 6px;
    box-shadow: none;

    &:focus {
      outline: none !important;
      border: 2px solid var(--theme-primary-red);
    }
  }

  .search-highlight {
    color: var(--theme-primary-red);
    background-color: var(--theme-text-overlay);
  }

  ._toastMsg {
    font: 1rem normal var(--theme-main-font);
    margin-left: 5px;
    margin-right: 5px;
  }

  @import 'tippy.js/animations/scale-subtle.css';

  .tippy-box[data-theme~='custom'] {
    background-color: var(--theme-filter-active-hover-color);
    border: 1px solid #555;
    border-radius: 5px;
    font: 1rem normal var(--theme-main-font);
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 90%), 0 6px 20px 0 rgb(0 0 0 / 20%);
    padding: 15px;
  }

  .tippy-content {
    font-size: 0.9rem;
    line-height: 1.5em;
    overflow-wrap: anywhere;

    .highlight {
      color: var(--theme-text-body-highlight);
      font-weight: bold;
    }
  }
</style>
