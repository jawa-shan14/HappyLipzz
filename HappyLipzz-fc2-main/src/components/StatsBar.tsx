import React from 'react';
import { Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface StatsBarProps {
  onOpenReviews: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({ onOpenReviews }) => {
  return (
    <section id="stats-bar-section" className="bg-gradient-to-r from-[#FAF5FF] via-[#F3E8FF]/70 to-[#FAF5FF] border-y border-purple-100/90 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {/* Stat 1: 5.0 Star */}
          <div
            id="stat-item-rating"
            onClick={onOpenReviews}
            className="flex flex-col cursor-pointer group min-w-0 bg-white p-4 sm:p-5 rounded-2xl border border-purple-100/80 hover:border-purple-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-1.5 text-xl sm:text-3xl font-extrabold text-[#3B0764] group-hover:text-[#6B21A8] transition-colors">
              <span>{CLINIC_INFO.rating}</span>
              <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-[#F59E0B] text-[#F59E0B] shrink-0" />
            </div>
            <span className="text-[#6B5E7D] text-xs sm:text-sm font-semibold mt-1">Google Rating</span>
          </div>

          {/* Stat 2: 6 Reviews */}
          <div
            id="stat-item-reviews"
            onClick={onOpenReviews}
            className="flex flex-col cursor-pointer group min-w-0 bg-white p-4 sm:p-5 rounded-2xl border border-purple-100/80 hover:border-purple-300 hover:shadow-sm transition-all"
          >
            <div className="text-xl sm:text-3xl font-extrabold text-[#3B0764] group-hover:text-[#6B21A8] transition-colors">
              {CLINIC_INFO.reviewCount}
            </div>
            <span className="text-[#6B5E7D] text-xs sm:text-sm font-semibold mt-1">Google Reviews</span>
          </div>

          {/* Stat 3: Professional */}
          <div id="stat-item-professional" className="flex flex-col min-w-0 bg-white p-4 sm:p-5 rounded-2xl border border-purple-100/80 hover:border-purple-300 hover:shadow-sm transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-[#3B0764] truncate">
              Professional
            </div>
            <span className="text-[#6B5E7D] text-xs sm:text-sm font-semibold mt-1">Dental Care</span>
          </div>

          {/* Stat 4: Patient-focused */}
          <div id="stat-item-patient-focused" className="flex flex-col min-w-0 bg-white p-4 sm:p-5 rounded-2xl border border-purple-100/80 hover:border-purple-300 hover:shadow-sm transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-[#3B0764] truncate">
              Patient-focused
            </div>
            <span className="text-[#6B5E7D] text-xs sm:text-sm font-semibold mt-1">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
