'use client'

import Link from 'next/link'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Find Your Dream Internship
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Discover opportunities, gain experience, and build your career with InternshipHub.
              We connect talented individuals with top companies to help you grow professionally.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/internships"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105"
              >
                Browse Internships
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Sign up <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
