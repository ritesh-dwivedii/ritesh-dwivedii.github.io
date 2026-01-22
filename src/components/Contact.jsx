import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Create mailto link
    window.location.href = `mailto:riteshs2902@gmail.com?subject=Portfolio Contact from ${name}&body=${message} (from ${email})`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-slate-400">
          Interested in working together? Let's verify if we are a perfect match.
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-slate-200 resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary hover:bg-indigo-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400 mb-4">Or email me directly at</p>
          <a
            href="mailto:riteshs2902@gmail.com"
            className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition-colors"
          >
            <Mail size={24} />
            riteshs2902@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;