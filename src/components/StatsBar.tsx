import React from 'react';
import { Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface StatsBarProps {
  onOpenReviews: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({ onOpenReviews }) => {
  return (
    <section id="stats-bar-section" className="bg-white border-y border-slate-100 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {/* Stat 1: 5.0 Star */}
          <div
            id="stat-item-rating"
            onClick={onOpenReviews}
            className="flex flex-col cursor-pointer group min-w-0"
          >
            <div className="flex items-center gap-1.5 text-xl sm:text-3xl font-extrabold text-[#0A2533] group-hover:text-[#007D88] transition-colors">
              <span>{CLINIC_INFO.rating}</span>
              <Star className="w-4 h-4 sm:w-6 sm:h-6 fill-[#007D88] text-[#007D88] shrink-0" />
            </div>
            <span className="text-[#64748B] text-xs sm:text-sm font-medium mt-1">Google Rating</span>
          </div>

          {/* Stat 2: 6 Reviews */}
          <div
            id="stat-item-reviews"
            onClick={onOpenReviews}
            className="flex flex-col cursor-pointer group min-w-0"
          >
            <div className="text-xl sm:text-3xl font-extrabold text-[#0A2533] group-hover:text-[#007D88] transition-colors">
              {CLINIC_INFO.reviewCount}
            </div>
            <span className="text-[#64748B] text-xs sm:text-sm font-medium mt-1">Google Reviews</span>
          </div>

          {/* Stat 3: Professional */}
          <div id="stat-item-professional" className="flex flex-col min-w-0">
            <div className="text-xl sm:text-3xl font-extrabold text-[#0A2533] truncate">
              Professional
            </div>
            <span className="text-[#64748B] text-xs sm:text-sm font-medium mt-1">Dental Care</span>
          </div>

          {/* Stat 4: Patient-focused */}
          <div id="stat-item-patient-focused" className="flex flex-col min-w-0">
            <div className="text-xl sm:text-3xl font-extrabold text-[#0A2533] truncate">
              Patient-focused
            </div>
            <span className="text-[#64748B] text-xs sm:text-sm font-medium mt-1">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
