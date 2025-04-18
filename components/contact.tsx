"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/50 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم لبدء رحلة نجاحك.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div className="bg-black/50 border border-green-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">رقم الهاتف</h4>
                    <p className="text-gray-400">01050835719</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-400">info@guessitt.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">العنوان</h4>
                    <p className="text-gray-400">القاهرة، مصر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">ساعات العمل</h4>
                    <p className="text-gray-400">السبت - الخميس: 9 صباحًا - 5 مساءً</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">تابعنا على</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-green-500/20 p-3 rounded-full hover:bg-green-500/30 transition-colors">
                    <Facebook className="h-5 w-5 text-green-400" />
                  </a>
                  <a href="#" className="bg-green-500/20 p-3 rounded-full hover:bg-green-500/30 transition-colors">
                    <Twitter className="h-5 w-5 text-green-400" />
                  </a>
                  <a href="#" className="bg-green-500/20 p-3 rounded-full hover:bg-green-500/30 transition-colors">
                    <Instagram className="h-5 w-5 text-green-400" />
                  </a>
                  <a href="#" className="bg-green-500/20 p-3 rounded-full hover:bg-green-500/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-green-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-black/50 border border-green-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>

              {isSuccess ? (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      الاسم
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك"
                      required
                      className="bg-black/30 border-gray-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      className="bg-black/30 border-gray-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="أدخل رقم هاتفك"
                      className="bg-black/30 border-gray-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      الموضوع
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="أدخل موضوع الرسالة"
                      required
                      className="bg-black/30 border-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                    className="bg-black/30 border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      إرسال الرسالة
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
