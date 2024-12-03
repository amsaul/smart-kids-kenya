import { X, Clock, Users, BookOpen, ExternalLink } from 'lucide-react';
import { Course } from '../../types';

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export default function CourseModal({ course, isOpen, onClose, onEnroll }: CourseModalProps) {
  if (!isOpen) return null;

  const getPlaygroundLink = () => {
    switch (course.title) {
      case 'HTML & CSS':
        return 'https://codepen.io/pen/';
      case 'JavaScript Fundamentals':
        return 'https://codesandbox.io/s/vanilla';
      default:
        return null;
    }
  };

  const playgroundLink = getPlaygroundLink();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
          
          <div className="flex items-center gap-6 mb-6 text-gray-600">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Course Description</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
            <ul className="space-y-2">
              {course.learningOutcomes?.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {playgroundLink && (
            <div className="mb-6">
              <a
                href={playgroundLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-500 hover:text-orange-600"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Try it in the playground
              </a>
            </div>
          )}

          <button
            onClick={onEnroll}
            className="w-full btn-primary"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}