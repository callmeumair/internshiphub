'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CategoryFilter from '@/components/CategoryFilter'
import { categories } from '@/data/categories'
import { motion } from 'framer-motion'

// Mock data for internships
const internships = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    duration: '3 months',
    skills: ['JavaScript', 'React', 'Node.js'],
    applicationSettings: {
      deadline: '2024-06-30',
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Strong problem-solving skills',
        'Experience with web development',
      ],
      benefits: [
        'Competitive stipend',
        'Mentorship program',
        'Flexible work hours',
        'Networking opportunities',
      ],
    },
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'GrowthHub',
    location: 'Remote',
    type: 'REMOTE',
    duration: '6 months',
    skills: ['Digital Marketing', 'Social Media', 'Content Creation'],
    applicationSettings: {
      deadline: '2024-07-15',
      requirements: [
        'Marketing or Communications major preferred',
        'Strong written and verbal communication skills',
        'Social media management experience',
      ],
      benefits: [
        'Monthly stipend',
        'Professional development workshops',
        'Remote work setup allowance',
      ],
    },
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'DataAnalytics Inc',
    location: 'New York, NY',
    type: 'HYBRID',
    duration: '4 months',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    applicationSettings: {
      deadline: '2024-06-15',
      requirements: [
        'Background in Statistics, Mathematics, or Computer Science',
        'Experience with Python and data analysis libraries',
        'Strong analytical thinking',
      ],
      benefits: [
        'Competitive compensation',
        'Access to company resources',
        'Hybrid work model',
        'Career development sessions',
      ],
    },
  },
]

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('ALL')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  const handleCategorySelect = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategoryId)
  }

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesType = selectedType === 'ALL' || internship.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Find Your Next Opportunity
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Browse through our curated list of internships and find the perfect match for your skills and interests.
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="block w-full sm:w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="ALL">All Types</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="REMOTE">Remote</option>
            <option value="HYBRID">Hybrid</option>
          </select>
        </div>

        <div className="mb-8">
          <CategoryFilter onCategorySelect={handleCategorySelect} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredInternships.map((internship) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {internship.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {internship.company} • {internship.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/50 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Deadline: {new Date(internship.applicationSettings.deadline).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {internship.duration}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {internship.applicationSettings.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Benefits:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {internship.applicationSettings.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {internship.type}
                </span>
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCategory && selectedSubcategory && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              {categories.find(c => c.id === selectedCategory)?.name} -{' '}
              {categories
                .find(c => c.id === selectedCategory)
                ?.subcategories.find(s => s.id === selectedSubcategory)?.name}
            </h2>
            {/* Add internship listings here */}
          </div>
        )}
      </div>
    </main>
  )
} 