import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 md:px-12 bg-ebony relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-6">
                        <h3 className="text-4xl font-serif font-bold mb-6">Ritesh Dwivedi</h3>
                        <p className="font-mono text-[10px] text-bone/30 uppercase tracking-[0.3em] leading-loose">
                            Software Development Engineer / <br />
                            Currently at Toolstr / <br />
                            Precision in Every Line
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <span className="font-mono text-[10px] text-ochre uppercase tracking-widest mb-6 block">Navigation</span>
                        <div className="flex flex-col gap-4">
                            <a href="#about" className="text-bone/50 hover:text-white transition-colors text-sm font-serif italic">Background</a>
                            <a href="#projects" className="text-bone/50 hover:text-white transition-colors text-sm font-serif italic">Selected Works</a>
                            <a href="#experience" className="text-bone/50 hover:text-white transition-colors text-sm font-serif italic">Career Logs</a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <span className="font-mono text-[10px] text-ochre uppercase tracking-widest mb-6 block">Connect</span>
                        <div className="flex gap-6">
                            <a href="https://github.com/ritesh-dwivedii" className="w-12 h-12 bg-graphite rounded-xl border border-white/5 flex items-center justify-center shadow-neo-out hover:shadow-neo-in transition-all text-bone/50 hover:text-ochre">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/ritesh-dwivedi" className="w-12 h-12 bg-graphite rounded-xl border border-white/5 flex items-center justify-center shadow-neo-out hover:shadow-neo-in transition-all text-bone/50 hover:text-ochre">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="font-mono text-[10px] text-bone/20 uppercase tracking-widest">
                        © {new Date().getFullYear()} Ritesh Dwivedi / All Rights Reserved
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-ochre/20 rounded-full" />
                        <span className="font-mono text-[10px] text-bone/20 uppercase tracking-widest">System_v1.0.4_Stable</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;