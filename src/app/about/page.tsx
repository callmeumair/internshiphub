'use client'

import Navigation from '../../components/Navigation'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
            About Cognifyz Technologies
          </h1>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At Cognifyz Technologies, we are dedicated to bridging the gap between academic learning and industry requirements. 
                Our mission is to provide students and young professionals with hands-on experience through our comprehensive 
                internship programs, helping them develop the skills and knowledge needed to excel in their careers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Structured internship programs in various technology domains</li>
                <li>Real-world project experience</li>
                <li>Mentorship from industry experts</li>
                <li>Professional development opportunities</li>
                <li>Networking with industry professionals</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We strive for excellence in everything we do, ensuring our interns receive the highest quality training and experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We embrace innovation and encourage creative thinking in all our programs and projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We are committed to the personal and professional growth of our interns.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Community</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We foster a supportive community where interns can learn, collaborate, and grow together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <a 
                    href="mailto:cognifyztechnologies@gmail.com" 
                    className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    cognifyztechnologies@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/cognifyz-technologies" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/cognifyz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 