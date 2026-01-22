import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Experience = () => {
    const education = [
        {
            degree: "PG-DAC",
            institution: "Sunbeam (ACTS, C-DAC), Pune",
            period: "Aug 2025 - Feb 2026",
            desc: "Post Graduate Diploma in Advanced Computing"
        },
        {
            degree: "Master of Computer Application",
            institution: "IPS Academy, Indore",
            period: "Sep 2023 - Jun 2025",
            desc: "Specialized in Computer Applications"
        },
        {
            degree: "Bachelor of Science",
            institution: "PTSNS University, Shahdol",
            period: "Jul 2018 - Sep 2022",
            desc: "Undergraduate Degree"
        }
    ];

    const achievements = [
        "Global Rank 2091 in TCS CodeVita Season 12 (2024)",
        "Deloitte Australia Technology Job Simulation (2025)",
        "Infosys Springboard Certification (HTML, CSS, JS)",
        "TCS iON Communication Skills Certification (2025)"
    ];

    return (
        <section id="experience" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                    Education & <span className="gradient-text">Achievements</span>
                </h2>
                <p className="text-slate-400">My academic journey and professional milestones.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <GraduationCap className="text-primary" /> Education
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-600" />
                                <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                                <div className="flex justify-between items-center text-sm text-slate-400 mt-2">
                                    <span>{edu.period}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Award className="text-yellow-400" /> Achievements
                    </h3>
                    <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-5 flex items-start gap-4 hover:bg-white/10 transition-colors"
                            >
                                <div className="min-w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                                    <Award size={16} />
                                </div>
                                <p className="text-slate-300">{achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
