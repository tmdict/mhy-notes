import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

//const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    appDir: 'bin',
    prerender: {
      default: true
    }
  },
  preprocess: preprocess()
};

export default config;
