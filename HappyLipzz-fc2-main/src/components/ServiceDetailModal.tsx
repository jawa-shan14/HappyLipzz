import React from 'react';
import { X, CheckCircle, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { CLINIC_INFO } from '../data/dentalData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookThisService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookThisService,
}) => {
  if (!service) return null;

  return (
    <div
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="service-detail-card"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2E0854] via-[#4A0E78] to-[#6B21A8] text-white px-6 sm:px-8 py-6 flex items-start justify-between">
          <div className="space-y-1">
            {service.tag && (
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-white/20 text-white px-2.5 py-0.5 rounded-full mb-1">
                {service.tag}
              </span>
            )}
            <h3 className="font-extrabold text-2xl leading-tight">{service.title}</h3>
            <p className="text-purple-200 text-xs">{CLINIC_INFO.fullName}</p>
          </div>
          <button
            id="close-service-detail-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B21A8] mb-2">
              Overview & Clinical Procedure
            </h4>
            <p className="text-[#475569] text-base leading-relaxed">
              {service.fullDescription || service.description}
            </p>
          </div>

          {/* Key Advantages */}
          {service.benefits && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Key Treatment Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#1E1035]">
                    <CheckCircle className="w-4 h-4 text-[#6B21A8] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Details */}
          <div className="bg-[#FAF5FF] rounded-2xl p-4 flex items-center justify-between border border-purple-100 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#6B21A8]" />
              <span>Est. Duration: <strong className="text-[#1E1035]">{service.duration || '30-45 mins'}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#6B21A8]" />
              <span>100% Sterile Equipment</span>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id={`detail-book-${service.id}`}
              onClick={() => {
                onClose();
                onBookThisService(service.id);
              }}
              className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#4A0E78] to-[#6B21A8] hover:from-[#3B0764] hover:to-[#581C87] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment for {service.title}</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="py-3 px-5 rounded-full border border-purple-200 hover:border-[#6B21A8] text-[#1E1035] font-medium text-sm transition-colors text-center hover:bg-purple-50/50"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
