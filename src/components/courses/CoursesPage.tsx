import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';
import EnrollmentModal from './EnrollmentModal';
import Toast from '../shared/Toast';
import { Course } from '../../types';

const courses: Course[] = [
  {
    id: 1,
    title: 'Scratch for Kids',
    description: 'Learn the basics of coding with fun, interactive projects. Perfect for beginners, this course introduces programming concepts through visual blocks.',
    imageUrl: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1000',
    duration: '8 weeks',
    level: 'Beginner',
    learningOutcomes: [
      'Create interactive stories and games',
      'Learn basic programming concepts',
      'Develop problem-solving skills',
      'Build creativity and logical thinking'
    ]
  },
  {
    id: 2,
    title: 'HTML & CSS',
    description: 'Build beautiful websites from scratch with simple tools. Learn the fundamentals of web development in a fun and engaging way.',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000',
    duration: '10 weeks',
    level: 'Beginner',
    learningOutcomes: [
      'Create responsive websites',
      'Master HTML5 and CSS3',
      'Learn modern web design principles',
      'Build projects'
    ]
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    description: 'Add interactivity to websites and learn the language of the web. Perfect for those who want to take their web development skills to the next level.',
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000',
    duration: '12 weeks',
    level: 'Intermediate',
    learningOutcomes: [
      'Master JavaScript fundamentals',
      'Build interactive web applications',
      'Learn modern ES6+ features',
      'Develop problem-solving skills'
    ]
  },
  {
    id: 4,
    title: 'Robotics for Beginners',
    description: 'Create, code, and bring robots to life. An exciting hands-on course that combines hardware and software.',
    imageUrl: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1000',
    duration: '10 weeks',
    level: 'Beginner',
    learningOutcomes: [
      'Build and program basic robots',
      'Learn sensor integration',
      'Develop automation skills',
      'Create interactive robotic projects'
    ]
  },
  {
    id: 5,
    title: 'AI Fundamentals',
    description: 'Kids will learn how to build machines that perform tasks which require human intelligence. The course is Perfect for those who want to take their software development skills to the next level.',
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000',
    duration: '12 weeks',
    level: 'Intermediate',
    learningOutcomes: [
      'Master AI fundamentals',
      'Build interactive applications for machines',
      'Learn modern ES6+ features',
      'Develop problem-solving skills'
    ]
  },
  {
    id: 6,
    title: 'Machine Learning Fundamentals',
    description: 'Learn how to combine data and algorithms to ebnable AI imitate the way that humans learn',
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000',
    duration: '12 weeks',
    level: 'Intermediate',
    learningOutcomes: [
      'Master data and algorithms fundamentals',
      'Research and communication',
      'Learn modern ES6+ features',
      'Develop problem-solving skills'
    ]
  },
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setShowCourseModal(true);
  };

  const handleEnrollClick = () => {
    setShowCourseModal(false);
    setShowEnrollModal(true);
  };

  const handleEnrollSubmit = (data: any) => {
    // Here you would typically send the data to your backend
    console.log('Enrollment data:', data);
    setShowEnrollModal(false);
    setToast({
      show: true,
      message: 'Enrollment submitted successfully! We will contact you soon.',
      type: 'success'
    });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of courses designed to inspire and educate the next generation of tech innovators.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          isOpen={showCourseModal}
          onClose={() => setShowCourseModal(false)}
          onEnroll={handleEnrollClick}
        />
      )}

      {selectedCourse && (
        <EnrollmentModal
          isOpen={showEnrollModal}
          onClose={() => setShowEnrollModal(false)}
          onSubmit={handleEnrollSubmit}
          courseName={selectedCourse.title}
        />
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}