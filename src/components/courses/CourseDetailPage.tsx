import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, BookOpen, CheckCircle, Wrench } from 'lucide-react';
import { courses } from '../../data/courses';
import EnrollmentModal from './EnrollmentModal';
import Toast from '../shared/Toast';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as const
  });

  // Debug logs
  console.log('URL ID Parameter:', id);
  console.log('All courses:', courses);

  // Find course using Number() for reliable type conversion
  const course = courses.find(c => c.id === Number(id));
  console.log('Found course:', course);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <button 
            onClick={() => navigate('/courses')}
            className="btn-primary"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const handleEnrollSubmit = (data: any) => {
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
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{course.level}</span>
              </div>
              <div className="text-2xl font-bold text-orange-500">
                KES {course.price.toLocaleString()}
              </div>
            </div>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="btn-primary"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Learning Outcomes */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-3">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="underline hover:decoration-pink-500 text-xl font-bold mb-4"> <a href="https://scratch.mit.edu/projects/596275656">activity link 1</a></p>
            <p className="underline hover:decoration-pink-500 text-xl font-bold mb-4"> <a href="https://scratch.mit.edu/projects/599334055/editor/">activity link 2</a></p>
          </div>

          {/* Curriculum */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((week) => (
                <div key={week.week} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold mb-2">Week {week.week}: {week.title}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {week.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        onSubmit={handleEnrollSubmit}
        courseName={course.title}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}