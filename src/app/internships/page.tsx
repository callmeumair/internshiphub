'use client';

import { useState } from 'react';
import InternshipCard from '@/components/InternshipCard';
import CategoryFilter from '@/components/CategoryFilter';

const categories = [
  { id: 'development', name: 'Development' },
  { id: 'data', name: 'Data' },
  { id: 'business', name: 'Business' },
  { id: 'design', name: 'Design' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'miscellaneous', name: 'Miscellaneous' },
];

const internships = [
  {
    id: '1',
    title: 'Software Development Intern',
    description: 'Join our team as a software development intern and work on cutting-edge projects.',
    company: 'Tech Corp',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Web Development', 'Full Stack', 'React'],
    requirements: ['JavaScript', 'React', 'Node.js'],
    responsibilities: ['Develop web applications', 'Write clean code', 'Collaborate with team'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  // Add more internship data here
];

export default function InternshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInternships = internships.filter((internship) => {
    const matchesCategory = !selectedCategory || internship.tags.some((tag) =>
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Internship</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search internships..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              onClick={() => {
                // Handle click on internship card
                console.log('Clicked on internship:', internship.id);
              }}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredInternships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No internships found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
} 