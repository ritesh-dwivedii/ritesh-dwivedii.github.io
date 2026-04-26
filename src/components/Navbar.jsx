import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const MagneticWrapper = ({ children, strength = 0.5 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', description: 'Who I am & What I do' },
        { name: 'Works', href: '#projects', description: 'Selected Design & Dev' },
        { name: 'Logs', href: '#experience', description: 'Professional Journey' },
        { name: 'Contact', href: '#contact', description: 'Let\'s build something' },
    ];

    const menuVariants = {
        closed: { opacity: 0, y: "-100%" },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-ochre origin-left z-[60]"
                style={{ scaleX }}
            />

            <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-white/60 dark:bg-ebony/60 backdrop-blur-xl border-b border-white/10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-[100] flex justify-between items-center">
                <MagneticWrapper strength={0.2}>
                    <a href="#home" className="group flex items-center gap-4">
                        <div className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center group-hover:border-ochre/50 transition-all">
                            <span className="font-serif font-bold text-ochre text-xl">R</span>
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.3em] text-ink/40 dark:text-bone/60 group-hover:text-ochre dark:group-hover:text-ochre transition-colors uppercase hidden sm:block">Ritesh_Dwivedi</span>
                    </a>
                </MagneticWrapper>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8 px-6 py-2 glass-panel rounded-full">
                        {navLinks.map((link) => (
                            <MagneticWrapper key={link.name} strength={0.3}>
                                <a
                                    href={link.href}
                                    className="text-[9px] font-mono uppercase tracking-[0.3em] text-ink/70 dark:text-bone/50 hover:text-ochre transition-all"
                                >
                                    {link.name}
                                </a>
                            </MagneticWrapper>
                        ))}
                    </div>
                
                    <div className="flex items-center gap-4">
                        <MagneticWrapper strength={0.4}>
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-ochre hover:border-ochre/50 transition-all"
                                aria-label="Toggle theme"
                            >
                                <motion.div
                                    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                                </motion.div>
                            </button>
                        </MagneticWrapper>

                        <div className="w-px h-6 bg-white/10 mx-2" />
                        
                        <MagneticWrapper strength={0.3}>
                            <a 
                                href="#contact" 
                                className="px-6 py-2 glass-panel rounded-full text-[9px] uppercase font-mono tracking-widest text-ochre hover:bg-ochre hover:text-white transition-all"
                            >
                                Inquiry
                            </a>
                        </MagneticWrapper>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-ochre"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button 
                        className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={18} className="text-ink dark:text-bone" /> : <Menu size={18} className="text-ink dark:text-bone" />}
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="fixed inset-0 bg-white dark:bg-ebony z-[90] md:hidden overflow-hidden flex flex-col"
                    >
                        {/* Background Decor */}
                        <div className="absolute inset-0 grid-overlay opacity-[0.03] dark:opacity-[0.05]" />
                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none">
                            <span className="text-[20vw] font-serif font-bold rotate-90">MENU</span>
                        </div>

                        <div className="flex-1 flex flex-col justify-center px-10 relative">
                            <motion.span 
                                variants={linkVariants}
                                className="font-mono text-[10px] uppercase tracking-[0.3em] text-ochre mb-12 block border-b border-ochre/20 pb-4"
                            >
                                Navigation
                            </motion.span>
                            
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} variants={linkVariants}>
                                        <a
                                            href={link.href}
                                            className="group flex flex-col gap-1"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="flex items-end gap-4">
                                                <span className="text-5xl font-serif font-bold text-ink dark:text-bone group-hover:text-ochre transition-colors">
                                                    {link.name}
                                                </span>
                                                <ExternalLink size={16} className="mb-2 opacity-0 group-hover:opacity-100 transition-all text-ochre -translate-x-2 group-hover:translate-x-0" />
                                            </div>
                                            <span className="font-mono text-[9px] uppercase tracking-widest text-ink/30 dark:text-bone/30 group-hover:text-ochre/60 transition-colors">
                                                {link.description}
                                            </span>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Footer */}
                        <motion.div 
                            variants={linkVariants}
                            className="p-10 border-t border-ink/5 dark:border-white/5 bg-alabaster/50 dark:bg-white/[0.02] backdrop-blur-md relative"
                        >
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col gap-2">
                                        <span className="font-mono text-[8px] uppercase tracking-widest text-ink/40 dark:text-bone/40">Connect</span>
                                        <div className="flex gap-6">
                                            <a href="https://github.com/ritesh-dwivedii" className="text-ink dark:text-bone hover:text-ochre transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href="https://linkedin.com/in/ritesh-dwivedi" className="text-ink dark:text-bone hover:text-ochre transition-colors">
                                                <Linkedin size={20} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-mono text-[8px] uppercase tracking-widest text-ink/40 dark:text-bone/40 block mb-2">Availability</span>
                                        <div className="flex items-center gap-2 justify-end">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-[10px] font-mono text-ink dark:text-bone">Available for Projects</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-8 border-t border-ink/5 dark:border-white/5">
                                    <span className="font-mono text-[8px] uppercase tracking-tighter text-ink/20 dark:text-bone/20">© 2026 RD_SYSTEM</span>
                                    <div className="flex items-center gap-2 text-[8px] font-mono text-ink/20 dark:text-bone/20">
                                        <span>EN</span>
                                        <div className="w-1 h-1 bg-ochre/20 rounded-full" />
                                        <span>HI</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
