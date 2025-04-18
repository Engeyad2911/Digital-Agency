import Header from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />
      <div className="pt-32">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
