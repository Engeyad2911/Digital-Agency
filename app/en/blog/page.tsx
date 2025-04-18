import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Successful Digital Marketing Strategy in 2023",
    excerpt:
      "Learn about the most important steps and strategies to build an effective digital marketing plan that helps you achieve your marketing goals and increase your sales.",
    image: "/images/blog-1.jpg",
    date: "June 15, 2023",
    author: "Ahmed Mohamed",
    readTime: "7 min read",
    category: "Digital Marketing",
  },
  {
    id: 2,
    title: "Top 10 Tools to Improve User Experience on Websites",
    excerpt:
      "Explore the best tools and techniques that can be used to improve the user experience on your website and increase conversion rates.",
    image: "/images/blog-2.jpg",
    date: "May 28, 2023",
    author: "Sarah Ahmed",
    readTime: "5 min read",
    category: "User Experience",
  },
  {
    id: 3,
    title: "The Future of AI in Mobile App Development",
    excerpt:
      "A look at how artificial intelligence is changing the mobile app development industry and the new opportunities it presents for developers and companies.",
    image: "/images/blog-3.jpg",
    date: "April 10, 2023",
    author: "Mohamed Ali",
    readTime: "8 min read",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Comprehensive Guide to SEO for 2023",
    excerpt:
      "Learn about the latest search engine optimization strategies and techniques you should apply to improve your website's ranking in search results.",
    image: "/images/blog-4.jpg",
    date: "March 5, 2023",
    author: "Layla Hassan",
    readTime: "10 min read",
    category: "SEO",
  },
  {
    id: 5,
    title: "How to Build a Successful E-commerce Store from Scratch",
    excerpt:
      "Practical steps to create a successful e-commerce store, from choosing the right platform to marketing strategies and increasing sales.",
    image: "/images/blog-5.jpg",
    date: "February 20, 2023",
    author: "Omar Khaled",
    readTime: "9 min read",
    category: "E-commerce",
  },
  {
    id: 6,
    title: "Modern Web Design Trends for 2023",
    excerpt:
      "Explore the latest web design trends dominating the scene this year and how to apply them in your projects for maximum impact.",
    image: "/images/blog-6.jpg",
    date: "January 8, 2023",
    author: "Noor Mohamed",
    readTime: "6 min read",
    category: "Web Design",
  },
]

export default function EnglishBlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Latest articles and news in technology and digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-black/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-colors"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link href={`/en/blog/${post.id}`}>
                    <Button variant="link" className="p-0 h-auto text-green-400 hover:text-green-500">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30 mr-2"
            >
              Previous
            </Button>
            <Button variant="outline" className="bg-green-500/20 border-green-500/30 hover:bg-green-500/30 mr-2">
              1
            </Button>
            <Button
              variant="outline"
              className="border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30 mr-2"
            >
              2
            </Button>
            <Button variant="outline" className="border-green-500/20 hover:bg-green-500/10 hover:border-green-500/30">
              Next
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
