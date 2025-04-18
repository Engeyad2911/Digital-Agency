"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Code, PenTool, BarChart3, Smartphone, Megaphone } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "./language-provider"

const servicesData = [
  {
    id: "web",
    icon: <Globe className="h-10 w-10 text-green-400" />,
    title: "تطوير المواقع الإلكترونية",
    titleEn: "Web Development",
    description:
      "نقدم خدمات تطوير مواقع الويب المتكاملة بأحدث التقنيات وأفضل الممارسات لتحقيق أقصى أداء وتجربة مستخدم مميزة.",
    descriptionEn:
      "We provide comprehensive web development services using the latest technologies and best practices to achieve maximum performance and an outstanding user experience.",
    features: ["تصميم وتطوير مواقع متجاوبة", "منصات التجارة الإلكترونية", "لوحات التحكم المخصصة", "تحسين سرعة المواقع"],
    featuresEn: [
      "Responsive website design and development",
      "E-commerce platforms",
      "Custom dashboards",
      "Website speed optimization",
    ],
  },
  {
    id: "app",
    icon: <Smartphone className="h-10 w-10 text-green-400" />,
    title: "تطوير تطبيقات الجوال",
    titleEn: "Mobile App Development",
    description: "نطور تطبيقات جوال عالية الأداء لنظامي iOS وAndroid باستخدام أحدث التقنيات لتقديم تجربة مستخدم سلسة.",
    descriptionEn:
      "We develop high-performance mobile applications for iOS and Android using the latest technologies to deliver a seamless user experience.",
    features: [
      "تطبيقات iOS وAndroid الأصلية",
      "تطبيقات الويب التقدمية (PWA)",
      "تطبيقات هجينة بتكلفة فعالة",
      "صيانة وتحديث مستمر",
    ],
    featuresEn: [
      "Native iOS and Android apps",
      "Progressive Web Apps (PWA)",
      "Cost-effective hybrid apps",
      "Continuous maintenance and updates",
    ],
  },
  {
    id: "design",
    icon: <PenTool className="h-10 w-10 text-green-400" />,
    title: "التصميم والهوية البصرية",
    titleEn: "Design & Visual Identity",
    description: "نبتكر تصاميم فريدة وهويات بصرية تعكس قيم علامتك التجارية وتميزها عن المنافسين في السوق.",
    descriptionEn:
      "We create unique designs and visual identities that reflect your brand values and distinguish it from competitors in the market.",
    features: [
      "تصميم الهوية البصرية",
      "واجهات المستخدم (UI)",
      "تجربة المستخدم (UX)",
      "المواد التسويقية المطبوعة والرقمية",
    ],
    featuresEn: [
      "Visual identity design",
      "User interfaces (UI)",
      "User experience (UX)",
      "Print and digital marketing materials",
    ],
  },
  {
    id: "marketing",
    icon: <Megaphone className="h-10 w-10 text-green-400" />,
    title: "التسويق الرقمي",
    titleEn: "Digital Marketing",
    description:
      "نضع استراتيجيات تسويقية متكاملة لزيادة الوعي بعلامتك التجارية وجذب العملاء المستهدفين وزيادة المبيعات.",
    descriptionEn:
      "We develop comprehensive marketing strategies to increase brand awareness, attract target customers, and boost sales.",
    features: [
      "تحسين محركات البحث (SEO)",
      "إدارة حملات الإعلانات المدفوعة",
      "التسويق عبر وسائل التواصل الاجتماعي",
      "التسويق بالمحتوى",
    ],
    featuresEn: [
      "Search Engine Optimization (SEO)",
      "Paid advertising campaign management",
      "Social media marketing",
      "Content marketing",
    ],
  },
  {
    id: "software",
    icon: <Code className="h-10 w-10 text-green-400" />,
    title: "تطوير البرمجيات المخصصة",
    titleEn: "Custom Software Development",
    description: "نطور حلول برمجية مخصصة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك بكفاءة.",
    descriptionEn:
      "We develop custom software solutions that meet your unique business needs and help you achieve your goals efficiently.",
    features: [
      "أنظمة إدارة المحتوى المخصصة",
      "تطوير واجهات برمجة التطبيقات (API)",
      "أتمتة العمليات التجارية",
      "تكامل الأنظمة",
    ],
    featuresEn: [
      "Custom content management systems",
      "API development",
      "Business process automation",
      "System integration",
    ],
  },
  {
    id: "analytics",
    icon: <BarChart3 className="h-10 w-10 text-green-400" />,
    title: "تحليل البيانات والذكاء الاصطناعي",
    titleEn: "Data Analytics & AI",
    description: "نستخدم البيانات والذكاء الاصطناعي لمساعدتك على اتخاذ قرارات أفضل وتحسين أداء أعمالك.",
    descriptionEn:
      "We use data and artificial intelligence to help you make better decisions and improve your business performance.",
    features: [
      "تحليل البيانات وإعداد التقارير",
      "لوحات المعلومات التفاعلية",
      "حلول الذكاء الاصطناعي",
      "التنبؤ والتحليل التنبؤي",
    ],
    featuresEn: ["Data analysis and reporting", "Interactive dashboards", "AI solutions", "Predictive analytics"],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState("web")
  const { language } = useLanguage()
  const isEnglish = language === "en"

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black/80 to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{isEnglish ? "Our Services" : "خدماتنا"}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {isEnglish
              ? "We provide a comprehensive range of digital services to help our clients grow and excel in the digital world"
              : "نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدة عملائنا على النمو والتميز في العالم الرقمي"}
          </p>
        </div>

        <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12">
            {servicesData.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 py-6"
              >
                <div className="flex flex-col items-center gap-2">
                  {service.icon}
                  <span className="text-sm font-medium">
                    {isEnglish ? service.titleEn.split(" ")[0] : service.title.split(" ")[0]}
                  </span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {servicesData.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12"
              >
                <Card className="bg-black/50 border-green-500/20 mt-10">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl">{isEnglish ? service.titleEn : service.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-lg">
                      {isEnglish ? service.descriptionEn : service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 ">
                      {(isEnglish ? service.featuresEn : service.features).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mt-10">
                  <Image
                    src={`/images/service-${service.id}.jpg`}
                    alt={isEnglish ? service.titleEn : service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
