import React, { useState, useEffect } from 'react';
import { Code2, Monitor, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Défilement automatique toutes les 3 secondes
        return () => clearInterval(interval);
    }, [images]);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full group/carousel">
            <img
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/carousel:scale-105"
            />
            {/* Overlay link */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                <ExternalLink size={32} className="text-white drop-shadow-lg" />
            </div>

            {/* Controls */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 pointer-events-auto"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 pointer-events-auto"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-primary-500' : 'w-2 bg-white/60'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default function Projects() {
    return (
        <section className="min-h-screen py-24 bg-white pt-32">
            <div className="max-w-6xl mx-auto px-4 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <Code2 className="text-primary-600" size={32} />
                    <h2 className="text-4xl font-bold text-slate-800">Réalisations</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full">
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <ImageCarousel images={[
                                "/img/projects/dashboard.png",
                                "/img/projects/evaluations_list.png",
                                "/img/projects/grading_interface.png",
                                "/img/projects/import_students.png"
                            ]} />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">Gestion des notes étudiants</h3>
                            <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed flex-grow">
                                Projet de fin de Master 1 : Application web complète pour la gestion des notes des étudiants du département Informatique de l'UASZ.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-6">
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">Spring Boot</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">ReactJS</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">MariaDB</span>
                            </div>
                            <div className="flex gap-4 mt-auto border-t border-slate-100 pt-4">
                                <a
                                    href="https://github.com/abad-code-lab/Projet_Module"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                                >
                                    <Github size={16} /> Code
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full">
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-primary-600/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <Monitor size={48} className="text-primary-600/50" />
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">Vulgarisation des ouvriers</h3>
                            <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed flex-grow">
                                Conception d'une API REST et d'une plateforme web pour la visibilité et la mise en relation des ouvriers non professionnels.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-6">
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">Spring Boot</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">ReactJS</span>
                            </div>
                            <div className="flex gap-4 mt-auto border-t border-slate-100 pt-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                                    <Github size={16} /> Code
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full">
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-primary-600/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <Monitor size={48} className="text-primary-600/50" />
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">Inscriptions pédagogiques</h3>
                            <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed flex-grow">
                                Application de bureau dédiée à la gestion administrative des inscriptions pédagogiques des étudiants.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-6">
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">Java</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">Swing</span>
                            </div>
                            <div className="flex gap-4 mt-auto border-t border-slate-100 pt-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 4 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="h-64 bg-slate-200 relative overflow-hidden">
                            <ImageCarousel images={[
                                "/img/projects/portfolio_home.png",
                                "/img/projects/portfolio_about.png",
                                "/img/projects/portfolio_skills.png",
                                "/img/projects/portfolio_projects.png"
                            ]} />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">Mon Portfolio Personnel</h3>
                            <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed flex-grow">
                                Design moderne et épuré avec React et Tailwind CSS. Intègre des animations dynamiques et un layout responsive complet.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-6">
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">ReactJS</span>
                                <span className="bg-white border border-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">Tailwind CSS</span>
                            </div>
                            <div className="flex gap-4 mt-auto border-t border-slate-100 pt-4">
                                <a
                                    href="https://github.com/abad-code-lab/portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                                >
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
