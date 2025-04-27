'use client'

import { useState, useMemo } from 'react'
import Navigation from '../../components/Navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CategoryFilter from '@/components/CategoryFilter'
import { categories } from '@/data/categories'
import { motion } from 'framer-motion'
import { InternshipCard } from '@/components/InternshipCard'
import { internships } from '@/data/internships'
import { Internship } from '@/types/internship'

export default function InternshipsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const handleCategorySelect = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategoryId)
  }

  const filteredInternships = useMemo(() => {
    return internships.filter((internship: Internship) => {
      const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = !selectedCategory || 
        internship.tags.some((tag: string) => tag.toLowerCase() === selectedCategory.toLowerCase())
      
      const matchesSubcategory = !selectedSubcategory || 
        internship.tags.some((tag: string) => tag.toLowerCase() === selectedSubcategory.toLowerCase())
      
      return matchesSearch && matchesCategory && matchesSubcategory
    })
  }, [searchTerm, selectedCategory, selectedSubcategory])

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

        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-8">
          <CategoryFilter onCategorySelect={handleCategorySelect} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship: Internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  )
} 