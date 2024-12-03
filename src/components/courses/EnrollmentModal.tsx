import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EnrollmentData) => void;
  courseName: string;
}

export interface EnrollmentData {
  name: string;
  email: string;
  age: string;
  parentName: string;
  parentPhone: string;
}

export default function EnrollmentModal({ isOpen, onClose, onSubmit, courseName }: EnrollmentModalProps) {
  const [formData, setFormData] = useState<EnrollmentData>({
    name: '',
    email: '',
    age: '',
    parentName: '',
    parentPhone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Enroll in {courseName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Student's Name
            </label>
            <input
              type="text"
              id="name"
              className="input-field"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="input-field"
              required
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="parentName" className="block text-gray-700 mb-2">
              Parent/Guardian Name
            </label>
            <input
              type="text"
              id="parentName"
              className="input-field"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-gray-700 mb-2">
              Parent/Guardian Phone
            </label>
            <input
              type="tel"
              id="parentPhone"
              className="input-field"
              required
              value={formData.parentPhone}
              onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
}