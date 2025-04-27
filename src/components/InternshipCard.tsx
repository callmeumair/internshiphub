import React from 'react';
import { InternshipCardProps } from '../types/internship';

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
      <div className="text-gray-700 mb-2">
        <span>{internship.company}</span>
        <span className="mx-2">•</span>
        <span>{internship.location}</span>
      </div>
      <p className="text-gray-600 mb-4">{internship.description}</p>
      <div className="flex flex-wrap gap-2">
        {internship.tags.map((tag: string) => (
          <span 
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InternshipCard; 