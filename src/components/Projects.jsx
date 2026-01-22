import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Task Flow",
      description: "Microservices-based system for managing employees and tasks with role-based access, Service Discovery, and API Gateway.",
      tech: ["Spring Boot", "React", "MySQL", "Microservices"],
      link: "https://github.com/D1-92821-Ritesh/Employee-Task-Managment-System"
    },
    {
      title: "Donationchain",
      description: "Blockchain-based donation platform ensuring transparency and trust with an immutable ledger.",
      tech: ["Express", "EJS", "Solidity", "Blockchain"],
      link: "https://github.com/ritesh-dwivedii/Donationchain"
    },
    {
      title: "Stayzy",
      description: "Rental booking platform with real-time availability and secure payments.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/ritesh-dwivedii/stayzy"
    },
    {
      title: "PharmacyStore",
      description: "A comprehensive pharmacy management system with inventory tracking and customer management.",
      tech: ["Java", "Servlet", "JSP", "MySQL"],
      link: "https://github.com/ritesh-dwivedii/PharmacyStore"
    },
    {
      title: "Spotify Clone",
      description: "A web-based music streaming application inspired by Spotify with modern UI/UX.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/ritesh-dwivedii/spotify-clone"
    },
    {
      title: "Real-Trust",
      description: "A trust and verification system for real estate transactions and property management.",
      tech: ["Blockchain", "Web3", "React"],
      link: "https://github.com/ritesh-dwivedii/Real-Trust"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/ritesh-dwivedii/ritesh-dwivedii.github.io"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400">A collection of projects demonstrating my expertise.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-secondary transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Folder className="text-primary" size={24} />
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="View Source"
              >
                <Github size={20} />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;