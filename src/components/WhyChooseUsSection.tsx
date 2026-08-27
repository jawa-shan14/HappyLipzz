import React from 'react';
import { Heart, Shield, Smile, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/dentalData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#007D88]' };
    switch (iconName) {
      case 'heart-handshake':
        return <Heart {...props} />;
      case 'shield':
        return <Shield {...props} />;
      case 'smile':
        return <Smile {...props} />;
      case 'message-circle':
      default:
        return <MessageCircle {...props} />;
    }
  };

  return (
    <section
      id="why-choose-us"
      className="bg-[#EDF7F7] py-16 sm:py-24 border-t border-slate-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span
            id="why-choose-eyebrow"
            className="text-[#007D88] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase"
          >
            WHY CHOOSE US
          </span>
          <h2
            id="why-choose-title"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2533] tracking-tight"
          >
            Experience the Difference
          </h2>
          <p
            id="why-choose-description"
            className="text-[#475569] text-base sm:text-lg max-w-3xl font-normal"
          >
            What patients can expect when they visit HappyLipzz Advanced Dental Care.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_DATA.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-white rounded-3xl p-5 sm:p-8 border border-white/80 shadow-xs flex flex-col justify-start hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {item.image && (
                <div className="w-full h-40 sm:h-48 mb-6 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-[#E5F5F6] flex items-center justify-center mb-6">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0A2533] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#596A77] text-[14px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
