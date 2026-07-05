import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!images || images.length <= 1 || isOpen) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images, isOpen]);

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

    const openLightbox = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
    };

    const closeLightbox = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
    };

    return (
        <>
            <div 
                onClick={openLightbox}
                className="relative w-full h-full group/carousel cursor-zoom-in"
            >
                <img
                    src={images[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/carousel:scale-105"
                />
                
                {/* Hover overlay explaining zoom */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="bg-white/90 text-slate-800 p-3 rounded-full shadow-lg transform scale-90 group-hover/carousel:scale-100 transition-transform duration-300 flex items-center gap-2 font-medium text-xs">
                        <ZoomIn size={16} className="text-primary-600" />
                        Agrandir l'image
                    </div>
                </div>

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

            {/* Lightbox Modal */}
            {isOpen && (
                <div 
                    onClick={closeLightbox}
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
                >
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                        aria-label="Fermer"
                    >
                        <X size={28} />
                    </button>

                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Zoom Screenshot ${currentIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fade-in-up"
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white hover:text-primary-400 rounded-full p-3 transition-all"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white hover:text-primary-400 rounded-full p-3 transition-all"
                                >
                                    <ChevronRight size={32} />
                                </button>

                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full flex gap-1.5">
                                    {images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-primary-400' : 'w-2 bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
