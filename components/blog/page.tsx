import { allPosts } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog",
  description: "All of my blog posts",
}

const BlogPage = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-8">All of my blog posts</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-8">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <h2 className="text-xl font-bold mt-4">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <time dateTime={post.date} className="block text-gray-500 text-sm mt-2">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage
