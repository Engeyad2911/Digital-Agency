"use client"

import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface BlogPostProps {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  readTime: string
  category: string
}

export default function BlogCard({ id, title, excerpt, image, date, author, readTime, category }: BlogPostProps) {
  const { language, isRtl } = useLanguage()
  const isEnglish = language === "en"

  return (
    <article className="bg-black/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-colors">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div
          className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full`}
        >
          {category}
        </div>
      </div>

      <div className="p-6">
        <div
          className={`flex items-center text-sm text-gray-400 mb-4 flex-wrap gap-y-2 ${isRtl ? "space-x-reverse" : ""}`}
        >
          <div className={`flex items-center ${isRtl ? "ml-4" : "mr-4"}`}>
            <Calendar className={`h-4 w-4 ${isRtl ? "ml-1" : "mr-1"}`} />
            {date}
          </div>
          <div className={`flex items-center ${isRtl ? "ml-4" : "mr-4"}`}>
            <User className={`h-4 w-4 ${isRtl ? "ml-1" : "mr-1"}`} />
            {author}
          </div>
          <div className="flex items-center">
            <Clock className={`h-4 w-4 ${isRtl ? "ml-1" : "mr-1"}`} />
            {readTime}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 line-clamp-2">{title}</h2>
        <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>

        <Link href={isEnglish ? `/en/blog/${id}` : `/blog/${id}`}>
          {isEnglish ? (
            <Button variant="link" className="p-0 h-auto text-green-400 hover:text-green-500 group">
              Read More
              <svg
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          ) : (
            <Button variant="link" className="p-0 h-auto text-green-400 hover:text-green-500 group">
              قراءة المزيد
              <svg
                className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
          )}
        </Link>
      </div>
    </article>
  )
}
