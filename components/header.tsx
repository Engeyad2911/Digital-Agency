"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { GuessitLogo } from "./guessit-logo"
import LanguageSwitcher from "./language-switcher"
import { usePathname } from "next/navigation"
import { useLanguage } from "./language-provider"

const navItemsArabic = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "المشاريع", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "الأسئلة الشائعة", href: "/faq" },
  { name: "تواصل معنا", href: "/contact" },
]

const navItemsEnglish = [
  { name: "Home", href: "/en" },
  { name: "About Us", href: "/en/about" },
  { name: "Services", href: "/en/services" },
  { name: "Projects", href: "/en/projects" },
  { name: "Blog", href: "/en/blog" },
  { name: "FAQ", href: "/en/faq" },
  { name: "Contact Us", href: "/en/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()

  const isEnglish = language === "en" || pathname?.startsWith("/en")
  const navItems = isEnglish ? navItemsEnglish : navItemsArabic

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="tel:01050835719"
            className="flex items-center text-gray-300 hover:text-green-400 transition-colors mr-6"
          >
            <Phone className="h-4 w-4 ml-1" />
            <span className="text-sm">01050835719</span>
          </a>

          <LanguageSwitcher />
        </div>

        <nav className="hidden lg:flex items-center space-x-1 space-x-reverse rtl:space-x-reverse ltr:space-x">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center">
            <GuessitLogo className="h-8 w-auto" />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-gray-300 hover:text-green-400 transition-colors text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
