import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full pt-32">
                <div className="grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="font-mono text-xs tracking-[0.4em] uppercase text-ochre mb-8 block">
                                [ Software Development Engineer @ Toolstr ]
                            </span>
                            
                            <h1 className="text-7xl md:text-[12rem] font-serif font-bold leading-[0.8] mb-12 tracking-tighter">
                                RITESH <br />
                                <span className="text-ochre italic font-light opacity-80">DWIVEDI</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-12 mt-16">
                                <p className="max-w-xl text-xl text-bone/60 leading-relaxed editorial-text italic">
                                    "An adaptable polyglot engineer dedicated to building resilient, high-impact digital systems. Bridging technical complexity with elegant solutions."
                                </p>
                                <div className="hidden md:block w-px h-24 bg-white/10" />
                                <div className="flex flex-col gap-2">
                                    <span className="font-mono text-[10px] text-bone/40 uppercase tracking-widest">Core Philosophy</span>
                                    <span className="font-serif text-3xl">Architecting Precision.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-12 right-12">
                        <motion.a
                            href="#projects"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-32 h-32 md:w-48 md:h-48 bg-graphite border border-white/5 rounded-full flex flex-col items-center justify-center shadow-neo-out hover:shadow-neo-in transition-all group overflow-hidden"
                        >
                            <ArrowDownRight className="text-ochre mb-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" size={40} />
                            <span className="font-mono text-[10px] tracking-widest text-bone/60 group-hover:text-ochre transition-colors">EXPLORE</span>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Background Accent Typography */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none">
                <span className="text-[35rem] font-serif font-bold leading-none -mr-40">RITESH</span>
            </div>
        </section>
    );
};

export default Hero;
