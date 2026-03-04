import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../img/logo_abad.jpeg';

export default function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when location changes or on resize
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Accueil' },
        { path: '/a-propos', label: 'À propos' },
        { path: '/experiences', label: 'Expériences' },
        { path: '/competences', label: 'Compétences' },
        { path: '/projets', label: 'Projets' },
        { path: '/certifications', label: 'Certifications' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-4 shadow-sm' : 'glass-effect py-6 border-transparent shadow-none'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 mr-4 sm:mr-8 flex items-center justify-center">
                            <div className="relative">
                                {/* Decorative Outer Rings (Scaled down for Navbar) */}
                                <div className="absolute inset-[-0.3rem] rounded-full border border-blue-100 animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-[-0.2rem] rounded-full border border-blue-200 opacity-60"></div>
                                <div className="absolute inset-[-0.1rem] rounded-full border-2 border-primary-300"></div>

                                {/* Image Container */}
                                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden bg-slate-200 relative z-10 shadow-md">
                                    <img src={logo} alt="Logo Abdoulaye DAFFE" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className="font-bold text-xl lg:text-3xl text-slate-800 tracking-tighter flex-shrink-0">
                            Abdoulaye DAFFE<span className="text-primary-600">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 whitespace-nowrap">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`font-medium transition-all ${isActive ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary-600 focus:outline-none p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in shadow-2xl rounded-b-3xl absolute top-full left-0 w-full overflow-hidden">
                    <div className="px-4 pt-2 pb-8 space-y-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-4 py-4 rounded-2xl text-lg font-medium transition-all ${isActive ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
