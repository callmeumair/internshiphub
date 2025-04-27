declare module '@/components/InternshipCard' {
  import { Internship } from '@/types/internship'
  
  interface InternshipCardProps {
    internship: Internship
  }
  
  export function InternshipCard(props: InternshipCardProps): JSX.Element
}

declare module '@/components/CategoryFilter' {
  interface CategoryFilterProps {
    onCategorySelect: (categoryId: string, subcategoryId: string) => void
  }
  
  export default function CategoryFilter(props: CategoryFilterProps): JSX.Element
} 