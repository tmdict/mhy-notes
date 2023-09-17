<script>
  import { l10n, lang } from '@store/site';

  export let references;
  const sources = {
    ccb: { name: 'GI Helper Team · Community Character Builds', url: 'https://tinyurl.com/genshinbuilds' },
    ysmxt: { name: 'NGA · 原神冒险团', url: 'https://bbs.nga.cn/read.php?tid=25843014' },
    kqm: { name: 'Keqing Mains', url: 'https://keqingmains.com/' }
  };

  function parseSource(source) {
    const [id, src] = Object.entries(source).flat();
    return {
      id: id,
      name: sources[id] ? sources[id].name : id,
      src: src === 'default' ? sources[id].url : src
    };
  }
</script>

{#if references && references.length > 0}
  <div class="source">
    <div class="build-heading">{$l10n['sources'][$lang]}</div>
    <ul>
      {#each references as source}
        <li>
          {#if parseSource(source).id === 'Submitted by'}
            {parseSource(source).name}: {parseSource(source).src}
          {:else}
            <a on:click|stopPropagation href={parseSource(source).src} alt={parseSource(source).id}
              >{parseSource(source).id}</a
            >
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  .source {
    line-height: 1.5em;

    ul {
      margin: 0;
      padding: 0 16px 5px;
      font-size: 0.9em;
    }
  }
</style>
