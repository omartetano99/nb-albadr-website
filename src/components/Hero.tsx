'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'

const content = {
  en: {
    heading: {
      start: 'Transforming',
      middle: 'Ideas into',
      end: 'Experiences'
    },
    description: 'NB Albadr specializes in creating unforgettable media experiences and events that leave lasting impressions. From concept to execution, we bring your vision to life.',
    cta: 'Start the Magic & Call Us'
  },
  ar: {
    heading: {
      start: 'نحول',
      middle: 'الأفكار إلى',
      end: 'تجارب'
    },
    description: 'يتخصص إن بي البدر في إنشاء تجارب إعلامية وفعاليات لا تُنسى تترك انطباعات دائمة. من الفكرة إلى التنفيذ، نحن نحول رؤيتك إلى واقع.',
    cta: 'ابدأ السحر واتصل بنا'
  }
}

export function Hero() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = content[language]

  // Determine which logo to show
  const logoSrc = mounted ? (resolvedTheme === 'dark' ? "/logo-nb.svg" : "/logo-nb-light.svg") : "/logo-nb-light.svg"

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <Image
              src={logoSrc}
              alt="NB Albadar Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            <span className="text-primary">{t.heading.start}</span> {t.heading.middle}{' '}
            <span className="text-primary">{t.heading.end}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="/contact"
              className={`rounded-md bg-primary px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {t.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
    </div>
  )
} 