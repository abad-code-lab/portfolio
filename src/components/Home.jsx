import React, { useState, useEffect } from 'react';
import { ExternalLink, Download, Github, Linkedin, Mail, Monitor, Terminal, Code2, Database, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import lebon from '../img/lebon.jpeg';
import cvFile from '../fichiers/CV_Abdoulaye_DAFFE.pdf';
import cert01 from '../certificats/Coursera 1LCCYT4V83S9_certificat01.pdf';

export default function Home() {
    const [typingText, setTypingText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const skills = ['ReactJS', 'Spring Boot', 'Angular', 'Python', 'Java'];

    useEffect(() => {
        let timer;
        const currentSkill = skills[typingIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypingText((prev) => currentSkill.substring(0, prev.length - 1));
            }, 50); // Faster delete
        } else {
            timer = setTimeout(() => {
                setTypingText((prev) => currentSkill.substring(0, prev.length + 1));
            }, 100); // Slower typing
        }

        if (!isDeleting && typingText === currentSkill) {
            timer = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        } else if (isDeleting && typingText === '') {
            setIsDeleting(false);
            setTypingIndex((prev) => (prev + 1) % skills.length); // Move to next word
        }

        return () => clearTimeout(timer);
    }, [typingText, isDeleting, typingIndex]);

    return (
        <section className="min-h-screen flex flex-col justify-between overflow-hidden bg-white">
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex-grow flex items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10 w-full animate-fade-in-up">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        {/* Left Column: Text Content */}
                        <div className="md:w-1/2 text-left">
                            <div className="mb-6 inline-block rounded-full px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-800 font-medium text-sm tracking-wide">
                                Portfolio | Développeur Fullstack
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                                Bonjour, je suis <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">Abdoulaye DAFFE</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-6 h-10">
                                Développeur <span className="text-primary-600 relative after:content-['|'] after:animate-pulse after:absolute after:-right-4">{typingText}</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 max-w-xl font-light leading-relaxed">
                                Je conçois et développe des applications web modernes, robustes et élégantes, en utilisant les dernières technologies du marché.
                            </p>
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link to="/projets" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2">
                                    Voir mes projets
                                    <ExternalLink size={18} />
                                </Link>
                                <a href={cvFile} download="CV_Abdoulaye_DAFFE.pdf" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-primary-600 border-2 border-slate-200 hover:border-primary-200 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm flex items-center justify-center gap-2">
                                    <Download size={18} />
                                    Télécharger CV
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 text-slate-600">
                                <span className="font-medium text-sm">Me suivre :</span>
                                <div className="flex items-center gap-3">
                                    <a href="https://github.com/abad-code-lab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-slate-50">
                                        <Github size={18} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-slate-50">
                                        <Linkedin size={18} />
                                    </a>
                                    <Link to="/contact" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary-400 hover:text-primary-600 transition-colors text-slate-400 hover:bg-slate-50">
                                        <Mail size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Image Placeholder */}
                        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
                            {/* Decorative elements behind image */}
                            <div className="absolute inset-0 bg-primary-600/10 rounded-[3rem] transform rotate-6 scale-105 -z-10"></div>
                            <div className="absolute inset-0 bg-blue-400/10 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>

                            {/* The Image */}
                            <div className="aspect-[4/5] w-full max-w-md bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl flex items-center justify-center">
                                <img src={lebon} alt="Abdoulaye DAFFE" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Skills Preview Section */}
            <div className="w-full bg-slate-50 py-24 mt-0">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">Les stacks que j'utilise</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg font-light">
                        Voici un aperçu des technologies que j'utilise au quotidien pour concevoir des applications modernes et performantes. La liste complète est disponible dans la section <Link to="/competences" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">Compétences</Link>.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Front-end */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">React</h3>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">Angular</h3>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                                <Terminal size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">JavaScript</h3>
                        </div>

                        {/* Back-end */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                                <Code2 size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">Spring Boot</h3>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
                                <Code2 size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">Java</h3>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                <Terminal size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">Python</h3>
                        </div>

                        {/* DataBase */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                                <Database size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">MySQL</h3>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-md">
                            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4">
                                <Database size={32} />
                            </div>
                            <h3 className="font-bold tracking-tight text-slate-800">Oracle</h3>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-16">
                        <Link to="/competences" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                            Voir mes compétences
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured Projects Preview Section */}
            <div className="w-full bg-white py-24">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Projets en Vedette</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-sm">
                        Une sélection de mes réalisations les plus significatives
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Project 1 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
                            <div className="h-48 bg-slate-50 relative p-6 flex justify-center items-center">
                                <div className="w-full h-full bg-white rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                                    <Monitor size={48} className="text-primary-400" />
                                    <Code2 size={24} className="text-primary-600 absolute top-4 right-4" />
                                    <Database size={24} className="text-blue-300 absolute bottom-4 left-4" />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">Gestion des notes étudiants</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                                    Application web pour la gestion des notes des étudiants du département Informatique de l'UASZ.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-8">
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">Spring Boot</span>
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">ReactJS</span>
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">MariaDB</span>
                                </div>
                                <Link to="/projets" className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 transition-colors mt-auto">
                                    Voir le projet <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
                            <div className="h-48 bg-slate-50 relative p-6 flex justify-center items-center">
                                <div className="w-full h-full bg-white rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                                    <Monitor size={48} className="text-primary-400" />
                                    <Database size={24} className="text-primary-600 absolute top-4 right-4" />
                                    <Code2 size={24} className="text-blue-300 absolute bottom-4 left-4" />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">Vulgarisation des ouvriers</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                                    API REST et plateforme web pour la visibilité et la mise en relation des ouvriers non professionnels.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-8">
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">Spring Boot</span>
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">ReactJS</span>
                                </div>
                                <Link to="/projets" className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 transition-colors mt-auto">
                                    Voir le projet <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
                            <div className="h-48 bg-slate-50 relative p-6 flex justify-center items-center">
                                <div className="w-full h-full bg-white rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                                    <Monitor size={48} className="text-primary-400" />
                                    <Code2 size={24} className="text-blue-300 absolute top-4 right-4" />
                                    <Database size={24} className="text-primary-600 absolute bottom-4 left-4" />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">Inscriptions pédagogiques</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                                    Application de gestion administrative des inscriptions pédagogiques des étudiants.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-8">
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">Java</span>
                                    <span className="bg-blue-50 text-primary-600 text-[10px] px-3 py-1 rounded-full font-medium">Swing</span>
                                </div>
                                <Link to="/projets" className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 transition-colors mt-auto">
                                    Voir le projet <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-16 text-center">
                        <Link to="/projets" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg mb-6">
                            Voir mes projets <span className="ml-2">→</span>
                        </Link>
                        <p className="text-slate-400 text-sm">
                            Plus de 10 projets disponibles dans mon portfolio complet
                        </p>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="w-full bg-slate-50 py-24">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Certifications</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg font-light">
                        Certifications officielles validant mes <span className="text-primary-600 font-medium">compétences techniques</span> et mon engagement dans l'apprentissage continu.
                    </p>

                    <div className="flex justify-center">
                        {/* Certif 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden max-w-md w-full">
                            <div className="absolute top-0 right-8 w-8 h-12 bg-orange-100/50 flex justify-center pt-2 rounded-b-md">
                                <Award size={20} className="text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug pr-8 group-hover:text-primary-600 transition-colors">
                                    Vulnerability Scanning with Nmap: Network Scanning
                                </h3>
                                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                                    <CheckCircle2 size={16} className="text-primary-500" />
                                    <span className="font-medium text-slate-700 italic">Coursera</span>
                                </div>
                                <p className="text-slate-400 text-xs text-center mb-6">Obtenu en 2024</p>

                                <div className="flex gap-2 flex-wrap mb-8 justify-center">
                                    <span className="bg-slate-100 text-slate-600 text-xs px-4 py-1.5 rounded-full font-medium">Analyse Résaux</span>
                                    <span className="bg-slate-100 text-slate-600 text-xs px-4 py-1.5 rounded-full font-medium">Sécurité</span>
                                    <span className="bg-slate-100 text-slate-600 text-xs px-4 py-1.5 rounded-full font-medium">Nmap</span>
                                </div>
                            </div>
                            <a href={cert01} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white border border-primary-600 px-6 py-3 rounded-xl font-medium transition-all shadow-sm group">
                                <span>Voir la certification</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
