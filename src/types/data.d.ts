declare module '@/data/internships' {
  import { Internship } from '@/types/internship'
  export const internships: Internship[]
}

declare module '@/data/categories' {
  interface Category {
    id: string
    name: string
    subcategories: Subcategory[]
  }
  
  interface Subcategory {
    id: string
    name: string
  }
  
  export const categories: Category[]
} 