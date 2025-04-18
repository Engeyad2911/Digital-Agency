import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ChevronLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "كيف تبني استراتيجية تسويق رقمي ناجحة في 2023",
    excerpt:
      "تعرف على أهم الخطوات والاستراتيجيات لبناء خطة تسويق رقمي فعالة تساعدك على تحقيق أهدافك التسويقية وزيادة مبيعاتك.",
    image: "/images/blog-1.jpg",
    date: "15 يونيو 2023",
    author: "أحمد محمد",
    readTime: "7 دقائق",
    category: "التسويق الرقمي",
  },
  {
    id: 2,
    title: "أفضل 10 أدوات لتحسين تجربة المستخدم في مواقع الويب",
    excerpt:
      "استكشف أفضل الأدوات والتقنيات التي يمكن استخدامها لتحسين تجربة المستخدم في موقعك الإلكتروني وزيادة معدلات التحويل.",
    image: "/images/blog-2.jpg",
    date: "28 مايو 2023",
    author: "سارة أحمد",
    readTime: "5 دقائق",
    category: "تجربة المستخدم",
  },
  {
    id: 3,
    title: "مستقبل الذكاء الاصطناعي في تطوير تطبيقات الجوال",
    excerpt:
      "نظرة على كيفية تغيير الذكاء الاصطناعي لصناعة تطوير تطبيقات الجوال والفرص الجديدة التي يقدمها للمطورين والشركات.",
    image: "/images/blog-3.jpg",
    date: "10 أبريل 2023",
    author: "محمد علي",
    readTime: "8 دقائق",
    category: "الذكاء الاصطناعي",
  },
  {
    id: 4,
    title: "دليل شامل لتحسين محركات البحث (SEO) لعام 2023",
    excerpt:
      "تعرف على أحدث استراتيجيات وتقنيات تحسين محركات البحث التي يجب عليك تطبيقها لتحسين ترتيب موقعك في نتائج البحث.",
    image: "/images/blog-4.jpg",
    date: "5 مارس 2023",
    author: "ليلى حسن",
    readTime: "10 دقائق",
    category: "SEO",
  },
  {
    id: 5,
    title: "كيفية بناء متجر إلكتروني ناجح من الصفر",
    excerpt:
      "خطوات عملية لإنشاء متجر إلكتروني ناجح، بدءًا من اختيار المنصة المناسبة وحتى استراتيجيات التسويق وزيادة المبيعات.",
    image: "/images/blog-5.jpg",
    date: "20 فبراير 2023",
    author: "عمر خالد",
    readTime: "9 دقائق",
    category: "التجارة الإلكترونية",
  },
  {
    id: 6,
    title: "اتجاهات تصميم الويب الحديثة لعام 2023",
    excerpt:
      "استكشف أحدث اتجاهات تصميم الويب التي تسيطر على الساحة هذا العام وكيفية تطبيقها في مشاريعك لتحقيق أقصى تأثير.",
    image: "/images/blog-6.jpg",
    date: "8 يناير 2023",
    author: "نور محمد",
    readTime: "6 دقائق",
    category: "تصميم الويب",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">المدونة</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              أحدث المقالات والأخبار في مجال التكنولوجيا والتسويق الرقمي
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
                  <div className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center ml-4">
                      <Calendar className="h-4 w-4 ml-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center ml-4">
                      <User className="h-4 w-4 ml-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0 h-auto text-green-400 hover:text-green-500">
                      قراءة المزيد
                      <ChevronLeft className="h-4 w-4 mr-1" />
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
              السابق
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
              التالي
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
