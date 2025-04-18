import type React from "react"
import type { Metadata } from "next"
import { Cairo, Poppins } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import AnimatedBackground from "@/components/animated-background"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Guessitt - Creating Digital Success Stories",
  description:
    "We design digital experiences that capture attention and achieve tangible results. Let's build your next success story together.",
}

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${cairo.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider initialLanguage="en">
            <AnimatedBackground />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
