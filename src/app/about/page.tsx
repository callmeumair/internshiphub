import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About InternshipHub</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              InternshipHub connects talented students with the best internship opportunities across various domains, making the process seamless and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At InternshipHub, we believe every student deserves access to quality internship opportunities that help them grow professionally and personally.
              </p>
              <p className="text-gray-300 mb-4">
                Our platform bridges the gap between talented students and companies looking for fresh perspectives and innovative ideas.
              </p>
              <p className="text-gray-300">
                We are committed to creating a seamless experience for both students and employers, making the internship search process efficient and effective.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/about-mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from platform features to customer support.',
                icon: '⭐',
              },
              {
                title: 'Innovation',
                description: 'We continuously innovate to provide the best experience for our users.',
                icon: '💡',
              },
              {
                title: 'Community',
                description: 'We foster a supportive community where students and employers can connect and grow.',
                icon: '🤝',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-black border border-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 