import React from 'react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap"
    },
    {
      category: "Backend",
      technologies: "Java, Node.js, Express.js, Spring Boot, C#, .NET, ASP.NET Core"
    },
    {
      category: "Languages",
      technologies: "Java, C, C++, Python, JavaScript, C#, SQL"
    },
    {
      category: "Databases",
      technologies: "MySQL, MongoDB, SQL Server"
    },
    {
      category: "Tools & DevOps",
      technologies: "Git, GitHub, Postman, Docker, Jenkins, VS Code"
    }
  ];

  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        MCA graduate with a strong foundation in backend and full-stack development. Skilled in Java, Spring Boot, C#, .NET, React.js, and database design.
        Experienced in building REST APIs, working with databases, and developing full-stack applications through projects and internships.
        Actively seeking Software Developer / Backend Developer roles where I can contribute, learn, and grow.
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
              <strong>{skill.category}</strong><br />
              {skill.technologies}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 