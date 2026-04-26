import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout as LayoutIcon, Database, Terminal } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Core Logic",
            icon: <Cpu className="text-ochre" size={24} />,
            skills: ["Java", "Spring Boot", "Node.js", "C#", "Express", "Microservices"]
        },
        {
            title: "Interfaces",
            icon: <LayoutIcon className="text-ochre" size={24} />,
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
        },
        {
            title: "Data Persistence",
            icon: <Database className="text-ochre" size={24} />,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL Server"]
        },
        {
            title: "DevOps & Systems",
            icon: <Terminal className="text-ochre" size={24} />,
            skills: ["Docker", "Jenkins", "Git", "CI/CD Pipelines", "Vite"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 md:px-12 bg-alabaster dark:bg-ebony relative overflow-hidden transition-colors duration-700">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 md:mb-32 relative">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        className="text-6xl md:text-[15rem] font-serif font-bold leading-none tracking-[0.1em] md:tracking-[0.2em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full uppercase pointer-events-none text-ink dark:text-white hidden md:block"
                    >
                        VERSATILITY
                    </motion.h2>
                    <h2 className="text-3xl md:text-5xl lg:text-9xl font-serif font-bold text-ink dark:text-bone tracking-tighter relative z-10 uppercase leading-none">
                        TECHNICAL <br className="md:hidden" /> <span className="text-ochre italic font-light">ARSENAL</span>
                    </h2>
                    <p className="font-mono text-[8px] md:text-[9px] tracking-[0.5em] text-ink/30 dark:text-bone/30 mt-8 md:mt-12 uppercase">
                        [ Polyglot Capability / Engineering Adaptability ]
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 md:p-10 group"
                        >
                            <div className="flex justify-between items-start mb-8 md:mb-12">
                                <div className="p-3 md:p-4 glass-panel rounded-2xl group-hover:border-ochre/50 transition-all">
                                    {cat.icon}
                                </div>
                                <span className="font-mono text-[9px] md:text-[10px] text-ochre/40">0{index + 1}</span>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-serif font-bold text-ink dark:text-bone mb-6 md:mb-8 uppercase tracking-widest">{cat.title}</h3>
                            
                            <ul className="space-y-3 md:space-y-4">
                                {cat.skills.map((skill, i) => (
                                    <li 
                                        key={i}
                                        className="text-xs md:text-sm font-mono text-ink/40 dark:text-bone/40 hover:text-ochre transition-colors cursor-default flex items-center gap-3"
                                    >
                                        <span className="w-1 h-1 bg-ochre/20 rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Meta Details */}
                <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                    <div className="font-mono text-[8px] md:text-[9px] text-ink/20 dark:text-bone/20 leading-relaxed uppercase tracking-[0.3em] max-w-sm text-center md:text-left">
                        High adaptability across diverse tech stacks / 
                        Focus on product-driven engineering / 
                        DevOps-aware implementation
                    </div>
                    <div className="flex gap-4 md:gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 md:w-16 h-[2px] bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-ochre/40"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    transition={{ duration: 2, delay: i * 0.3 }}
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
