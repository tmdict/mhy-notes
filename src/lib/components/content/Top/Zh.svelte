<script>
  import Top from '$lib/components/content/Top/_template.svelte';
</script>

<Top>
  <span slot="intro"
    ><p>
      Genshin TL;DR是一个提供跟<a href="https://genshin.mihoyo.com/">原神</a
      >相关的小工具和信息的网站。其内容注重构造简单，以便用于快速使用以及参考。
    </p></span
  >

  <span slot="builds">
    <p>
      角色配装汇集，参考数据用多个攻略组和数据收集网站的信息，做成简单的信息图。还有一个实验性的配装编辑器，可以用其作出各种配装以及分享。
    </p>
  </span>

  <!--span slot="achievements">
    <p>
      一个方便搜索的成就表，记录了只有通过每日委托任务才能获得的隐藏成就以及完成方法，外加一个记录成就进度的清单工具。
    </p>
  </span-->

  <span slot="materials">
    <p>一个平凡的升级材料周常表。</p>
  </span>
</Top>
