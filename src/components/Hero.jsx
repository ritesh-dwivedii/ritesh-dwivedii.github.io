import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center relative">
            <div className="text-center max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
                        Building digital <br />
                        <span className="gradient-text">experiences that matter</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I'm a Full-Stack Developer specializing in building exceptional digital experiences.
                        Currently leveraging the power of modern web technologies to solve complex problems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-indigo-500 transition-all flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="Ritesh_Dwivedi_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 glass-card hover:bg-white/10 transition-all rounded-full font-medium flex items-center gap-2"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="text-slate-500 text-sm">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
