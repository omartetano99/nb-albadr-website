'use client'

import { motion } from 'framer-motion'
import {
  FilmIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  CameraIcon,
  MicrophoneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'

const content = {
  en: {
    title: 'Our Services',
    subtitle: 'Comprehensive media and event solutions tailored to your needs',
    services: [
      {
        title: 'Event Management',
        description: 'Full-service event planning and execution, from intimate gatherings to large-scale conferences.',
        icon: SparklesIcon,
      },
      {
        title: 'Video Production',
        description: 'Professional video production services including filming, editing, and post-production.',
        icon: FilmIcon,
      },
      {
        title: 'Media Strategy',
        description: 'Strategic media planning and campaign development to maximize your brand impact.',
        icon: PresentationChartLineIcon,
      },
      {
        title: 'Photography',
        description: 'High-quality photography services for events, products, and corporate needs.',
        icon: CameraIcon,
      },
      {
        title: 'Audio Production',
        description: 'Professional audio recording, editing, and sound design services.',
        icon: MicrophoneIcon,
      },
      {
        title: 'Social Media Management',
        description: 'Comprehensive social media strategy and content creation services.',
        icon: UserGroupIcon,
      },
    ],
  },
  ar: {
    title: 'خدماتنا',
    subtitle: 'حلول إعلامية وتنظيم فعاليات شاملة مصممة لتلبية احتياجاتك',
    services: [
      {
        title: 'إدارة الفعاليات',
        description: 'خدمات شاملة لتخطيط وتنفيذ الفعاليات، من التجمعات الصغيرة إلى المؤتمرات الكبرى.',
        icon: SparklesIcon,
      },
      {
        title: 'إنتاج الفيديو',
        description: 'خدمات إنتاج فيديو احترافية تشمل التصوير والمونتاج وما بعد الإنتاج.',
        icon: FilmIcon,
      },
      {
        title: 'الاستراتيجية الإعلامية',
        description: 'تخطيط استراتيجي للإعلام وتطوير الحملات لتعظيم تأثير علامتك التجارية.',
        icon: PresentationChartLineIcon,
      },
      {
        title: 'التصوير الفوتوغرافي',
        description: 'خدمات تصوير عالية الجودة للفعاليات والمنتجات واحتياجات الشركات.',
        icon: CameraIcon,
      },
      {
        title: 'إنتاج الصوت',
        description: 'خدمات تسجيل وتحرير وتصميم صوتي احترافية.',
        icon: MicrophoneIcon,
      },
      {
        title: 'إدارة وسائل التواصل',
        description: 'استراتيجية شاملة لوسائل التواصل الاجتماعي وخدمات إنشاء المحتوى.',
        icon: UserGroupIcon,
      },
    ],
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const t = content[language]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            key={`title-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {t.title}
          </motion.h2>
          <motion.p
            key={`subtitle-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-4 text-lg text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          key={`services-${language}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {t.services.map((service, index) => (
            <motion.div
              key={`${service.title}-${language}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-primary/10 rounded-full" />
              <service.icon className="relative h-8 w-8 text-primary mb-4" />
              <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
                {service.title}
              </h3>
              <p className={`mt-2 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 