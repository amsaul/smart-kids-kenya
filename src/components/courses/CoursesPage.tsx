import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../../data/courses';

export default function CoursesPage() {
  console.log('Available courses:', courses); // Debug log

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}