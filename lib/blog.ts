import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  readTime: string
  featured?: boolean
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Vasudev Rao',
        category: data.category || 'Data Engineering',
        tags: data.tags || [],
        readTime: data.readTime || '5 min read',
        featured: data.featured || false,
        content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || 'Vasudev Rao',
      category: data.category || 'Data Engineering',
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      featured: data.featured || false,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = allPosts.map(post => post.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap(post => post.tags)
  return Array.from(new Set(tags))
}
