import { Clock, Users, ChevronRight } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onLearnMore: (course: Course) => void;
}

export default function CourseCard({ course, onLearnMore }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.level}</span>
          </div>
        </div>
        <button 
          className="w-full btn-primary flex items-center justify-center"
          onClick={() => onLearnMore(course)}
        >
          Learn More
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}