import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & Lead Instructor',
    image: 'https://res.cloudinary.com/dzq0v3cjh/image/upload/v1732439087/WhatsApp_Image_2024-11-24_at_10.41.12_apr3me.jpg',
    description: 'With over 10 years of experience in tech education, I am passionate about sparking creativity in kids.',
  },
  {
    name: 'Jane Smith',
    role: 'Robotics Expert',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    description: 'Bringing the magic of robotics to young minds.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Inspiring the Next Generation of Innovators</h1>
          <p className="text-xl max-w-3xl mx-auto">
            At Smart Kids Kenya, we are dedicated to making coding accessible and fun for kids.
            Our mission is to empower children with the skills they need to become creators of technology, not just consumers.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality tech education that inspires creativity and innovation in every child.
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To build a future where every child in Kenya has the skills and confidence to innovate and succeed.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Innovation, creativity, and hands-on learning guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}