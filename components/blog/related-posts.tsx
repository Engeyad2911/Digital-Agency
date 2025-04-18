"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getRelatedPosts } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentPostId: number
  language?: "ar" | "en"
}

export default function RelatedPosts({ currentPostId, language: propLanguage }: RelatedPostsProps) {
  const { language: contextLanguage, isRtl } = useLanguage()

  // Use provided language prop or fall back to context language
  const language = propLanguage || (contextLanguage === "en" ? "en" : "ar")

  // Get related posts
  const relatedPosts = getRelatedPosts(currentPostId, language)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {relatedPosts.map((post) => (
        <motion.div key={post.id} variants={item}>
          <Link
            href={language === "ar" ? `/blog/${post.id}` : `/en/blog/${post.id}`}
            className="block bg-black/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-colors"
          >
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div
                className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full`}
              >
                {post.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-green-400 text-sm">
                {language === "ar" ? (
                  <>
                    <span>قراءة المزيد</span>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
