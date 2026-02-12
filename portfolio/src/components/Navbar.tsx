import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="relative group overflow-hidden">
                    <div className="relative flex items-center">
                        <span className="text-lg md:text-xl font-bold tracking-wide text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
                            KR1119
                        </span>
                        {/* Animated Underline */}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300 ease-out" />

                        {/* Subtle Gradient Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Refined WhatsApp Icon */}
                    <div className="relative group/wp flex items-center gap-4">
                        <div className="relative flex items-center">
                            <a
                                href="https://wa.me/917030735948"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp"
                                className="flex items-center justify-center p-2.5 rounded-full bg-zinc-800/60 backdrop-blur-md border border-zinc-700 text-green-400 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform-gpu"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.665.15-.197.3-.761.961-.933 1.161-.173.199-.344.223-.646.074-.302-.15-1.274-.47-2.426-1.503-.897-.8-1.502-1.788-1.678-2.088-.175-.3-.02-.462.13-.612.135-.135.302-.352.451-.527.151-.174.2-.299.3-.499.1-.2.05-.374-.025-.525-.075-.15-.665-1.604-.911-2.198-.239-.578-.484-.5-.665-.51-.172-.007-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.416.249-.695.249-1.291.174-1.415-.074-.124-.272-.198-.57-.347m-5.421 7.412c-1.935 0-3.824-.52-5.474-1.503l-.393-.233-4.067 1.066 1.085-3.961-.256-.407c-1.08-1.72-1.65-3.72-1.65-5.787 0-6.059 4.92-10.978 10.978-10.978 2.936 0 5.696 1.144 7.772 3.22 2.076 2.076 3.22 4.836 3.22 7.758 0 6.061-4.922 10.979-10.982 10.979m10.977-21.621c-2.936-2.937-6.841-4.555-10.984-4.555-8.552 0-15.512 6.96-15.512 15.511 0 2.733.714 5.401 2.071 7.751l-2.204 8.05 8.238-2.16c2.26 1.231 4.8 1.88 7.4 1.884h.006c8.553 0 15.513-6.96 15.513-15.513 0-4.144-1.614-8.038-4.561-10.988" />
                                </svg>
                            </a>

                            {/* Tooltip */}
                            <div className="absolute top-14 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-zinc-900/90 backdrop-blur-md text-white text-[11px] font-medium tracking-wide whitespace-nowrap rounded-lg border border-white/10 shadow-xl opacity-0 group-hover/wp:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/wp:translate-y-0">
                                Chat with me
                            </div>
                        </div>

                        <a
                            href="mailto:kshitijrengepatil@gmail.com"
                            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-zinc-800/50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-x-4 top-24 md:hidden bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Mobile WhatsApp Link */}
                            <a
                                href="https://wa.me/917030735948"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700 text-green-400 font-medium active:scale-95 transition-all"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.665.15-.197.3-.761.961-.933 1.161-.173.199-.344.223-.646.074-.302-.15-1.274-.47-2.426-1.503-.897-.8-1.502-1.788-1.678-2.088-.175-.3-.02-.462.13-.612.135-.135.302-.352.451-.527.151-.174.2-.299.3-.499.1-.2.05-.374-.025-.525-.075-.15-.665-1.604-.911-2.198-.239-.578-.484-.5-.665-.51-.172-.007-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.416.249-.695.249-1.291.174-1.415-.074-.124-.272-.198-.57-.347m-5.421 7.412c-1.935 0-3.824-.52-5.474-1.503l-.393-.233-4.067 1.066 1.085-3.961-.256-.407c-1.08-1.72-1.65-3.72-1.65-5.787 0-6.059 4.92-10.978 10.978-10.978 2.936 0 5.696 1.144 7.772 3.22 2.076 2.076 3.22 4.836 3.22 7.758 0 6.061-4.922 10.979-10.982 10.979m10.977-21.621c-2.936-2.937-6.841-4.555-10.984-4.555-8.552 0-15.512 6.96-15.512 15.511 0 2.733.714 5.401 2.071 7.751l-2.204 8.05 8.238-2.16c2.26 1.231 4.8 1.88 7.4 1.884h.006c8.553 0 15.513-6.96 15.513-15.513 0-4.144-1.614-8.038-4.561-10.988" />
                                </svg>
                                WhatsApp
                            </a>

                            <a
                                href="mailto:kshitijrengepatil@gmail.com"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
