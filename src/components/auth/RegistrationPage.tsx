import React, { useState } from 'react';
import { User, BookOpen } from 'lucide-react';

type UserType = 'student' | 'teacher';

export default function RegistrationPage() {
  const [userType, setUserType] = useState<UserType>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Join Smart Kids Kenya</h1>

          {/* User Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  userType === 'student'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-orange-500`}
              >
                <User className="w-4 h-4 inline-block mr-2" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setUserType('teacher')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  userType === 'teacher'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-orange-500`}
              >
                <BookOpen className="w-4 h-4 inline-block mr-2" />
                Teacher
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  required
                />
              </div>

              {userType === 'student' && (
                <div>
                  <label htmlFor="age" className="block text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="input-field"
                    required
                  />
                </div>
              )}

              {userType === 'teacher' && (
                <>
                  <div>
                    <label htmlFor="expertise" className="block text-gray-700 mb-2">
                      Subject Expertise
                    </label>
                    <input
                      type="text"
                      id="expertise"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      id="experience"
                      className="input-field"
                      required
                    />
                  </div>
                </>
              )}

              <button type="submit" className="btn-primary w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}