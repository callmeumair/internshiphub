export interface Category {
  id: string
  name: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  skills: string[]
}

export const categories: Category[] = [
  {
    id: 'development',
    name: 'Development',
    subcategories: [
      {
        id: 'software-development',
        name: 'Software Development',
        skills: ['Java', 'Python', 'C++', 'Software Architecture', 'System Design']
      },
      {
        id: 'web-development',
        name: 'Web Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js']
      },
      {
        id: 'full-stack',
        name: 'Full Stack Development',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
      },
      {
        id: 'mobile-app',
        name: 'Mobile App Development',
        skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift', 'Kotlin']
      },
      {
        id: 'ui-ux',
        name: 'UI/UX Design',
        skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping']
      },
      {
        id: 'frontend',
        name: 'Front End Development',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design']
      },
      {
        id: 'flutter',
        name: 'Flutter',
        skills: ['Dart', 'Flutter SDK', 'State Management', 'Firebase']
      }
    ]
  },
  {
    id: 'data',
    name: 'Data',
    subcategories: [
      {
        id: 'data-science',
        name: 'Data Science',
        skills: ['Python', 'R', 'Statistics', 'Machine Learning', 'Data Analysis']
      },
      {
        id: 'python-analysis',
        name: 'Data Analysis using Python',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning']
      },
      {
        id: 'machine-learning',
        name: 'Machine Learning',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning']
      },
      {
        id: 'computer-vision',
        name: 'Computer Vision',
        skills: ['OpenCV', 'Image Processing', 'Object Detection', 'CNN']
      },
      {
        id: 'data-engineering',
        name: 'Data Engineering',
        skills: ['ETL', 'Data Pipelines', 'Big Data', 'Hadoop', 'Spark']
      },
      {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        skills: ['SQL', 'Data Warehousing', 'OLAP', 'Data Modeling']
      }
    ]
  },
  {
    id: 'business',
    name: 'Business',
    subcategories: [
      {
        id: 'marketing',
        name: 'Marketing',
        skills: ['Digital Marketing', 'Content Marketing', 'Social Media']
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        skills: ['SEO', 'SEM', 'Email Marketing', 'Analytics']
      },
      {
        id: 'business-development',
        name: 'Business Development',
        skills: ['Sales', 'Negotiation', 'Market Research', 'Strategy']
      },
      {
        id: 'finance',
        name: 'Finance',
        skills: ['Financial Analysis', 'Accounting', 'Investment', 'Risk Management']
      },
      {
        id: 'operations',
        name: 'Operations',
        skills: ['Supply Chain', 'Logistics', 'Process Optimization']
      },
      {
        id: 'human-resources',
        name: 'Human Resources',
        skills: ['Recruitment', 'Training', 'Performance Management']
      }
    ]
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    subcategories: [
      {
        id: 'excel',
        name: 'Data Analysis Using MS Excel',
        skills: ['Pivot Tables', 'VLOOKUP', 'Charts', 'Formulas']
      },
      {
        id: 'power-bi',
        name: 'Power BI',
        skills: ['DAX', 'Power Query', 'Dashboard Design', 'Data Modeling']
      },
      {
        id: 'tableau',
        name: 'Tableau',
        skills: ['Visualization', 'Dashboard Creation', 'Data Blending']
      },
      {
        id: 'business-analytics',
        name: 'Business Analytics',
        skills: ['KPI Tracking', 'Performance Metrics', 'Data Storytelling']
      },
      {
        id: 'data-reporting',
        name: 'Data Reporting',
        skills: ['Report Generation', 'Automation', 'Data Presentation']
      },
      {
        id: 'financial-data',
        name: 'Financial Data',
        skills: ['Financial Modeling', 'Forecasting', 'Budget Analysis']
      },
      {
        id: 'healthcare-data',
        name: 'Healthcare Data',
        skills: ['Healthcare Analytics', 'Patient Data', 'Clinical Metrics']
      }
    ]
  },
  {
    id: 'programming',
    name: 'Programming',
    subcategories: [
      {
        id: 'java',
        name: 'Java Developer',
        skills: ['Java', 'Spring', 'Hibernate', 'Maven', 'JUnit']
      },
      {
        id: 'python',
        name: 'Python Developer',
        skills: ['Python', 'Django', 'Flask', 'FastAPI', 'Testing']
      },
      {
        id: 'javascript',
        name: 'JavaScript Developer',
        skills: ['Node.js', 'Express', 'React', 'Vue', 'TypeScript']
      },
      {
        id: 'dotnet',
        name: '.NET Developer',
        skills: ['C#', '.NET Core', 'ASP.NET', 'Entity Framework']
      },
      {
        id: 'ios',
        name: 'iOS Developer',
        skills: ['Swift', 'UIKit', 'SwiftUI', 'Core Data', 'Xcode']
      },
      {
        id: 'cpp',
        name: 'C/C++',
        skills: ['C++', 'C', 'STL', 'Memory Management', 'Debugging']
      }
    ]
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    subcategories: [
      {
        id: 'iot-development',
        name: 'IOT Development',
        skills: ['Arduino', 'Raspberry Pi', 'MQTT', 'IoT Protocols']
      },
      {
        id: 'embedded-systems',
        name: 'Embedded Systems',
        skills: ['Microcontrollers', 'RTOS', 'Firmware', 'Hardware Design']
      }
    ]
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous',
    subcategories: [
      {
        id: 'qa',
        name: 'Quality Assurance',
        skills: ['Testing', 'Automation', 'Selenium', 'JIRA']
      },
      {
        id: 'technical-writing',
        name: 'Technical Writing',
        skills: ['Documentation', 'API Docs', 'Technical Communication']
      },
      {
        id: 'customer-support',
        name: 'Customer Support',
        skills: ['Communication', 'Problem Solving', 'CRM']
      },
      {
        id: 'content-creation',
        name: 'Content Creation',
        skills: ['Writing', 'Editing', 'SEO', 'Social Media']
      },
      {
        id: 'bpo',
        name: 'Business Process Outsourcing',
        skills: ['Process Management', 'Customer Service', 'Operations']
      },
      {
        id: 'autocad',
        name: 'AutoCAD',
        skills: ['2D Drafting', '3D Modeling', 'Architectural Design']
      }
    ]
  }
] 