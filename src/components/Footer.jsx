import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-100 py-16 mt-auto">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-slate-800 mb-6 inline-block">
                            Abdoulaye DAFFE<span className="text-primary-600">.</span>
                        </Link>
                        <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                            Développeur Fullstack passionné, je construis des applications modernes et robustes avec Java, React, Angular, Python & Spring Boot.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-slate-500 hover:text-primary-600 transition-colors">Accueil</Link></li>
                            <li><Link to="/a-propos" className="text-slate-500 hover:text-primary-600 transition-colors">À propos</Link></li>
                            <li><Link to="/projets" className="text-slate-500 hover:text-primary-600 transition-colors">Projets</Link></li>
                            <li><Link to="/contact" className="text-slate-500 hover:text-primary-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-6">Me suivre</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/abad-code-lab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-white bg-slate-50">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-white bg-slate-50">
                                <Linkedin size={18} />
                            </a>
                            <Link to="/contact" className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-white bg-slate-50">
                                <Mail size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-300 mt-12 pt-8 flex items-center justify-center">
                    <p className="text-sm text-slate-500 text-center">© 2026 Abdoulaye DAFFE. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
