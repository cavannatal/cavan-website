import React from 'react';
import { AcademicCapIcon, ShoppingCartIcon, DatabaseIcon, UserGroupIcon, TerminalIcon } from '@heroicons/react/solid';

import EducationSection from './components/EducationSection';

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
      title: "Software Engineer",
      organization: "Fibb.ai (Startup)",
      date: "September 2024 - Present",
      link:'https://www.blueverse.club/',
      description: [
      "Designed and developed the complete UI/UX for the website, creating a cohesive user experience and documenting page functionality along with component specifications for future scalability",
      'Initialized and configured a React TypeScript repository, integrating AWS services such as Amplify and Cognito, and implemented Redux to manage global state efficiently across the application, enhancing performance and data consistency.',
      'Managed end-to-end workflow for user token balances, file upload processes, and gallery display by integrating AWS S3 for efficient storage and retrieval, ensuring seamless user interactions and optimized resource handling.',
      'Established and structured the iOS app repository using Swift, overseeing architecture development and comprehensive documentation to support scalable app evolution.',  
      ],
      icon: TerminalIcon,
    },
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