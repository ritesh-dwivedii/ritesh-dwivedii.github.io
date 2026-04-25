import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: "Core Logic",
            skills: ["Java", "Spring Boot", "Node.js", "C#", "Express", "Microservices"]
        },
        {
            title: "Interfaces",
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
        },
        {
            title: "Data Persistence",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL Server"]
        },
        {
            title: "DevOps & Systems",
            skills: ["Docker", "Jenkins", "Git", "CI/CD Pipelines", "Postman", "Vite"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-ebony relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <h2 className="text-7xl md:text-[10rem] font-serif font-bold opacity-[0.03] leading-none tracking-tighter absolute top-10 left-1/2 -translate-x-1/2 w-full uppercase pointer-events-none">VERSATILITY</h2>
                    <h2 className="text-5xl md:text-8xl font-serif font-bold text-ochre tracking-tighter relative z-10 uppercase">TECHNICAL ARSENAL</h2>
                    <p className="font-mono text-xs tracking-[0.5em] text-bone/30 mt-8 uppercase">
                        [ Polyglot Capability / Engineering Adaptability ]
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 relative z-10">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-ebony p-12 hover:bg-white/[0.01] transition-colors border-white/5">
                            <span className="font-mono text-[10px] text-ochre/40 uppercase tracking-[0.4em] mb-12 block">
                                0{index + 1} / {cat.title}
                            </span>
                            <ul className="space-y-6">
                                {cat.skills.map((skill, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-2xl font-serif text-bone/60 hover:text-ochre transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Meta Details */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="font-mono text-[10px] text-bone/20 leading-relaxed uppercase tracking-[0.3em] max-w-sm">
                        High adaptability across diverse tech stacks / 
                        Focus on product-driven engineering / 
                        DevOps-aware implementation
                    </div>
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-ochre/40"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "70%" }}
                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
