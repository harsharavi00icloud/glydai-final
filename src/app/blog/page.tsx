import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'Blog | Glyd AI',
  description: 'Actionable insights for real estate agents in the realm of AI',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 font-sans selection:bg-white/20">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 md:px-8">

        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tighter mb-6 text-white leading-tight">
            Resources to get you started
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light">
            Deep dives with actionable insights into how AI is reshaping the realtor's world.
          </p>
        </header>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-4">
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-white/80 transition-colors">
                    {post.meta.title}
                  </h2>
                  <time className="shrink-0 text-sm tracking-[0.2em] font-medium text-white/40 uppercase">
                    {post.meta.date}
                  </time>
                </div>

                {post.meta.description && (
                  <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl border-l border-white/10 pl-4 mt-6">
                    {post.meta.description}
                  </p>
                )}

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm font-medium tracking-widest text-white/40 uppercase">
                    {post.meta.author ? `By ${post.meta.author}` : 'Glyd AI Team'}
                  </div>
                  <div className="flex items-center text-white/40 group-hover:text-white/80 transition-colors duration-300">
                    <span className="text-sm tracking-widest uppercase mr-3">Read</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="text-white/50 italic py-12 text-center rounded-2xl border border-white/10 border-dashed">
              No blogs published yet. System awaiting input.
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
