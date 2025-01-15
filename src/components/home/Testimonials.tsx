import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "My son loves the Scratch for Kids course! He's already making his own games!",
    author: "Jane",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "The robotics class has sparked a real interest in engineering for my daughter.",
    author: "Michael",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "I can now build my own websites! The HTML & CSS course was amazing!",
    author: "Kevin",
    role: "Student",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from parents and students about their experience with iSoma
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-orange-400 mb-4" />
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}