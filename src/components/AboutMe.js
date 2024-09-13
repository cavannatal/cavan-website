import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Lightbulb, Briefcase } from 'lucide-react';
import Head from '../images/head.jpg';
import { motion } from 'framer-motion';
import NFL from '../images/nfl.svg'

const CustomProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const AboutMe = () => {
  const [projectProgress, setProjectProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProjectProgress(12), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br  min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-16"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Cavan Natal
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Software Engineer / Data Scientist
            </h2>
            <p className="text-xl mb-6 text-gray-600">Transforming ideas into impactful solutions.</p>
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Let's Connect
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg"
            >
              <img src={Head} alt="Cavan Natal" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 bg-white rounded-xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-200"
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Project in the Works</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">NFL Stat Predictor</h3>
              <p className="text-gray-600 mb-4">
              I am currently developing a predictive model using historical NFL data to forecast player performance. The model is designed to determine whether a player’s stats will exceed or fall short of the betting lines set by bookmakers, offering insights for more accurate over/under predictions.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Forecasting player performance relative to bookmaker betting lines</li>
                <li>Feature engineering to enhance model accuracy</li>
                <li>Model testing, evaluation, and refinement for over/under predictions</li>
              </ul>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-indigo-600">Project Progress</span>
                  <span className="text-sm font-medium text-indigo-600">{projectProgress}%</span>
                </div>
                <CustomProgressBar value={projectProgress} />
              </div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link to="/projects" className="text-indigo-600 hover:text-indigo-800 flex items-center font-semibold">
                  Learn more about this project <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl p-4 shadow-lg"
              >
                <img src={NFL} alt="NFL Proj" className="w-full h-auto rounded" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-indigo-600">Pursuing Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Projects", items: ["NBA Player Prop Predictor", "Live Card Classifier", "Elevator Scheduling System"], link: "/projects" },
              { icon: Lightbulb, title: "Skills", items: ["Python, Java, JavaScript", "React, TailwindCSS, AWS", "Machine Learning, Data Analysis"], link: "/skills" },
              { icon: Briefcase, title: "Experience Highlights", items: ["Data Analyst at BlueVerse", "Managed analytics operations", "Increased user engagement"], link: "/experience" }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-200"
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <section.icon size={32} className="text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to={section.link} className="text-indigo-600 hover:text-indigo-800 flex items-center font-semibold">
                    {section.title === "Projects" ? "Explore" : "View"} {section.title.toLowerCase()} <ArrowRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;