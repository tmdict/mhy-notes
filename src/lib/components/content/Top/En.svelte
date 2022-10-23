<script>
  import Top from '$lib/components/content/Top/_template.svelte';
</script>

<Top>
  <span slot="intro"
    ><p>
      Genshin TL;DR is a collection of simple tools and infographic contents related to the game <a
        href="https://genshin.mihoyo.com/">Genshin Impact</a
      >. All contents are presented in a light-weight, concise format intended for quick consumption and used for
      reference purposes only.
    </p></span
  >

  <span slot="builds">
    <p>
      High-level summary of popular builds using information aggregated from multiple theorycrafting guides and
      supplemented using data such as popular abyss run compositions. There is also an experimental builds editor that
      lets you create and share builds.
    </p>
  </span>

  <!--span slot="achievements">
    <p>
      Searchable list of achievements that are obtainable through daily commissions, as well as a tracker to keep track
      of your progress.
    </p>
  </span-->

  <span slot="materials">
    <p>Yet another weekly material infographic.</p>
  </span>
</Top>
