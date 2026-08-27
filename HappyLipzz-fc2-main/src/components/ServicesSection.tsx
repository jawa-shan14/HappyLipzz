import React from 'react';
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Smile,
  Star,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/dentalData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-white' };
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'shield-check':
        return <ShieldCheck {...props} />;
      case 'smile':
        return <Smile {...props} />;
      case 'star':
        return <Star {...props} />;
      case 'message-square':
      default:
        return <MessageSquare {...props} />;
    }
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
            <span>OUR SERVICES</span>
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E1035] tracking-tight"
          >
            Comprehensive Dental Care
          </h2>
          <p
            id="services-description"
            className="text-[#475569] text-base sm:text-lg max-w-3xl font-normal"
          >
            Explore professional dental treatments designed to support your oral health and smile.
          </p>
        </div>

        {/* Services Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`bg-white rounded-3xl border ${
                index === 0
                  ? 'border-purple-300 ring-2 ring-purple-100 shadow-md'
                  : 'border-purple-100/90'
              } p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:border-purple-400 group relative overflow-hidden`}
            >
              {/* Subtle Violet Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4A0E78] via-[#7E22CE] to-[#9333EA] opacity-80"></div>

              <div>
                {/* Icon in rich violet gradient circle */}
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#3B0764] via-[#581C87] to-[#7E22CE] flex items-center justify-center mb-6 shadow-md shadow-purple-900/15 group-hover:scale-105 group-hover:rotate-1 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                {/* Tag if any */}
                {service.tag && (
                  <span className="inline-block text-[10px] font-bold text-purple-800 bg-purple-100/90 px-2.5 py-0.5 rounded-full tracking-wider uppercase mb-2.5 border border-purple-200">
                    {service.tag}
                  </span>
                )}

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#1E1035] mb-3 group-hover:text-[#6B21A8] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#596A77] text-[15px] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between gap-4 text-sm pt-4 border-t border-purple-100/80">
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="text-[#6B21A8] hover:text-[#3B0764] font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>

                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onBookService(service.id)}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-purple-200 text-purple-900 hover:bg-[#581C87] hover:text-white transition-all font-semibold cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
