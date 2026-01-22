import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, Layout } from 'lucide-react';

const Skills = () => {
    const scaleVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout className="w-6 h-6 text-blue-400" />,
            skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
        },
        {
            title: "Backend",
            icon: <Server className="w-6 h-6 text-purple-400" />,
            skills: ["Java", "Spring Boot", "Node.js", "Express.js", "C#", ".NET Core"]
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6 text-green-400" />,
            skills: ["MySQL", "MongoDB", "SQL Server", "PostgreSQL"]
        },
        {
            title: "Languages",
            icon: <Code className="w-6 h-6 text-yellow-400" />,
            skills: ["Java", "Python", "JavaScript", "C++", "C#", "SQL"]
        },
        {
            title: "Tools & DevOps",
            icon: <Terminal className="w-6 h-6 text-red-400" />,
            skills: ["Git", "GitHub", "Docker", "Jenkins", "Postman", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A comprehensive toolkit of technologies I use to build scalable and efficient solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover="hover"
                        whileTap="tap"
                        variants={scaleVariants}
                        className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-primary transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300 border border-white/5 hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
