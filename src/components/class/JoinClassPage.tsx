import React, { useState } from 'react';
import { Video, Users } from 'lucide-react';

type UserRole = 'student' | 'teacher';

export default function JoinClassPage() {
  const [role, setRole] = useState<UserRole>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle class joining logic
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <Video className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Join Your Class</h1>
            <p className="text-gray-600">
              Enter your credentials to access your virtual classroom
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  role === 'student'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-orange-500`}
              >
                <Users className="w-4 h-4 inline-block mr-2" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  role === 'teacher'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-orange-500`}
              >
                <Video className="w-4 h-4 inline-block mr-2" />
                Teacher
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Name of your school
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="classCode" className="block text-gray-700 mb-2">
                Class Code
              </label>
              <input
                type="text"
                id="classCode"
                className="input-field"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Join Class
            </button>
          </form>

          {/* Active Sessions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Active Sessions</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Introduction to HTML</h3>
                    <p className="text-sm text-gray-600">Starting in 5 minutes</p>
                  </div>
                  <button className="btn-secondary">Join</button>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Scratch Programming</h3>
                    <p className="text-sm text-gray-600">In progress</p>
                  </div>
                  <button className="btn-secondary">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}