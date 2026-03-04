import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import cert01 from '../certificats/Coursera 1LCCYT4V83S9_certificat01.pdf';
import React from 'react';

export default function Certifications() {
    const certifications = [
        {
            category: "FORMATION COURSERA",
            title: "Vulnerability Scanning with Nmap: Network Scanning",
            issuer: "Coursera",
            date: "Obtenu en 2024",
            tags: ["Analyse Résaux", "Sécurité", "Coursera", "Nmap"],
            link: cert01
        }
    ];

    return (
        <section className="min-h-screen py-24 bg-slate-50 pt-32">
            <div className="max-w-6xl mx-auto px-4 animate-fade-in-up">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">Mes Certifications</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                        Voici mes certifications et formations attestant de mes compétences techniques et de mon engagement dans l'apprentissage continu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col h-full"
                        >
                            {/* Decorative Corner Ribbon/Icon */}
                            <div className="absolute top-6 right-8 text-primary-200 group-hover:text-primary-600 transition-colors">
                                <Award size={24} />
                            </div>

                            {/* Category */}
                            <span className="text-[10px] font-bold text-primary-600 tracking-widest uppercase mb-4">
                                {cert.category}
                            </span>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center justify-between mb-6 text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <CheckCircle2 size={16} className="text-primary-500" />
                                        <span className="font-medium italic">{cert.issuer}</span>
                                    </div>
                                    <span className="text-slate-400 font-light">{cert.date}</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {cert.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-3 py-1 bg-slate-50 text-slate-600 text-[11px] rounded-lg border border-slate-100 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Button */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-primary-100 text-primary-600 font-medium hover:bg-primary-600 hover:text-white hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all group/btn"
                            >
                                <span>Voir la certification</span>
                                <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
