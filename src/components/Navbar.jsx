import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#projects' },
        { name: 'Logs', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="group flex items-center gap-4">
                    <div className="w-10 h-10 bg-graphite border border-white/10 rounded-xl flex items-center justify-center shadow-neo-out group-hover:shadow-neo-in transition-all">
                        <span className="font-serif font-bold text-ochre text-xl">R</span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-bone/60 group-hover:text-ochre transition-colors uppercase">Ritesh_Dwivedi</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-mono uppercase tracking-[0.3em] text-bone/50 hover:text-ochre transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-white/10" />
                    <a 
                        href="#contact" 
                        className="text-[10px] uppercase font-mono tracking-widest text-ochre hover:text-white transition-colors"
                    >
                        Inquiry
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden w-12 h-12 bg-graphite rounded-xl border border-white/5 flex items-center justify-center shadow-neo-out"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed inset-0 bg-ebony z-40 md:hidden flex flex-col items-center justify-center gap-10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-serif font-bold text-bone hover:text-ochre transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
