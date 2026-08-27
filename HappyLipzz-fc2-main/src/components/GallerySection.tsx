import React from 'react';

export const GallerySection: React.FC = () => {
    const images = [
        {
            src: '/teeth-1.jpeg',
            alt: 'Dental Care Result 1',
            title: 'Before & After'
        },
        {
            src: '/teeth-2.jpeg',
            alt: 'Dental Care Result 2',
            title: 'Smile Makeover'
        },
        {
            src: '/teeth-3.jpeg',
            alt: 'Dental Care Result 3',
            title: 'Clinical Results'
        }
    ];

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

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-white border border-purple-100/80 hover:shadow-xl hover:border-purple-300 transition-all duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2E0854]/90 via-[#4A0E78]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-6">
                                    <span className="text-white font-bold text-lg">{img.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
