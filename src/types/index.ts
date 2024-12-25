export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  learningOutcomes: string[];
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
  requirements?: string[];
  tools?: string[];
  playgroundLink?: string;
}

export interface EnrollmentFormData {
  studentName: string;
  age: number;
  email: string;
  parentName: string;
  parentPhone: string;
  courseId: number;
}
export interface Testimonial {
  id: number;
  name: string;
  role: 'Student' | 'Parent';
  content: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}