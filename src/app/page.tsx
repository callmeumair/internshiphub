import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Find Your Dream Internship
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discover and apply for internships across various domains including Software Development, Data Science, Business, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/internships"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold border border-white hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center"
              >
                Browse Internships
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Software Development',
                description: 'Web, Mobile, Full Stack, and more',
                icon: '💻',
              },
              {
                title: 'Data Science',
                description: 'Machine Learning, Data Analysis, and more',
                icon: '📊',
              },
              {
                title: 'Business',
                description: 'Marketing, Finance, HR, and more',
                icon: '📈',
              },
              {
                title: 'Design',
                description: 'UI/UX, Graphic Design, and more',
                icon: '🎨',
              },
              {
                title: 'Engineering',
                description: 'IoT, Embedded Systems, and more',
                icon: '⚙️',
              },
              {
                title: 'Miscellaneous',
                description: 'Content Creation, Technical Writing, and more',
                icon: '📝',
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-black border border-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose InternshipHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wide Range of Opportunities',
                description: 'Access to internships across various domains and companies',
                icon: '🌐',
              },
              {
                title: 'Easy Application Process',
                description: 'Simple and streamlined application process',
                icon: '📝',
              },
              {
                title: 'Career Growth',
                description: 'Build your skills and kickstart your career',
                icon: '🚀',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 