<script>
  import { browser } from '$app/environment';
  import { lang } from '@store/site';

  function setLang(l) {
    lang.set(l);
    browser && localStorage.setItem('tmdict.genshin.lang', l);
  }
</script>

<div class="lang-select">
  <ul>
    <li on:click={() => setLang('en')} on:keydown={() => setLang('en')}><img src="/img/en.png" alt="en" /> EN</li>
    <li on:click={() => setLang('zh')} on:keydown={() => setLang('zh')}><img src="/img/zh.png" alt="zh" /> 中文</li>
  </ul>
</div>

<style lang="scss">
  .lang-select {
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-right: 10px;
        color: #aaa;

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
