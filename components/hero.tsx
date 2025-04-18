"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { AnimatedCharacter1, AnimatedCharacter2 } from "./animated-characters"

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)
  const { t, isRtl } = useLanguage()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return

      const { clientX, clientY } = e
      const rect = glowRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      glowRef.current.style.setProperty("--x", `${x}px`)
      glowRef.current.style.setProperty("--y", `${y}px`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black/80 to-black/50">
      {/* Animated background glow - keeping this for subtle effect but making it less prominent */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle 400px at var(--x, 50%) var(--y, 50%), rgba(0, 255, 133, 0.15), transparent 40%)",
        }}
      />

      {/* Hero animated characters */}
      <div className="absolute top-[10%] right-[15%] transform -translate-y-1/2 hidden lg:block">
        <AnimatedCharacter1 />
      </div>
      <div className="absolute bottom-[5%] left-[15%] transform -translate-y-1/2 hidden lg:block">
        <AnimatedCharacter2 />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            {t("صناعة قصص نجاح رقمية", "Creating Digital Success Stories")}
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay-1">
            {t(
              "في Guessit، نصمم تجارب رقمية تخطف الأنظار وتحقق نتائج ملموسة.",
              "At Guessitt, we design digital experiences that capture attention and achieve tangible results.",
            )}
            <br />
            {t("دعنا نبني قصة نجاحك القادمة معًا.", "Let's build your next success story together.")}
          </p>
          <Link href={isRtl ? "/services" : "/en/services"}>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 rounded-full text-lg animate-pulse-subtle"
            >
              {t("اكتشف خدماتنا", "Discover Our Services")}
            </Button>
          </Link>
        </div>

        <div className="relative mt-20 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-green-500/10 rounded-xl overflow-hidden"></div>
          <Image
            src="/images/success-team.jpg"
            alt={t("فريق عمل ناجح", "Successful Team")}
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
