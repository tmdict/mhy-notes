import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    enhancedImages(),
    sveltekit(),
    ViteYaml() // For loading yml
  ],
  server: {
    fs: {
      allow: ['data']
    }
  }
};

export default config;
