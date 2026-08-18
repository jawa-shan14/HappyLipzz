import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
  onOpenReviews: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAppointment,
  onExploreServices,
  onOpenReviews,
}) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#F0F8F9] via-[#F8FBFC] to-white pt-10 sm:pt-14 pb-14 sm:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span
                id="hero-eyebrow"
                className="inline-block text-[#007D88] text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase"
              >
                {CLINIC_INFO.heroEyebrow}
              </span>
              <h1
                id="hero-main-title"
                className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A2533] tracking-tight leading-[1.12]"
              >
                Confident Smiles<br />
                Begin With Better<br />
                Dental Care
              </h1>
            </div>

            <p
              id="hero-description"
              className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              {CLINIC_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                id="hero-book-btn"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#007D88] hover:bg-[#006B74] text-white font-semibold text-base transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-200 hover:border-[#007D88] bg-white text-[#0A2533] hover:text-[#007D88] font-medium text-base transition-all cursor-pointer shadow-2xs"
              >
                Explore Services
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-2 flex items-center gap-6 text-sm">
              <button
                id="hero-rating-badge"
                onClick={onOpenReviews}
                className="flex items-center gap-2 text-left group cursor-pointer"
              >
                <div className="flex items-center text-[#007D88] font-bold text-base">
                  <Star className="w-4 h-4 fill-[#007D88] text-[#007D88] mr-1" />
                  <span>{CLINIC_INFO.rating}</span>
                </div>
                <span className="text-[#64748B] group-hover:text-[#007D88] transition-colors font-medium">
                  Google Rating
                </span>
              </button>

              <button
                id="hero-review-count-badge"
                onClick={onOpenReviews}
                className="flex items-center gap-1.5 text-left group cursor-pointer"
              >
                <span className="text-[#0A2533] font-bold text-base">
                  {CLINIC_INFO.reviewCount}
                </span>
                <span className="text-[#64748B] group-hover:text-[#007D88] transition-colors font-medium">
                  Google Reviews
                </span>
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl sm:rounded-[32px] shadow-xl border-4 border-white aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-slate-100 relative group">
                <img
                  id="hero-dentist-img"
                  src="/Happy-Lips-doc-pic.jpeg"
                  alt="Dr. Isha Shashidhar, Dentist at HappyLipzz Advanced Dental Care Bengaluru"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Doctor Identification Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-[#0A2533] text-sm sm:text-base leading-tight">
                          {CLINIC_INFO.doctorName}
                        </h3>
                        <span className="text-[10px] bg-teal-50 text-[#007D88] font-bold px-1.5 py-0.5 rounded-xs">
                          Dentist
                        </span>
                      </div>
                      <p className="text-[#64748B] text-[11px] sm:text-xs font-medium mt-0.5">
                        {CLINIC_INFO.doctorQualifications}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 text-[#007D88] font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-[#007D88]" />
                        <span>5.0</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
