import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { Calendar, Clock, Tag } from 'lucide-react'

export const metadata = {
  title: 'Technical Blog | Vasudev Rao',
  description:
    'Articles on data engineering, cloud architecture, AI/ML, and modern data platforms',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <section className="w-full pt-32 pb-24 flex justify-center relative">
      {/* ✅ KEEP GRID VISIBLE – NO bg-white */}
      <div className="w-full max-w-6xl px-6">

        {/* 🔹 HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A1A3E] mb-6">
            Technical Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deep dives into data engineering, cloud architecture, AI/ML,
            and modern data platforms
          </p>
        </div>

        {/* 🔹 CATEGORIES */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <span
              key={category}
              className="
                px-4 py-2
                rounded-full
                text-sm font-medium
                text-[#0A1A3E]
                bg-blue-100/70
                border border-blue-200
                backdrop-blur-xl
              "
            >
              {category}
            </span>
          ))}
        </div>

        {/* 🔹 POSTS GRID */}
        {posts.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            No blog posts yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article
                  className="
                    group
                    h-full
                    rounded-2xl
                    p-6
                    border border-blue-200/40
                    bg-blue-100/40
                    backdrop-blur-xl
                    shadow-[0_12px_32px_rgba(1,31,75,0.12)]
                    transition-all
                    hover:shadow-[0_20px_48px_rgba(1,31,75,0.18)]
                  "
                >
                  {/* Category */}
                  <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-blue-200/60 text-[#0A1A3E]">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-[#0A1A3E] mb-3 group-hover:underline">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-700 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-white/60 border border-blue-200 text-[#0A1A3E] flex items-center gap-1"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-600 pt-4 border-t border-blue-200/40">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
