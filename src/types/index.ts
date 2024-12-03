export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  learningOutcomes?: string[];
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