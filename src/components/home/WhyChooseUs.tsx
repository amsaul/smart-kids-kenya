import { BookOpen, Users, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    description: 'Hands-on activities to keep kids engaged and excited about learning.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from passionate educators who make coding fun and accessible.',
  },
  {
    icon: Lightbulb,
    title: 'Future-Proof Skills',
    description: 'Equip your child with essential tech and entrepreneurial skills for tomorrow.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes iSoma the perfect choice for your child's tech education
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}