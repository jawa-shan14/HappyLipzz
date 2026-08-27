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
      className="bg-[#EDF7F7] py-16 sm:py-24 border-t border-slate-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <span
              id="reviews-eyebrow"
              className="text-[#007D88] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase"
            >
              PATIENT REVIEWS
            </span>
            <h2
              id="reviews-title"
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2533] tracking-tight"
            >
              What patients say
            </h2>
            <p id="reviews-subtitle" className="text-[#475569] text-base font-normal">
              {CLINIC_INFO.rating} ★ from {CLINIC_INFO.reviewCount} Google reviews.
            </p>
          </div>

          <div>
            <button
              id="view-google-reviews-btn"
              onClick={onOpenAllReviews}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 hover:border-[#007D88] bg-white text-[#0A2533] hover:text-[#007D88] font-medium text-sm transition-all cursor-pointer shadow-2xs hover:shadow-xs"
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
              className="bg-white rounded-3xl p-5 sm:p-8 border border-white shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Teal Stars */}
                <div className="flex items-center gap-1 mb-6 text-[#007D88]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#007D88] text-[#007D88]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#1E293B] text-base sm:text-lg font-normal leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>

              {/* Source Tag */}
              <div className="text-[#8492A6] text-sm font-medium">
                {review.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
