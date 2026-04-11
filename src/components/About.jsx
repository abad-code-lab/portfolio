import React from 'react';
import { Download, CheckCircle2, Target, Users, Lightbulb, Zap, Heart, BookOpen, GraduationCap, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import lebon from '../img/lebon.jpeg';
import cvFile from '../fichiers/CV_Abdoulaye_DAFFE.pdf';

export default function About() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 bg-white pt-32">
            <div className="max-w-6xl mx-auto px-4 w-full animate-fade-in-up">

                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left content: Text */}
                    <div className="md:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                            Développeur Fullstack
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8">
                            À propos de moi
                        </h2>

                        <div className="text-slate-600 font-light leading-relaxed mb-8 text-lg">
                            Je suis <span className="font-bold text-primary-600">Abdoulaye DAFFE</span>, développeur fullstack passionné
                            par la création d'applications modernes, performantes et centrées
                            sur l'utilisateur. Mon objectif est de transformer des idées en
                            solutions digitales impactantes et durables.
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <span className="text-slate-700 font-medium">Expérience avec Java, Spring Boot, React, Angular et Python</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <span className="text-slate-700 font-medium">Forte capacité d'apprentissage et curiosité technologique</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <span className="text-slate-700 font-medium">Intérêt pour l'IA, le cloud, le Big Data et la cybersécurité</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary-400 shrink-0 mt-0.5" size={20} />
                                <span className="text-slate-700 font-medium">Habitué au travail collaboratif avec Git & Jira</span>
                            </li>
                        </ul>

                        <a href={cvFile} download="CV_Abdoulaye_DAFFE.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border border-primary-200 hover:border-primary-400 hover:bg-slate-50 px-8 py-3.5 rounded-xl font-medium transition-all shadow-sm w-full sm:w-auto">
                            <Download size={18} />
                            Télécharger CV
                        </a>
                    </div>

                    {/* Right content: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            {/* Decorative Outer Rings */}
                            <div className="absolute inset-[-1.5rem] rounded-full border border-blue-100 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-[-1rem] rounded-full border-2 border-blue-200 opacity-60"></div>
                            <div className="absolute inset-[-0.5rem] rounded-full border-4 border-blue-300"></div>

                            {/* Image Container */}
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-slate-200 relative z-10 shadow-2xl">
                                <img src={lebon} alt="Abdoulaye DAFFE" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mes Qualités Section */}
            <div className="w-full bg-slate-50 py-16 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Mes Qualités</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-sm font-light">
                        Les valeurs et compétences qui définissent ma façon de travailler
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {/* Qualité 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Rigoureux</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Attention aux détails et respect des bonnes pratiques
                            </p>
                        </div>

                        {/* Qualité 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Collaboratif</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Travail d'équipe et communication efficace
                            </p>
                        </div>

                        {/* Qualité 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Créatif</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Solutions innovantes et approche problem-solving
                            </p>
                        </div>

                        {/* Qualité 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Adaptable</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Apprentissage rapide et flexibilité
                            </p>
                        </div>

                        {/* Qualité 5 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Passionné</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Engagement total dans chaque projet
                            </p>
                        </div>

                        {/* Qualité 6 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Curieux</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Veille technologique et amélioration continue
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mon Parcours Section */}
            <div className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Mon Parcours</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-sm font-light">
                        Formation, expérience et expertise technique
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Formation */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <GraduationCap size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Formation</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Étudiant en <span className="font-semibold text-slate-800">Master 2 (M2) Informatique</span>, spécialisé en <span className="font-semibold text-slate-800">génie logiciel</span> et passionné par les nouvelles technologies.
                            </p>
                        </div>

                        {/* Expérience */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Expérience</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Réalisation de projets académiques et personnels : <span className="font-semibold text-slate-800">applications web</span>, microservices, APIs et solutions orientées cloud.
                            </p>
                        </div>

                        {/* Compétences Summary */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Code size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Compétences</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Maîtrise du <span className="font-semibold text-slate-800">frontend</span> (React, Angular) et <span className="font-semibold text-slate-800">backend</span> (Spring Boot), avec une bonne pratique de <span className="font-semibold text-slate-800">Git</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centres d'intérêt Section */}
            <div className="w-full bg-slate-50 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-8">Centres d'intérêt</h2>

                    <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100/50 shadow-sm">
                        <p className="text-slate-600 text-lg leading-relaxed font-light">
                            En dehors du code, j'aime explorer les domaines de <span className="text-primary-600 font-medium">l'intelligence artificielle, le Big Data, la cybersécurité et le Cloud</span>,
                            contribuer à des projets open source, et partager mes connaissances avec d'autres développeurs.
                            J'apprécie également la lecture, les challenges de programmation et le sport pour garder l'équilibre entre vie professionnelle et personnelle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
