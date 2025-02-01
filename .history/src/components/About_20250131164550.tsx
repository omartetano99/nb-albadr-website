'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

const stats = [
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
]

export function About() {
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About NB Albadar
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              We are a leading media and event management company dedicated to creating
              extraordinary experiences. With years of expertise in the industry, we
              transform ideas into reality through innovative solutions and meticulous
              attention to detail.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Our team of creative professionals works tirelessly to ensure every
              project exceeds expectations, whether it's a corporate event, media
              campaign, or creative production.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 lg:mt-0"
          >
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
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
                    <p className="ml-16 text-sm font-medium text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </dt>
                  <dd className="ml-16 text-2xl font-bold text-primary">
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