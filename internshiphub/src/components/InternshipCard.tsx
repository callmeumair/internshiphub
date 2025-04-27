import React from 'react';
import { InternshipCardProps } from '@/types/internship';

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
      <p className="text-gray-600 mb-4">{internship.description}</p>
      <div className="flex flex-wrap gap-2">
        {internship.tags.map((tag: string) => (
          <span 
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InternshipCard;
