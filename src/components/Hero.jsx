import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, FileDown } from 'lucide-react';

const MagneticButton = ({ children, strength = 0.3, className = "" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => setPosition({ x: 0, y: 0 })}
            animate={{ x: position.x, y: position.y }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, -80]);
    const y2 = useTransform(scrollY, [0, 500], [0, 80]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-alabaster dark:bg-ebony transition-colors duration-700">
            {/* Interactive Grid Overlay */}
            <div className="absolute inset-0 grid-overlay opacity-40" />

            {/* Animated Gradient Orb */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-ochre/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-ochre/5 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto w-full pt-24 md:pt-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <span className="h-px w-8 bg-ochre/40" />
                                <span className="font-mono text-[8px] md:text-[9px] tracking-[0.5em] uppercase text-ochre">
                                    Software Development Engineer @ Toolstr
                                </span>
                            </div>

                            <h1 className="text-[13vw] md:text-9xl lg:text-[14rem] font-serif font-bold leading-[0.8] md:leading-[0.75] mb-8 md:mb-12 tracking-tighter text-ink dark:text-bone">
                                <motion.span style={{ y: y1, display: "inline-block" }}>RITESH</motion.span> <br />
                                <motion.span
                                    style={{ y: y2, display: "inline-block" }}
                                    className="text-ochre italic font-light opacity-90 ml-6 md:ml-24"
                                >
                                    DWIVEDI
                                </motion.span>
                            </h1>

                            <div className="flex flex-wrap items-end gap-8 md:gap-12 mt-12 md:mt-20">
                                <div className="max-w-lg space-y-8 md:space-y-10">
                                    <p className="text-lg md:text-2xl text-ink/60 dark:text-bone/60 leading-relaxed font-light italic">
                                        "Architecting resilient systems through technical precision and aesthetic clarity."
                                    </p>

                                    <MagneticButton strength={0.2} className="inline-block">
                                        <a
                                            href="/Resume2.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-4 md:gap-6 px-8 md:px-10 py-4 md:py-5 glass-panel rounded-full group hover:border-ochre/50"
                                        >
                                            <FileDown size={16} className="text-ochre group-hover:scale-110 transition-transform" />
                                            <span className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] text-ink/60 dark:text-bone/60 group-hover:text-ochre transition-colors uppercase">Get Resume</span>
                                        </a>
                                    </MagneticButton>
                                </div>

                                <div className="hidden lg:block w-px h-32 bg-ochre/20 mx-4" />

                                <div className="glass-panel p-8 rounded-3xl flex flex-col gap-3 min-w-[280px]">
                                    <span className="font-mono text-[8px] md:text-[9px] text-ochre uppercase tracking-[0.4em] mb-1">Core Philosophy</span>
                                    <span className="font-serif text-3xl md:text-4xl text-ink dark:text-bone leading-none font-bold">Architecting<br /> Precision</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-12 right-12 hidden lg:block">
                        <MagneticButton strength={0.4}>
                            <motion.a
                                href="#projects"
                                style={{ opacity }}
                                className="w-40 h-40 glass-panel rounded-full flex flex-col items-center justify-center group overflow-hidden border-ochre/10 hover:border-ochre/40"
                            >
                                <ArrowDownRight className="text-ochre mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={32} />
                                <span className="font-mono text-[9px] tracking-widest text-ink/40 dark:text-bone/40 group-hover:text-ochre transition-colors">SELECTED WORKS</span>
                            </motion.a>
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Background Decorative Typography */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] dark:opacity-[0.01] pointer-events-none select-none hidden lg:block"
            >
                <span className="text-[40rem] font-serif font-bold leading-none -mr-40 text-ink dark:text-white uppercase tracking-tighter">
                    Precision
                </span>
            </motion.div>
        </section>
    );
};

export default Hero;
