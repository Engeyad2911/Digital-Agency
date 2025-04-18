import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function EnglishAboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />
      <div className="pt-32">
        <About />
      </div>
      <Footer />
    </main>
  )
}
