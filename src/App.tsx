import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import CourseDetailPage from './components/courses/CourseDetailPage';
import ContactPage from './components/contact/ContactPage';
import RegistrationPage from './components/auth/RegistrationPage';
import JoinClassPage from './components/class/JoinClassPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/JoinClass" element={<JoinClassPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}