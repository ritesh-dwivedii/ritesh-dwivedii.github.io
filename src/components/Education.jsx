import React from 'react';

const Education = () => {
    const education = [
        {
            degree: "PG-DAC",
            institution: "Sunbeam (ACTS, C-DAC), Pune",
            period: "Aug 2025 - Feb 2026"
        },
        {
            degree: "Master of Computer Application",
            institution: "IPS Academy, Indore",
            period: "Sep 2023 - Jun 2025"
        },
        {
            degree: "Bachelor of Science",
            institution: "PTSNS University, Shahdol",
            period: "Jul 2018 - Sep 2022"
        }
    ];

    return (
        <section id="education" className="section education">
            <h2>Education</h2>
            <div className="education-grid">
                {education.map((edu, index) => (
                    <div key={index} className="education-card" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        borderLeft: '4px solid #667eea'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                        <p style={{ color: '#a0aec0', marginBottom: '0.25rem' }}>{edu.institution}</p>
                        <span style={{ fontSize: '0.9rem', color: '#718096' }}>{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
