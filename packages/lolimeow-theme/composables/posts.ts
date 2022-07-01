// design post data structure
interface PostFrontMatter {
  /**
   * Post 封面 url 地址
   */
  cover: string
  /**
   * 标题
   */
  title: string
  /**
   * 作者
   */
  author: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 摘要
   */
  abstract: string
  /**
   * 编写日期
   */
  date: string
  /**
   * 浏览次数
   */
  views: number
  /**
   * 评论数
   */
  comments: number
  /**
   * 标签
   */
  tags: string[]
  /**
   * 分类
   */
  categories: string[]
}

// 默认 frontMatter 数据
const defaultFM: PostFrontMatter = {
  cover: "https://avatars.githubusercontent.com/u/44056372?v=4",
  title: "Hello World",
  author: "xxx",
  avatar: "https://avatars.githubusercontent.com/u/44056372?v=4",
  abstract: "Hello World",
  date: '2022-07-11 12:13:15',
  views: 0,
  comments: 0,
  tags: [],
  categories: []
}

class Post {
  /**
   * markdown 元数据
   */
  frontmatter: Partial<PostFrontMatter>
  /**
   * 跳转链接
   */
  link: string
  /**
   * markdown 文件路径
   */
  path: string
  /**
   * markdown 原始数据
   */
  originData: any
  constructor(link = "", path = "", fm = defaultFM) {
    this.link = link
    this.path = path
    this.frontmatter = fm
  }
}


// get all posts from markdown under process.cwd
export async function fetchPosts(): Promise<Post[]> {
  return []
}
