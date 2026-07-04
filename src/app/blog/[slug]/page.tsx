import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navbar } from '@/components/Navbar'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXComponentsMap } from '@/components/mdx/MdxComponents'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found | Glyd AI' }
  }

  return {
    title: `${post.meta.title} | Glyd AI`,
    description: post.meta.description || 'Blog with resources from the Glyd AI team.',
    authors: post.meta.author ? [{ name: post.meta.author }] : undefined,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
      authors: post.meta.author ? [post.meta.author] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-24 font-sans selection:bg-white/20">
      <Navbar />
      <article className="mx-auto max-w-[45rem] px-6 md:px-8">
        
        <nav className="mb-16">
          <Link 
            href="/blog" 
            className="group inline-flex items-center text-sm font-medium tracking-widest text-white/40 uppercase transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-3 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </nav>
        
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium tracking-[0.2em] text-white/40 uppercase mb-8">
            <time>{post.meta.date}</time>
            {post.meta.author && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.meta.author}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tighter mb-8 text-white leading-[1.1]">
            {post.meta.title}
          </h1>
          
          {post.meta.description && (
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed border-l-2 border-white/20 pl-6">
              {post.meta.description}
            </p>
          )}
        </header>

        <div className="w-full h-px bg-white/10 mb-16" />

        <div className="mdx-content pb-10">
          <MDXRemote 
            source={post.content} 
            components={MDXComponentsMap}
          />
        </div>
        
      </article>
    </div>
  )
}
