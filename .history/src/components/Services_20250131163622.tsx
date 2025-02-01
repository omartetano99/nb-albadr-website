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

const services = [
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
]

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
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Comprehensive media and event solutions tailored to your needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-primary/10 rounded-full" />
              <service.icon className="relative h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 