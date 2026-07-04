import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content')
const blogDir = path.join(contentDir, 'blog')

export interface BlogMetadata {
  title: string
  date: string
  description?: string
  author?: string
  slug: string
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(blogDir, `${realSlug}.mdx`)
  
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data as BlogMetadata, content }
}

export function getAllPosts(): { meta: BlogMetadata; slug: string }[] {
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true })
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { meta, slug } = getPostBySlug(file)!
      return { meta, slug }
    })
    .sort((a, b) => (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()))

  return posts
}
