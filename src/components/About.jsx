import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            I am a dedicated <strong>Full-Stack Developer</strong> with a Master of Computer Applications (MCA) and a strong foundation in backend technologies like Java, Spring Boot, and .NET.
            I am passionate about building scalable, high-performance applications that solve real-world problems.
          </p>
          <p className="text-slate-300 leading-relaxed">
            My journey involves deep dives into microservices architecture, cloud technologies, and modern frontend frameworks like React.
            I currently focus on creating seamless digital experiences and robust backend systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 transform rotate-6" />
          <div className="glass-card p-8 relative z-10 border-l-4 border-l-primary">
            <h3 className="text-xl font-bold mb-4">Quick Highlights</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>MCA Graduate from IPS Academy, Indore</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Specialized in Java, Spring Boot, and Microservices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Global Rank 2091 in TCS CodeVita Season 12</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Certified in Full Stack Development (PG-DAC)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;