import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://skilltechcontrolsystems.com',
  outDir: 'docs',
  integrations: [tailwind()],
})
