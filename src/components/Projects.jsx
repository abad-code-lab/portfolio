import React from 'react';
import { Code2, Monitor, Github, ExternalLink } from 'lucide-react';

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
                        <div className="h-48 bg-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-primary-600/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <Monitor size={48} className="text-primary-600/50" />
                            </div>
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
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full">
                        <div className="h-48 bg-slate-200 relative overflow-hidden">
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
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full">
                        <div className="h-48 bg-slate-200 relative overflow-hidden">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
