import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/5 relative z-10 glass-nav">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/ritesh-dwivedii"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-dwivedi-66a337256"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-all"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:riteshs2902@gmail.com"
          className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Ritesh Dwivedi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;