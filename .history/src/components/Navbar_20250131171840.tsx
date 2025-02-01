'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ],
  ar: [
    { href: '/', label: 'الرئيسية' },
    { href: '/contact', label: 'اتصل بنا' },
  ],
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentNavLinks = navLinks[language]

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {mounted && (
              <Image
                src={theme === 'dark' ? "/logo-nb.svg" : "/logo-nb-light.svg"}
                alt="NB Albadar Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
            )}
            <span className={`ml-2 text-xl font-bold text-gray-900 dark:text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'NB Albadar' : 'إن بي البدر'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {currentNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 