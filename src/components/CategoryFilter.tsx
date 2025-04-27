'use client'

import { useState } from 'react'
import { categories } from '../data/categories'

interface CategoryFilterProps {
  onCategorySelect: (categoryId: string, subcategoryId: string) => void
}

export default function CategoryFilter({ onCategorySelect }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subcategories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories
              .find((c) => c.id === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => onCategorySelect(selectedCategory, subcategory.id)}
                  className="px-3 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {subcategory.name}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
} 