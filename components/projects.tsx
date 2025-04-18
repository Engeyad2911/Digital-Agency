"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"

const projectsData = {
  ar: [
    {
      id: 1,
      title: "منصة تعليمية متكاملة",
      category: "تطوير الويب",
      description:
        "منصة تعليمية متكاملة تتيح للمدرسين إنشاء وإدارة الدورات التدريبية وللطلاب الوصول إلى المحتوى التعليمي بسهولة.",
      image: "/images/project-education.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "تطبيق توصيل طلبات",
      category: "تطبيقات الجوال",
      description: "تطبيق متكامل لتوصيل الطلبات يربط بين المطاعم والعملاء والسائقين مع نظام تتبع مباشر ودفع إلكتروني.",
      image: "/images/project-delivery.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "منصة تجارة إلكترونية",
      category: "التجارة الإلكترونية",
      description: "منصة تجارة إلكترونية متكاملة مع نظام إدارة مخزون متقدم وبوابات دفع متعددة وتجربة مستخدم سلسة.",
      image: "/images/project-ecommerce.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "تطبيق إدارة العيادات",
      category: "برمجيات مخصصة",
      description: "نظام متكامل لإدارة العيادات الطبية يشمل جدولة المواعيد وإدارة الملفات الطبية والفواتير والتقارير.",
      image: "/images/project-healthcare.jpg",
      link: "#",
    },
  ],
  en: [
    {
      id: 1,
      title: "Integrated Educational Platform",
      category: "Web Development",
      description:
        "A comprehensive educational platform that allows teachers to create and manage courses and students to easily access educational content.",
      image: "/images/project-education.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Delivery App",
      category: "Mobile Apps",
      description:
        "An integrated delivery application that connects restaurants, customers, and drivers with a live tracking system and electronic payment.",
      image: "/images/project-delivery.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "E-commerce",
      description:
        "A comprehensive e-commerce platform with an advanced inventory management system, multiple payment gateways, and a seamless user experience.",
      image: "/images/project-ecommerce.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Clinic Management App",
      category: "Custom Software",
      description:
        "An integrated system for managing medical clinics, including appointment scheduling, medical records management, billing, and reporting.",
      image: "/images/project-healthcare.jpg",
      link: "#",
    },
  ],
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { language } = useLanguage()
  const isEnglish = language === "en"
  const projects = isEnglish ? projectsData.en : projectsData.ar

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    // Auto-advance carousel
    timeoutRef.current = setTimeout(() => {
      nextProject()
    }, 6000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, projects.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/80 to-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{isEnglish ? "Our Projects" : "مشاريعنا"}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {isEnglish
              ? "We are proud to present a diverse range of successful projects that have helped our clients achieve their goals"
              : "نفخر بتقديم مجموعة متنوعة من المشاريع الناجحة التي ساعدت عملائنا على تحقيق أهدافهم"}
          </p>
        </div>

        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
                  <Image
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 bg-black/80">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                      {currentProject.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>
                    <p className="text-gray-300 mb-8">{currentProject.description}</p>
                    <Button className="group">
                      {isEnglish ? "View Project" : "مشاهدة المشروع"}
                      <ExternalLink
                        className={`${isEnglish ? "ml-2" : "mr-2"} h-4 w-4 transition-transform group-hover:translate-x-1`}
                      />
                    </Button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex space-x-2 space-x-reverse">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`h-2 w-8 rounded-full transition-colors ${
                            index === currentIndex ? "bg-green-500" : "bg-gray-600"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <div className={`flex ${isEnglish ? "space-x-2" : "space-x-2 space-x-reverse"}`}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevProject}
                        className="h-10 w-10 rounded-full border-gray-600"
                      >
                        {isEnglish ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                        <span className="sr-only">Previous project</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextProject}
                        className="h-10 w-10 rounded-full border-gray-600"
                      >
                        {isEnglish ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                        <span className="sr-only">Next project</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
