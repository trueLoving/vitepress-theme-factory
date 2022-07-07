import { defineConfigWithTheme } from 'vitepress';
import { LWThemeConfig } from 'vitepress-lolimeow-theme';
import * as themeConfig from './data'
import ViteThemePlugin from './plugins';

export default defineConfigWithTheme<LWThemeConfig>({
  title: 'Wordpress lolimeow Theme Fork',
  description: 'Wordpress lolimeow Theme Fork',
  themeConfig,
  vue: {
    reactivityTransform: true
  },
  vite: {
    server: {
      port: 9099
    },
    plugins: [
      ViteThemePlugin()
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
})
