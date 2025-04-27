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
    title: 'Software Development',
    description: 'Join our team as a software development intern and work on cutting-edge projects.',
    company: 'Development',
    location: 'Remote',
    tags: ['Software Development', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'Learn and build modern web applications using the latest technologies.',
    company: 'Development',
    location: 'Remote',
    tags: ['Web Development', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '3',
    title: 'Full Stack Development',
    description: 'Work on both frontend and backend development of modern web applications.',
    company: 'Development',
    location: 'Remote',
    tags: ['Full Stack Development', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Develop cross-platform mobile applications using modern frameworks.',
    company: 'Development',
    location: 'Remote',
    tags: ['Mobile App Development', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user interfaces for web and mobile applications.',
    company: 'Development',
    location: 'Remote',
    tags: ['UI/UX Design', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '6',
    title: 'Frontend Development',
    description: 'Build responsive and interactive user interfaces using modern frameworks.',
    company: 'Development',
    location: 'Remote',
    tags: ['Frontend Development', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '7',
    title: 'Flutter',
    description: 'Develop cross-platform mobile applications using Flutter framework.',
    company: 'Development',
    location: 'Remote',
    tags: ['Flutter', 'Development'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '8',
    title: 'Data Science',
    description: 'Work on data analysis, machine learning, and statistical modeling projects.',
    company: 'Data',
    location: 'Remote',
    tags: ['Data Science', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '9',
    title: 'Data Analysis using Python',
    description: 'Learn and apply Python for data analysis and visualization.',
    company: 'Data',
    location: 'Remote',
    tags: ['Data Analysis', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '10',
    title: 'Machine Learning',
    description: 'Develop and implement machine learning models for real-world applications.',
    company: 'Data',
    location: 'Remote',
    tags: ['Machine Learning', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '11',
    title: 'Computer Vision',
    description: 'Work on image processing and computer vision applications.',
    company: 'Data',
    location: 'Remote',
    tags: ['Computer Vision', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '12',
    title: 'Data Engineering',
    description: 'Build and maintain data pipelines and infrastructure.',
    company: 'Data',
    location: 'Remote',
    tags: ['Data Engineering', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
  },
  {
    id: '13',
    title: 'Business Intelligence',
    description: 'Analyze business data and create insights for decision making.',
    company: 'Data',
    location: 'Remote',
    tags: ['Business Intelligence', 'Data'],
    applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLScGELiCeX6MlgrUAN0YV66uSFvi9uMFuCL1A4RHeuWyynIzlg/viewform?usp=header'
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
    <div className="min-h-screen bg-white text-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Internship</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search internships..."
              className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
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
            <motion.div
              key={internship.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{internship.title}</h2>
                <p className="text-gray-700 mb-4">{internship.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{internship.company} • {internship.location}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(internship.applyLink, '_blank')}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
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