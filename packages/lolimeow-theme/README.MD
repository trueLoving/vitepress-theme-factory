# 主题包 lolimeow-theme

> 使用 vitepress 复刻网站 https://www.boxmoe.com/

## 两种方式

1. 自定义主题(目前采用这种方式开发主题)
2. 基于默认主题扩展

## Question

- 如何在主题包里面修改 vite 配置
- 如果在主题包里修改 markdown 配置

> 希望 vitepress 能够提供钩子去修改在主题包里修改 vite 配置和 markdown 配置
> 目前，对主题包来说，只开放了 enhanceApp 钩子去修改应用配置（src/index.ts）

## TODO

- markdown 渲染 （代码块，图片）
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
- 可自定义添加 iconfont 图标
- ......

## Components

- [GoTop](./src/components/GoTop/index.vue)
- [PageLoading](./src/components/PageLoading/index.vue)
- [Paging](./src/components/Paging/index.js)
- [PostWidget](./src/components/PostWidget/index.js)
- [Canvas Sakura](./src/components/Sakura/index.js)
- [SearchBox](./src/components/SearchBox/index.js)

## Views

- [Banner](./src/views/Banner.vue)
- [Blog](./src/views/widgets/Blog.vue)
- [Category](./src/views/widgets/Category.vue)
- [Tag](./src/views/widgets/Tag.vue)
- [Footer](./src/views/Footer.vue)
- [Header](./src/views/Header.vue)
- [Home](./src/views/Home.vue)
- [Main](./src/views/Main.vue)
- [SiteMain](./src/views/SiteMain.vue)
- [NotFound](./src/views/SiteMain.vue)

## themeConfig

[index.d.ts](./types/index.d.ts)

## 约定(布局)文件

- /${root}/index.md
- /${root}/category.md
- /${root}/tag.md

## third dependency 

- [headroom.js](https://www.npmjs.com/package/headroom.js)

## Future More ...

- CODE STYLE
- EDITOR STYLE
- HUSKY 
- ......
