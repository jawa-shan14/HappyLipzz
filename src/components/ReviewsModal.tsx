import React from 'react';
import { X, Star, ExternalLink, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, REVIEWS_DATA } from '../data/dentalData';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="reviews-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="reviews-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#007D88] text-white px-6 sm:px-8 py-6 flex items-start justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-teal-100">
              PATIENT FEEDBACK
            </span>
            <div className="flex items-center gap-3 mt-1">
              <h3 className="font-extrabold text-2xl leading-tight">Google Reviews</h3>
              <div className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full text-xs font-bold">
                <span>{CLINIC_INFO.rating}</span>
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                <span>({CLINIC_INFO.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          <button
            id="close-reviews-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reviews List */}
        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto grow">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#007D88]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#007D88] text-[#007D88]" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
              </div>

              <p className="text-slate-800 text-sm leading-relaxed">{rev.text}</p>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">{rev.author}</span>
                <span className="text-slate-400">{rev.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#007D88] hover:underline"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#007D88] hover:bg-[#006B74] text-white font-semibold text-xs transition-all shadow-xs cursor-pointer"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
