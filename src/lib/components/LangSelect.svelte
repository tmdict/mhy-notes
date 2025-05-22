<script>
  import { browser } from '$app/environment';
  import { lang } from '@store/site';
  import ImgEn from '$lib/img/en.png?enhanced';
  import ImgZh from '$lib/img/zh.png?enhanced';

  function setLang(l) {
    lang.set(l);
    browser && localStorage.setItem('tmdict.mhy.lang', l);
  }
</script>

<div class="lang-select">
  <ul>
    <li role="presentation" on:click={() => setLang('en')} on:keydown={() => setLang('en')}>
      <enhanced:img class="lang-img" src={ImgEn} alt="en" /> EN
    </li>
    <li role="presentation" on:click={() => setLang('zh')} on:keydown={() => setLang('zh')}>
      <enhanced:img class="lang-img" src={ImgZh} alt="zh" /> 中文
    </li>
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

        .lang-img {
          margin-right: 5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          opacity: 0.85;
        }

        &:hover {
          color: #eee;
          cursor: pointer;

          .lang-img {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
