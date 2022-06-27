使用 vitepress 复刻网站 https://www.boxmoe.com/

> 主题包

## 两种方式

1. 自定义主题(先采用这方式)
2. 基于默认主题扩展

## TODO

- 页面预加载（Loading） --> ??? vite 插件
- 布局不依赖于markdown
- 布局划分(UI)
- 页面懒加载
- 设计 markdown 文件
- SASS/LESS/native css ???
- Markdown 渲染逻辑重写，利用 vite 插件
- 全局样式（字体，标签，主题样式等等）
- 主题配置（themeConfig）
- 获取当前.vitepress 下的所有文件
- md 的 frontmatter 设计
- 组件状态设计
- assets 文件分解，js逻辑重写
- 主题包独立包（构建工具:turbo tsup）
- ......

## Components

- [GoTop](./www/.vitepress/theme/components/GoTop/index.vue)
- [PageLoading](./www/.vitepress/theme/components/PageLoading/index.vue)
- [Paging](./www/.vitepress/theme/components/Paging/index.js)
- [PostWidget](./www/.vitepress/theme/components/PostWidget/index.js)
- [Canvas Sakura](./www/.vitepress/theme/components/Sakura/index.js)
- [SearchBox](./www/.vitepress/theme/components/SearchBox/index.js)

## Views

- [Banner](./www/.vitepress/theme/views/Banner.vue)
- [Blog](./www/.vitepress/theme/views/Blog/index.vue)
- [Footer](./www/.vitepress/theme/views/Footer.vue)
- [Header](./www/.vitepress/theme/views/Header.vue)
- [Home](./www/.vitepress/theme/views/Home.vue)
- [Main](./www/.vitepress/theme/views/Main.vue)
- [SiteMain](./www/.vitepress/theme/views/SiteMain.vue)
- NotFound()

## themeConfig

```js
export default themeConfig = {
  author: '',// 网站作者
  banner:[], // banner 图片地址
  nav:[],     // 头部链接
  // 链接
  links:{
    qq: 'qq link',
    wechat: 'wechat link',
    weibo: 'weibo link',
    github: 'github link',
    envelope: 'envelope link'
  }
}
```

##　约定(布局)文件

- /root/index.md
- /root/category.md
- /root/tag.md

##　third dependency 

- [headroom.js](https://www.npmjs.com/package/headroom.js)

## Future

- CODE STYLE
- EDITOR STYLE
- HUSKY 
- ......
