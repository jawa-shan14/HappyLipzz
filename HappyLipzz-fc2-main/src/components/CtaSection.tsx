import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';

interface CtaSectionProps {
  onOpenAppointment: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="cta-banner" className="bg-gradient-to-br from-[#2E0854] via-[#4A0E78] to-[#1E0538] py-20 sm:py-28 text-white text-center relative overflow-hidden">
      {/* Subtle gold glow accents in background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative z-10">
        <h2
          id="cta-title"
          className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2]"
        >
          Ready to Take the Next Step<br className="hidden sm:inline" /> Toward Better Dental Care?
        </h2>

        <p
          id="cta-subtitle"
          className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto font-normal"
        >
          Book an appointment or speak with our team about your dental care needs.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
          {/* White solid pill button */}
          <button
            id="cta-book-btn"
            onClick={onOpenAppointment}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-purple-50 text-[#3B0764] font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl hover:scale-102 cursor-pointer ring-2 ring-white/30"
          >
            Book an Appointment
          </button>

          {/* Transparent with white border pill button */}
          <a
            id="cta-call-btn"
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/70 hover:border-white hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all"
          >
            Call {CLINIC_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
