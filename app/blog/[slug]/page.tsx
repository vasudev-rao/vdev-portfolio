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

/* ✅ POLISHED TYPOGRAPHY SYSTEM */
const components = {
  h1: (props: any) => (
    <h1
      className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A1A3E] mt-10 mb-3"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-xl md:text-2xl font-semibold tracking-tight text-[#0A1A3E] mt-10 mb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-base font-semibold text-[#0A1A3E] mt-8 mb-1.5"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-sm text-slate-700 leading-6 mb-3"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="text-sm text-slate-700 leading-6" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="bg-white/70 border border-blue-200/50 rounded-xl p-4 my-5 overflow-x-auto text-sm"
      {...props}
    />
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
            px-8 md:px-12
            py-10 md:py-12
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
          "
        >
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 gap-2 h-9 px-3">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <span className="inline-block px-3 py-1 mb-3 bg-blue-100/70 rounded-full text-xs font-medium text-[#0A1A3E]">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A1A3E] mb-4 leading-snug">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </div>
              <span>By {post.author}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-blue-100/70 rounded-full text-[11px] text-[#0A1A3E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          <footer className="mt-12 pt-6 border-t border-blue-200/40">
            <Link href="/blog">
              <Button variant="outline" className="gap-2 h-9 px-3 text-xs">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to all posts
              </Button>
            </Link>
          </footer>
        </article>
      </div>
    </section>
  )
}
