// design post data structure
interface Post {
  frontmatter: {
    cover: string
    title: string
    author: string
    avatar: string
    abstract: string
    date: string
    views: number
    comments: number
    tags: string[]
    categories: string[]
  },
  link: string
  path: string
  originData: any
}

// get all posts from markdown
export async function fetchPosts(): Promise<number> {
  return 123
}
