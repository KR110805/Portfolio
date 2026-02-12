import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/3 sticky top-32"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                        <div className="w-20 h-1 bg-white/20"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-2/3"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                            I'm a frontend developer based in India, passionate about building digital products that look great and perform even better.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            My journey in web development started with a curiosity for how things work on the internet. detailed-oriented approach to code and design. I believe in clean code, user-centric design, and accessibility.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source, or refining my design skills.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
