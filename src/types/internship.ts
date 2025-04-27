export interface Internship {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  tags: string[];
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary: string;
  applicationDeadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface InternshipCardProps {
  internship: Internship;
  onClick?: () => void;
} 