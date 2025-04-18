import type React from "react"
import type { Metadata } from "next"
import { Cairo, Poppins } from "next/font/google"
import "./globals.css"
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
  title: "Guessitt - صناعة قصص نجاح رقمية",
  description: "نصمم تجارب رقمية تخطف الأنظار وتحقق نتائج ملموسة. دعنا نبني قصة نجاحك القادمة معًا.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${cairo.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <AnimatedBackground />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
