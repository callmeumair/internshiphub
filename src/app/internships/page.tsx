'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CategoryFilter from '@/components/CategoryFilter'
import { categories } from '@/data/categories'
import { motion } from 'framer-motion'
import { InternshipCard } from '@/components/InternshipCard'
import { internships } from '@/data/internships'

export default function InternshipsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const handleCategorySelect = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategoryId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl text-gray-600">
            Discover opportunities that match your skills and interests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  )
} 