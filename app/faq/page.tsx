import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#001a0d]">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              إليك إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا وطريقة عملنا
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">ما هي مدة تنفيذ المشروع؟</AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  تختلف مدة تنفيذ المشروع حسب حجمه وتعقيده ومتطلباته. عادةً ما تستغرق المشاريع الصغيرة من 2-4 أسابيع،
                  بينما قد تستغرق المشاريع المتوسطة والكبيرة من 1-3 أشهر أو أكثر. نقوم بتحديد جدول زمني دقيق لكل مشروع
                  بعد دراسة متطلباته بشكل كامل.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">كيف تتم عملية تطوير المشروع؟</AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  نتبع منهجية تطوير تفاعلية تضمن مشاركة العميل في جميع مراحل المشروع. تبدأ العملية بجمع المتطلبات
                  وتحليلها، ثم تصميم واجهات المستخدم، يليها مرحلة التطوير والبرمجة، ثم الاختبار وإصلاح الأخطاء، وأخيرًا
                  الإطلاق والدعم المستمر.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  ما هي تكلفة تطوير موقع أو تطبيق؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  تعتمد التكلفة على عدة عوامل منها نوع المشروع وحجمه والميزات المطلوبة والتقنيات المستخدمة. نقدم عروض
                  أسعار مخصصة لكل مشروع بعد فهم متطلباته بشكل كامل. يمكنك التواصل معنا للحصول على عرض سعر مجاني لمشروعك.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  هل تقدمون خدمات الصيانة والدعم بعد إطلاق المشروع؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  نعم، نقدم خدمات الصيانة والدعم الفني المستمر لجميع مشاريعنا. لدينا باقات دعم شهرية وسنوية تشمل تحديثات
                  الأمان، إصلاح الأخطاء، التحسينات المستمرة، والدعم الفني على مدار الساعة لضمان استمرارية عمل مشروعك
                  بكفاءة.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  ما هي التقنيات التي تستخدمونها في التطوير؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  نستخدم أحدث التقنيات في مجال تطوير الويب والتطبيقات، بما في ذلك React.js وNext.js وNode.js للواجهة
                  الأمامية، وPHP وLaravel وPython وDjango للواجهة الخلفية. كما نستخدم React Native وFlutter لتطوير
                  تطبيقات الجوال. نختار التقنية المناسبة لكل مشروع بناءً على متطلباته واحتياجاته الخاصة.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-black/50 border border-green-500/20 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">
                  هل يمكنني تعديل المشروع بعد الإطلاق؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  بالتأكيد، نصمم مشاريعنا بطريقة مرنة تسمح بإجراء تعديلات وإضافات مستقبلية بسهولة. يمكنك طلب تعديلات أو
                  إضافة ميزات جديدة في أي وقت، وسنقوم بتنفيذها وفقًا لاحتياجاتك المتغيرة.
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
