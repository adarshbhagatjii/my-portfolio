import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'
import { FiArrowDown, FiFileText, FiLink, FiMail } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiServer } from 'react-icons/fi'
import { FiExternalLink, FiGithub, FiAward } from 'react-icons/fi'
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';
import "./index.css";

import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Palette,
  Server,
  Download,
  Menu,
  X,
} from "lucide-react";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const skill = [
    { name: "Frontend Development", icon: <FiLayout size={28} /> },
    { name: "Backend Development", icon: <FiServer size={28} /> },
    { name: "Clean Code Practices", icon: <FiCode size={28} /> },

  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certification",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Node.js", icon: <Server className="w-6 h-6" />, level: 80 },
    { name: "Express", icon: <Server className="w-6 h-6" />, level: 75 },
    { name: "HTML/CSS", icon: <Palette className="w-6 h-6" />, level: 95 },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" />, level: 90 },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, level: 90 },
    { name: "SQL", icon: <Database className="w-6 h-6" />, level: 75 },

    { name: "Github", icon: <Code className="w-6 h-6" />, level: 85 },
  ];
  const additionalSkill = [
    'JavaScript', 'OOPS', 'DBMS', 'Operating System', 'Computer Network', 'Figma',
    'Python', 'JAVA', 'Problem-solving,', 'Communication', 'Material UI',
    'Responsive Design', 'Progressive Web Apps', 'WebSockets',
    'Leadership', 'Adaptability,', 'Performance Optimization'
  ];

  const projects = [
    {
      id: 1,
      title: "Foodie Hub",
      description:
        "A full-stack food ordering web app allowing users to browse restaurants, view menus, manage carts, and place orders via Razorpay or COD. Integrated live location-based address autofill and JWT authentication.",
      tags: ["Node.js", "React", "Redux Store", "Tailwind CSS", "Mongo DB"],
      image: "foodiehubimg.png",
      github: "https://github.com/adarshbhagatjii/myRestro-frontend",
      live: "https://foodie-hub-sigma.vercel.app/",
    },
    {
      id: 2,
      title: "Dev Meetup",
      description:
        " A React.js web application designed for organizing and managing developer meetups. It features user authentication, profile management, meetup requests, and real-time notifications using Redux Toolkit and Axios. Built with Vite for optimized performance and styled with Tailwind CSS.",
      tags: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "WebSocket"],
      image:
        "devmeetup.png",
      github: "https://dev-meetup-client.vercel.apphttps://github.com/adarshbhagatjii/devMeetup/",
      live: "https://dev-meetup-client.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce",
      description:
        "Developed a dynamic e-commerce website using React, allowing users to easily add and delete products. The platform features a responsive design for optimal user experience across devices. Additionally, implemented a product rating system to facilitate user feedback and engagement.",
      tags: ["React.js", "Tailwindcss", "JavaScript", "Redux", "React Router"],
      image: "https://images.unsplash.com/photo-1654861577468-dd7a0c2fcbfa?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/adarshbhagatjii/online-store",
      live: "",
    },
  ];
  const certifications = [
    {
      id: 1,
      title: "Node.js - Backend Mastery",
      issuer: "Coding Spoon",
      date: "September 2024",
      description: "Completed a Node.js course focused on building RESTful APIs with Express.js, user authentication, and MongoDB integration, with hands-on backend project development and deployment.",
      logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      credential: "https://drive.google.com/file/d/1Qv5FTgiptAbmt2sc2BEApJt2JaGU1uYo/view?usp=drive_link",

    },
    {
      id: 2,
      title: "REACT.js ",
      issuer: "Udemy",
      date: "January 2024",
      description: "Completed a React.js course covering component-based architecture, state management with hooks, routing, and API integration. Built responsive user interfaces through real-world projects.",
      logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      credential: "https://drive.google.com/file/d/1R1sHjkhJI5rACKDSh3q-9aTiz1RiAkpf/view?usp=drive_link",

    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      issuer: "Coding Spoon",
      date: "August 2022",
      description: "Completed a DSA course focused on core data structures and algorithms like arrays, linked lists, trees, graphs, recursion, and dynamic programming. Strengthened problem-solving through coding challenges.",
      logo: "https://www.synergisticit.com/wp-content/uploads/2020/09/Data-structures-and-algorithms-new.webp",
      credential: "https://drive.google.com/file/d/1QzE0JSmsvleQX-3WR1Dv9vBS3aVOq-yB/view?usp=drive_link",
    }

  ];



  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bvwhrpa", // e.g., "service_xxxx"
        "template_7vcq514", // e.g., "template_yyyy"
        formRef.current,
        "mycGu7vsDDgOfmUPz" // e.g., "user_xxxxxx"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong. Try again.");
        }
      );
  };

  return (

    <div className="min-h-screen bg-[#0f0c29] text-white
">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Adarsh Bhagat
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "certification", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-purple-400 transition-colors hover:cursor-pointer ${activeSection === item ? "text-purple-400" : "text-white"
                      }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "skills", "projects", "certification", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center text-white">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"></div>

        {/* Blurred glowing background circles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-900/50 text-blue-300 text-sm font-medium"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Hi, I'm Adarsh Bhagat
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-gray-300 mb-6 min-h-[80px] md:min-h-[96px]"
                variants={itemVariants}
              >
                I'm a{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  <Typewriter
                    words={[
                      'Frontend Developer',
                      'React Specialist',
                      'Backend Developer',
                      'Full Stack Developer',
                      'Problem Solver'
                    ]}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
                <br className="hidden md:block" />
                crafting beautiful web experiences.
              </motion.h2>

              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                <a
                  href="https://drive.google.com/file/d/1lhae5Oh_bN3qsfLxjx_kZ8sbH5e-hHUR/view?usp=drivesdk"
                  className="inline-flex items-center justify-center px-6 py-3  bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFileText className="mr-2" /> View Resume
                </a>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border-2 border-blue-400 hover:bg-blue-900/20 text-blue-300"
                >
                  <FiMail className="mr-2" /> Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div className="relative w-full max-w-md mx-auto md:max-w-none" variants={itemVariants}>
              <div className="relative w-full h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://avatars.githubusercontent.com/u/147369374?v=4"
                  alt="Adarsh Bhagat - Developer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-800/20 rounded-lg hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700/20 rounded-lg hidden md:block"></div>
            </motion.div>

          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowDown className="text-blue-400" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className=" bg-[#0f0c29] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center mb-16"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-lg font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Passionate Developer & Problem Solver</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Adarsh bhagat working on laptop"
                  className="w-full h-auto"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-[#1a1a2e] shadow-lg rounded-lg p-4 flex items-center justify-center w-32 h-32"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">Fresher</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Creating digital solutions with passion & innovation
              </h3>

              <p className="text-gray-300 mb-6">
                I'm a full-stack developer with experience building web applications and digital experiences. My journey started with HTML and CSS, and has evolved to include a comprehensive skillset across the entire development stack.
              </p>

              <p className="text-gray-300 mb-8">
                I specialize in creating responsive, accessible, and performant applications using modern technologies like React, Node.js, and cloud services. My passion lies in solving complex problems with clean, maintainable code and delivering exceptional user experiences.
              </p>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 ">
                {skill.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-4 bg-[#1a1a2e] rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mr-4 text-blue-400">{skill.icon}</div>
                    <span className="font-medium text-gray-100 sm:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://drive.google.com/file/d/1lhae5Oh_bN3qsfLxjx_kZ8sbH5e-hHUR/view?usp=drivesdk"
                className="inline-flex items-center px-6 py-3  bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8 ">
            {additionalSkill.map((additionalSkill, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                {additionalSkill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            className="mt-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://github.com/adarshbhagatjii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              View all projects on GitHub <FiExternalLink className="ml-2 text-pink-400" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* certification Section */}
      <section id="certification" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl font-bold text-center text-purple-300  mb-16">
            I believe in continuous learning. Here are some of the certifications I've earned throughout my career.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >

                <div className="h-32 bg-gray-200 dark:bg-dark-600 overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-purple-300 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-gray-300  mb-3">
                    {cert.description}
                  </p>

                </div>
                <div className="flex items-center justify-center mb-5">
                  <a
                    href={cert.credential}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink className="mr-2" /> View Credential
                  </a>
                </div>

              </div>
            ))}
          </div>


        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities,
                collaborating on exciting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">bhagatadarsh01@gmail.com</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Bhilai, Chhattisgarh, India
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/adarshbhagatjii"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsh-bhagat-a36a39269/"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </div>

            <div>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Adarsh Bhagat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;