'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    content:
      "Noon Brand Al-Badr transformed our corporate event into an unforgettable experience. Their attention to detail and professional approach exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Innovations Ltd",
  },
  {
    content:
      "The team's creativity and dedication to our media campaign was outstanding. They delivered results that went above and beyond our goals.",
    author: "Mohammed Al-Rashid",
    role: "CEO",
    company: "Global Solutions",
  },
  {
    content:
      "Working with Noon Brand was a game-changer for our brand. Their strategic approach and flawless execution made all the difference.",
    author: "Emily Chen",
    role: "Brand Manager",
    company: "Creative Studios",
  },
]

export function Testimonials() {
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
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