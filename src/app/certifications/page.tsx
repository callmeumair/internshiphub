'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { AcademicCapIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

// Mock data for certifications
const certifications = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master modern web development with this comprehensive certification program covering frontend and backend technologies.',
    duration: '3 months',
    level: 'Intermediate',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Learn the essential skills for data analysis, visualization, and machine learning.',
    duration: '4 months',
    level: 'Beginner',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    id: 3,
    title: 'Digital Marketing Professional',
    description: 'Become a certified digital marketing professional with hands-on experience in various marketing channels.',
    duration: '2 months',
    level: 'Beginner',
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Email Marketing', 'Analytics'],
  },
]

export default function Certifications() {
  const [selectedLevel, setSelectedLevel] = useState('ALL')

  const filteredCertifications = certifications.filter((certification) => {
    return selectedLevel === 'ALL' || certification.level === selectedLevel
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Boost Your Career with Certifications
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enhance your skills and stand out in the job market with our industry-recognized certification programs.
          </p>
        </div>

        <div className="mb-8">
          <select
            className="block w-full sm:w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="ALL">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCertifications.map((certification) => (
            <div
              key={certification.id}
              className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {certification.level}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {certification.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{certification.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>Self-paced</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/50 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 