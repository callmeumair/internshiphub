'use client';

import React, { useState } from 'react';
import InternshipCard from '@/components/InternshipCard';
import CategoryFilter from '@/components/CategoryFilter';
import { motion } from 'framer-motion';

const categories = [
  { id: 'development', name: 'Development' },
  { id: 'data', name: 'Data' },
  { id: 'business', name: 'Business' },
  { id: 'data-visualization', name: 'Data Visualization' },
  { id: 'programming', name: 'Programming' },
  { id: 'iot', name: 'Internet Of Things' },
  { id: 'miscellaneous', name: 'Miscellaneous' },
];

const internships = [
  {
    id: '1',
    title: 'Software Development Intern',
    description: 'Join our team as a software development intern and work on cutting-edge projects.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Software Development', 'Development'],
    requirements: ['JavaScript', 'React', 'Node.js'],
    responsibilities: ['Develop web applications', 'Write clean code', 'Collaborate with team'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '2',
    title: 'Web Development Intern',
    description: 'Learn and build modern web applications using the latest technologies.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Web Development', 'Development'],
    requirements: ['HTML', 'CSS', 'JavaScript'],
    responsibilities: ['Build responsive websites', 'Implement UI/UX designs'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '3',
    title: 'Full Stack Development Intern',
    description: 'Work on both frontend and backend development of modern web applications.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Full Stack Development', 'Development'],
    requirements: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    responsibilities: ['Full stack development', 'API integration', 'Database design'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '4',
    title: 'Mobile App Development Intern',
    description: 'Develop cross-platform mobile applications using modern frameworks.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Mobile App Development', 'Development'],
    requirements: ['React Native', 'JavaScript', 'Mobile Development'],
    responsibilities: ['Mobile app development', 'UI/UX implementation', 'Testing'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '5',
    title: 'UI/UX Design Intern',
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['UI/UX Design', 'Development'],
    requirements: ['Figma', 'Adobe XD', 'UI/UX Principles'],
    responsibilities: ['Design interfaces', 'Create prototypes', 'User research'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '6',
    title: 'Front End Development Intern',
    description: 'Build responsive and interactive user interfaces using modern frameworks.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Front End Development', 'Development'],
    requirements: ['HTML', 'CSS', 'JavaScript', 'React'],
    responsibilities: ['Frontend development', 'UI implementation', 'Performance optimization'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  },
  {
    id: '7',
    title: 'Flutter Development Intern',
    description: 'Develop cross-platform mobile applications using Flutter framework.',
    company: 'Development',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    tags: ['Flutter', 'Development'],
    requirements: ['Dart', 'Flutter', 'Mobile Development'],
    responsibilities: ['Flutter app development', 'State management', 'Testing'],
    benefits: ['Mentorship', 'Flexible hours', 'Stipend'],
    salary: '$25/hour',
    applicationDeadline: '2024-05-15',
    createdAt: '2024-04-01',
    updatedAt: '2024-04-01',
  }
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
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Internship</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search internships..."
              className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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

        {/* AutoCad Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mb-8 cursor-pointer"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header', '_blank')}
        >
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src="/autocad-banner.jpg"
              alt="AutoCad Internship"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">AutoCad Internship</h2>
              <p className="text-gray-300 mb-4">Join our AutoCad internship program and gain hands-on experience in CAD design and drafting.</p>
              <div className="flex items-center text-blue-400">
                <span>Apply Now</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

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
            <p className="text-gray-400 text-lg">No internships found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
} 