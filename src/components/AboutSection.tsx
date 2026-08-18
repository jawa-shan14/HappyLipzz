import React from 'react';
import { CalendarCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Clinic Building Photo */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl sm:rounded-[32px] shadow-lg border-4 border-white aspect-[4/3] sm:aspect-[4/3] bg-slate-100 relative group">
              <img
                id="about-clinic-img"
                src="/about-happy.jpeg"
                alt="Exterior facade of HappyLipzz Advanced Dental Care clinic in Prasara Bharathi Layout, Hebbal Bengaluru"
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#0A2533]/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Hebbal, Bengaluru Clinic</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <div className="space-y-3">
              <span
                id="about-eyebrow"
                className="inline-block text-[#007D88] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase"
              >
                {CLINIC_INFO.aboutEyebrow}
              </span>
              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2533] tracking-tight leading-tight"
              >
                {CLINIC_INFO.aboutHeading}
              </h2>
            </div>

            <div className="space-y-4 text-[#475569] text-base leading-relaxed">
              <p>{CLINIC_INFO.aboutParagraphs[0]}</p>
              <p>{CLINIC_INFO.aboutParagraphs[1]}</p>
            </div>

            {/* Bullet points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#007D88]">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <span className="text-[#0A2533] font-medium text-[15px]">
                  {CLINIC_INFO.aboutBullets[0]}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#007D88]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-[#0A2533] font-medium text-[15px]">
                  {CLINIC_INFO.aboutBullets[1]}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#007D88]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[#0A2533] font-medium text-[15px]">
                  {CLINIC_INFO.aboutBullets[2]}
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                id="about-learn-more-btn"
                onClick={onOpenAboutModal}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 hover:border-[#007D88] bg-white text-[#0A2533] hover:text-[#007D88] font-medium text-sm transition-all cursor-pointer shadow-2xs hover:shadow-xs"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
