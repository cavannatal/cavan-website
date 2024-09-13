import React from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

// Import icons for programming languages and libraries
import { 
  SiPython, SiJavascript, SiCplusplus, SiR,
  SiReact, SiTailwindcss, SiAmazonaws, SiNodedotjs, SiExpress, SiHtml5, SiCss3,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiMatplotlib, SiScipy, SiKeras,
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiOpencv, SiJupyter
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const iconMap = {
  Python: SiPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  "C / C++": SiCplusplus,
  R: SiR,
  React: SiReact,
  TailwindCSS: SiTailwindcss,
 
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
 
  SciPy: SiScipy,
  Keras: SiKeras,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Docker: SiDocker,
  OpenCV: SiOpencv,
  Jupyter: SiJupyter,
};

const SkillItem = ({ skill }) => {
  const Icon = iconMap[skill] || Code;
  return (
    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <Icon className="w-6 h-6 mr-2 text-indigo-600" />
      <span className="text-sm font-medium text-gray-800">{skill}</span>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <Icon size={24} className="text-indigo-600 mr-2" />
      <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C / C++", "R"],
      icon: Code,
    },
    {
      title: "Web Technologies",
      skills: ["React", "TailwindCSS", "AWS", "Node.js", "Express", "HTML5", "CSS3"],
      icon: Globe,
    },
    {
      title: "Data Science & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "SciPy", "Keras"],
      icon: Brain,
    },
    {
      title: "Databases & Tools",
      skills: ["SQL", "MongoDB", "PostgreSQL", "Git", "Docker", "OpenCV", "BeautifulSoup", "Jupyter"],
      icon: Database,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-900">My Skills</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;