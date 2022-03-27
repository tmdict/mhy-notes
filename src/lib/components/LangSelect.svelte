<script>
  import { browser } from '$app/env';
  import { lang } from '@store/site';

  function setLang(l) {
    lang.set(l);
    if (browser) {
      localStorage.setItem('tmdict.genshin.lang', l);
    }
  }
</script>

<div class="lang-select">
  <ul>
    <li on:click={() => setLang('en')}><img src="/img/en.png" alt="en" /> EN</li>
    <li on:click={() => setLang('zh')}><img src="/img/zh.png" alt="zh" /> 中文</li>
  </ul>
</div>

<style lang="scss">
  .lang-select {
    margin-left: auto;
    margin-right: 10px;
    font-size: 0.9em;

    @media only screen and (max-width: 460px) {
      margin: 0 5px 5px;
    }

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        margin-left: 15px;
        color: #aaa;

        @media only screen and (max-width: 460px) {
          margin: 5px 0 0 10px;
        }

        img {
          margin-right: 5px;
          width: 20px;
          border-radius: 50%;
          opacity: 0.85;
        }

        &:hover {
          color: #eee;
          cursor: pointer;

          img {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
