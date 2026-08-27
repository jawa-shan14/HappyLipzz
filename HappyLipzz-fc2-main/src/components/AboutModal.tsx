import React from 'react';
import { X, MapPin, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="about-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="about-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2E0854] via-[#4A0E78] to-[#6B21A8] text-white px-6 sm:px-8 py-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-purple-200">
              CLINIC OVERVIEW
            </span>
            <h3 className="font-extrabold text-2xl leading-tight mt-1">
              About HappyLipzz Advanced Dental Care
            </h3>
            <p className="text-purple-200 text-xs mt-0.5">Hebbal, Dasarahalli, Bengaluru</p>
          </div>
          <button
            id="close-about-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4 text-[#475569] text-base leading-relaxed">
            <p>{CLINIC_INFO.aboutParagraphs[0]}</p>
            <p>{CLINIC_INFO.aboutParagraphs[1]}</p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100/70 flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E1035]">Sterilization & Hygiene</h4>
                <p className="text-xs text-slate-500 mt-1">Hospital-grade autoclave sterilization protocols for patient safety.</p>
              </div>
            </div>

            <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100/70 flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E1035]">Comfort-First Care</h4>
                <p className="text-xs text-slate-500 mt-1">Gentle techniques designed to minimize dental anxiety and pain.</p>
              </div>
            </div>

            <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100/70 flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E1035]">Modern Technology</h4>
                <p className="text-xs text-slate-500 mt-1">Digital diagnostic X-rays and precision rotary endodontic equipment.</p>
              </div>
            </div>

            <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-100/70 flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E1035]">Accessible Location</h4>
                <p className="text-xs text-slate-500 mt-1">Easily reachable from Kempapura, Sahakara Nagar, Jalahalli and Peenya.</p>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#4A0E78] to-[#6B21A8] hover:from-[#3B0764] hover:to-[#581C87] text-white font-semibold text-sm transition-all shadow-md text-center cursor-pointer"
            >
              Book an Appointment
            </button>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-full border border-purple-200 hover:border-[#6B21A8] text-[#1E1035] font-medium text-sm transition-colors text-center hover:bg-purple-50/50"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
