import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Package, Smartphone, Code2, Globe } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "Super Local Delivery",
            category: "Logistics & Logistics Tech",
            tech: ["Route Optimization", "Driver Management", "Shopify"],
            desc: "A mission-critical delivery management system for Shopify merchants. Engineered complex route planning algorithms and a real-time driver tracking infrastructure.",
            type: "Professional",
            icon: <Package className="text-ochre" size={24} />
        },
        {
            id: "02",
            title: "Apploy",
            category: "Mobile Transformation",
            tech: ["Mobile App Builder", "Push Notifications", "Shopify Sync"],
            desc: "A high-performance mobile app builder that transforms e-commerce stores into native-feel applications. Features automated theme optimization and real-time data synchronization.",
            type: "Professional",
            icon: <Smartphone className="text-ochre" size={24} />
        },
        {
            id: "03",
            title: "Task Flow",
            category: "Enterprise Systems",
            tech: ["Spring Boot", "React", "Microservices"],
            desc: "A scalable enterprise task management ecosystem. Implements optimized resource allocation and role-based access control for distributed teams.",
            type: "Featured",
            icon: <Code2 className="text-ochre/40" size={24} />
        },
        {
            id: "04",
            title: "DonationChain",
            category: "Web3 / Blockchain",
            tech: ["Solidity", "Ethereum", "React"],
            desc: "A decentralized donation protocol ensuring radical transparency in philanthropy. Uses immutable ledger technology to track and verify donation impact.",
            type: "Featured",
            icon: <Globe className="text-ochre/40" size={24} />
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-alabaster dark:bg-ebony transition-colors duration-700">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8 md:gap-12">
                    <div className="max-w-4xl">
                        <h2 className="text-[12vw] md:text-8xl lg:text-[10rem] font-serif font-bold mb-6 md:mb-8 leading-[0.9] md:leading-[0.8] uppercase tracking-tighter text-ink dark:text-bone">
                            SELECTED <br />
                            <span className="text-ochre italic font-light">WORKS</span>
                        </h2>
                        <p className="text-ink/40 dark:text-bone/40 font-mono text-[8px] md:text-[10px] tracking-[0.5em] uppercase mt-4 md:mt-8 flex items-center gap-4">
                            <span className="h-px w-8 bg-ochre/20" />
                            [ Engineering Precision / 2023 - 2024 ]
                        </p>
                    </div>
                </div>

                <div className="space-y-px border-y border-white/10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 md:grid-cols-12 items-center py-12 md:py-24 hover:bg-white dark:hover:bg-white/[0.01] transition-all duration-700 border-b border-white/5"
                        >
                            <div className="md:col-span-1 hidden md:block">
                                <span className="font-mono text-[10px] text-ochre/40 group-hover:text-ochre transition-colors tracking-widest">{project.id}</span>
                            </div>
                            
                            <div className="md:col-span-4 mb-6 md:mb-0">
                                <div className="flex items-center gap-4 mb-4 md:mb-6">
                                    <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-ink/30 dark:text-bone/30">{project.category}</span>
                                    <span className="px-2 py-0.5 border border-ochre/20 text-ochre text-[7px] md:text-[8px] font-mono uppercase tracking-widest rounded">{project.type}</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-ink dark:text-bone md:group-hover:translate-x-6 transition-transform duration-700 ease-out">{project.title}</h3>
                            </div>

                            <div className="md:col-span-4 mb-6 md:mb-0 md:px-8">
                                <p className="text-lg md:text-xl text-ink/60 dark:text-bone/60 leading-relaxed font-light italic">
                                    "{project.desc}"
                                </p>
                            </div>

                            <div className="md:col-span-2 flex flex-wrap gap-2 mb-8 md:mb-0">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[8px] md:text-[9px] font-mono border border-white/10 px-2 md:px-3 py-1 text-ink/40 dark:text-bone/40 group-hover:border-ochre/30 group-hover:text-ochre transition-colors rounded-full">{t}</span>
                                ))}
                            </div>

                            <div className="md:col-span-1 flex justify-start md:justify-end">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 md:w-16 md:h-16 glass-panel rounded-2xl flex items-center justify-center group-hover:border-ochre/50 transition-all cursor-pointer"
                                >
                                    {project.icon}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/ritesh-dwivedii" 
                        className="inline-flex items-center gap-8 py-8 px-16 glass-panel rounded-full text-[10px] font-mono tracking-[0.5em] text-ochre uppercase group hover:border-ochre"
                    >
                        Enter Archive <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;