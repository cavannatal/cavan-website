import React from 'react';
import TTU from '../images/ttu.png'
import Maynooth from '../images/maynooth.png'

const EducationSection = () => (
    <div className="mb-12 max-w-4xl mx-auto">
      {/* Texas Tech University */}
      <div className="mb-12 flex flex-col md:flex-row items-center">
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Texas Tech University</h2>
          <h2 className="text-xl font-bold mb-4">Edward E. Whitacre Jr. College of Engineering</h2>
          <h3 className="text-xl mb-2">B.S. in Computer Science</h3>
          <h3 className="text-lg mb-2">Minor in Mathematics</h3>
          <p className="text-gray-600 mb-2">Fall 2020 - Fall 2024</p>
        </div>
        <img 
          src={TTU} 
          alt="University Logo" 
          className="mx-auto mt-3 mb-4" 
        />
      </div>
  
      {/* Maynooth University */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Maynooth University</h2>
          <h2 className="text-xl font-bold mb-4">Department of Engineering</h2>
          <h3 className="text-xl mb-2">Study Abroad Program</h3>
          <p className="text-gray-600">Summer 2022</p>
        </div>
        <img 
          src={Maynooth} 
          alt="University Logo" 
          className="mx-auto mt-3 mb-4" 
        />
      </div>
    </div>
  );

  export default EducationSection