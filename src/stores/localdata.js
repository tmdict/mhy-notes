import { browser } from '$app/env';
import { writable } from 'svelte/store';

function createLocalData() {
  const importedAchievements = import.meta.globEager('../../data/achievements/*.yml');

  const defaultData = {
    builds: [],
    achievements: Object.values(importedAchievements).reduce((acc, d) => {
      // Defaults all achievement commissions to false
      return {
        ...acc,
        [d.default.achievement]: d.default.checklist.reduce((list, c) => ({ ...list, [c]: false }), {})
      };
    }, {})
  };

  let local = defaultData;

  if (browser && localStorage.getItem('tmdict.genshin.data')) {
    try {
      local = JSON.parse(localStorage.getItem('tmdict.genshin.data'));
      // Check if any new achievements have been added
      Object.values(importedAchievements).forEach((d) => {
        if (!(d.default.achievement in local['achievements'])) {
          local['achievements'] = {
            ...local['achievements'],
            [d.default.achievement]: d.default.checklist.reduce((list, c) => ({ ...list, [c]: false }), {})
          };
        }
      });
    } catch (err) {
      console.log(`[createLocalData] Err parsing localStorage data: ${err}`);
      local = defaultData;
    }
  }

  return writable(local);
}

export const localData = createLocalData();
