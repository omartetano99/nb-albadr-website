'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </motion.button>
  )
} 