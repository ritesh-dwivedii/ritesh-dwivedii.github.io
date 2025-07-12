import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Donationchain",
      description: "A blockchain-based donation platform ensuring transparency and trust in charitable giving",
      link: "https://github.com/ritesh-dwivedii/Donationchain"
    },
    {
      title: "Stayzy",
      description: "A modern accommodation booking platform with real-time availability and secure payments",
      link: "https://github.com/ritesh-dwivedii/stayzy"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio built with React and modern CSS animations",
      link: "#"
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
              <br/>
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