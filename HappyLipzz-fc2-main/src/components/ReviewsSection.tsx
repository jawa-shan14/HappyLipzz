import React from 'react';
import { Star } from 'lucide-react';
import { CLINIC_INFO, REVIEWS_DATA } from '../data/dentalData';

interface ReviewsSectionProps {
  onOpenAllReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenAllReviews }) => {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-[#FAF5FF] via-[#F5EEFB] to-white py-16 sm:py-24 border-t border-purple-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
              <span>PATIENT REVIEWS</span>
            </div>
            <h2
              id="reviews-title"
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1E1035] tracking-tight"
            >
              What Patients Say
            </h2>
            <p id="reviews-subtitle" className="text-[#475569] text-base font-normal flex items-center gap-1.5">
              <span className="font-extrabold text-[#1E1035] bg-purple-100/80 px-2 py-0.5 rounded-md border border-purple-200 text-sm">{CLINIC_INFO.rating} ★</span>
              <span>from <strong className="text-[#1E1035] font-bold">{CLINIC_INFO.reviewCount}</strong> Google reviews.</span>
            </p>
          </div>

          <div>
            <button
              id="view-google-reviews-btn"
              onClick={onOpenAllReviews}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-purple-200 hover:border-[#6B21A8] bg-white text-[#1E1035] hover:text-[#6B21A8] font-bold text-sm transition-all cursor-pointer shadow-2xs hover:shadow-md hover:bg-purple-50/60"
            >
              View Google Reviews
            </button>
          </div>
        </div>

        {/* 2 Featured Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS_DATA.slice(0, 2).map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A0E78] to-[#9333EA]"></div>

              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#1E1035] text-base sm:text-lg font-medium leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Source Tag */}
              <div className="text-[#64748B] text-sm font-medium flex items-center justify-between pt-4 border-t border-purple-50">
                <span className="font-semibold text-slate-700">{review.source}</span>
                <span className="text-xs text-purple-800 bg-purple-100/90 px-3 py-1 rounded-full font-bold border border-purple-200">{review.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
