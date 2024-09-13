import React from 'react';
import { Code, Database, Brain, Globe, Lightbulb,  } from 'lucide-react';
import { 
  SiPython, SiJavascript, SiCplusplus, SiR, SiReact, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiHtml5, SiCss3, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, 
  SiPytorch, SiScipy, SiKeras, SiMongodb, SiPostgresql, SiGit, SiDocker, SiOpencv, 
  SiJupyter, 
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

const SkillItem = ({ skill, icon: Icon, isSoft = false }) => {
  return (
    <div className={`group relative rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isSoft ? 'bg-gradient-to-br from-purple-100 to-pink-100' : 'bg-gradient-to-br from-blue-100 to-indigo-100'}`}>
      <div className="flex flex-col items-center">
        <Icon className={`w-10 h-10 mb-2 ${isSoft ? 'text-purple-600' : 'text-blue-600'}`} />
        <span className={`text-sm font-medium text-center ${isSoft ? 'text-purple-800' : 'text-blue-800'}`}>{skill}</span>
      </div>
      
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon, softSkills }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <Icon size={28} className="text-indigo-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-indigo-600 mb-3">Soft Skills</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} icon={Lightbulb} isSoft={true} />
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-indigo-600 mb-3">Technical Skills</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} icon={iconMap[skill] || Code} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C / C++", "R"],
      icon: Code,
      softSkills: ["Problem Solving", "Critical Thinking", "Object Oriented Design"],
    },
    {
      title: "Data Science & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "SciPy", "Keras"],
      icon: Brain,
      softSkills: ["Statistical Thinking", "Data Visualization", "Model Interpretation"],
    },
    {
      title: "Databases & Tools",
      skills: ["SQL", "MongoDB", "PostgreSQL", "Git", "Docker", "OpenCV", "BeautifulSoup", "Jupyter"],
      icon: Database,
      softSkills: ["Data Modeling", "System Design", "Data Management"],
    },
    {
      title: "Web Technologies",
      skills: ["React", "TailwindCSS", "AWS", "HTML5", "CSS3"],
      icon: Globe,
      softSkills: ["UI/UX Sensibility", "Responsive Design", "Cross-browser Compatibility"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-indigo-50 to-white">
      <h2 className="text-5xl font-extrabold mb-4 text-center ">My Skills</h2>
      <p className="text-xl text-center text-gray-600 mb-12">A comprehensive overview of my technical expertise and soft skills</p>
      <div className="grid grid-cols-1 gap-12">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;