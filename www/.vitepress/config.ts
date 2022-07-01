import { defineConfigWithTheme } from 'vitepress'
import { LWThemeConfig } from 'vitepress-lolimeow-theme';
// import renderPermaLink from './render-perma-link'
// import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

import banner from './data/banner.js';
import nav from './data/nav.js';

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
  markdown: {
    // TODO: markdown custom
    // anchor: {
    // permalink: renderPermaLink,
    // },
    // config: (md) => {
    //   md.use(MarkDownItCustomAnchor)
    // }
  }
})
