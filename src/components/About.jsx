import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-20 items-start">
                    {/* Left Side: Headline */}
                    <div className="lg:col-span-5">
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
                        >
                            THE <br />
                            <span className="text-ochre">ENGINEERING</span> <br />
                            PHILOSOPHY
                        </motion.h2>
                        
                        <div className="mt-12 space-y-12">
                            <div className="tactile-card p-10">
                                <h3 className="font-serif text-2xl mb-4">Precision First</h3>
                                <p className="text-bone/60 leading-relaxed editorial-text">
                                    Code is not just functionality; it's a structural masterpiece. I build with the intent of permanence, ensuring every microservice and frontend component is optimized for performance and maintainability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-7 pt-20 lg:pt-0">
                        <div className="space-y-16">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-3xl text-bone/80 font-light leading-relaxed editorial-text italic"
                            >
                                Currently based at <strong className="text-ochre not-italic font-bold">Toolstr</strong>, 
                                I focus on building resilient systems that solve high-impact problems. 
                                My journey is defined by a relentless pursuit of technical excellence and aesthetic clarity.
                            </motion.p>

                            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                                <div>
                                    <span className="font-mono text-[10px] text-ochre uppercase tracking-widest mb-4 block">Education</span>
                                    <h4 className="text-xl font-serif mb-2">Master of Computer Applications</h4>
                                    <p className="text-bone/40 text-sm">IPS Academy, Indore</p>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-ochre uppercase tracking-widest mb-4 block">Technical Focus</span>
                                    <h4 className="text-xl font-serif mb-2">Distributed Systems</h4>
                                    <p className="text-bone/40 text-sm">Spring Boot / Microservices / Cloud</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;