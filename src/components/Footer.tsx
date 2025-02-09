'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa'
import { MapPinIcon } from '@heroicons/react/24/outline'

const navigation = {
  en: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Contact', href: '/contact' },
    ],
    address: 'NB AL-BADR LTD\n1st Floor, Regis Building\n25 Clarendon Road\nRedhill, RH1 1QZ'
  },
  ar: {
    main: [
      { name: 'الرئيسية', href: '/' },
      { name: 'اتصل بنا', href: '/contact' },
    ],
    address: 'إن بي البدر المحدودة\nالطابق الأول، مبنى ريجيس\n25 طريق كلارندون\nريدهيل، RH1 1QZ'
  },
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/nb-albadr-limited',
      icon: FaLinkedin,
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/nbalbadr',
      icon: FaTwitter,
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nbalbadr',
      icon: FaInstagram,
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/nbalbadr',
      icon: FaFacebook,
      color: '#1877F2'
    }
  ]
}

export function Footer() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to show
  const logoSrc = mounted ? (resolvedTheme === 'dark' ? "/logo-nb.svg" : "/logo-nb-light.svg") : "/logo-nb-light.svg"

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <Image
              src={logoSrc}
              alt="NB Albadar Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Address Section */}
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center mb-2">
              <MapPinIcon className="h-5 w-5 text-primary me-2" />
              <span className={`text-sm font-medium text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'en' ? 'Our Office' : 'مكتبنا'}
              </span>
            </div>
            <p className={`text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line ${language === 'ar' ? 'font-arabic' : ''}`}>
              {navigation[language].address}
            </p>
          </div>

          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center mt-6"
            aria-label="Footer"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex gap-10">
              {navigation[language].main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
          <div className="mt-8 flex justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex gap-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-[var(--social-color)] transition-colors"
                  style={{ '--social-color': item.color } as React.CSSProperties}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <LanguageToggle />
          </div>
          <p className={`mt-8 text-center text-base text-gray-500 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
            &copy; {new Date().getFullYear()} NB Albadr Limited. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 