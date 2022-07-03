import { defineConfigWithTheme } from 'vitepress';
import { LWThemeConfig } from 'vitepress-lolimeow-theme';

import banner from './data/banner.js';
import nav from './data/nav.js';

console.log('xxxxx', process.version)

export default defineConfigWithTheme<LWThemeConfig>({
  title: 'Wordpress lolimeow Theme Fork',
  description: 'Wordpress lolimeow Theme Fork',
  themeConfig: {
    author: '盒子萌',
    banner, // banner　图片相关配置
    nav,    // headers 链接配置
    links: {
      qq: '',
      wechat: '',
      weibo: '',
      github: '',
      envelope: ''
    }
  },
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
