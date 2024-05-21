import React, { useState } from 'react';
import { ReactComponent as LinkedInIcon } from '../iconimgs/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../iconimgs/instagram.svg';
import { ReactComponent as GithubIcon } from '../iconimgs/github.svg';
import nameLogo from '../iconimgs/cava.png';

const MenuIcon = () => (
  <svg className="h-8 w-8 text-white hover:text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark-bg p-4 flex justify-between items-center text-white relative">
      <div>
        <img src={nameLogo} alt="Your Name" className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto" />
      </div>

      {/* Hamburger button shown only on small screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden hover:scale-125 transition duration-300"
      >
        <MenuIcon />
      </button>

      {/* Desktop Navigation Links and Icons - shown on medium and larger screens */}
      <div className="hidden md:flex items-center space-x-8 pr-12">
      
        <a href="#projects" className="hover:text-custom-blue hover:scale-125 transition duration-300">Projects</a>
        <a href="#skills" className="hover:text-custom-blue hover:scale-125 transition duration-300">Skills</a>
        <a href="#resume" className="hover:text-custom-blue hover:scale-125 transition duration-300">Resume</a>
        <a href="#contact" className="hover:text-custom-blue hover:scale-125 transition duration-300">Contact</a>
        <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/cavannatal/" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <LinkedInIcon className="h-6 w-6 fill-current" />
            </a>
            <a href="https://www.instagram.com/cavannatal/" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <InstagramIcon className="h-6 w-6 fill-current" />
            </a>
            <a href="https://github.com/cavannatal" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <GithubIcon className="h-6 w-6 fill-current" />
            </a>
        </div>
      </div>

      {/* Mobile Navigation Links and Icons - shown only when menu icon is clicked on small screens */}
      {isOpen && (
        <div className="absolute w-full left-0 top-full md:space-x-8 bg-dark-bg z-10 transition-all ease-out duration-300 md:hidden flex flex-col items-center">
        
          <a href="#projects" className="text-center py-2 hover:text-custom-blue hover:scale-125 transition duration-300">Projects</a>
          <a href="#skills" className="text-center py-2 hover:text-custom-blue hover:scale-125 transition duration-300">Skills</a>
          <a href="#resume" className="text-center py-2 hover:text-custom-blue hover:scale-125 transition duration-300">Resume</a>
          <a href="#contact" className="text-center py-2 hover:text-custom-blue hover:scale-125 transition duration-300">Contact</a>
          <div className="flex justify-center space-x-12 py-4">
            <a href="https://www.linkedin.com/in/cavannatal/" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <LinkedInIcon className="h-6 w-6 fill-current" />
            </a>
            <a href="https://www.instagram.com/cavannatal/" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <InstagramIcon className="h-6 w-6 fill-current" />
            </a>
            <a href="https://github.com/cavannatal" className="hover:text-custom-blue hover:scale-125 transition duration-300">
              <GithubIcon className="h-6 w-6 fill-current" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;