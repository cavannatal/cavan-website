import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Head from '../images/head.jpg'

const AboutMe = () => {
  return (
    <div className="relative overflow-hidden">
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-indigo-600">Cavan Natal</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">
            Software Engineer / Data Scientist
          </h2>
          <p className="text-xl mb-6">Let's see how I can help you.</p>
          <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-200">
            Get in Touch
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <img src=  {Head} alt="Cavan Natal" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Pursuing Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <ul className="list-disc list-inside mb-4">
              <li>NBA Player Prop Predictor</li>
              <li>Live Card Classifier</li>
              <li>Elevator Scheduling System</li>
            </ul>
            <Link to="/projects" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View all projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Python, Java, JavaScript</li>
              <li>React, TailwindCSS, AWS</li>
              <li>Machine Learning, Data Analysis</li>
            </ul>
            <Link to="/skills" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View all skills <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Experience Highlights</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Data Analyst at BlueVerse</li>
              <li>Managed analytics operations</li>
              <li>Increased user engagement</li>
            </ul>
            <Link to="/experience" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View full experience <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      
      

    </div>
  );
};

export default AboutMe;