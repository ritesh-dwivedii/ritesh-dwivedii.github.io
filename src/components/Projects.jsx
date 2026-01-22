import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Task Flow",
      description: "Microservices-based system for managing employees and tasks with role-based access, Service Discovery, and API Gateway. Tech Stack: Spring Boot, React, MySQL.",
      link: "https://github.com/D1-92821-Ritesh/Employee-Task-Managment-System"
    },
    {
      title: "Donationchain",
      description: "Blockchain-based donation platform ensuring transparency and trust with an immutable ledger. Tech Stack: Express, EJS, Solidity.",
      link: "https://github.com/ritesh-dwivedii/Donationchain"
    },
    {
      title: "Stayzy",
      description: "Rental booking platform with real-time availability and secure payments. Tech Stack: Node.js, Express.js, MongoDB.",
      link: "https://github.com/ritesh-dwivedii/stayzy"
    },
    {
      title: "PharmacyStore",
      description: "A comprehensive pharmacy management system with inventory tracking and customer management",
      link: "https://github.com/ritesh-dwivedii/PharmacyStore"
    },
    {
      title: "Spotify Clone",
      description: "A web-based music streaming application inspired by Spotify with modern UI/UX",
      link: "https://github.com/ritesh-dwivedii/spotify-clone"
    },
    {
      title: "Real-Trust",
      description: "A trust and verification system for real estate transactions and property management",
      link: "https://github.com/ritesh-dwivedii/Real-Trust"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio built with React and modern CSS animations",
      link: "https://github.com/ritesh-dwivedii/ritesh-dwivedii.github.io"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Featured Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <strong>{project.title}</strong>
              <br />
              <span style={{ fontSize: '0.9rem', color: '#718096' }}>
                {project.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects; 