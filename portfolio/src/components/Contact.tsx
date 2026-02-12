import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to start a project?</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        I'm currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out.
                    </p>

                    <a
                        href="mailto:kshitijrengepatil@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-lg"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Kshitij Renge. All rights reserved.</p>

                        <div className="flex items-center gap-8">
                            <a
                                href="https://www.linkedin.com/in/kshitij-renge-19222b325"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/KR110805"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
