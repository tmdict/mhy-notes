<script>
  import BuildFaq from '$lib/components/content/BuildFaq/_template.svelte';
</script>

<BuildFaq>
  <span slot="about">
    <h5>关于</h5>

    <p>
      在玩游戏的过程中大家经常会有一些类似于“哪个装备好一些”的问题，这个时候大家经常会花些时间去翻阅攻略文章或视频。如果只是需要一个“差不多”的简略答案时，一图流是最好用的，可是图像是静态的，图里的信息不能搜索，在手机上看更是比较费劲。
    </p>

    <p>
      这个角色配装参考列表是一个在深入指南和一图流之间的工具，在提供摘要式信息同时加入了一些简单的分类和搜索功能。其数据主要来自于<a
        href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a
      >、<a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>和<a
        href="https://keqingmains.com/">KQM</a
      >。
    </p>

    <p>
      由于这些数据是从多个来源聚合的，某些信息难免会在统计过程中流失，为此我们不保证在这里看到的所有内容是100%准确的！当攻略之间有冲突的信息时，我们会用更广泛推荐的那个，如果还是不明确，就完全不用。目的是提供一个所有角色数据都在一处的、"差不多就够了"的参考。如果想看更准确、更深入的攻略，我们建议去看那个角色的深入攻略，每个条目里都有其信息来源的链接。
    </p></span
  >

  <span slot="how-to">
    <h5>使用方式介绍</h5>

    <p>介绍一下这了的信息是如何整理出来的。</p>
  </span>

  <span slot="character">
    <p>人物，配装名称和种类。</p>

    <p>
      <span class="highlight">命之座：</span> 一部分人物会有推荐的命之座。这些推荐来源于其他攻略，比如<a
        href="https://space.bilibili.com/24889090">兎老师的角色推荐榜</a
      >。
    </p>

    <p>
      <span class="highlight">毕业面板：</span> 标有<span style="color:var(--theme-primary-gold); padding:0 5px">★</span
      >，该角色的毕业面板，一般来说需要花很多时间和精力，很多个月刷圣遗物，才能达到。
    </p>

    <p>
      <span class="highlight">氪佬：</span> 标有<img style="width:20px" src="/img/whale.png" alt="whale" />，
      只有氪金才能达到的，比如C6R5。
    </p>

    <p>
      <span class="highlight">零氪：</span> 如果达到一下条件会标为零氪：
    </p>

    <ol>
      <li>合理的命之座要求</li>
      <ol>
        <li>5星角色0命</li>
        <li>4 星角色任何命（因为4星角色不是限定的）</li>
      </ol>
      <li>第一推荐的武器是四星</li>
    </ol>

    <p>其他种类相关的信息可以去看各个装备页面。</p>
  </span>

  <span slot="weapon">
    <p>
      前三推荐的武器。其中第一个是毕业武器。如果三个武器都是5星，第三个将会被次角色最实用的4星武器代替（除非这是一个氪佬配装）。
    </p>

    <p>如果信息来源有冲突，我们会更偏向使用最近更新或是匹配最新版本的信息。</p>
  </span>

  <span slot="artifact">
    <p>
      一到三套推荐的圣遗物。如果有一套使用率和评价明显第一的，就只列一个。如果几个信息来源有不同的推荐，我们会只列排前的，其它的请去看其攻略。因为参考面板数值来自于<a
        href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a
      >，一般情况下我们会偏向原神冒险团的推荐。
    </p>

    <p>如果信息来源有冲突，我们会更偏向使用最近更新或是匹配最新版本的信息。</p>
  </span>

  <span slot="mainstat">
    <p>主词条推荐。为保持信息简练，每个推荐最多只会列两个词条。</p>
  </span>

  <span slot="stat">
    <p>参考面板以及该优先练的词条。这是来自于L</p>

    <ol>
      <li>
        <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>的词条排名
      </li>
      <li><a href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a>词条参考面板</li>
    </ol>

    <p>
      参考值被向下舍入到最接近的第10和100位。请记住因为这些参考值是用角色收益曲线计算出来的，不是一时半会就能达到的，我们建议把它作为一个参考，或长期的目标。
      由于这些都是我们摘要过来的，我们不保证它的准确性。请通过链接去看源材料的计算以及更深入的分析。
    </p>
  </span>

  <span slot="notes">
    <p>一些零碎的笔记，比如那个天赋该优先，过推荐的玩法。</p>

    <ul>
      <li>A或NA：普通攻击</li>
      <li>E：元素战技</li>
      <li>Q：元素爆发</li>
      <li>CA：重击</li>
      <li>xN (where N is a number): repeat for N times</li>
    </ul>

    <p>在优先天赋里，“A > E > Q”的意思是优先练普攻，其次E技能，Q技能在最后。</p>

    <p>在笔记里，“NAx4 > CA > Q”是那个人物的玩法，意思是普攻4次（普攻x4）然后重击，最后开大（Q）。</p>
  </span>
</BuildFaq>
