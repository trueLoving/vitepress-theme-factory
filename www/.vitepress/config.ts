import { defineConfigWithTheme } from 'vitepress';
import { LWThemeConfig } from 'vitepress-lolimeow-theme';
import * as themeConfig from './data'

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
    }
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
})
