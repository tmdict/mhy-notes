<script>
  import BuildFaq from '$lib/components/content/BuildFaq/_template.svelte';
</script>

<BuildFaq>
  <span slot="about">
    <h5>About</h5>

    <p>
      When trying to answer questions like <em>"which stat should I focus on?"</em> or
      <em>"which artifact set is good on this character?"</em> One often finds themselves flipping through guide articles
      or videos, which can be quite time consuming. When the intention is to get a quick answer that's just "good enough",
      infographics are great, but can be hard to track down and keep up with the latest version, not to mention images are
      not very searchable and hard to work with on smaller screens.
    </p>

    <p>
      The reference build list is a cross between in-depth guides and infographics, providing summary-style information
      while offering some of the interactivity and accessibility of a proper guide. Build data are primarily aggregated
      and condensed from <a href="https://bbs.nga.cn/read.php?tid=25843014">NGA/原神冒险团</a>,
      <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>, and
      <a href="https://keqingmains.com/">KQM</a>.
    </p>

    <p>
      Due to these being aggregated, information and context can be lost, not to mention all the caveats involved, we do
      not guarantee what you find here to be 100% accurate! In case of conflicting information between guides, we either
      use the one that's more widely recommended, or leave it out altogether. The intention is to provide a "good
      enough" approximation of what's needed, all in one place. For accurate, in-depth guide, we recommend spending time
      to reach the individual referenced guides, all of which are linked in each build.
    </p></span
  >

  <span slot="how-to">
    <h5>How to Use the Guide</h5>

    <p>How are the build information compiled and how to digest the data.</p>
  </span>

  <span slot="character">
    <p>Build character, name, and type indicator. Some notes about build types:</p>

    <p>
      <span class="highlight">Constellation:</span> Some characters have a recommendation constellation to aim for. This
      information is either gathered from the source guide, or taken from
      <a href="https://space.bilibili.com/24889090">Usagi Sensei's guide</a>.
    </p>

    <p>
      <span class="highlight">Meta build:</span> marked by a
      <span style="color:var(--theme-primary-gold); padding:0 5px">★</span>, the best possible build for this character.
      A meta build may not be something easily achievable, and can take months to build up the required weapon,
      artifacts and stats. Think of it as a distant goal to aim for.
    </p>

    <p>
      <span class="highlight">Whale build:</span> denoted by a
      <img style="width:20px" src="/img/whale.png" alt="whale" />, for builds where the requirements are extremely
      difficult to achieve by F2P or light spenders (for example, C6R5).
    </p>

    <p>
      <span class="highlight">F2P build:</span> a build is categorized as F2P if the following requirements are met:
    </p>

    <ol>
      <li>The character has reasonable constellation requirements</li>
      <ol>
        <li>C0 if 5* character</li>
        <li>Any C if 4* character (since all 4* are available in general pool and are obtainable given enough time)</li>
      </ol>
      <li>Primary recommended weapon is a 4*</li>
    </ol>

    <p>Additional build type information is available as filters and can be found in the build page itself.</p>
  </span>

  <span slot="weapon">
    <p>
      Top 3 recommended weapons, with the first being BIS for the build. If top 3 are all 5* weapons, the last spot is
      replaced by the next best 4* weapon instead (this limitation does not apply to whale builds).
    </p>

    <p>
      More up-to-date recommendations are always favored over guides that have not been updated to reflect data from new
      game patches.
    </p>
  </span>

  <span slot="artifact">
    <p>
      Top recommended artifact sets for the character. If there is a clear BIS, only 1 set will be listed. If there are
      conflicting recommendations on the 2nd or 3rd sets from the guides, only the top recommendation is listed and and
      the rest are omitted, read the source material for more information on those sets.
    </p>

    <p>
      In case of conflicting recommendations from different guides, the recommendation from <a
        href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a
      > is favored due to the optimal stat value recommendations also coming from their guide.
    </p>

    <p>
      More up-to-date recommendations are always favored over guides that have not been updated to reflect data from new
      game patches.
    </p>
  </span>

  <span slot="mainstat">
    <p>
      Recommended main stats for each artifact slot. A maximum of 2 main stats are recommended to keep the information
      concise.
    </p>
  </span>

  <span slot="stat">
    <p>Stats to focus on as well as a reference total value to aim for. This is a combination of:</p>

    <ol>
      <li>
        <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>'s artifact substat ranking
      </li>
      <li><a href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a>'s optimal stats value calculation</li>
    </ol>

    <p>
      The stat reference values are rounded down to the nearest 10th/100th place. Note many values are meant to be the
      optimal value based on a character's damage curve and can be very difficult to reach, we recommend using them as a
      reference for ratios between stats, or as a long term goal to aim for. Due to these being an aggregated summary,
      accuracies may be lost, please use linked source materials for accurate, in-depth analysis.
    </p>
  </span>

  <span slot="notes">
    <p>Optional notes for a build's talent priority as well as play style.</p>

    <ul>
      <li>A or NA: Normal Attack</li>
      <li>E: Elemental Skill</li>
      <li>Q: Elemental Burst</li>
      <li>CA: Charged Attack</li>
      <li>xN (where N is a number): repeat for N times</li>
    </ul>

    <p>
      In talent priority, "A > E > Q" means to focus on upgrading normal attack, then elemental skill, and finally
      burst.
    </p>

    <p>
      In notes, a "NAx4 > CA > Q" is for a rotation in which you would use that character with 4 normal attacks (normal
      attack x 4), followed by a charge attack, followed by a burst.
    </p>
  </span>
</BuildFaq>
