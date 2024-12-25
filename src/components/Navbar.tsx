import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${isSticky ? 'navbar-sticky' : 'bg-white shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Smart Kids Kenya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link to="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
            <Link to="/JoinClass" className="text-gray-700 hover:text-orange-500">Join Class</Link>
            <Link 
              to="/register" 
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/join-class" 
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              join class
            </Link>
            <Link 
              to="/register" 
              className="block px-3 py-2 bg-orange-500 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}