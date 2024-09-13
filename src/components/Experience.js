import React from 'react';
import { AcademicCapIcon, ShoppingCartIcon, DatabaseIcon, UserGroupIcon } from '@heroicons/react/solid';
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

  const TimelineItem = ({ title, organization, link, date, description, icon: Icon }) => (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-600">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="w-px h-full bg-blue-300"></div>
      </div>
      <div className="pb-8">
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="ml-2 text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-700">
          <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {organization}
          </a>
        </p>
        <ul className="list-disc list-inside text-gray-600">
          {description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      organization: "BlueVerse (Startup)",
      date: "January 2023 – February 2024",
      link:'https://www.blueverse.club/',
      description: [
        "Extracted and preprocessed raw data from the app, ensuring accurate formatting and readiness for analysis.",
        "Monitored and tracked key metrics, including engagement and traffic, to evaluate business performance.",
        "Analyzed data trends to identify peak days and effective promotional strategies, providing actionable insights.",
        'Generated customized reports to highlight performance metrics, assisting the sales team in onboarding new businesses.',
        'Contributed to a significant increase in onboared businesses and enhanced local business earnings through data-driven insights.',
      ],
      icon: DatabaseIcon,
    },
    {
        title: "Lead Tutor / Summer Camp Coordinator",
        organization: "Code Ninjas",
        link: "https://www.codeninjas.com/tx-lubbock",
        date: "May 2023 – August 2024",
        description: [
            "Explained fundamental topics in an engaging and simplified manner, ensuring students remained active and motivated without feeling overwhelmed or discouraged.",
            "Led engaging and interactive STEM-related camps, resulting in multiple students returning and signing up for additional sessions throughout the summer.",
            "Successfully increased camp signups by delivering compelling sales pitches to parents, emphasizing the educational value and benefits of the programs."
          ],
          icon: AcademicCapIcon,
      },
      {
        title: "Front-End Assistant",
        organization: "Costco",
        link: "https://www.costco.com/",
        date: "April 2020 – August 2020",
        description: [
            "Monitored and responded proactively to customer needs and requests, delivering exceptional service and resolving any issues promptly.",
            "Took on additional tasks and responsibilities as assigned by management, demonstrating flexibility and a commitment to team success.",
            "Maintained a positive and professional attitude in a fast-paced environment, contributing to a supportive and efficient team dynamic."
          ],
          icon: ShoppingCartIcon,
      },
      {
        title: "Park Lead",
        organization: "Urban Air",
        link: "https://www.urbanair.com/",
        date: "December 2018 – April 2020",
        description: [
            "Supervised on-site staff, providing direction and support to ensure efficient operations and alignment with park standards.",
            "Oversaw the maintenance and inventory of park equipment, ensuring all assets were in good condition and properly managed.",
            "Communicated clearly and effectively with team members and guests, addressing inquiries and concerns promptly."
          ],
          icon: UserGroupIcon,
      },
      
      
  ];

  return (
    <div className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
    <EducationSection />
      <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;