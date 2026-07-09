import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },
});
