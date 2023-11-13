<script>
  import BuildFaq from '$lib/components/content/BuildFaq/_template.svelte';
</script>

<BuildFaq>
  <span slot="about">
    <h5>About</h5>

    <p>
      When trying to answer questions like <em>"which stat should I focus on?"</em> or
      <em>"which artifact set is good on this character?"</em> One often finds themselves flipping through long articles or videos, which can be quite time consuming. The intention of the information here is to provide a quick answer that's just "good enough".
    </p>

    <p>
      The reference build list is similar to infographics, providing summary-style information while offering some of the interactivity and accessibility of a proper guide. Build data are primarily aggregated and condensed from <a href="https://bbs.nga.cn/read.php?tid=25843014">NGA/原神冒险团</a>, supplemented by <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a> and
      <a href="https://keqingmains.com/">KQM</a>.
    </p>

    <p>
      Due to these being aggregated, information and context can be lost, not to mention all the caveats involved, <strong>we do not guarantee what you find here to be 100% accurate!</strong> The intention is to provide a "good enough" approximation of what's needed, all in one place. For accurate, in-depth guide, we recommend spending time to read the individual referenced guides, all of which are linked as resource.
    </p></span
  >

  <span slot="how-to">
    <h5>How to Use the Guide</h5>
  </span>

  <span slot="character">
    <p>Build character, name, and type indicator. Some notes about build types:</p>

    <p>
      <span class="highlight">Constellation:</span> Recommended constellation to aim for. This
      information is either gathered from the source guide.
    </p>
  </span>

  <span slot="weapon">
    <p>
      Top 2 recommended weapons, with the first being BIS for the build. One of the 2 is guaranteed to be a non-5-star weapon.
    </p>
  </span>

  <span slot="artifact">
    <p>
      Top 2 recommended artifact sets for the character.
    </p>

    <p>
      In case of conflicting recommendations from different guides, the recommendation from <a
        href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a
      > is favored due to the optimal stat value recommendations also coming from their guide.
    </p>
  </span>

  <span slot="mainstat">
    <p>
      Recommended main stats for each artifact slot. A maximum of 2 main stats are recommended to keep the information
      concise.
    </p>
  </span>

  <span slot="stat">
    <p>Stats to focus on as well as a reference value to aim for. This is a combination of:</p>

    <ol>
      <li>
        <a href="https://tinyurl.com/genshinbuilds">Genshin Community Character Builds</a>'s artifact substat ranking
      </li>
      <li><a href="https://bbs.nga.cn/read.php?tid=25843014">原神冒险团</a>'s optimal stats value calculation</li>
    </ol>

    <p>
      Recommended stats are rounded using the following criteria:
    </p>
    
    <ul>
      <li>Rounded to nearest 5: Crit Rate%, Crit Dmg%, Energy Recharge%, EM, Heal%</li>
      <li>Rounded to nearest 100: Attack, Defense</li>
      <li>Rounded to nearest 1,000: HP</li>
    </ul>
    
    <p>
      Note these values are meant to be optimal endgame values based on a character's damage curve and can be very difficult to reach, we recommend using them as a reference, or as a long term goal to aim for. Due to these being aggregated data, accuracy may be lost, use linked source materials for accurate, in-depth analysis.
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
      In talent priority, "A > E > Q" means to focus on upgrading normal attack, then elemental skill, and finally burst.
    </p>

    <p>
      In notes, a "NAx4 > CA > Q" is for a rotation in which you would use that character with 4 normal attacks (normal attack x 4), followed by a charge attack, followed by a burst.
    </p>
  </span>
</BuildFaq>
