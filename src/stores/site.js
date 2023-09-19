import { browser } from '$app/environment';
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
      '--toastBackground': 'var(--theme-site-secondary-main)',
      '--toastBarBackground': 'var(--theme-site-secondary-main)'
    }
  },
  error: {
    theme: {
      '--toastBackground': 'var(--theme-site-primary-alt)',
      '--toastBarBackground': 'var(--theme-site-primary-alt)'
    }
  }
});
