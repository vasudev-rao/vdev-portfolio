import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Vasudev Rao`,
    description: post.excerpt,
  }
}

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-[#0A1A3E] mt-10 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-[#0A1A3E] mt-12 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold text-[#0A1A3E] mt-8 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  li: (props: any) => <li className="text-gray-700" {...props} />,
  pre: (props: any) => (
    <pre className="bg-gray-50 border rounded-lg p-4 my-6 overflow-x-auto" {...props} />
  ),
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <section className="w-full pt-32 pb-24 flex justify-center relative">
      <div className="w-full max-w-[900px] px-6">
        <article
          className="
            section-card
            rounded-3xl
            px-10 md:px-14
            py-12 md:py-14
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
          "
        >
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-10">
            <span className="inline-block px-4 py-1 mb-4 bg-blue-100/70 rounded-full text-sm font-medium text-[#0A1A3E]">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1A3E] mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <span>By {post.author}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100/70 rounded-full text-xs text-[#0A1A3E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          <footer className="mt-16 pt-8 border-t border-blue-200/40">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Button>
            </Link>
          </footer>
        </article>
      </div>
    </section>
  )
}
