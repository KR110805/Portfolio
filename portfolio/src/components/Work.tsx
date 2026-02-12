import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import dhruvaImage from '../assets/dhruva-preview.png';
import amwImage from '../assets/amw-preview.png';

const projects = [
    {
        id: 1,
        title: 'DHRUVA 2026',
        category: 'Event Platform',
        description: 'A comprehensive event management platform built for a college techno-cultural fest. Features include real-time event updates, registration systems, and an interactive schedule.',
        image: dhruvaImage,
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://dhruva-2026-b548e.web.app',
            github: 'https://github.com/KR110805'
        }
    },
    {
        id: 2,
        title: 'AMW Resources',
        category: 'Corporate Website',
        description: 'A professional corporate website designed for a resource management firm. Focuses on clear information architecture, professional aesthetics, and fast load times.',
        image: amwImage,
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://amw-resources.com',
            github: '#'
        }
    }
];

const Work = () => {
    return (
        <section id="work" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Work</h2>
                    <div className="w-20 h-1 bg-white/20"></div>
                </motion.div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Project Image */}
                                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="aspect-video bg-white/5 relative z-10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    {/* Decorative blur behind */}
                                    <div className="absolute -inset-4 bg-white/5 blur-2xl -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>

                                {/* Project Info */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm font-mono text-white/60">0{index + 1}</span>
                                        <span className="h-px w-8 bg-white/20"></span>
                                        <span className="text-sm font-medium tracking-wider uppercase text-white/60">{project.category}</span>
                                    </div>

                                    <h3 className="text-4xl font-bold mb-6 group-hover:text-white/90 transition-colors">{project.title}</h3>
                                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-300 bg-white/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white font-medium hover:underline underline-offset-4 group/link"
                                        >
                                            Live Demo <ArrowUpRight size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        </a>
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
