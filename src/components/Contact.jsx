import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // NOTE: Replace these with real IDs from your EmailJS account
        const SERVICE_ID = 'service_xmty5x8';
        const TEMPLATE_ID = 'template_va0a2je';
        const PUBLIC_KEY = 'bHD3Uoc1nxXzVxu79';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus({ type: 'success', message: 'Votre message a été envoyé avec succès !' });
                form.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className="min-h-screen bg-slate-50 text-slate-600 pt-32 pb-16 flex flex-col justify-between animate-fade-in-up">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">Travaillons ensemble !</h2>
                        <p className="font-light text-slate-500 mb-8 max-w-md">
                            Je suis actuellement à la recherche de nouvelles opportunités. Mon profil vous intéresse ? N'hésitez pas à me contacter.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:a.daffelaye97@gmail.com" className="flex items-center gap-4 hover:text-primary-600 transition-colors group">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 transition-transform group-hover:scale-110">
                                    <Mail size={20} />
                                </div>
                                <span className="font-semibold text-slate-800">a.daffelaye97@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 animate-fade-in ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                                }`}>
                                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                <span className="text-sm font-medium">{status.message}</span>
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Nom & Prénom</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all font-medium"
                                    placeholder="Abdoulaye DAFFE"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all font-medium"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all font-medium"
                                    placeholder="Votre message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary-500/20 active:scale-[0.98] mt-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Envoyer le message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
