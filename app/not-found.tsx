import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001a0d] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-green-400 mb-6">404</h1>
        <h2 className="text-2xl font-bold mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-400 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <Link href="/">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold">العودة للصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  )
}
