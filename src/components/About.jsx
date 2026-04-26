import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-ebony transition-colors duration-700">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
                    <div className="max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[12vw] md:text-6xl lg:text-9xl font-serif font-bold leading-[0.9] md:leading-[0.8] text-ink dark:text-bone tracking-tighter"
                        >
                            THE <br />
                            <span className="text-ochre italic font-light break-words">ENGINEERING</span> <br />
                            PHILOSOPHY
                        </motion.h2>
                    </div>
                </div>

                <div className="bento-grid">
                    {/* Main Story Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bento-item col-span-12 lg:col-span-8 group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
                            <Target size={120} className="text-ochre" />
                        </div>
                        <div>
                            <span className="font-mono text-[8px] md:text-[9px] text-ochre uppercase tracking-[0.4em] mb-4 md:mb-6 block">Our Core</span>
                            <h3 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-ink dark:text-bone mb-6 md:mb-8 leading-tight">
                                Bridging technical complexity <br className="hidden md:block" /> with <span className="italic font-light">aesthetic clarity</span>.
                            </h3>
                        </div>
                        <p className="text-lg md:text-xl text-ink/60 dark:text-bone/60 leading-relaxed max-w-2xl italic">
                            "Currently based at Toolstr, I focus on building resilient systems that solve high-impact problems. My journey is defined by a relentless pursuit of technical excellence."
                        </p>
                    </motion.div>

                    {/* Precision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bento-item col-span-12 md:col-span-6 lg:col-span-4"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-6 md:mb-8">
                                <Zap size={28} className="text-ochre mb-4 md:mb-6" />
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-ink dark:text-bone mb-3 md:mb-4">Precision First</h3>
                            </div>
                            <p className="text-sm text-ink/50 dark:text-bone/50 leading-relaxed font-mono">
                                Code is not just functionality; it's a structural masterpiece. I build with the intent of permanence, ensuring every microservice is optimized.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bento-item col-span-12 md:col-span-6 lg:col-span-5"
                    >
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="p-3 md:p-4 glass-panel rounded-2xl shrink-0">
                                <GraduationCap size={20} className="text-ochre" />
                            </div>
                            <div>
                                <span className="font-mono text-[8px] md:text-[9px] text-ochre uppercase tracking-[0.4em] mb-3 md:mb-4 block">Education</span>
                                <h4 className="text-lg md:text-xl font-serif font-bold text-ink dark:text-bone mb-1">Master of Computer Applications</h4>
                                <p className="text-xs md:text-sm text-ink/40 dark:text-bone/40 font-mono">IPS Academy, Indore</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Focus Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bento-item col-span-12 lg:col-span-7 !bg-ochre dark:!bg-ochre !border-none text-ink group"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                            <div className="text-left">
                                <span className="font-mono text-[8px] md:text-[9px] text-ink/60 uppercase tracking-[0.4em] mb-3 md:mb-4 block">Technical Focus</span>
                                <h4 className="text-2xl md:text-3xl font-serif font-bold mb-2">Scalable Architectures</h4>
                                <p className="text-ink/80 font-mono text-xs md:text-sm">Spring Boot / Microservices / Cloud</p>
                            </div>
                            <div className="w-px h-16 bg-ink/20 hidden md:block" />
                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Heart size={18} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-ochre/5 rounded-full blur-[100px]" />
        </section>
    );
};

export default About;