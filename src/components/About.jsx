import React from 'react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: "React, JavaScript, HTML/CSS, Tailwind CSS, Bootstrap, Material UI, JSP"
    },
    {
      category: "Backend",
      technologies: "Node.js, Databases, Servlet, Rest API"
    },
    {
      category: "Languages",
      technologies: "Java, Python, JavaScript, SQL, C, C++"
    },
    {
      category: "Tools",
      technologies: "Git, Github, VS Code, Postman, MongoDB, MySQL"
    }
  ];

  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        I'm a dedicated full-stack developer with a passion for blockchain technology and modern web development. 
        I specialize in creating scalable, user-friendly applications that solve real-world problems.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Skills & Technologies</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {skills.map((skill, index) => (
            <div 
              key={index}
              style={{ 
                background: 'rgba(102, 126, 234, 0.1)', 
                padding: '1rem', 
                borderRadius: '10px', 
                textAlign: 'center' 
              }}
            >
              <strong>{skill.category}</strong><br/>
              {skill.technologies}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 