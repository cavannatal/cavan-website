import React, { useState } from 'react';
import { Mail, Phone, Linkedin, GithubIcon, ArrowRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-blue-50 hover:to-indigo-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mr-6 text-blue-600 transition-all duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-semibold text-gray-500 mb-1">{label}</p>
        <p className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{value}</p>
      </div>
      <ArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  );
};

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-16 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-2xl text-white overflow-hidden relative">
      <div className={`absolute inset-0 bg-blue-600 transition-transform duration-500 ease-in-out transform ${isHovered ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold mb-4">Ready to Collaborate?</h3>
        <p className="text-xl mb-8 opacity-90">
          Let's turn your vision into reality. Together, we can create something extraordinary!
        </p>
        <button
          className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-5xl font-extrabold mb-2 text-center text-gray-800 animate-fade-in-down">Let's Connect</h2>
      <p className="text-xl text-center text-gray-600 mb-12 animate-fade-in-up">I'm always excited to discuss new opportunities and ideas</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
        <ContactItem
          icon={Mail}
          label="Email"
          value="natalcavan@gmail.com"
          link="mailto:natalcavan@gmail.com"
        />
        <ContactItem
          icon={Phone}
          label="Phone"
          value="(214)-551-9980"
          link="tel:+12145519980"
        />
        <ContactItem
          icon={Linkedin}
          label="LinkedIn"
          value="linkedin.com/in/cavannatal"
          link="https://linkedin.com/in/cavannatal"
        />
        <ContactItem
          icon={GithubIcon}
          label="GitHub"
          value="github.com/cavannatal"
          link="https://github.com/cavannatal"
        />
      </div>
      <CallToAction />
    </div>
  );
};

export default Contact;