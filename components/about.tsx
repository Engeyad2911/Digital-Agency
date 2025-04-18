"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

const statsData = {
  ar: [
    { value: "+100", label: "مشروع ناجح" },
    { value: "+50", label: "عميل سعيد" },
    { value: "+10", label: "سنوات خبرة" },
    { value: "+20", label: "خبير متخصص" },
  ],
  en: [
    { value: "+100", label: "Successful Projects" },
    { value: "+50", label: "Happy Clients" },
    { value: "+10", label: "Years of Experience" },
    { value: "+20", label: "Expert Specialists" },
  ],
}

const valuesData = {
  ar: [
    {
      title: "الابتكار",
      description: "نسعى دائمًا لتقديم حلول مبتكرة تتجاوز التوقعات وتحقق نتائج استثنائية لعملائنا.",
    },
    {
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في كل مشروع نقوم به، مع الاهتمام بأدق التفاصيل.",
    },
    {
      title: "الشفافية",
      description: "نؤمن بالتواصل المفتوح والشفاف مع عملائنا في جميع مراحل المشروع.",
    },
    {
      title: "النتائج",
      description: "نركز على تحقيق نتائج ملموسة تساهم في نمو أعمال عملائنا وتحقيق أهدافهم.",
    },
  ],
  en: [
    {
      title: "Innovation",
      description:
        "We always strive to provide innovative solutions that exceed expectations and achieve exceptional results for our clients.",
    },
    {
      title: "Quality",
      description:
        "We adhere to the highest quality standards in every project we undertake, with attention to the finest details.",
    },
    {
      title: "Transparency",
      description:
        "We believe in open and transparent communication with our clients throughout all stages of the project.",
    },
    {
      title: "Results",
      description:
        "We focus on achieving tangible results that contribute to the growth of our clients' businesses and the achievement of their goals.",
    },
  ],
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const stats = isEnglish ? statsData.en : statsData.ar
  const values = isEnglish ? valuesData.en : valuesData.ar

  return (
    <section id="about" className="py-20 bg-black/70">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{isEnglish ? "About Us" : "من نحن"}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {isEnglish
                ? "We are a team of experts specialized in technology and digital marketing, seeking to help companies grow and achieve their goals through innovative and customized digital solutions."
                : "نحن فريق من الخبراء المتخصصين في مجال التكنولوجيا والتسويق الرقمي، نسعى لمساعدة الشركات على النمو وتحقيق أهدافها من خلال حلول رقمية مبتكرة ومخصصة."}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-green-500/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">{isEnglish ? "Our Values" : "قيمنا"}</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-medium">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref} className="relative h-[500px]">
            {isInView && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/images/team-1.jpg"
                    alt={isEnglish ? "Team" : "فريق العمل"}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden border-4 border-black"
                >
                  <Image
                    src="/images/team-2.jpg"
                    alt={isEnglish ? "Office" : "مكتب الشركة"}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-black font-bold text-xl p-6 rounded-full h-32 w-32 flex items-center justify-center text-center"
                >
                  {isEnglish ? "Innovate to Succeed" : "نبتكر لننجح"}
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
