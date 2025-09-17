import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaAddressBook, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'} transition-all duration-300`}>
      <header className={`py-4 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-700'}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="text-3xl  text-white hover:text-gray-300 duration-300 font-normal ">
            Yassen Ibrahim
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6">
              <a href="#skills" className="hover:text-blue-400 transition duration-300 text-gray-200">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition duration-300 text-gray-200">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition duration-300 text-gray-200">About Me</a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'} transition-all hover:scale-110`}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={toggleNav}
              className={`ml-4 md:hidden p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'} transition-all hover:scale-110`}
              aria-label="Toggle Navigation"
            >
              {isNavOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        {isNavOpen && (
          <nav className="md:hidden mt-4 px-4">
            <a href="#skills" className="block py-2 hover:text-white transition duration-300">Skills</a>
            <a href="#projects" className="block py-2 hover:text-white transition duration-300">Projects</a>
            <a href="#about" className="block py-2 hover:text-white transition duration-300">About Me</a>
          </nav>
        )}
      </header>

      <main id="home" className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">Summary</h2>
          <p className="text-lg">
            I'm Yassen Ibrahim, a student at Surman College, with a passion for software development.
          </p>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">Skills</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {['Python', 'Django', 'React', 'React Native', 'TailwindCss', 'Problem Solving', 'JavaScript', 'Node.js', 'Express.js', 'TypeScript', 'Git', 'Agile',].map(skill => (
              <div key={skill} className={`w-11/12 mx-auto rounded-md p-3 shadow-lg transition-transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} group relative `}>
                <div className="relative h-full ">
                  <h3 className="mb-2 text-xl font-semibold flex items-center">
                    {skill}
                    <div className="ml-2 h-2.5 w-2.5 bg-violet-400 transition-all duration-[250ms] ease-out group-hover:h-2 group-hover:w-8 rounded-md"></div>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={`rounded-md py-8 px-5 text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Store App', imgSrc: 'https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=2070&auto=format&fit=crop', desc: 'A comprehensive store application with user authentication, product listings, and a shopping cart.', website: 'https://store-app.example.com' },
              { title: 'Landing Page', imgSrc: 'https://plus.unsplash.com/premium_photo-1684785617153-b57947c147c1?q=80&w=2070&auto=format&fit=crop', desc: 'An e-commerce platform featuring product categories, search functionality, and a checkout system.', website: 'https://ecommerce-website.example.com' },
              { title: 'Blog app', imgSrc: 'https://plus.unsplash.com/premium_photo-1684785617153-b57947c147c1?q=80&w=2070&auto=format&fit=crop', desc: 'An e-commerce platform featuring product categories, search functionality, and a checkout system.', website: 'https://github.com/Yassen717/Blog-app' },
          
            ].map(project => (
              <div key={project.title} className={`rounded-md p-4 shadow-lg transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'}`}>
                <img src={project.imgSrc} alt={project.title} className="rounded-t-md" />
                <h3 className="mb-2 text-xl font-semibold pt-3">{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className={`inline-block mt-4 px-4 py-2 rounded-xl ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-400'} transition-colors duration-300`}>
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-8 my-4">
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>
          <p className="mb-4">
            Hi, I'm Yassen Ibrahim, a passionate software developer with a focus on creating efficient and scalable web applications. I enjoy solving complex problems and continuously learning new skills.
          </p>
        </section>
      </main>

      <footer className={`py-8 text-center ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-700 text-gray-200'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div>
            <p>&copy; {new Date().getFullYear()} All rights reserved to Yassen Ibrahim.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 gap-4">
              <li>
                <a href="https://www.linkedin.com/in/yassen-ibrahim-993117363/" className="hover:text-blue-400 transition duration-300" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Yassen717" className="hover:text-blue-400 transition duration-300" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a href="mailto:engyassenibrahim@gmail.com" className="hover:text-blue-400 transition duration-300" aria-label="Email">
                  <MdEmail size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300" aria-label="Resume">
                  <FaAddressBook size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;