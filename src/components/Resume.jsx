import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section resume">
      <h2>Resume</h2>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#4a5568' }}>
        Download my detailed resume to learn more about my experience, education, and technical skills.
      </p>
      <a href=".../Resume2.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
        📄 View My Resume (PDF)
      </a>
    </section>
  );
};

export default Resume; 