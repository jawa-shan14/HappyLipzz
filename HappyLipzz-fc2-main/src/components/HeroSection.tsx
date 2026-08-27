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
      className="relative overflow-hidden bg-gradient-to-b from-[#F5EEFB] via-[#FAF5FF] to-white pt-10 sm:pt-14 pb-14 sm:pb-20"
    >
      {/* Decorative Violet Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-violet-200/30 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#581C87] text-xs sm:text-[13px] font-bold tracking-[0.12em] uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#6B21A8] animate-pulse"></span>
                <span>{CLINIC_INFO.heroEyebrow}</span>
              </div>

              <h1
                id="hero-main-title"
                className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1E1035] tracking-tight leading-[1.12]"
              >
                <span className="bg-gradient-to-r from-[#3B0764] via-[#6B21A8] to-[#7E22CE] bg-clip-text text-transparent">
                  Confident Smiles
                </span><br />
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3B0764] via-[#581C87] to-[#6B21A8] hover:from-[#2E0854] hover:to-[#4A0E78] text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:scale-102 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-purple-200 hover:border-[#6B21A8] bg-white text-[#1E1035] hover:text-[#6B21A8] hover:bg-purple-50/60 font-semibold text-base transition-all cursor-pointer shadow-2xs"
              >
                Explore Services
              </button>
            </div>

            {/* Social Proof Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
              <button
                id="hero-rating-badge"
                onClick={onOpenReviews}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 border border-purple-100/80 shadow-2xs hover:border-purple-300 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center text-[#F59E0B] font-extrabold text-base">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] mr-1" />
                  <span className="text-[#1E1035]">{CLINIC_INFO.rating}</span>
                </div>
                <span className="text-[#64748B] group-hover:text-[#6B21A8] transition-colors font-medium text-xs">
                  Google Rating
                </span>
              </button>

              <button
                id="hero-review-count-badge"
                onClick={onOpenReviews}
                className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-purple-100/80 shadow-2xs hover:border-purple-300 transition-all text-left group cursor-pointer"
              >
                <span className="text-[#1E1035] font-extrabold text-base">
                  {CLINIC_INFO.reviewCount}
                </span>
                <span className="text-[#64748B] group-hover:text-[#6B21A8] transition-colors font-medium text-xs">
                  Google Reviews
                </span>
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Violet background halo */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-purple-500/20 via-purple-300/10 to-transparent blur-md -z-10"></div>

              <div className="overflow-hidden rounded-3xl sm:rounded-[32px] shadow-2xl border-4 border-white aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] bg-purple-100/60 relative group ring-2 ring-purple-200">
                <img
                  id="hero-dentist-img"
                  src="/Happy-Lips-doc-pic.jpeg"
                  alt="Dr. Isha Shashidhar, Dentist at HappyLipzz Advanced Dental Care Bengaluru"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Doctor Identification Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-purple-100/90">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-[#1E1035] text-sm sm:text-base leading-tight">
                          {CLINIC_INFO.doctorName}
                        </h3>
                        <span className="text-[10px] bg-purple-100 text-[#581C87] font-extrabold px-2 py-0.5 rounded-full">
                          Dentist
                        </span>
                      </div>
                      <p className="text-[#64748B] text-[11px] sm:text-xs font-medium mt-0.5">
                        {CLINIC_INFO.doctorQualifications}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 text-[#F59E0B] font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                        <span className="text-[#1E1035]">5.0</span>
                      </div>
                      <span className="text-[10px] text-purple-700 font-bold">Verified</span>
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
