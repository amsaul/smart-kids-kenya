import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Empowering Young Minds</span>
            <span className="block text-yellow-200">Through Technology</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join Smart Kids Kenya and embark on an exciting journey into the world of coding, robotics, and digital innovation.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/courses"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Start Learning
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" preserveAspectRatio="none" viewBox="0 0 1440 74">
          <path 
            fill="currentColor" 
            d="M0,0 C240,70 480,70 720,70 C960,70 1200,70 1440,0 L1440,74 L0,74 Z"
          />
        </svg>
      </div>
    </div>
  );
}