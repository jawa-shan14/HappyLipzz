import React from 'react';
import { Heart, Shield, Smile, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/dentalData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-white' };
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
      className="bg-gradient-to-b from-[#F5EEFB] via-[#FAF5FF] to-[#F5EEFB] py-16 sm:py-24 border-t border-purple-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
            <span>WHY CHOOSE US</span>
          </div>
          <h2
            id="why-choose-title"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E1035] tracking-tight"
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
              className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-xs flex flex-col justify-start hover:shadow-xl hover:border-purple-400 transition-all duration-300 overflow-hidden group"
            >
              {item.image && (
                <div className="w-full h-40 sm:h-48 mb-6 rounded-2xl overflow-hidden shadow-sm ring-1 ring-purple-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3B0764] to-[#7E22CE] flex items-center justify-center mb-6 shadow-md shadow-purple-900/15 group-hover:scale-105 transition-transform">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1E1035] mb-3 leading-snug group-hover:text-[#6B21A8] transition-colors">
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
