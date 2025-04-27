import Link from 'next/link'
import Navigation from '../components/Navigation'
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Find Your Dream Internship
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover opportunities, gain experience, and build your career with InternshipHub.
              We connect talented individuals with top companies and provide certification programs
              to boost your professional growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/internships"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Internships
              </Link>
              <Link
                href="/auth/signup"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Sign up <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
