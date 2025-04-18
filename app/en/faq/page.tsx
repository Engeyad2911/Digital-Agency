import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EnglishFAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are answers to the most common questions about our services and how we work
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How long does it take to complete a project?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  The project timeline varies depending on its size, complexity, and requirements. Small projects
                  typically take 2-4 weeks, while medium and large projects may take 1-3 months or more. We establish a
                  precise timeline for each project after thoroughly studying its requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  How does the development process work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  We follow an interactive development methodology that ensures client involvement throughout all
                  project phases. The process begins with gathering and analyzing requirements, followed by designing
                  user interfaces, then development and programming, testing and bug fixing, and finally launch and
                  ongoing support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What is the cost of developing a website or application?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  The cost depends on several factors including the project type, size, required features, and
                  technologies used. We provide customized quotes for each project after fully understanding its
                  requirements. You can contact us to get a free quote for your project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Do you provide maintenance and support after project launch?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  Yes, we provide ongoing maintenance and technical support for all our projects. We have monthly and
                  annual support packages that include security updates, bug fixes, continuous improvements, and 24/7
                  technical support to ensure your project continues to operate efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  What technologies do you use in development?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  We use the latest technologies in web and application development, including React.js, Next.js, and
                  Node.js for the frontend, and PHP, Laravel, Python, and Django for the backend. We also use React
                  Native and Flutter for mobile app development. We choose the appropriate technology for each project
                  based on its specific requirements and needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  Can I modify the project after launch?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  Absolutely, we design our projects in a flexible way that allows for future modifications and
                  additions easily. You can request modifications or add new features at any time, and we will implement
                  them according to your changing needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
