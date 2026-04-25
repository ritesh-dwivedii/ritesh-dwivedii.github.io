import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Package, Smartphone } from 'lucide-react';

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
            icon: <Github className="text-bone/40" size={24} />
        },
        {
            id: "04",
            title: "DonationChain",
            category: "Web3 / Blockchain",
            tech: ["Solidity", "Ethereum", "React"],
            desc: "A decentralized donation protocol ensuring radical transparency in philanthropy. Uses immutable ledger technology to track and verify donation impact.",
            type: "Featured",
            icon: <Github className="text-bone/40" size={24} />
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-ebony">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <h2 className="text-6xl md:text-[8rem] font-serif font-bold mb-8 leading-none uppercase tracking-tighter">
                            SELECTED <br />
                            <span className="ochre-accent italic">WORKS</span>
                        </h2>
                        <p className="text-bone/40 font-mono text-xs tracking-widest uppercase mt-4">
                            [ Professional & Featured Projects / Engineering Precision ]
                        </p>
                    </div>
                </div>

                <div className="space-y-px border-y border-white/5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative grid md:grid-cols-12 items-center py-20 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="md:col-span-1 hidden md:block">
                                <span className="font-mono text-xs text-ochre/40 group-hover:text-ochre transition-colors">{project.id}</span>
                            </div>
                            
                            <div className="md:col-span-4 mb-6 md:mb-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/30">{project.category}</span>
                                    <span className="px-2 py-0.5 border border-ochre/20 text-ochre text-[8px] font-mono uppercase tracking-widest rounded">{project.type}</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold group-hover:translate-x-4 transition-transform">{project.title}</h3>
                            </div>

                            <div className="md:col-span-4 mb-8 md:mb-0">
                                <p className="text-lg text-bone/60 editorial-text max-w-sm italic">
                                    "{project.desc}"
                                </p>
                            </div>

                            <div className="md:col-span-2 flex flex-wrap gap-2 mb-8 md:mb-0">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-mono border border-white/10 px-3 py-1 text-bone/40 group-hover:border-ochre/30 group-hover:text-ochre transition-colors">{t}</span>
                                ))}
                            </div>

                            <div className="md:col-span-1 flex justify-end">
                                <div className="w-14 h-14 bg-graphite rounded-full flex items-center justify-center shadow-neo-out hover:shadow-neo-in transition-all">
                                    {project.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <a href="https://github.com/ritesh-dwivedii" className="tactile-button inline-flex items-center gap-6 py-6 px-12 text-sm font-mono tracking-widest text-ochre uppercase group">
                        Enter Archive <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;