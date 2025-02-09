'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa'

const contactInfo = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us',
    email: 'info@nbalbadr.com',
    phone: '+44 123 456 7890',
    address: 'NB AL-BADR LTD\n1st Floor, Regis Building\n25 Clarendon Road\nRedhill, RH1 1QZ',
    social: 'Follow us on social media',
    emailDialog: {
      title: 'Send us a message',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      cancel: 'Cancel',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
    }
  },
  ar: {
    title: 'اتصل بنا',
    subtitle: 'تواصل معنا',
    email: 'info@nbalbadr.com',
    phone: '+44 123 456 7890',
    address: 'إن بي البدر المحدودة\nالطابق الأول، مبنى ريجيس\n25 طريق كلارندون\nريدهيل، RH1 1QZ',
    social: 'تابعنا على وسائل التواصل الاجتماعي',
    emailDialog: {
      title: 'أرسل لنا رسالة',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      cancel: 'إلغاء',
      required: 'هذا الحقل مطلوب',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'خطأ في إرسال الرسالة. حاول مرة اخرى.',
    }
  }
}

const socialLinks = [
  { 
    icon: FaLinkedin, 
    href: 'https://www.linkedin.com/company/nb-albadr-limited',
    label: 'LinkedIn',
    color: '#0077b5'
  },
  { 
    icon: FaTwitter, 
    href: 'https://twitter.com/nbalbadr',
    label: 'Twitter',
    color: '#1DA1F2'
  },
  { 
    icon: FaInstagram, 
    href: 'https://www.instagram.com/nbalbadr',
    label: 'Instagram',
    color: '#E4405F'
  },
  { 
    icon: FaFacebook, 
    href: 'https://www.facebook.com/nbalbadr',
    label: 'Facebook',
    color: '#1877F2'
  }
]

type FormField = 'name' | 'email' | 'subject' | 'message'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const { language } = useLanguage()
  const content = contactInfo[language]
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState('')

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name) newErrors.name = content.emailDialog.required
    if (!formData.email) {
      newErrors.email = content.emailDialog.required
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = content.emailDialog.invalidEmail
    }
    if (!formData.subject) newErrors.subject = content.emailDialog.required
    if (!formData.message) newErrors.message = content.emailDialog.required
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setIsDialogOpen(false)
        setStatus('')
      }, 2000)
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as FormField]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content.title}
          </h1>
          <p className={`text-xl text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Email</p>
                  <a href={`mailto:${content.email}`} className="text-gray-900 dark:text-white hover:text-primary">
                    {content.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Phone</p>
                  <a href={`tel:${content.phone}`} className="text-gray-900 dark:text-white hover:text-primary">
                    {content.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Address</p>
                  <p className="text-gray-900 dark:text-white whitespace-pre-line">
                    {content.address}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDialogOpen(true)}
                className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                {content.emailDialog.title}
              </button>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content.social}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all transform hover:scale-105 hover:shadow-md group"
                >
                  <social.icon 
                    className="h-6 w-6 text-primary group-hover:text-[var(--social-color)] transition-colors" 
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  />
                  <span className="text-gray-900 dark:text-white group-hover:text-[var(--social-color)] transition-colors" style={{ '--social-color': social.color } as React.CSSProperties}>
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Email Dialog */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {content.emailDialog.title}
                </h3>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {content.emailDialog.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {content.emailDialog.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {content.emailDialog.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {content.emailDialog.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {status && (
                  <div className={`text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status === 'success' ? content.emailDialog.success : content.emailDialog.error}
                  </div>
                )}

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {content.emailDialog.cancel}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {content.emailDialog.send}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
} 