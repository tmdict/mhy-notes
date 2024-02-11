<script>
  import BuildFaq from '$lib/components/content/BuildFaq/_template.svelte';
</script>

<BuildFaq>
  <span slot="about">
    <h5>关于</h5>

    <p>
      在玩游戏的过程中大家经常会有一些类似于“哪个装备好一些”的问题，这个时候大家经常会花些时间去翻阅攻略文章或视频。一图流是很好用，可是图像是静态的，图里的信息不能搜索，在手机上看更是比较费劲。这里的信息旨在提供一个“足够好”的快速答案。
    </p>

    <p>
      这个角色配装参考列表在提供摘要式信息同时加入了一些简单的分类和搜索功能。其数据主要来自于<a
        href="https://www.miyoushe.com/ys/accountCenter/postList?id=160367110">原神冒险团</a
      >、<a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>和<a
        href="https://keqingmains.com/">KQM</a
      >。
    </p>

    <p>
      由于这些数据是从多个来源聚合的，某些信息难免会在统计过程中流失，<strong>为此我们不保证在这里看到的所有内容是100%准确的！</strong>其主要目的是提供一个“差不多就够了”的参考。如果想看更准确、更深入的攻略，我们建议去看那个角色的深入攻略，每个条目里都有其信息来源的链接。
    </p></span
  >

  <span slot="how-to">
    <h5>使用方式介绍</h5>
  </span>

  <span slot="character">
    <p>人物，配装名称和种类。</p>

    <p>
      <span class="highlight">命座：</span> 推荐的命座。这些推荐来源于其他攻略。
    </p>
  </span>

  <span slot="weapon">
    <p>
      前两推荐的武器。其中第一个是毕业武器。其中之一会是最实用的非5星武器。
    </p>
  </span>

  <span slot="artifact">
    <p>
      前两套推荐的圣遗物。如果几个信息来源有不同的推荐，我们会只列排前的，其它的请去看其攻略。
    </p>

    <p>因为参考面板数值来自于<a
      href="https://www.miyoushe.com/ys/accountCenter/postList?id=160367110">原神冒险团</a
    >，一般情况下我们会偏向原神冒险团的推荐。</p>
  </span>

  <span slot="mainstat">
    <p>主词条推荐。为保持信息简练，每个推荐最多只会列两个词条。</p>
  </span>

  <span slot="stat">
    <p>参考面板以及优先练的词条。这是来于：</p>

    <ol>
      <li>
        <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>的词条排名
      </li>
      <li><a href="https://www.miyoushe.com/ys/accountCenter/postList?id=160367110">原神冒险团</a>词条参考面板</li>
    </ol>

    <p>
      参考面板的数字被四舍五入到以下的位数：
    </p>
    
    <ul>
      <li>五位：暴击率，暴击伤害，能量恢复，元素精通，治疗</li>
      <li>百位：攻击，防御</li>
      <li>千位：生命</li>
    </ul>
    
    <p>
      因为这些参考值是用角色收益曲线计算出来的，不是一时半会就能达到的，建议把它作为一个参考，或长期的目标。由于这些都是摘要过来的，我们不保证它的准确性。请通过链接去看源材料的计算以及更深入的分析。
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
