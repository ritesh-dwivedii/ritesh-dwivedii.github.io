import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-ebony relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24 items-end">
                    <div>
                        <h2 className="text-7xl md:text-[10rem] font-serif font-bold leading-[0.8] tracking-tighter mb-12">
                            GET IN <br />
                            <span className="text-ochre">TOUCH</span>
                        </h2>
                        
                        <div className="space-y-8 mt-20">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-16 h-16 bg-graphite rounded-2xl flex items-center justify-center shadow-neo-out group-hover:shadow-neo-in transition-all">
                                    <Mail className="text-ochre" size={24} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-bone/40 uppercase tracking-widest block mb-1">Inquiry</span>
                                    <a href="mailto:riteshs2902@gmail.com" className="text-2xl font-serif text-bone hover:text-ochre transition-colors">
                                        riteshs2902@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <form className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-bone/30 uppercase tracking-[0.2em]">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-bone/10"
                                        placeholder="Alexander Chen"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-bone/30 uppercase tracking-[0.2em]">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-bone/10"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="font-mono text-[10px] text-bone/30 uppercase tracking-[0.2em]">Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-ochre transition-colors placeholder:text-bone/10 resize-none"
                                    placeholder="Tell me about your vision..."
                                />
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="tactile-button w-full md:w-auto flex items-center justify-center gap-4 py-6 px-12"
                            >
                                <span className="font-mono text-xs tracking-[0.3em] uppercase text-ochre">Initialize Transmission</span>
                                <ArrowUpRight className="text-ochre" size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Background Minimalist Geometry */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1px bg-white/5" />
            <div className="absolute bottom-0 right-0 w-1px h-1/3 bg-white/5" />
        </section>
    );
};

export default Contact;