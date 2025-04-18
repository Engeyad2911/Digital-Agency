"use client"

import Link from "next/link"
import { GuessitLogo } from "./guessit-logo"
import { useLanguage } from "./language-provider"

export default function Footer() {
  const { language } = useLanguage()
  const isEnglish = language === "en"

  const baseUrl = isEnglish ? "/en" : ""

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={isEnglish ? "/en" : "/"} className="inline-block mb-6">
              <GuessitLogo className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              {isEnglish
                ? "We design eye-catching digital experiences that achieve tangible results. Let's build your next success story together."
                : "نصمم تجارب رقمية تخطف الأنظار وتحقق نتائج ملموسة. دعنا نبني قصة نجاحك القادمة معًا."}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{isEnglish ? "Quick Links" : "روابط سريعة"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${baseUrl}/`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Home" : "الرئيسية"}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/about`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "About Us" : "من نحن"}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/services`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Services" : "خدماتنا"}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/projects`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Projects" : "مشاريعنا"}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/blog`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Blog" : "المدونة"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{isEnglish ? "Our Services" : "خدماتنا"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${baseUrl}/services/web`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Web Development" : "تطوير المواقع الإلكترونية"}
                </Link>
              </li>
              <li>
                <Link href={`${baseUrl}/services/app`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {isEnglish ? "Mobile App Development" : "تطوير تطبيقات الجوال"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}/services/design`}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {isEnglish ? "Design & Visual Identity" : "التصميم والهوية البصرية"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}/services/marketing`}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {isEnglish ? "Digital Marketing" : "التسويق الرقمي"}
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}/services/software`}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {isEnglish ? "Custom Software Development" : "تطوير البرمجيات المخصصة"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{isEnglish ? "Contact Us" : "تواصل معنا"}</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">{isEnglish ? "Cairo, Egypt" : "القاهرة، مصر"}</span>
              </li>
              <li className="text-gray-400">
                <span className="block">info@guessitt.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">01050835719</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Guessitt. {isEnglish ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
          <div className="flex space-x-4 space-x-reverse rtl:space-x-reverse ltr:space-x">
            <Link href={`${baseUrl}/privacy`} className="text-gray-500 hover:text-green-400 text-sm">
              {isEnglish ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link href={`${baseUrl}/terms`} className="text-gray-500 hover:text-green-400 text-sm">
              {isEnglish ? "Terms & Conditions" : "الشروط والأحكام"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
