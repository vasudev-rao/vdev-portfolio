import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { Calendar, Clock, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Technical Blog | Vasudev Rao - Data Engineering & Cloud Insights',
  description: 'Articles on data engineering, cloud architecture, AI/ML, and modern data platforms',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-navy-500 mb-6 font-heading">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep dives into data engineering, cloud architecture, AI/ML, and modern data platforms
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-navy-50 border border-navy-200 rounded-full text-sm font-medium text-navy-600 hover:bg-navy-100 transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-royal-300 transition-all card-hover h-full">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-royal-50 text-royal-600 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-navy-500 mb-3 group-hover:text-royal-500 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
