import { browser } from '$app/env';
import { readable, writable } from 'svelte/store';
import localeData from '@data/locale.yml';

export const l10n = readable(localeData);

function createLang() {
  const { subscribe, set } = writable(browser ? localStorage.getItem('tmdict.genshin.lang') || 'en' : 'en');

  return {
    subscribe,
    set,
    default: () => 'en'
  };
}
export const lang = createLang();

export const toastOption = readable({
  success: {
    theme: {
      '--toastBackground': 'var(--theme-primary-blue)',
      '--toastBarBackground': 'var(--theme-primary-blue)'
    }
  },
  error: {
    theme: {
      '--toastBackground': 'var(--theme-primary-red)',
      '--toastBarBackground': 'var(--theme-primary-red)'
    }
  }
});
