import React from 'react';
import { Terminal, Monitor, Code2, Database, Layout, Shield, Server, Settings, Cpu } from 'lucide-react';

export default function Skills() {
    const keySkills = [
        "Développement Fullstack",
        "API REST & Microservices",
        "Bases de données relationnelles & NoSQL",
        "UI/UX Design",
        "Gestion de projets Agile",
        "DevOps & Outils collaboratifs",
        "Configuration & Administration de serveurs",
        "Installation et maintenance de systèmes"
    ];

    const languages = [
        { name: "Java", level: "Maîtrise", percentage: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "HTML5", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: "Maîtrise", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", level: "Avancé", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", level: "Avancé", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C", level: "Avancé", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "OCaml", level: "Intermédiaire", percentage: 45, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg" }
    ];

    const frameworks = [
        { name: "Spring Boot", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "React", level: "Maîtrise", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Router", level: "Avancé", percentage: 70, icon: "https://reactrouter.com/favicon-light.png" },
        { name: "Bootstrap", level: "Avancé", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Angular", level: "Avancé", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Flutter", level: "Débutant", percentage: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
    ];

    const databases = [
        { name: "MariaDB", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
        { name: "MySQL", level: "Maîtrise", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Oracle", level: "Avancé", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "MongoDB", level: "Avancé", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ];

    const toolsOps = [
        { name: "Git", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", level: "Maîtrise", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "GitHub", level: "Maîtrise", percentage: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", level: "Maîtrise", percentage: 80, icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Cisco", level: "Avancé", percentage: 75, icon: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
        { name: "Jira", level: "Intermédiaire", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
    ];

    const designCollab = [
        { name: "Canva", level: "Avancé", percentage: 75, icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
        { name: "Figma", level: "Intermédiaire", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ];

    return (
        <section className="min-h-screen py-24 bg-white pt-32">
            <div className="max-w-6xl mx-auto px-4 animate-fade-in-up">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Mes Compétences</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
                        Un aperçu de mes expertises techniques et de mes domaines de compétences
                    </p>
                </div>

                {/* Section Compétences clés */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Compétences clés</h3>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {keySkills.map((skill, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-white border border-primary-200 rounded-2xl text-slate-700 font-medium shadow-sm hover:border-primary-400 hover:shadow-md transition-all cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Langages */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Langages</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {languages.map((lang, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={lang.icon} alt={lang.name} className="w-8 h-8 object-contain" />
                                        <span className="font-bold text-slate-800">{lang.name}</span>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${lang.level === 'Maîtrise' ? 'bg-green-50 text-green-600' :
                                        lang.level === 'Avancé' ? 'bg-blue-50 text-blue-600' :
                                            'bg-orange-50 text-orange-600'
                                        }`}>
                                        {lang.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        <span>Maîtrise</span>
                                        <span>{lang.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${lang.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Frameworks & Librairies */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Frameworks & Librairies</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {frameworks.map((fw, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={fw.icon} alt={fw.name} className="w-8 h-8 object-contain" />
                                        <span className="font-bold text-slate-800">{fw.name}</span>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${fw.level === 'Maîtrise' ? 'bg-green-50 text-green-600' :
                                        fw.level === 'Avancé' ? 'bg-blue-50 text-blue-600' :
                                            'bg-orange-50 text-orange-600'
                                        }`}>
                                        {fw.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        <span>Maîtrise</span>
                                        <span>{fw.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${fw.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Bases de données */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Bases de données</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {databases.map((db, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={db.icon} alt={db.name} className="w-8 h-8 object-contain" />
                                        <span className="font-bold text-slate-800">{db.name}</span>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${db.level === 'Maîtrise' ? 'bg-green-50 text-green-600' :
                                        db.level === 'Avancé' ? 'bg-blue-50 text-blue-600' :
                                            db.level === 'Débutant' ? 'bg-orange-50 text-orange-600' :
                                                'bg-slate-50 text-slate-600'
                                        }`}>
                                        {db.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        <span>Maîtrise</span>
                                        <span>{db.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${db.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Outils & DevOps */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Outils & DevOps</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {toolsOps.map((tool, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                                        <span className="font-bold text-slate-800">{tool.name}</span>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${tool.level === 'Maîtrise' ? 'bg-green-50 text-green-600' :
                                        tool.level === 'Avancé' ? 'bg-blue-50 text-blue-600' :
                                            'bg-orange-50 text-orange-600'
                                        }`}>
                                        {tool.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        <span>Maîtrise</span>
                                        <span>{tool.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${tool.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Design & Collaboration */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-l-4 border-primary-600 pl-4">
                        <h3 className="text-2xl font-bold text-primary-600">Design & Collaboration</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {designCollab.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                        <span className="font-bold text-slate-800">{item.name}</span>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.level === 'Avancé' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                                        }`}>
                                        {item.level}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        <span>Maîtrise</span>
                                        <span>{item.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
