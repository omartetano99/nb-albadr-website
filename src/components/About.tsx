'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  en: {
    title: 'About Noor Al-Badr',
    description1: 'At Noor Al-Badr, we believe that true success lies in the ability to adapt to change and stay ahead in the fast-paced world of media and event management. We are committed to expanding our services across all media, marketing, and creative fields, from producing outstanding content to organizing unforgettable events that leave a lasting impact ,With our innovative strategies and a highly skilled team, we continue to develop our brand identity to become a leader in both local and global markets. By embracing the latest technologies and best practices, we ensure the delivery of comprehensive solutions that meet our clients’ needs with the highest standards of quality and excellence, .',
    description2: 'Noor Al-Badr – Crafting Success Stories, Creating Unforgettable Experiences.',
    stats: [
      {
        label: 'Events Managed',
        value: '500+',
        icon: CalendarIcon,
      },
      {
        label: 'Happy Clients',
        value: '200+',
        icon: UserGroupIcon,
      },
      {
        label: 'Awards Won',
        value: '15+',
        icon: TrophyIcon,
      },
    ],
  },
  ar: {
    title: 'من نحن',
    description1: 'في نور البدر، نؤمن بأن النجاح الحقيقي يكمن في القدرة على مواكبة التغيرات والتكيف مع التطورات السريعة في عالم الإعلام وتنظيم الفعاليات. نحن ملتزمون بتوسيع نطاق خدماتنا عبر كافة المجالات الإعلامية والتسويقية والإبداعية، بدءًا من إنتاج المحتوى المتميز إلى تنظيم الفعاليات التي تترك أثرًا لا يُنسى ,بفضل استراتيجياتنا المبتكرة وفريقنا المحترف، نواصل تطوير هويتنا التجارية لنكون روادًا في الأسواق المحلية والعالمية. ومن خلال تبني أحدث التقنيات وأفضل الممارسات، نضمن تقديم حلول متكاملة تلبي احتياجات عملائنا بأعلى معايير الجودة والتميز.',
    description2: 'نور البدر – نصنع قصص النجاح، ونخلق تجارب لا تُنسى',
    stats: [
      {
        label: 'فعالية ناجحة',
        value: '+500',
        icon: CalendarIcon,
      },
      {
        label: 'عميل راضٍ',
        value: '+200',
        icon: UserGroupIcon,
      },
      {
        label: 'جائزة وتكريم',
        value: '+15',
        icon: TrophyIcon,
      },
    ],
  },
}

export function About() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.title}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {t.description1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {t.description2}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 lg:mt-0"
          >
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {t.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white dark:bg-gray-900 px-6 py-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800"
                >
                  <dt>
                    <div className="absolute bg-primary/10 rounded-md p-3">
                      <stat.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className={`ml-16 text-sm font-medium text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic mr-16 ml-0' : ''}`}>
                      {stat.label}
                    </p>
                  </dt>
                  <dd className={`ml-16 text-2xl font-bold text-primary ${language === 'ar' ? 'mr-16 ml-0' : ''}`}>
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 