import React, { useState } from 'react';
import { Mail, Phone, Linkedin, GithubIcon, ArrowRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mr-4 text-gray-600 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600">{label}</p>
        <p className="text-lg font-medium text-gray-800">{value}</p>
      </div>
    </a>
  );
};

const CallToAction = () => {
  return (
    <div className="mt-12 p-6 bg-blue-500 rounded-lg shadow-lg text-white animate-fade-in-up">
      <h3 className="text-2xl font-bold mb-4">Ready to see what I can do?</h3>
      <p className="text-lg mb-6">
        Give me a chance to show you my skills and dedication. I promise you won't regret it!
      </p>
      
    </div>
  );
};

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 animate-fade-in-down">Get in Touch</h2>
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