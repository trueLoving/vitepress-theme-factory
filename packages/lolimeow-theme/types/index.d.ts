interface NavItem {
  text: string,
  icon: string,
  children?: NavItem[]
  link: string
}

export interface LWThemeConfig {
  author: string,   // 网站作者
  banner: string[], // banner 图片地址
  nav: NavItem[],   // header 链接
  // 链接
  links: {
    qq: string,
    wechat: string,
    weibo: string,
    github: string,
    envelope: string
  }
}

// 主题相关配置
export * from '../dist/client-types/index'
