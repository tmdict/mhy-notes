import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import { fileURLToPath, URL } from 'url';

//const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    appDir: 'bin',
    alias: {
      '@data': fileURLToPath(new URL('./data', import.meta.url)), // alias to static dir
      '@store': fileURLToPath(new URL('./src/stores', import.meta.url)) // alias to stores
    }
  },
  preprocess: sveltePreprocess()
};

export default config;
