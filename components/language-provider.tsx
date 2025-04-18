"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { usePathname } from "next/navigation"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (ar: string, en: string) => string
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLanguage = "ar",
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [isRtl, setIsRtl] = useState(initialLanguage === "ar")
  const pathname = usePathname()

  useEffect(() => {
    // First check the URL path to determine language
    if (pathname?.startsWith("/en")) {
      setLanguage("en")
      setIsRtl(false)
    } else if (pathname !== undefined) {
      // Only set to Arabic if we're sure we're not on an English path
      setLanguage("ar")
      setIsRtl(true)
    }

    // Then check for saved language preference (but URL takes precedence)
    const savedLanguage = localStorage.getItem("guessitt-language") as Language | null
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      // Only apply saved language if it doesn't conflict with URL path
      if (
        (savedLanguage === "en" && !pathname?.startsWith("/en")) ||
        (savedLanguage === "ar" && pathname?.startsWith("/en"))
      ) {
        // Don't apply saved language if it conflicts with URL
      } else {
        setLanguage(savedLanguage)
        setIsRtl(savedLanguage === "ar")
      }
    }
  }, [pathname])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsRtl(lang === "ar")
    localStorage.setItem("guessitt-language", lang)
  }

  const t = (ar: string, en: string) => {
    return language === "ar" ? ar : en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
