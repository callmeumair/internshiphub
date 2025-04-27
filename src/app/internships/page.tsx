'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CategoryFilter from '@/components/CategoryFilter'
import { categories } from '@/data/categories'
import { motion } from 'framer-motion'

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('ALL')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  const handleCategorySelect = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategoryId)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cognifyz Internship Program
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join our structured learning experience designed to provide hands-on exposure to real-world projects.
          </p>
        </div>

        <div className="mb-8">
          <CategoryFilter onCategorySelect={handleCategorySelect} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is the Cognifyz Technologies Internship Program?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The Cognifyz Technologies Internship Program is a structured learning experience designed to provide students and individuals with hands-on exposure to real-world projects in the fields of technology, software development, and related areas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Is the internship paid?</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>The internship program is unpaid for individuals who do not opt for the interview process.</li>
                <li>Those who choose to undergo the interview process will be subject to a nominal administrative cost.</li>
                <li>Successful candidates from the interview process will become eligible for the stipend, under Cognifyz Technologies' policies.</li>
                <li>This approach ensures that stipend eligibility is tied to successful interview performance, promoting transparency and fairness in the internship program.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How can I apply for the internship program?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To apply for the internship program, visit our internship portal. Follow the application instructions provided for each internship listing, and submit the required documents.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Will I receive a certificate upon completion of the internship?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, interns who successfully complete the internship program and fulfill any specified criteria will receive a certificate acknowledging their participation and achievements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 dark:text-gray-400">
              For any additional questions or clarifications, please contact us at{' '}
              <a href="mailto:cognifyztechnologies@gmail.com" className="text-indigo-600 hover:text-indigo-500">
                cognifyztechnologies@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105"
          >
            Apply Now for Internship
          </a>
        </div>
      </div>
    </main>
  )
} 