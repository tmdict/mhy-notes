import { browser } from '$app/environment';
import { readable, writable } from 'svelte/store';
import localeData from '@data/locale.yml';

export const l10n = readable(localeData);

function createLang() {
  const { subscribe, set } = writable(browser ? localStorage.getItem('tmdict.mhy.lang') || 'en' : 'en');

  return {
    subscribe,
    set,
    default: () => 'en'
  };
}
export const lang = createLang();

// Load images to be enhanced
const img = import.meta.glob(
  "$lib/img/**/*.png", {
    eager: true,
    query: {
      enhanced: true,
    },
  }
);

export const images = readable(img);
