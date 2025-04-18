import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Suspense } from "react"
import { AnimatedCharacter1, AnimatedCharacter2 } from "@/components/animated-characters"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d] relative overflow-hidden">
      {/* Animated characters */}
      <AnimatedCharacter1 className="hidden md:block top-[30%] right-[5%] opacity-70" />
      <AnimatedCharacter2 className="hidden md:block bottom-[20%] left-[5%] opacity-70" />

      <Header />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}
