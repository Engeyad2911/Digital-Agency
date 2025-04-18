import Header from "@/components/header"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function EnglishProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />
      <div className="pt-32">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
