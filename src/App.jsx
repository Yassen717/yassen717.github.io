import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaMoon, FaSun, FaBars, FaTimes, FaCode, FaRocket, FaDownload, FaEnvelope, FaMapMarkerAlt, FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaPalette, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import planovaImg from './assets/planova-app.png';
import habitflowImg from './assets/habitflow-screenshot.png';
import cartifyImg from './assets/cartify-app.png';

const ROLES = ['Full Stack Developer', 'React Specialist', 'Backend Engineer', 'UI/UX Enthusiast'];

function useTypingEffect(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const typedText = useTypingEffect(ROLES);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const navLinkClass = (section) => {
    const id = section.replace('#', '');
    const isActive = activeSection === id;
    return `relative py-1 transition-all duration-300 font-medium ${
      isActive
        ? 'text-purple-500'
        : isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'
    } ${isActive ? 'nav-active' : ''}`;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-gray-200' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full z-50 py-3 backdrop-blur-lg ${isDarkMode ? 'bg-gray-950/80 border-b border-gray-800/50' : 'bg-white/80 border-b border-gray-200/50'} transition-colors duration-300`}>
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#home" className="text-xl font-bold text-gradient-purple tracking-tight hover:scale-105 transition-transform duration-300">
            YI<span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-light`}>.dev</span>
          </a>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className={navLinkClass(href)}>{label}</a>
              ))}
            </nav>
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2.5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all hover:scale-105`}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <button
              onClick={toggleNav}
              className={`md:hidden p-2.5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-all hover:scale-105`}
              aria-label="Toggle Navigation"
            >
              {isNavOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </div>
        {/* Mobile nav with animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isNavOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className={`px-6 pb-4 pt-2 border-t ${isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'}`}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={`block py-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'}`} onClick={() => setIsNavOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
          {/* Subtle grid background */}
          <div className={`absolute inset-0 bg-grid-pattern ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}></div>
          
          {/* Gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] ${isDarkMode ? 'bg-purple-600' : 'bg-purple-200'} rounded-full filter blur-[120px] opacity-20 animate-float`}></div>
            <div className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] ${isDarkMode ? 'bg-blue-600' : 'bg-blue-200'} rounded-full filter blur-[120px] opacity-15 animate-float`} style={{animationDelay: '3s'}}></div>
            <div className={`absolute top-1/3 left-1/2 w-[400px] h-[400px] ${isDarkMode ? 'bg-indigo-600' : 'bg-pink-200'} rounded-full filter blur-[120px] opacity-10 animate-float`} style={{animationDelay: '5s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className={`${isVisible.home ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border bg-opacity-10 backdrop-blur-sm" 
                   style={{
                     borderColor: isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
                     backgroundColor: isDarkMode ? 'rgba(139, 92, 246, 0.08)' : 'rgba(139, 92, 246, 0.05)'
                   }}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Available for work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className={`block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Yassen Ibrahim</span>
                <span className="block text-xl md:text-2xl lg:text-3xl mt-6 font-normal text-gradient-purple h-10">
                  {typedText}<span className="typing-cursor">|</span>
                </span>
              </h1>
              
              <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                I build modern, full-stack web applications with clean architecture 
                and polished user experiences. Let's turn your vision into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <a href="#projects" className="group bg-gradient-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5">
                  <FaRocket className="group-hover:rotate-12 transition-transform" size={16} /> View My Work
                </a>
                <a href="#contact" className={`px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2.5 border-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400' : 'border-gray-300 text-gray-600 hover:border-purple-500 hover:text-purple-500'}`}>
                  <FaEnvelope size={16} /> Get In Touch
                </a>
              </div>
              
              <div className="flex justify-center gap-4">
                {[
                  { href: "https://www.linkedin.com/in/yassen-ibrahim-993117363/", icon: FaLinkedin, label: "LinkedIn" },
                  { href: "https://github.com/Yassen717", icon: FaGithub, label: "GitHub" },
                  { href: "mailto:engyassenibrahim@gmail.com", icon: MdEmail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} className={`p-3.5 rounded-xl ${isDarkMode ? 'bg-gray-800/60 hover:bg-gray-700/80 text-gray-400 hover:text-purple-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-purple-500'} transition-all duration-300 hover:scale-105`} aria-label={label} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className={`w-5 h-8 border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-400'} rounded-full flex justify-center`}>
              <div className={`w-1 h-2 ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mt-1.5 animate-pulse`}></div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible.about ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-3">Get to know me</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">About Me</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
                  <div className={`absolute inset-0 rounded-2xl rotate-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-400 to-blue-400'} opacity-80`}></div>
                  <div className={`absolute inset-0 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center`}>
                    <div className="text-center">
                      <FaCode className="text-purple-500 mx-auto mb-4" size={56} />
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Building the web,</p>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>one project at a time</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hi, I'm Yassen Ibrahim
                </h3>
                <p className={`text-base leading-relaxed mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm a Computer Science student at Surman College with a focus on building production-ready web applications. 
                  I enjoy solving complex problems and turning ideas into clean, scalable software.
                </p>
                <p className={`text-base leading-relaxed mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  My expertise spans the full stack — from crafting responsive React interfaces to designing robust APIs with Node.js and Django. 
                  I prioritize writing maintainable code and delivering polished user experiences.
                </p>
                
                <div className={`grid grid-cols-2 gap-4 mb-8 p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} shadow-sm`}>
                  {[
                    { label: 'Projects Built', value: '3+' },
                    { label: 'Technologies', value: '12+' },
                    { label: 'Studying At', value: 'Surman College' },
                    { label: 'Focus', value: 'Full Stack' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center py-2">
                      <p className="text-xl font-bold text-purple-500">{value}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                    </div>
                  ))}
                </div>
                
                <a href="/Yassen-Ibrahim-Resume.pdf" download="Yassen-Ibrahim-Resume.pdf" className="inline-flex items-center gap-2.5 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300">
                  <FaDownload size={14} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible.skills ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-3">What I work with</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Tech Stack</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            {/* Categorized skills */}
            <div className="max-w-5xl mx-auto space-y-12">
              {[
                {
                  category: 'Frontend',
                  icon: <FaLaptopCode className="text-blue-400" size={20} />,
                  skills: [
                    { name: 'React', icon: '⚛️' },
                    { name: 'Next.js', icon: '▲' },
                    { name: 'React Native', icon: '📱' },
                    { name: 'TypeScript', icon: '🔷' },
                    { name: 'JavaScript', icon: '🟨' },
                    { name: 'Tailwind CSS', icon: '🎨' },
                  ]
                },
                {
                  category: 'Backend',
                  icon: <FaServer className="text-green-400" size={20} />,
                  skills: [
                    { name: 'Node.js', icon: '🟢' },
                    { name: 'Express.js', icon: '⚡' },
                    { name: 'Python', icon: '🐍' },
                    { name: 'Django', icon: '🎯' },
                    { name: 'Prisma', icon: '◆' },
                  ]
                },
                {
                  category: 'Tools & Services',
                  icon: <FaDatabase className="text-orange-400" size={20} />,
                  skills: [
                    { name: 'PostgreSQL', icon: '🐘' },
                    { name: 'Redis', icon: '🔴' },
                    { name: 'Git', icon: '📚' },
                    { name: 'Appwrite', icon: '🚀' },
                    { name: 'Vercel', icon: '▲' },
                  ]
                }
              ].map((group, gIndex) => (
                <div key={group.category} className={`${isVisible.skills ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${gIndex * 0.15}s` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>{group.icon}</div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {group.skills.map((skill, index) => (
                      <div key={skill.name} className={`group flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 cursor-default ${isDarkMode ? 'bg-gray-800/60 hover:bg-gray-800 border border-gray-800 hover:border-gray-700' : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
                        <span className="text-lg">{skill.icon}</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible.projects ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-3">What I've built</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Featured Projects</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  title: 'Cartify', 
                  subtitle: 'E-Commerce Platform',
                  imgSrc: cartifyImg, 
                  desc: 'Full-stack e-commerce platform with JWT auth, product discovery, cart, wishlist, admin dashboard, Redis caching, and real-time search with advanced filtering.', 
                  website: 'https://cartify-gold.vercel.app/',
                  github: 'https://github.com/Yassen717/Cartify',
                  tech: ['React 19', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'Redis'],
                  features: ['JWT Auth', 'Product Discovery', 'Shopping Cart', 'Admin Dashboard', 'Order Management', 'Redis Caching'],
                  status: 'Live'
                },
                { 
                  title: 'Planova', 
                  subtitle: 'Project Management',
                  imgSrc: planovaImg, 
                  desc: 'Full-stack project management system with real-time collaboration, task tracking, team management, Kanban boards, and dashboard analytics.', 
                  website: 'https://planova-p.vercel.app/',
                  github: 'https://github.com/Yassen717/planova',
                  tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
                  features: ['Real-time Collaboration', 'Task Tracking', 'Team Management', 'Kanban Board', 'Analytics'],
                  status: 'Live'
                },
                {
                  title: 'HabitFlow',
                  subtitle: 'Smart Habit Tracker',
                  imgSrc: habitflowImg,
                  desc: 'Gamified habit tracking app with real-time progress visualization, achievement system, streak calculation, and comprehensive analytics dashboard.',
                  website: 'https://habitflow-three.vercel.app/', 
                  github: 'https://github.com/Yassen717/HabitFlow',
                  tech: ['React 19', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
                  features: ['Habit Tracking', 'Gamification', 'Achievement Badges', 'Progress Charts', 'Streak System'],
                  status: 'Live'
                },
              ].map((project, index) => (
                <div key={project.title} className={`${isVisible.projects ? 'animate-slide-up' : 'opacity-0'} group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800/50 border border-gray-800 hover:border-gray-700' : 'bg-white border border-gray-100 hover:border-gray-200'} hover:shadow-2xl hover:shadow-purple-500/5`} style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="relative overflow-hidden">
                    <img src={project.imgSrc} alt={project.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-green-500/90 text-white backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/70 text-xs font-medium">{project.subtitle}</p>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${isDarkMode ? 'bg-gray-700/80 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm bg-gradient-primary text-white hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]"
                      >
                        <FaRocket size={13} /> Live Demo
                      </a>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm flex items-center gap-1.5 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                          <FaGithub size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`text-center mt-14 ${isVisible.projects ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
              <a href="https://github.com/Yassen717" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>
                <FaGithub size={18} /> View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* What I Offer Section */}
        <section id="services" className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible.services ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-3">How I can help</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">What I Offer</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaLaptopCode size={24} />, title: 'Web Applications', desc: 'Modern, responsive web apps built with React, Next.js, and TypeScript. Focus on performance and user experience.', color: 'text-blue-400' },
                { icon: <FaServer size={24} />, title: 'Backend & APIs', desc: 'Scalable REST APIs and server-side logic with Node.js, Express, Django, and PostgreSQL.', color: 'text-green-400' },
                { icon: <FaMobileAlt size={24} />, title: 'Mobile Development', desc: 'Cross-platform mobile apps using React Native with native-like performance and smooth animations.', color: 'text-purple-400' },
                { icon: <FaDatabase size={24} />, title: 'Database Design', desc: 'Efficient database architecture with Prisma ORM, PostgreSQL, and Redis for caching and performance.', color: 'text-orange-400' },
                { icon: <FaPalette size={24} />, title: 'UI/UX Implementation', desc: 'Pixel-perfect interfaces from Figma designs with Tailwind CSS, Framer Motion, and accessibility in mind.', color: 'text-pink-400' },
                { icon: <FaRocket size={24} />, title: 'Deployment & DevOps', desc: 'End-to-end deployment on Vercel, with CI/CD pipelines, environment management, and monitoring.', color: 'text-cyan-400' },
              ].map((service, index) => (
                <div key={service.title} className={`${isVisible.services ? 'animate-slide-up' : 'opacity-0'} group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800/40 border border-gray-800 hover:border-gray-700' : 'bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-lg'}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>{service.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-widest mb-3">Let's talk</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">Get In Touch</h2>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              <p className={`text-lg max-w-xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className={`${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
                <div className="space-y-5">
                  {[
                    { icon: <FaEnvelope className="text-purple-500" size={18} />, label: 'Email', value: 'engyassenibrahim@gmail.com', href: 'mailto:engyassenibrahim@gmail.com' },
                    { icon: <FaMapMarkerAlt className="text-purple-500" size={18} />, label: 'Location', value: 'Libya — Available Remotely' },
                    { icon: <FaRocket className="text-purple-500" size={18} />, label: 'Status', value: 'Open to freelance & full-time' },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} transition-colors duration-300`}>
                      <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>{icon}</div>
                      <div>
                        <p className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                        {href ? (
                          <a href={href} className={`text-sm font-medium ${isDarkMode ? 'text-gray-200 hover:text-purple-400' : 'text-gray-700 hover:text-purple-500'} transition-colors`}>{value}</a>
                        ) : (
                          <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <p className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Find me on</p>
                  <div className="flex gap-3">
                    {[
                      { href: "https://www.linkedin.com/in/yassen-ibrahim-993117363/", icon: FaLinkedin, label: "LinkedIn" },
                      { href: "https://github.com/Yassen717", icon: FaGithub, label: "GitHub" },
                      { href: "mailto:engyassenibrahim@gmail.com", icon: MdEmail, label: "Email" },
                    ].map(({ href, icon: Icon, label }) => (
                      <a key={label} href={href} className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-purple-400' : 'bg-white hover:bg-gray-100 text-gray-500 hover:text-purple-500'} transition-all duration-300 hover:scale-105`} aria-label={label} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined}>
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className={`${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                <div className={`p-7 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-800' : 'bg-white border border-gray-100'}`}>
                  <h3 className={`text-xl font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
                  
                  <form action="mailto:engyassenibrahim@gmail.com" method="post" encType="text/plain" className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>First Name</label>
                        <input type="text" name="firstName" required className={`w-full px-4 py-2.5 rounded-xl text-sm border ${isDarkMode ? 'bg-gray-700/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`} placeholder="John" />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last Name</label>
                        <input type="text" name="lastName" required className={`w-full px-4 py-2.5 rounded-xl text-sm border ${isDarkMode ? 'bg-gray-700/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`} placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</label>
                      <input type="email" name="email" required className={`w-full px-4 py-2.5 rounded-xl text-sm border ${isDarkMode ? 'bg-gray-700/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`} placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Subject</label>
                      <input type="text" name="subject" required className={`w-full px-4 py-2.5 rounded-xl text-sm border ${isDarkMode ? 'bg-gray-700/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`} placeholder="Project Collaboration" />
                    </div>
                    
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Message</label>
                      <textarea rows={4} name="message" required className={`w-full px-4 py-2.5 rounded-xl text-sm border ${isDarkMode ? 'bg-gray-700/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500'} focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none`} placeholder="Tell me about your project..."></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-gradient-primary text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                      <FaEnvelope size={14} /> Send Message
                    </button>
                    
                    <p className={`text-xs text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Opens your email client to send the message
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-10 ${isDarkMode ? 'bg-gray-950 border-t border-gray-800/50' : 'bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a href="#home" className="text-lg font-bold text-gradient-purple">YI<span className="text-gray-500 font-light">.dev</span></a>
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map(({ href, label }) => (
                  <a key={href} href={href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">{label}</a>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { href: "https://www.linkedin.com/in/yassen-ibrahim-993117363/", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://github.com/Yassen717", icon: FaGithub, label: "GitHub" },
                { href: "mailto:engyassenibrahim@gmail.com", icon: MdEmail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} className="text-gray-500 hover:text-purple-400 transition-colors duration-300" aria-label={label} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-gray-800/50' : 'border-gray-800'} text-center`}>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Yassen Ibrahim. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 rounded-xl bg-gradient-primary text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    </div>
  );
}

export default App;