import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { SERVICE_AREAS_DATA, CLINIC_INFO } from '../data/dentalData';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="service-areas" className="bg-white py-14 sm:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-[#007D88] text-xs font-bold tracking-[0.14em] uppercase">
              LOCALITY & CATCHMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0A2533] tracking-tight">
              Proudly Serving Hebbal & North Bengaluru
            </h2>
            <p className="text-[#596A77] text-sm sm:text-base max-w-2xl font-normal">
              Located conveniently in Prasara Bharathi Layout, our clinic welcomes patients from across nearby residential and tech hubs.
            </p>
          </div>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-[#007D88] bg-white text-[#0A2533] hover:text-[#007D88] text-xs font-semibold transition-all shadow-2xs self-start md:self-auto"
          >
            <Navigation className="w-3.5 h-3.5 text-[#007D88]" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICE_AREAS_DATA.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFC] rounded-2xl p-5 border border-slate-200/70 hover:border-[#007D88]/40 hover:bg-white transition-all shadow-2xs group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#EBF7F8] flex items-center justify-center text-[#007D88] group-hover:bg-[#007D88] group-hover:text-white transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-[#0A2533] text-base group-hover:text-[#007D88] transition-colors">
                    {area.name}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#007D88] bg-[#EBF7F8] px-2.5 py-0.5 rounded-full">
                  {area.distance}
                </span>
              </div>

              <p className="text-xs text-[#64748B] pl-9">
                <span className="font-medium text-slate-700">Near:</span> {area.landmarks}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
