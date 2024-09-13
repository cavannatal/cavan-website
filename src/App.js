import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Menu, X, GithubIcon, Linkedin, Mail } from 'lucide-react'; // Updated icon names
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold">Cavan Natal</Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="hover:text-gray-300 transition-colors duration-200"
    {...props}
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/cavannatal" target="_blank" rel="noopener noreferrer">
          <GithubIcon size={24} /> {/* Updated icon name */}
        </a>
        <a href="https://linkedin.com/in/cavannatal" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="mailto:natalcavan@gmail.com">
          <Mail size={24} />
        </a>
      </div>
      <p className="text-center mt-4">&copy; 2024 Cavan Natal. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
