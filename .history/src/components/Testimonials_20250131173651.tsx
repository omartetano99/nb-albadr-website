'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  en: {
    title: 'What Our Clients Say',
    subtitle: 'Don\'t just take our word for it - hear from some of our satisfied clients',
    testimonials: [
      {
        content: "NB Albadr transformed our corporate event into an unforgettable experience. Their attention to detail and professional approach exceeded our expectations.",
        author: "Sarah Johnson",
        role: "Marketing Director",
        company: "Tech Innovations Ltd",
      },
      {
        content: "The team's creativity and dedication to our media campaign was outstanding. They delivered results that went above and beyond our goals.",
        author: "Mohammed Al-Rashid",
        role: "CEO",
        company: "Global Solutions",
      },
      {
        content: "Working with NB Albadr was a game-changer for our brand. Their strategic approach and flawless execution made all the difference.",
        author: "Emily Chen",
        role: "Brand Manager",
        company: "Creative Studios",
      },
    ],
  },
  ar: {
    title: 'ماذا يقول عملاؤنا',
    subtitle: 'لا تأخذ كلمتنا فقط - اسمع من بعض عملائنا الراضين',
    testimonials: [
      {
        content: "قام إن بي البدر بتحويل فعاليتنا المؤسسية إلى تجربة لا تُنسى. لقد تجاوز اهتمامهم بالتفاصيل ونهجهم المهني توقعاتنا.",
        author: "سارة جونسون",
        role: "مديرة التسويق",
        company: "تك إنوفيشنز المحدودة",
      },
      {
        content: "كان إبداع الفريق وتفانيه في حملتنا الإعلامية متميزاً. لقد حققوا نتائج تجاوزت أهدافنا بكثير.",
        author: "محمد الراشد",
        role: "الرئيس التنفيذي",
        company: "الحلول العالمية",
      },
      {
        content: "كان العمل مع إن بي البدر نقطة تحول لعلامتنا التجارية. نهجهم الاستراتيجي وتنفيذهم المتقن صنع كل الفرق.",
        author: "إيملي تشن",
        role: "مديرة العلامة التجارية",
        company: "استوديوهات الإبداع",
      },
    ],
  },
}

export function Testimonials() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={`text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.title}
          </h2>
          <p className={`mt-4 text-lg text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm"
            >
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <blockquote>
                  <p className={`text-lg text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className={`font-medium text-gray-900 dark:text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {testimonial.author}
                  </p>
                  <p className={`mt-1 text-sm text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {testimonial.role} {language === 'ar' ? 'في' : 'at'} {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 