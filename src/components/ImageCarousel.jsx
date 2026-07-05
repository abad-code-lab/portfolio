import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
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

    const openImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(images[currentIndex], '_blank');
    };

    return (
        <div 
            onClick={openImage}
            className="relative w-full h-full group/carousel cursor-pointer"
        >
            <img
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/carousel:scale-105"
            />
            
            {/* Hover overlay explaining link */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <div className="bg-white/90 text-slate-800 p-3 rounded-full shadow-lg transform scale-90 group-hover/carousel:scale-100 transition-transform duration-300 flex items-center gap-2 font-medium text-xs">
                    <ExternalLink size={16} className="text-primary-600" />
                    Ouvrir l'image
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
    );
}
