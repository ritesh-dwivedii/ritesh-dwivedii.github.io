import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 md:px-12 bg-alabaster dark:bg-ebony relative overflow-hidden border-t border-sand dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-6">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-ink dark:text-bone">Ritesh Dwivedi</h3>
                        <p className="font-mono text-[8px] md:text-[10px] text-ink/30 dark:text-bone/30 uppercase tracking-[0.3em] leading-loose">
                            Software Development Engineer / <br />
                            Currently at Toolstr / <br />
                            Precision in Every Line
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <span className="font-mono text-[8px] md:text-[10px] text-ochre uppercase tracking-widest mb-4 md:mb-6 block">Navigation</span>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <a href="#about" className="text-ink/50 dark:text-bone/50 hover:text-ink dark:hover:text-white transition-colors text-xs md:text-sm font-serif italic">Background</a>
                            <a href="#projects" className="text-ink/50 dark:text-bone/50 hover:text-ink dark:hover:text-white transition-colors text-xs md:text-sm font-serif italic">Selected Works</a>
                            <a href="#experience" className="text-ink/50 dark:text-bone/50 hover:text-ink dark:hover:text-white transition-colors text-xs md:text-sm font-serif italic">Career Logs</a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <span className="font-mono text-[8px] md:text-[10px] text-ochre uppercase tracking-widest mb-4 md:mb-6 block">Connect</span>
                        <div className="flex gap-4 md:gap-6">
                            <a href="https://github.com/ritesh-dwivedii" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-graphite rounded-xl border border-sand dark:border-white/5 flex items-center justify-center shadow-sm hover:border-ochre transition-all text-ink/50 dark:text-bone/50 hover:text-ochre">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/ritesh-dwivedi" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-graphite rounded-xl border border-sand dark:border-white/5 flex items-center justify-center shadow-sm hover:border-ochre transition-all text-ink/50 dark:text-bone/50 hover:text-ochre">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-sand dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <p className="font-mono text-[8px] md:text-[10px] text-ink/20 dark:text-bone/20 uppercase tracking-widest text-center md:text-left">
                        © {new Date().getFullYear()} Ritesh Dwivedi / All Rights Reserved
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-ochre/20 rounded-full" />
                        <span className="font-mono text-[8px] md:text-[10px] text-ink/20 dark:text-bone/20 uppercase tracking-widest">System_v1.0.4_Stable</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;