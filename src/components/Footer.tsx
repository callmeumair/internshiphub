import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About InternshipHub</h3>
            <p className="text-gray-600 dark:text-gray-400">
              InternshipHub is a platform connecting students with valuable internship opportunities, 
              helping them gain real-world experience and build their careers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/cognifyz-technologies" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/cognifyz" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                Twitter
              </a>
              <a 
                href="mailto:cognifyztechnologies@gmail.com" 
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} InternshipHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 