import React from 'react';
import { GithubIcon, ExternalLink } from 'lucide-react';
import CardClass from '../images/cardclass.png'
import Carly from '../images/carly.png'
import Multi from '../images/multithread.png';
import NBAa from '../images/nba.jpg';



const ProjectCard = ({ title, description, image, technologies, github, demo }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
            <GithubIcon size={20} className="mr-1" /> Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
            <ExternalLink size={20} className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "NBA Player Prop Predictor",
      description: "A machine learning model to predict NBA player performance and identify valuable betting opportunities.",
      image: NBAa,
      technologies: ["Python", "Pandas", "Scikit-Learn", "BeautifulSoup"],
      github: NBAa,
      demo: "https://nba-predictor.example.com",
    },
    {
      title: "Live Card Classifier",
      description: "Real-time playing card detection system using computer vision and deep learning techniques.",
      image: CardClass,
      technologies: ["Python", "PyTorch", "OpenCV", "YOLO"],
      github: "https://github.com/example/card-classifier",
    },
    {
      title: "Multithreaded Elevator Scheduler",
      description: "An efficient elevator scheduling system utilizing multithreading and advanced algorithms.",
      image: Multi,
      technologies: ["C++", "Multithreading", "libcurl"],
      github: "https://github.com/example/elevator-scheduler",
    },
    {
      title: "Carlymeek.com",
      description: "A responsive website for a professional hairstylist, showcasing their work and boosting client engagement.",
      image: Carly,
      technologies: ["React", "TailwindCSS", "Responsive Design"],
      demo: "https://carlymeek.com",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;