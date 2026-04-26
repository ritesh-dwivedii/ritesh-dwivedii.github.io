import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Software Development Engineer",
            company: "Toolstr",
            period: "Present",
            desc: "Engineering 'Super Local Delivery' (a robust logistics & route optimization ecosystem) and 'Apploy' (a high-performance mobile app builder). Focusing on scalable product architectures and real-time synchronization systems."
        }
    ];

    const education = [
        {
            degree: "PG-DAC Certified",
            institution: "Sunbeam (ACTS, C-DAC), Pune",
            desc: "Advanced Diploma in Computing covering full-stack software engineering and professional development."
        },
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "IPS Academy, Indore",
            desc: "Core computer science fundamentals and software application development."
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-4">
                        <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight md:leading-none md:sticky md:top-32 uppercase text-ink dark:text-bone">
                            Career <br />
                            <span className="text-ochre italic font-light">& Logs</span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-ink/40 dark:text-bone/40 font-mono text-[10px] md:text-xs uppercase tracking-widest leading-loose">
                            [ System_Registry / Professional_Timeline ]
                        </p>
                    </div>

                    <div className="lg:col-span-8 space-y-16 md:space-y-24">
                        {/* Work Experience */}
                        <div className="space-y-12 md:space-y-16">
                            <h3 className="font-mono text-[8px] md:text-[10px] text-ochre uppercase tracking-[0.4em] mb-6 md:mb-8 block">/ Professional_Experience</h3>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pb-12 md:pb-16 border-b border-sand dark:border-white/5"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-8 gap-3 md:gap-4">
                                        <div>
                                            <h4 className="text-2xl md:text-4xl font-serif font-bold text-ink dark:text-bone mb-1 md:mb-2">{exp.role}</h4>
                                            <p className="text-ochre font-mono text-[10px] md:text-xs uppercase tracking-widest">{exp.company}</p>
                                        </div>
                                        <div className="md:text-right">
                                            <span className="font-mono text-[10px] md:text-xs text-ink/40 dark:text-bone/40 uppercase tracking-widest">{exp.period}</span>
                                        </div>
                                    </div>
                                    <p className="text-lg md:text-xl text-ink/60 dark:text-bone/60 editorial-text italic leading-relaxed max-w-3xl">
                                        "{exp.desc}"
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-12 md:space-y-16 pt-12 md:pt-16 border-t border-sand dark:border-white/5">
                            <h3 className="font-mono text-[8px] md:text-[10px] text-ochre uppercase tracking-[0.4em] mb-6 md:mb-8 block">/ Academic_Milestones</h3>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-ink dark:text-bone mb-1 md:mb-2">{edu.degree}</h4>
                                    <p className="text-ochre font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">{edu.institution}</p>
                                    <p className="text-ink/40 dark:text-bone/40 text-xs md:text-sm leading-relaxed max-w-2xl">{edu.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
