import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About InternshipHub</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connecting talented students with the best internship opportunities across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At InternshipHub, we believe that every student deserves access to quality internship opportunities that help them grow professionally and personally.
              </p>
              <p className="text-gray-600 mb-4">
                Our platform bridges the gap between talented students and companies looking for fresh perspectives and innovative ideas.
              </p>
              <p className="text-gray-600">
                We're committed to creating a seamless experience for both students and employers, making the internship search process efficient and effective.
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
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
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
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Founder & CEO',
                image: '/images/team/john.jpg',
              },
              {
                name: 'Jane Smith',
                role: 'CTO',
                image: '/images/team/jane.jpg',
              },
              {
                name: 'Mike Johnson',
                role: 'Head of Operations',
                image: '/images/team/mike.jpg',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 