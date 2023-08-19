import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from 'url';
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    ViteYaml() // For loading yml
  ],
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
};

export default config;
