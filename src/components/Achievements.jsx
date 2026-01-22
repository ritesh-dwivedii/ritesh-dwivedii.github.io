import React from 'react';

const Achievements = () => {
    const achievements = [
        "TCS CodeVita (2024): Secured a global rank of 2091 in TCS CodeVita Season 12",
        "Deloitte Australia Technology Job Simulation (2025): Completed hands-on simulation projects",
        "Infosys Springboard Certification: Completed certifications in HTML, CSS, and JavaScript",
        "TCS iON Communication Skills Certification (2025)"
    ];

    return (
        <section id="achievements" className="section achievements">
            <h2>Achievements & Certifications</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {achievements.map((item, index) => (
                    <li key={index} style={{
                        marginBottom: '1rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#667eea'
                        }}>🏆</span>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
