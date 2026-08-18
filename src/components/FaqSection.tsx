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
    <section id="faq" className="bg-[#F8FBFC] py-16 sm:py-24 border-t border-slate-100/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <span
            id="faq-eyebrow"
            className="text-[#007D88] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase"
          >
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2533] tracking-tight"
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
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#007D88] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#007D88] hover:text-[#007D88]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0A2533] text-base sm:text-[17px] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#EBF7F8] text-[#007D88] rotate-180' : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#596A77] text-sm sm:text-base leading-relaxed border-t border-slate-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#0A2533]">Have a specific dental question or emergency?</h4>
            <p className="text-sm text-[#596A77]">Our experienced team is always available to assist and advise you.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-[#007D88] text-[#0A2533] hover:text-[#007D88] font-medium text-xs transition-colors bg-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007D88] hover:bg-[#006B74] text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
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
