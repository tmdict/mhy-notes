import { fileURLToPath, URL } from 'url';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import content from '@originjs/vite-plugin-content';

//const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    appDir: 'bin',
    prerender: {
      default: true
    },
    vite: {
      plugins: [content.default()], // For loading yml
      resolve: {
        alias: {
          '@data': fileURLToPath(new URL('./data', import.meta.url)), // alias to static dir
          '@store': fileURLToPath(new URL('./src/stores', import.meta.url)) // alias to stores
        }
      },
      server: {
        fs: {
          allow: ['data']
        }
      }
    }
  },
  preprocess: preprocess()
};

export default config;
