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
    const props = { className: 'w-5 h-5 text-[#007D88]' };
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
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span
            id="services-eyebrow"
            className="text-[#007D88] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase"
          >
            OUR SERVICES
          </span>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2533] tracking-tight"
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
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-[#007D88]/30 group"
            >
              <div>
                {/* Icon in light mint circle */}
                <div className="w-12 h-12 rounded-full bg-[#EBF7F8] flex items-center justify-center mb-6">
                  {getIcon(service.iconName)}
                </div>

                {/* Tag if any */}
                {service.tag && (
                  <span className="inline-block text-[11px] font-semibold text-[#8C9BA5] tracking-wider uppercase mb-2">
                    {service.tag}
                  </span>
                )}

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#0A2533] mb-3 group-hover:text-[#007D88] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#596A77] text-[15px] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-5 text-sm pt-2 border-t border-slate-50">
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="text-[#007D88] hover:text-[#005B63] font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>

                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onBookService(service.id)}
                  className="text-[#0A2533] hover:text-[#007D88] font-medium transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
