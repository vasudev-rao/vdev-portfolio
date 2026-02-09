import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
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
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Vasudev Rao`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-navy-500 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-navy-500 mt-12 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold text-navy-500 mt-8 mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold text-navy-500 mt-6 mb-2" {...props} />,
  p: (props: any) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
  a: (props: any) => <a className="text-royal-500 hover:text-royal-600 underline decoration-royal-500/30 hover:decoration-royal-500 transition-colors" {...props} />,
  ul: (props: any) => <ul className="my-4 space-y-2 ml-6" {...props} />,
  ol: (props: any) => <ol className="my-4 space-y-2 ml-6" {...props} />,
  li: (props: any) => <li className="text-gray-700" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-royal-500 pl-4 italic text-gray-600 my-6" {...props} />,
  code: (props: any) => <code className="text-royal-600 bg-royal-50 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
  pre: (props: any) => <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto my-6" {...props} />,
  hr: (props: any) => <hr className="border-gray-200 my-8" {...props} />,
  table: (props: any) => <table className="w-full my-6 border-collapse" {...props} />,
  th: (props: any) => <th className="bg-gray-50 border border-gray-200 px-4 py-2 text-left font-semibold text-navy-500" {...props} />,
  td: (props: any) => <td className="border border-gray-200 px-4 py-2 text-gray-700" {...props} />,
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <header className="mb-12">
          <div className="mb-4">
            <span className="px-4 py-2 bg-royal-50 text-royal-600 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6 leading-tight font-heading">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <span className="font-medium">By {post.author}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
        </footer>
      </div>
    </article>
  )
}
