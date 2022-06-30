使用 vitepress 复刻网站 https://www.boxmoe.com/

> 主题包

## 两种方式

1. 自定义主题(目前采用这种方式开发主题)
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

- [GoTop](./components/GoTop/index.vue)
- [PageLoading](./components/PageLoading/index.vue)
- [Paging](./components/Paging/index.js)
- [PostWidget](./components/PostWidget/index.js)
- [Canvas Sakura](./components/Sakura/index.js)
- [SearchBox](./components/SearchBox/index.js)

## Views

- [Banner](./views/Banner.vue)
- [Blog](./views/widgets/Blog.vue)
- [Category](./views/widgets/Category.vue)
- [Tag](./views/widgets/Tag.vue)
- [Footer](./views/Footer.vue)
- [Header](./views/Header.vue)
- [Home](./views/Home.vue)
- [Main](./views/Main.vue)
- [SiteMain](./views/SiteMain.vue)
- [NotFound](./views/SiteMain.vue)

## themeConfig

[theme.d.ts](./theme.d.ts)

## 约定(布局)文件

- /${root}/index.md
- /${root}/category.md
- /${root}/tag.md

## third dependency 

- [headroom.js](https://www.npmjs.com/package/headroom.js)
- [fast-glob](https://www.npmjs.com/package/fast-glob)

## Future More ...

- CODE STYLE
- EDITOR STYLE
- HUSKY 
- ......
