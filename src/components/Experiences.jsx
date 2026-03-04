import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experiences() {
    return (
        <section className="min-h-screen py-24 bg-white pt-32">
            <div className="max-w-4xl mx-auto px-4 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <Briefcase className="text-primary-600" size={32} />
                    <h2 className="text-4xl font-bold text-slate-800">Parcours Professionnel</h2>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {/* Experience 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Briefcase size={16} />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-slate-800 text-xl">Stage | Développeur Web Frontend</h3>
                                <span className="text-primary-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">Déc. 2022 - Fév. 2023</span>
                            </div>
                            <div className="text-slate-500 mb-4 text-sm font-medium">Université Assane SECK de Ziguinchor</div>
                            <p className="text-slate-600 font-light mb-4 text-sm leading-relaxed">
                                Mise en place d'une plateforme pour l'uniformisation des CVs des enseignants chercheurs de l'UFR 2S (Sciences de la Santé).
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">ReactJS</span>
                                <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">HTML/CSS</span>
                                <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
