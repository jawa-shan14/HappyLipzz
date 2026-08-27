import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/dentalData';

interface FaqSectionProps {
  onOpenAppointment: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAppointment }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Root Canal', 'General', 'Cosmetic', 'Appointments'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-[#F5EEFB] via-[#FAF5FF] to-[#F5EEFB] py-16 sm:py-24 border-t border-purple-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E1035] tracking-tight"
          >
            Got Questions About Dental Care?
          </h2>
          <p className="text-[#596A77] text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Find clear, doctor-verified answers about procedures, safety, costs, and visiting our Hebbal clinic.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#3B0764] via-[#581C87] to-[#6B21A8] text-white shadow-sm ring-2 ring-purple-300/50'
                    : 'bg-white text-[#475569] border border-purple-200 hover:border-[#6B21A8] hover:text-[#6B21A8] hover:bg-purple-50/50 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-white rounded-2xl border ${
                  isOpen
                    ? 'border-purple-300 border-l-4 border-l-[#6B21A8] shadow-md'
                    : 'border-purple-100/90 shadow-2xs hover:border-purple-200'
                } overflow-hidden transition-all duration-200`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base sm:text-[17px] leading-snug ${isOpen ? 'text-[#581C87]' : 'text-[#1E1035]'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#EDE9FE] text-[#6B21A8] rotate-180' : 'bg-purple-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#475569] text-sm sm:text-base leading-relaxed border-t border-purple-50 bg-purple-50/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-gradient-to-r from-white via-[#FAF5FF] to-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#1E1035]">Have a specific dental question or emergency?</h4>
            <p className="text-sm text-[#596A77]">Our experienced team is always available to assist and advise you.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-200 hover:border-[#6B21A8] text-[#1E1035] hover:text-[#6B21A8] font-bold text-xs transition-colors bg-white hover:bg-purple-50/50 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#6B21A8]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#3B0764] via-[#581C87] to-[#6B21A8] hover:from-[#2E0854] hover:to-[#4A0E78] text-white font-bold text-xs shadow-md transition-all cursor-pointer hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
