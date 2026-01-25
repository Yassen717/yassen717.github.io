import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaAddressBook, FaMoon, FaSun, FaBars, FaTimes, FaCode, FaRocket, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import planovaImg from './assets/planova-screenshot.png';
import habitflowImg from './assets/habitflow-screenshot.png';
import cartifyImg from './assets/cartify-app.png';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} transition-all duration-300`}>
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full z-50 py-4 shadow-lg backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/80 border-b border-gray-700' : 'bg-white/80 border-b border-gray-200'} transition-all duration-300`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="text-2xl font-bold text-gradient-purple hover:scale-105 transition-transform duration-300">
            Yassen Ibrahim
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={`hover:text-purple-400 transition-all duration-300 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Home</a>
              <a href="#about" className={`hover:text-purple-400 transition-all duration-300 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>About</a>
              <a href="#skills" className={`hover:text-purple-400 transition-all duration-300 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Skills</a>
              <a href="#projects" className={`hover:text-purple-400 transition-all duration-300 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Projects</a>
              <a href="#contact" className={`hover:text-purple-400 transition-all duration-300 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Contact</a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className={`ml-6 p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-all hover:scale-110 shadow-lg`}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={toggleNav}
              className={`ml-4 md:hidden p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-all hover:scale-110 shadow-lg`}
              aria-label="Toggle Navigation"
            >
              {isNavOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        {isNavOpen && (
          <nav className="md:hidden mt-4 px-4 pb-4 border-t border-gray-700">
            <a href="#home" className="block py-3 hover:text-purple-400 transition duration-300 font-medium" onClick={() => setIsNavOpen(false)}>Home</a>
            <a href="#about" className="block py-3 hover:text-purple-400 transition duration-300 font-medium" onClick={() => setIsNavOpen(false)}>About</a>
            <a href="#skills" className="block py-3 hover:text-purple-400 transition duration-300 font-medium" onClick={() => setIsNavOpen(false)}>Skills</a>
            <a href="#projects" className="block py-3 hover:text-purple-400 transition duration-300 font-medium" onClick={() => setIsNavOpen(false)}>Projects</a>
            <a href="#contact" className="block py-3 hover:text-purple-400 transition duration-300 font-medium" onClick={() => setIsNavOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float`}></div>
            <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float`} style={{animationDelay: '2s'}}></div>
            <div className={`absolute top-40 left-1/2 w-80 h-80 ${isDarkMode ? 'bg-pink-600' : 'bg-pink-300'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float`} style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`${isVisible.home ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block text-gradient-purple">Yassen Ibrahim</span>
                <span className={`block text-2xl md:text-3xl mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-normal`}>
                  Full Stack Developer
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate student developer creating efficient and scalable web applications. 
                Ready to bring your ideas to life with modern technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="#projects" className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-48">
                  <FaRocket /> View My Work
                </a>
                <a href="#contact" className={`border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2 min-w-48`}>
                  <FaEnvelope /> Get In Touch
                </a>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/yassen-ibrahim-993117363/" className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/Yassen717" className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="mailto:engyassenibrahim@gmail.com" className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="Email">
                  <MdEmail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-600'} rounded-full flex justify-center`}>
              <div className={`w-1 h-3 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'} rounded-full mt-2 animate-pulse`}></div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 ${isVisible.skills ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">My Skills</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
              <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Here are the technologies and tools I work with to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Python', level: 90, icon: '🐍', color: 'from-green-400 to-blue-500' },
                { name: 'Django', level: 85, icon: '🎯', color: 'from-green-500 to-teal-500' },
                { name: 'React', level: 88, icon: 'âš›', color: 'from-blue-400 to-blue-600' },
                { name: 'Next.js', level: 85, icon: '🔲', color: 'from-gray-700 to-gray-900' },
                { name: 'React Native', level: 80, icon: '📱', color: 'from-blue-500 to-purple-500' },
                { name: 'TailwindCSS', level: 92, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
                { name: 'JavaScript', level: 85, icon: '🟨', color: 'from-yellow-400 to-orange-500' },
                { name: 'TypeScript', level: 82, icon: '🔷', color: 'from-blue-600 to-blue-700' },
                { name: 'Node.js', level: 82, icon: '🟢', color: 'from-green-500 to-green-600' },
                { name: 'Express.js', level: 80, icon: '⚡', color: 'from-gray-600 to-gray-800' },
                { name: 'Appwrite', level: 78, icon: '🚀', color: 'from-purple-600 to-pink-600' },
                { name: 'Git', level: 88, icon: '📚', color: 'from-orange-500 to-red-500' }
              ].map((skill, index) => (
                <div key={skill.name} className={`${isVisible.skills ? 'animate-slide-up' : 'opacity-0'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}% Proficiency</p>
                    </div>
                  </div>
                  
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mb-2`}>
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                      Hover for details
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 ${isVisible.projects ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
              <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Here are some of my recent projects that showcase my skills and passion for development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Cartify - E-Commerce Platform', 
                  imgSrc: cartifyImg, 
                  desc: 'Full-stack e-commerce platform with JWT authentication, product discovery, shopping cart, wishlist, and admin dashboard. Features Redis caching, real-time search with advanced filtering, and comprehensive order management. Built with React 19, Express, Prisma, and PostgreSQL.', 
                  website: 'https://cartify-gold.vercel.app/',
                  github: 'https://github.com/Yassen717/Cartify',
                  tech: ['React 19', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'Redis', 'Zustand'],
                  features: ['JWT Authentication', 'Product Discovery', 'Shopping Cart', 'Wishlist', 'Admin Dashboard', 'Order Management', 'Reviews & Ratings', 'Redis Caching'],
                  status: 'Live'
                },
                 { 
                  title: 'Planova - Project Management System', 
                  imgSrc: planovaImg, 
    desc: 'Full-stack project management system with real-time collaboration, authentication, task tracking, and team management. Built with Next.js, React, TypeScript, Prisma, and PostgreSQL.', 
    website: 'https://planova-p.vercel.app/',
    github: 'https://github.com/Yassen717/planova',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    features: ['Real-time Collaboration', 'Authentication', 'Task Tracking', 'Team Management', 'Kanban Board', 'Dashboard Analytics'],
    status: 'Live'
  },
                {
  title: 'HabitFlow - Smart Habit Tracker',
  imgSrc: habitflowImg,
  desc: 'Full-stack gamified habit tracking application with JWT authentication, real-time progress visualization, and achievement system. Features automatic token refresh, streak calculation, points-based rewards, and comprehensive analytics dashboard. Built with React 19, Express, Prisma, and PostgreSQL.',
  website: 'https://habitflow-three.vercel.app/', 
  github: 'https://github.com/Yassen717/HabitFlow',
  tech: ['React 19', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
  features: ['JWT Authentication', 'Habit Tracking', 'Streak Calculation', 'Gamification System', 'Achievement Badges', 'Progress Charts', 'Dark Mode', 'Points & Rewards'],
  status: 'Live'
},
              ].map((project, index) => (
                <div key={project.title} className={`${isVisible.projects ? 'animate-slide-up' : 'opacity-0'} group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative overflow-hidden">
                    <img src={project.imgSrc} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live' ? 'bg-green-500 text-white' :
                        project.status === 'In Progress' ? 'bg-yellow-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors duration-300">{project.title}</h3>
                    <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.desc}</p>
                    
                    {/* Key Features for featured projects */}
                    {project.features && (
                      <div className="mb-4">
                        <p className={`text-xs font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {project.features.slice(0, 4).map((feature) => (
                            <span key={feature} className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 4 && (
                            <span className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                              +{project.features.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-2 py-1 text-xs font-medium rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                          project.status === 'Live' 
                            ? 'bg-gradient-primary text-white hover:shadow-lg hover:scale-105' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        onClick={project.status !== 'Live' ? (e) => e.preventDefault() : undefined}
                      >
                        {project.status === 'Live' ? (
                          <>
                            <FaRocket size={14} /> View Live
                          </>
                        ) : (
                          <>
                            <FaCode size={14} /> {project.status}
                          </>
                        )}
                      </a>
                      
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white flex items-center gap-1`}
                        >
                          <FaGithub size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                More projects coming soon! I'm always working on something exciting.
              </p>
              <a href="https://github.com/Yassen717" className="bg-gradient-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                <FaGithub /> View All on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 ${isVisible.about ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">About Me</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <div className={`w-80 h-80 mx-auto rounded-full ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-400 to-blue-400'} flex items-center justify-center shadow-2xl`}>
                  <div className={`w-72 h-72 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-6xl text-purple-500`}>
                    <FaCode />
                  </div>
                </div>
              </div>
              
              <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Hi, I'm Yassen Ibrahim</h3>
                <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a passionate Computer Science student at Surman College with a deep love for creating innovative web solutions. 
                  My journey in software development has been driven by curiosity and the desire to solve real-world problems through code.
                </p>
                <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I specialize in full-stack development, with expertise in modern frameworks like React, Django, and Node.js. 
                  I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>🎓 Computer Science Student at Surman College</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>💻 Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>🚀 Available for Freelance Projects</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="/Yassen-Ibrahim-Resume.pdf" download="Yassen-Ibrahim-Resume.pdf" className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                    <FaDownload /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
              <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className={`${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                      <FaEnvelope className="text-purple-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:engyassenibrahim@gmail.com" className={`${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors duration-300`}>
                        engyassenibrahim@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                      <FaMapMarkerAlt className="text-purple-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Libya, Available for Remote Work
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                      <FaRocket className="text-purple-500" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Status</p>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Available for Freelance Projects
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/yassen-ibrahim-993117363/" className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="LinkedIn">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/Yassen717" className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="GitHub">
                      <FaGithub size={24} />
                    </a>
                    <a href="mailto:engyassenibrahim@gmail.com" className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:scale-110 transition-all duration-300 text-purple-500`} aria-label="Email">
                      <MdEmail size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className={`${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                <div className={`p-8 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form action="mailto:engyassenibrahim@gmail.com" method="post" encType="text/plain" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input type="text" name="firstName" required className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300`} placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input type="text" name="lastName" required className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300`} placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" name="email" required className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300`} placeholder="john.doe@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input type="text" name="subject" required className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300`} placeholder="Project Collaboration" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea rows={4} name="message" required className={`w-full px-4 py-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none`} placeholder="Tell me about your project..."></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <FaEnvelope /> Send Message
                    </button>
                    
                    <p className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      This will open your default email client to send the message to engyassenibrahim@gmail.com
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Future Clients Section - Updated for new freelancer */}
      <section id="testimonials" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Ready to Work Together</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Starting my freelance journey with fresh ideas and dedication to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`${isVisible.testimonials ? 'animate-slide-up' : 'opacity-0'} p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-purple-500">Fresh Perspective</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                As a new freelancer, I bring fresh ideas, latest technologies, and dedicated attention to every project. 
                Your project will get my full focus and innovative solutions.
              </p>
            </div>
            
            <div className={`${isVisible.testimonials ? 'animate-slide-up' : 'opacity-0'} p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-center`} style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-4 text-purple-500">Quality Commitment</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm committed to delivering high-quality work that exceeds expectations. 
                Your success is my success, and I'll work hard to earn your trust and satisfaction.
              </p>
            </div>
          </div>
          
          <div className={`text-center mt-12 ${isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <div className={`max-w-2xl mx-auto p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-100 to-blue-100'} border-2 border-purple-300`}>
              <div className="text-3xl mb-4">✨</div>
              <p className={`text-lg italic mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                "Ready to be my first success story? Let's create something amazing together and build a 
                long-lasting professional relationship that benefits us both!"
              </p>
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                Y
              </div>
              <p className="font-semibold text-purple-600">Yassen Ibrahim</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Your Future Developer Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-800 text-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient-purple">Yassen Ibrahim</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                Full Stack Developer passionate about creating innovative web solutions and bringing ideas to life through code.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/yassen-ibrahim-993117363/" className="hover:text-purple-400 transition duration-300" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/Yassen717" className="hover:text-purple-400 transition duration-300" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="mailto:engyassenibrahim@gmail.com" className="hover:text-purple-400 transition duration-300" aria-label="Email">
                  <MdEmail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-purple-400 transition duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition duration-300">About</a></li>
                <li><a href="#skills" className="hover:text-purple-400 transition duration-300">Skills</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition duration-300">Projects</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>Backend Development</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
          
          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-700'} text-center`}>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
              &copy; {new Date().getFullYear()} Yassen Ibrahim. All rights reserved. Made with ❤️ and lots of coffee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;