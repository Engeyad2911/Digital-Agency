"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "./language-provider"
import { useEffect, useState } from "react"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchToEnglish = () => {
    setLanguage("en")
    localStorage.setItem("guessitt-language", "en")

    // Handle path conversion
    if (pathname === "/") {
      router.push("/en")
    } else if (!pathname?.startsWith("/en")) {
      const newPath = `/en${pathname}`
      router.push(newPath)
    }
  }

  const switchToArabic = () => {
    setLanguage("ar")
    localStorage.setItem("guessitt-language", "ar")

    // Handle path conversion
    if (pathname === "/en") {
      router.push("/")
    } else if (pathname?.startsWith("/en/")) {
      const newPath = pathname.replace("/en", "")
      router.push(newPath)
    }
  }

  if (!mounted) return null

  const isEnglish = language === "en" || pathname?.startsWith("/en")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-300 hover:text-green-400">
          <Globe className="h-4 w-4 ml-1" />
          <span className="text-sm">{isEnglish ? "English" : "العربية"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={switchToArabic} className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            {!isEnglish && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
          </span>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem onClick={switchToEnglish} className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            {isEnglish && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
          </span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
