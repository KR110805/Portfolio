import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "Core Stack",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Git"]
    },
    {
        category: "Currently Mastering",
        items: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"]
    }
];

const Skills = () => {
    return (
        <section className="py-24 bg-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            I focus on building solid foundations in web development while continuously exploring modern frameworks and tools to create better user experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {skills.map((group, groupIndex) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold mb-6 text-white/90">{group.category}</h3>
                                <ul className="space-y-3">
                                    {group.items.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-gray-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
