import Header from "@/components/header"
import Services from "@/components/services"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />
      <div className="pt-32">
        <Services />
      </div>
      <Footer />
    </main>
  )
}
