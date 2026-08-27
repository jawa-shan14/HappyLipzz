import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReviews: () => void;
  onSelectRootCanal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenReviews,
  onSelectRootCanal,
}) => {
  return (
    <footer id="footer-section" className="bg-white border-t border-slate-100 text-[#475569] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-xs border-2 border-purple-900/40 bg-[#2E0854] shrink-0 ring-2 ring-purple-200/50">
                <img
                  src="/happy-logooo.jpeg"
                  alt="HappyLipzz Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E1035] leading-none">
                  {CLINIC_INFO.name}
                </h3>
                <span className="text-[#7C6F93] text-[10px] font-semibold tracking-[0.16em] uppercase">
                  {CLINIC_INFO.subtitle} • {CLINIC_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-[#596A77] leading-relaxed max-w-sm">
              Led by {CLINIC_INFO.doctorName} ({CLINIC_INFO.doctorQualifications}). Providing advanced dental care in Hebbal, Dasarahalli, Bengaluru — serving patients across Kempapura, Sahakara Nagar, Jalahalli and Peenya.
            </p>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-[#6B21A8]">
              EXPLORE
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => onNavigate('services')}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-root-canal"
                  onClick={onSelectRootCanal}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Root Canal Treatment in Hebbal
                </button>
              </li>
              <li>
                <button
                  id="footer-link-reviews"
                  onClick={onOpenReviews}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Patient Reviews
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => onNavigate('faq')}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  id="footer-link-areas"
                  onClick={() => onNavigate('service-areas')}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Areas We Serve in Bengaluru
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => onNavigate('contact')}
                  className="text-[#475569] hover:text-[#6B21A8] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: VISIT US */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-[#6B21A8]">
              VISIT US
            </h4>
            <div className="text-[#475569] space-y-1 leading-relaxed">
              <p>{CLINIC_INFO.address.line1}</p>
              <p>{CLINIC_INFO.address.line2}</p>
              <p>{CLINIC_INFO.address.area}</p>
              <p>{CLINIC_INFO.address.cityStateZip}</p>
              <p className="pt-2 font-bold text-[#1E1035]">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#6B21A8] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8C9BA5]">
          <p className="pl-16 sm:pl-0">&copy; 2026 {CLINIC_INFO.fullName}. All rights reserved.</p>
          <p className="text-left md:text-right">
            Information on this website is general and not a substitute for professional dental advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
