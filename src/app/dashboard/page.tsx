'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

// Mock data for applications and certifications
const applications = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    status: 'PENDING',
    appliedDate: '2024-03-15',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'GrowthHub',
    status: 'ACCEPTED',
    appliedDate: '2024-03-10',
  },
]

const certifications = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'InternshipHub',
    dateEarned: '2024-02-28',
    status: 'COMPLETED',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    issuer: 'InternshipHub',
    dateEarned: '2024-03-20',
    status: 'IN_PROGRESS',
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('applications')

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Manage your applications and track your certifications
          </p>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('applications')}
              className={`${
                activeTab === 'applications'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5" />
                Applications
              </div>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`${
                activeTab === 'certifications'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-5 w-5" />
                Certifications
              </div>
            </button>
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === 'applications' && (
            <div className="space-y-6">
              {applications.map((application) => (
                <div
                  key={application.id}
                  className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {application.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {application.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          application.status === 'ACCEPTED'
                            ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/50 dark:text-green-300'
                            : 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-900/50 dark:text-yellow-300'
                        }`}
                      >
                        {application.status}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Applied on {new Date(application.appliedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-6">
              {certifications.map((certification) => (
                <div
                  key={certification.id}
                  className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {certification.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {certification.issuer}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          certification.status === 'COMPLETED'
                            ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/50 dark:text-green-300'
                            : 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/50 dark:text-blue-300'
                        }`}
                      >
                        {certification.status}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(certification.dateEarned).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 