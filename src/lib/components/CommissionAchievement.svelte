<script>
  import { browser } from '$app/environment';
  import { slide } from 'svelte/transition';
  import { localData } from '@store/localdata';
  import { l10n, lang } from '@store/site';
  import { marked } from 'marked';

  export let achievement;
  export let content;
  export let alt = false;
  let expand = false;

  // Go through checklist to determine achievement completion status
  $: complete = Object.values($localData['achievements'][achievement.achievement]).every((c) => c === true);

  function updateChecklist(achievementName, todo) {
    // Update local storage
    const local = $localData;
    if (Object.keys(local['achievements'][achievementName]).length !== achievement.checklist.length) {
      let updated = achievement.checklist.reduce((acc, c) => {
        if (Object.keys(local['achievements'][achievementName]).includes(c)) {
          acc[c] = local['achievements'][achievementName][c]
        }
        return acc
      }, {})
      local['achievements'][achievementName] = updated
    }
    local['achievements'][achievementName][todo] = !local['achievements'][achievementName][todo];
    $localData = local;
    if (browser) {
      localStorage.setItem('tmdict.genshin.data', JSON.stringify($localData));
    }
    // Update achievement completion status
    complete = Object.values($localData['achievements'][achievementName]).every((c) => c === true);
  }
</script>

<div
  class="content-col achievement"
  class:alt
  on:click={() => (expand = !expand)}
  on:keydown={() => (expand = !expand)}
>
  <div class="content-row">
    <h4 class:complete>{@html content.name}</h4>
    <div class="label region">{$l10n[achievement.region][$lang]}</div>
    <div class="label version">v{achievement.version}</div>
    {#each content.commission as commission}
      <span class="label commission">{@html commission}</span>
    {/each}
  </div>
  <div on:click|stopPropagation on:keydown|stopPropagation class="description">
    {@html content.description}
  </div>
  {#if expand}
    <div transition:slide class="notes-checklist">
      <span class="notes" on:click|stopPropagation on:keydown|stopPropagation>{@html marked(content.notes)}</span>
      <h5>{$l10n['checklist'][$lang]}</h5>
      <ul>
        {#each achievement.checklist as todo}
          <li>
            <input
              on:click|stopPropagation={() => updateChecklist(achievement.achievement, todo)}
              class="checklist"
              type="checkbox"
              id="{achievement.achievement}-{todo}"
              name="{achievement.achievement}-{todo}"
              value={content.checklist[todo]}
              checked={$localData['achievements'][achievement.achievement][todo]}
            />
            <label on:click|stopPropagation on:keydown|stopPropagation for="{achievement.achievement}-{todo}">{content.checklist[todo]}</label>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .achievement {
    padding: 20px;
    color: var(--theme-text-normal);
    line-height: 1.2em;
    align-items: flex-start;

    &:hover {
      background: var(--theme-main-bg-hover);
      cursor: pointer;
    }

    h4 {
      font-size: 1.2rem;
      text-transform: none;
      letter-spacing: normal;
      padding-top: 2px;

      &.complete {
        color: #aaa;
        text-decoration: line-through;
      }
    }

    .label {
      color: var(--theme-text-normal);
      font-size: 0.85rem;
      background: var(--theme-label-bg);
      margin: 0 5px 5px;
      padding: 5px 10px;
      border-radius: 10px;
    }

    .commission {
      color: var(--theme-text-body-highlight-alt);
      background: var(--theme-label-bg-highlight);
    }

    .description {
      padding: 5px;

      &:hover {
        cursor: text;
      }
    }

    .notes-checklist {
      padding: 15px 5px;

      .notes:hover {
        cursor: text;
      }

      ul {
        list-style: none;
        padding: 0 5px;

        li {
          padding: 2px 0;
          display: flex;
          align-items: center;
        }

        input.checklist {
          margin: 2px 10px;
          padding: 5px;
          width: 20px;
          height: 20px;
        }

        label {
          min-width: 300px;

          &:hover {
            cursor: pointer;
            color: var(--theme-text-strong);
          }

          @media only screen and (max-width: 540px) {
            min-width: auto;
          }
        }
      }
    }
  }
</style>
