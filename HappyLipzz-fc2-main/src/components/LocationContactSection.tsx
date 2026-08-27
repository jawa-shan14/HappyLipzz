import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  ExternalLink,
  Calendar,
  Layers
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface LocationContactSectionProps {
  onOpenAppointment: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onOpenAppointment,
}) => {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 bg-gradient-to-br from-[#FAF5FF] via-white to-[#F5EEFB] p-7 sm:p-9 rounded-3xl border border-purple-200/80 shadow-md">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                <span>LOCATION & CONTACT</span>
              </div>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E1035] tracking-tight leading-tight"
              >
                Visit HappyLipzz Advanced Dental Care
              </h2>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0 mt-0.5 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[#475569] text-base leading-relaxed">
                <p className="font-bold text-[#1E1035]">{CLINIC_INFO.address.line1}</p>
                <p>{CLINIC_INFO.address.line2}</p>
                <p>{CLINIC_INFO.address.area}</p>
                <p className="text-sm text-slate-500 font-medium">{CLINIC_INFO.address.cityStateZip}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 pt-1">
              <div className="w-10 h-10 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-[#6B21A8] shrink-0 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="text-[#1E1035] hover:text-[#6B21A8] text-lg sm:text-xl font-extrabold transition-colors"
              >
                {CLINIC_INFO.phone}
              </a>
            </div>

            {/* Notice Note */}
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed bg-purple-50/60 p-3 rounded-xl border border-purple-100">
              Opening hours are being confirmed by the clinic — please call before visiting.
            </p>

            {/* 4 Action Buttons Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {/* Call Now */}
              <a
                id="contact-call-btn"
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#3B0764] via-[#581C87] to-[#6B21A8] hover:from-[#2E0854] hover:to-[#4A0E78] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md text-center"
              >
                Call Now
              </a>

              {/* Get Directions */}
              <a
                id="contact-directions-btn"
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-purple-200 hover:border-[#6B21A8] bg-white text-[#1E1035] hover:text-[#6B21A8] font-bold text-sm transition-all shadow-2xs text-center hover:bg-purple-50/50"
              >
                Get Directions
              </a>

              {/* WhatsApp */}
              <a
                id="contact-whatsapp-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md text-center"
              >
                {/* Authentic WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.53 1.83.81 2.796.81h.005c3.18 0 5.766-2.587 5.767-5.768.001-3.18-2.585-5.795-5.772-5.795zm6.549 5.767c-.002 3.612-2.939 6.55-6.553 6.55-1.127 0-2.222-.29-3.186-.84l-3.535.927.944-3.447c-.608-1.026-.928-2.199-.927-3.402.002-3.613 2.94-6.55 6.555-6.55 3.614.001 6.552 2.94 6.552 6.552z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Book Appointment */}
              <button
                id="contact-book-btn"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#3B0764] via-[#581C87] to-[#6B21A8] hover:from-[#2E0854] hover:to-[#4A0E78] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md text-center cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Styled Interactive Google Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-purple-200 aspect-4/3 sm:aspect-16/11 bg-[#E8ECE9] group">
              {/* Google Map Mock/Embed with Realistic Styling */}
              <div className="absolute inset-0 bg-[#E5E9E7]">
                {/* SVG Stylized Map Layout */}
                <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background base */}
                  <rect width="600" height="450" fill="#E8EDE8" />

                  {/* Green patches / parks */}
                  <path d="M400,280 Q460,260 520,300 L560,400 L380,420 Z" fill="#D3E8D7" />
                  <path d="M20,10 Q60,30 90,90 L40,140 L0,100 Z" fill="#D3E8D7" />
                  <path d="M500,40 Q540,60 580,100 L590,20 L510,10 Z" fill="#D3E8D7" />

                  {/* Main Roads */}
                  {/* Kempe Gowda Main Road */}
                  <path d="M400,0 L405,450" stroke="#FFFFFF" strokeWidth="18" />
                  <path d="M400,0 L405,450" stroke="#FEE599" strokeWidth="10" />

                  {/* Cross Roads */}
                  <path d="M0,180 Q200,200 600,160" stroke="#FFFFFF" strokeWidth="12" />
                  <path d="M0,240 Q300,260 600,220" stroke="#FFFFFF" strokeWidth="10" />
                  <path d="M0,320 Q200,340 600,310" stroke="#FFFFFF" strokeWidth="10" />

                  {/* 1st Cross, 8th Cross, 9th Cross */}
                  <path d="M100,50 L380,120" stroke="#FFFFFF" strokeWidth="8" />
                  <path d="M20,140 L400,200" stroke="#FFFFFF" strokeWidth="7" />
                  <path d="M80,210 L400,260" stroke="#FFFFFF" strokeWidth="8" />
                  <path d="M300,180 L350,450" stroke="#FFFFFF" strokeWidth="8" />
                  <path d="M400,150 L580,170" stroke="#FFFFFF" strokeWidth="9" />
                  <path d="M405,250 L600,260" stroke="#FFFFFF" strokeWidth="9" />

                  {/* Road Labels */}
                  <text x="390" y="320" transform="rotate(88, 390, 320)" fill="#68737D" fontSize="10" fontWeight="500" letterSpacing="0.05em">
                    Nada Prabhu Kempe Gowda Main Rd
                  </text>
                  <text x="210" y="228" transform="rotate(8, 210, 228)" fill="#788590" fontSize="9" fontWeight="500">
                    9th Cross Rd
                  </text>
                  <text x="200" y="268" transform="rotate(8, 200, 268)" fill="#788590" fontSize="9" fontWeight="500">
                    8th Cross Rd
                  </text>
                  <text x="280" y="380" transform="rotate(78, 280, 380)" fill="#788590" fontSize="9" fontWeight="500">
                    Cross Rd
                  </text>
                  <text x="325" y="375" transform="rotate(80, 325, 375)" fill="#788590" fontSize="9" fontWeight="500">
                    St Anthony Rd
                  </text>

                  {/* Surrounding Landmark Markers */}
                  <circle cx="480" cy="185" r="7" fill="#8E9DA8" />
                  <text x="495" y="180" fill="#4B5660" fontSize="10" fontWeight="600">GlobalFoundries</text>
                  <text x="495" y="193" fill="#75828D" fontSize="8">ಗ್ಲೋಬಲ್ ಫೌಂಡ್ರೀಸ್</text>

                  <circle cx="475" cy="245" r="7" fill="#8E9DA8" />
                  <text x="490" y="249" fill="#4B5660" fontSize="10" fontWeight="500">Mantri Lithos</text>

                  <circle cx="480" cy="305" r="7" fill="#8E9DA8" />
                  <text x="495" y="303" fill="#4B5660" fontSize="9" fontWeight="500">Delta Air Lines Global</text>
                  <text x="495" y="315" fill="#4B5660" fontSize="9" fontWeight="500">Technology Hub</text>

                  <text x="420" y="380" fill="#75828D" fontSize="9" fontWeight="500">Kensri School</text>
                  <text x="420" y="392" fill="#75828D" fontSize="8">ಕೆನ್ಸ್ರಿ ಸ್ಕೂಲ್</text>

                  <text x="340" y="420" fill="#75828D" fontSize="9">The Binge Town -</text>

                  {/* CLINIC PIN - Red Pin */}
                  <g transform="translate(415, 230)">
                    {/* Pin Drop Shadow */}
                    <ellipse cx="0" cy="18" rx="7" ry="3.5" fill="#000000" fillOpacity="0.25" />
                    {/* Pin Shape */}
                    <path d="M0,0 C-8,-14 -12,-20 -12,-28 C-12,-37 -6,-42 0,-42 C6,-42 12,-37 12,-28 C12,-20 8,-14 0,0 Z" fill="#EA4335" />
                    <circle cx="0" cy="-28" r="5" fill="#B31412" />
                    {/* Label */}
                    <text x="16" y="-30" fill="#D93025" fontSize="11" fontWeight="700">HappyLipzz</text>
                    <text x="16" y="-17" fill="#D93025" fontSize="10" fontWeight="600">Advanced Dental care</text>
                  </g>
                </svg>
              </div>

              {/* Google Maps Top-Left Info Card Widget */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-xs bg-white rounded-lg shadow-md p-3.5 border border-slate-200 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-[#1E293B] text-[13px] leading-tight">
                      HappyLipzz Advanced Dental care
                    </h4>
                    <p className="text-[#64748B] text-[11px] mt-1 leading-snug">
                      135, 1st Cross Rd, Prasara Bharathi Layout, hebbal, Dasarahalli, Bengaluru, Karnataka 560024, India
                    </p>
                    <div className="flex items-center gap-1 mt-1.5 text-[11px]">
                      <span className="font-bold text-[#0A2533]">5.0</span>
                      <span className="text-[#EA4335]">★</span>
                      <a
                        href={CLINIC_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1A73E8] hover:underline font-medium ml-0.5"
                      >
                        (6)
                      </a>
                      <span className="text-[#64748B] ml-1 text-[10px]">ⓘ</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-slate-100 text-[#1A73E8]"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-slate-100 text-[#1A73E8]"
                      title="Directions"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Satellite / Terrain preview button bottom left */}
              <div className="absolute bottom-3 left-3 bg-white p-1 rounded-md shadow-xs border border-slate-200">
                <div className="w-7 h-7 bg-slate-300 rounded-sm overflow-hidden flex items-center justify-center">
                  <Layers className="w-4 h-4 text-slate-600" />
                </div>
              </div>

              {/* Bottom Right Google Branding */}
              <div className="absolute bottom-1 right-2 hidden sm:flex items-center gap-2 text-[9px] text-slate-500 bg-white/80 px-2 py-0.5 rounded-xs">
                <span className="font-semibold text-slate-700">Google</span>
                <span>Keyboard shortcuts</span>
                <span>Map data ©2026</span>
                <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Report a map error
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
