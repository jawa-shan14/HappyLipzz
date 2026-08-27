import React, { useState, useEffect } from 'react';

export const GallerySection: React.FC = () => {
    const images = [
        {
            src: '/ba-1.jpeg',
            alt: 'Dental Care Result 1',
            title: 'Before & After'
        },
        {
            src: '/ba-2.jpeg',
            alt: 'Dental Care Result 2',
            title: 'Smile Makeover'
        },
        {
            src: '/ba-3.jpeg',
            alt: 'Dental Care Result 3',
            title: 'Clinical Results'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="bg-[#FAF5FF] py-16 sm:py-24 border-t border-purple-100/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center space-y-3 mb-10 sm:mb-14">
                    <span className="text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                        SMILES IN ACTION
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E1035] tracking-tight">
                        Before & After Results
                    </h2>
                    <p className="text-[#596A77] text-base sm:text-lg max-w-2xl mx-auto font-normal">
                        See the transformative results of our professional dental treatments. We take pride in delivering beautiful, natural-looking smiles.
                    </p>
                </div>

                {/* Scrolling Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Image Display */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[21/9] bg-white border border-purple-100/80 min-h-[400px]">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                    index === currentIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2E0854]/90 via-[#4A0E78]/30 to-transparent flex items-end">
                                    <div className="p-6 sm:p-8">
                                        <span className="text-white font-bold text-xl sm:text-2xl">{img.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#6B21A8] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#6B21A8] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-6">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-[#6B21A8] w-8'
                                        : 'bg-purple-300 hover:bg-purple-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
