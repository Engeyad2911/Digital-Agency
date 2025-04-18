import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import RelatedPosts from "@/components/blog/related-posts"
import { blogPostsData } from "@/lib/blog-data"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.ar.find((post) => post.id.toString() === params.id)

  if (!post) {
    return {
      title: "مقال غير موجود - Guessitt",
      description: "لم يتم العثور على المقال المطلوب",
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

export default function BlogPostPage({ params }: Props) {
  const post = blogPostsData.ar.find((post) => post.id.toString() === params.id)

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
              <Link href="/" className="hover:text-green-400 transition-colors">
                الرئيسية
              </Link>
              <span className="mx-2">{"/"}</span>
              <Link href="/blog" className="hover:text-green-400 transition-colors">
                المدونة
              </Link>
              <span className="mx-2">{"/"}</span>
              <span className="text-green-400">{post.title}</span>
            </div>

            {/* Title and Meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6">
                <div className="flex items-center ml-6 mb-2">
                  <Calendar className="h-4 w-4 ml-1" />
                  {post.date}
                </div>
                <div className="flex items-center ml-6 mb-2">
                  <User className="h-4 w-4 ml-1" />
                  {post.author}
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 ml-1" />
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
                تعتبر استراتيجية التسويق الرقمي حجر الأساس لنجاح أي عمل تجاري في العصر الحالي. في هذا المقال، سنستعرض
                كيفية بناء استراتيجية تسويق رقمي ناجحة في عام 2023، مع مراعاة التغييرات المستمرة في عالم التسويق الرقمي.
              </p>

              <h2>تحديد الأهداف التسويقية</h2>
              <p>
                قبل البدء في تنفيذ أي خطة تسويقية، يجب تحديد الأهداف بوضوح. هل تريد زيادة الوعي بالعلامة التجارية؟ أم
                زيادة المبيعات؟ أو ربما جذب جمهور جديد؟ تحديد أهداف واضحة وقابلة للقياس سيساعدك في تقييم نجاح
                استراتيجيتك.
              </p>

              <h2>دراسة الجمهور المستهدف</h2>
              <p>
                فهم جمهورك المستهدف هو أمر أساسي لنجاح أي استراتيجية تسويقية. قم بإنشاء شخصيات للمشترين المحتملين، وتعرف
                على احتياجاتهم واهتماماتهم وسلوكياتهم عبر الإنترنت.
              </p>

              <blockquote>
                <p>"معرفة جمهورك ليست مجرد خطوة في عملية التسويق، بل هي أساس استراتيجية التسويق الرقمي الناجحة."</p>
              </blockquote>

              <h2>اختيار القنوات التسويقية المناسبة</h2>
              <p>
                ليست كل القنوات التسويقية مناسبة لكل عمل تجاري. اختر القنوات التي يتواجد فيها جمهورك المستهدف بشكل أكبر.
                قد تشمل هذه القنوات:
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>وسائل التواصل الاجتماعي (فيسبوك، انستغرام، تويتر، لينكد إن)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>البريد الإلكتروني</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>محركات البحث (SEO)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>الإعلانات المدفوعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span>التسويق بالمحتوى</span>
                </li>
              </ul>

              <h2>إنشاء محتوى عالي الجودة</h2>
              <p>
                المحتوى الجيد هو أساس أي استراتيجية تسويق رقمي ناجحة. قم بإنشاء محتوى متنوع وقيم يستهدف اهتمامات جمهورك
                ويساعد في حل مشاكلهم.
              </p>

              <h2>قياس النتائج وتحسين الاستراتيجية</h2>
              <p>
                استخدم أدوات التحليل لقياس أداء استراتيجيتك التسويقية، وقم بتعديلها وتحسينها باستمرار بناءً على النتائج.
                التسويق الرقمي هو عملية مستمرة من التعلم والتحسين.
              </p>
            </div>

            {/* Author */}
            <div className="bg-black/50 border border-green-500/20 rounded-lg p-6 mb-12">
              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image src="/images/team-1.jpg" alt={post.author} fill className="object-cover" />
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-bold">{post.author}</h3>
                  <p className="text-gray-400 text-sm">خبير تسويق رقمي ومحتوى</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                كاتب ومستشار متخصص في استراتيجيات التسويق الرقمي وتطوير المحتوى، مع خبرة تزيد عن 10 سنوات في المجال.
              </p>
            </div>

            {/* Share */}
            <div className="flex flex-wrap items-center justify-between mb-12">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="ml-4">مشاركة المقال:</span>
                <div className="flex space-x-3 space-x-reverse">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Facebook className="h-5 w-5 text-green-400" />
                    <span className="sr-only">مشاركة على فيسبوك</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Twitter className="h-5 w-5 text-green-400" />
                    <span className="sr-only">مشاركة على تويتر</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-700 hover:bg-green-500/10 hover:border-green-500/30"
                  >
                    <Linkedin className="h-5 w-5 text-green-400" />
                    <span className="sr-only">مشاركة على لينكد إن</span>
                  </Button>
                </div>
              </div>
              <Link href="/blog" className="group">
                <Button variant="link" className="flex items-center px-0 text-green-400 hover:text-green-300">
                  <ArrowLeft className="h-4 w-4 ml-2" />
                  <span>العودة إلى المدونة</span>
                </Button>
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 border-r-4 border-green-500 pr-4">مقالات ذات صلة</h2>
              <RelatedPosts currentPostId={post.id} language="ar" />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
