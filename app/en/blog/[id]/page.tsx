import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import RelatedPosts from "@/components/blog/related-posts"
import { blogPostsData } from "@/lib/blog-data"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.en.find((post) => post.id.toString() === params.id)

  if (!post) {
    return {
      title: "Post Not Found - Guessitt",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} - Guessitt`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function EnglishBlogPostPage({ params }: Props) {
  const post = blogPostsData.en.find((post) => post.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <Link href="/en" className="hover:text-green-400 transition-colors">
                Home
              </Link>
              <span className="mx-2">{"/"}</span>
              <Link href="/en/blog" className="hover:text-green-400 transition-colors">
                Blog
              </Link>
              <span className="mx-2">{"/"}</span>
              <span className="text-green-400">{post.title}</span>
            </div>

            {/* Title and Meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                {post.category}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] mb-10 rounded-xl overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-xl leading-relaxed text-gray-300">
                A digital marketing strategy is the cornerstone of success for any business in the current era. In this
                article, we will explore how to build a successful digital marketing strategy in 2023, taking into
                account the continuous changes in the world of digital marketing.
              </p>

              <h2>Define Marketing Objectives</h2>
              <p>
                Before implementing any marketing plan, objectives must be clearly defined. Do you want to increase
                brand awareness? Increase sales? Or perhaps attract a new audience? Setting clear and measurable goals
                will help you evaluate the success of your strategy.
              </p>

              <h2>Study the Target Audience</h2>
              <p>
                Understanding your target audience is essential for the success of any marketing strategy. Create
                personas for potential buyers, and learn about their needs, interests, and online behaviors.
              </p>

              <blockquote>
                <p>
                  "Knowing your audience is not just a step in the marketing process, but it is the foundation of a
                  successful digital marketing strategy."
                </p>
              </blockquote>

              <h2>Choose Appropriate Marketing Channels</h2>
              <p>
                Not all marketing channels are suitable for every business. Choose channels where your target audience
                is most present. These channels may include:
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>Social media (Facebook, Instagram, Twitter, LinkedIn)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>Email</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>Search engines (SEO)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>Paid advertisements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>Content marketing</span>
                </li>
              </ul>

              <h2>Create High-Quality Content</h2>
              <p>
                Good content is the foundation of any successful digital marketing strategy. Create diverse and valuable
                content that targets your audience's interests and helps solve their problems.
              </p>

              <h2>Measure Results and Improve Strategy</h2>
              <p>
                Use analytics tools to measure the performance of your marketing strategy, and continuously adjust and
                improve it based on the results. Digital marketing is an ongoing process of learning and improvement.
              </p>
            </div>

            {/* Author */}
            <div className="bg-black/50 border border-green-500/20 rounded-lg p-6 mb-12">
              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/images/team-1.jpg" alt={post.author} fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{post.author}</h3>
                  <p className="text-gray-400 text-sm">Digital Marketing and Content Expert</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Writer and consultant specializing in digital marketing strategies and content development, with over 10
                years of experience in the field.
              </p>
            </div>

            {/* Share */}
            <div className="flex flex-wrap items-center justify-between mb-12">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Facebook className="h-5 w-5 text-green-400" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Twitter className="h-5 w-5 text-green-400" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Linkedin className="h-5 w-5 text-green-400" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
              <Link href="/en/blog" className="group">
                <Button variant="link" className="flex items-center px-0 text-green-400 hover:text-green-300">
                  <span>Back to Blog</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-500 pl-4">Related Articles</h2>
              <RelatedPosts currentPostId={post.id} language="en" />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
