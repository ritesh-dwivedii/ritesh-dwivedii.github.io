import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-alabaster dark:bg-ebony relative transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-end">
                    <div>
                        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-bold leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12 text-ink dark:text-bone">
                            GET IN <br />
                            <span className="text-ochre italic font-light">TOUCH</span>
                        </h2>
                        
                        <div className="space-y-6 md:space-y-8 mt-12 md:mt-20">
                            <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-graphite rounded-2xl flex items-center justify-center shadow-sm border border-white/10 group-hover:border-ochre transition-all">
                                    <Mail className="text-ochre" size={20} />
                                </div>
                                <div>
                                    <span className="font-mono text-[8px] md:text-[10px] text-ink/40 dark:text-bone/40 uppercase tracking-widest block mb-1">Inquiry</span>
                                    <a href="mailto:riteshs2902@gmail.com" className="text-lg md:text-2xl font-serif text-ink dark:text-bone hover:text-ochre transition-colors">
                                        riteshs2902@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <form className="space-y-8 md:space-y-12">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                <div className="space-y-3 md:space-y-4">
                                    <label className="font-mono text-[8px] md:text-[10px] text-ink/30 dark:text-bone/30 uppercase tracking-[0.2em]">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-transparent border-b border-sand dark:border-white/10 py-3 md:py-4 font-serif text-lg md:text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-ink/10 dark:placeholder:text-bone/10 text-ink dark:text-bone"
                                        placeholder="Alexander Chen"
                                    />
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <label className="font-mono text-[8px] md:text-[10px] text-ink/30 dark:text-bone/30 uppercase tracking-[0.2em]">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-transparent border-b border-sand dark:border-white/10 py-3 md:py-4 font-serif text-lg md:text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-ink/10 dark:placeholder:text-bone/10 text-ink dark:text-bone"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <label className="font-mono text-[8px] md:text-[10px] text-ink/30 dark:text-bone/30 uppercase tracking-[0.2em]">Message</label>
                                <textarea 
                                    rows="3"
                                    className="w-full bg-transparent border-b border-sand dark:border-white/10 py-3 md:py-4 font-serif text-lg md:text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-ink/10 dark:placeholder:text-bone/10 text-ink dark:text-bone resize-none"
                                    placeholder="Tell me about your vision..."
                                />
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="tactile-button w-full md:w-auto flex items-center justify-center gap-4 py-5 md:py-6 px-10 md:px-12"
                            >
                                <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-ochre">Initialize Transmission</span>
                                <ArrowUpRight className="text-ochre" size={16} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Background Minimalist Geometry */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1px bg-sand dark:bg-white/5" />
            <div className="absolute bottom-0 right-0 w-1px h-1/3 bg-sand dark:bg-white/5" />
        </section>
    );
};

export default Contact;