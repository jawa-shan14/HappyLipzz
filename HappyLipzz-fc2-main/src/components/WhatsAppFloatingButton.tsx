import React, { useState } from 'react';
import { Phone, Calendar, X, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface WhatsAppFloatingButtonProps {
  onOpenAppointment: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenAppointment,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const defaultBookingText = 'Hi HappyLipzz Dental Care! I would like to book an appointment with Dr. Isha Shashidhar.';

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = chatMessage.trim() || defaultBookingText;
    const url = `https://wa.me/917892742373?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
    setChatMessage('');
    setIsOpen(false);
  };

  const handleInstantWhatsAppBook = () => {
    const url = `https://wa.me/917892742373?text=${encodeURIComponent(defaultBookingText)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Booking Drawer / Card */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          className="mb-4 w-[calc(100vw-2.5rem)] max-w-sm sm:w-88 bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 bg-[#2E0854] shrink-0 shadow-xs">
                  <img
                    src="/happy-logooo.jpeg"
                    alt="HappyLipzz Sentinel of Smiles"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  <span>HappyLipzz Dental Care</span>
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span>Online • Usually replies instantly</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Message Bubble */}
          <div className="p-4 bg-[#EFEAE2]/60 space-y-3">
            <div className="bg-white rounded-2xl rounded-tl-xs p-3.5 shadow-2xs border border-stone-200/60 max-w-[90%]">
              <p className="text-xs text-slate-800 leading-relaxed">
                👋 Hello! Welcome to <strong>HappyLipzz Advanced Dental Care</strong>.
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Need to book a consultation with <strong>Dr. Isha Shashidhar</strong> or have dental queries? We are here to help!
              </p>
              <span className="text-[9px] text-slate-400 block text-right mt-1">Just now</span>
            </div>

            {/* Instant WhatsApp Booking Button */}
            <button
              onClick={handleInstantWhatsAppBook}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              {/* Exact WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.53 1.83.81 2.796.81h.005c3.18 0 5.766-2.587 5.767-5.768.001-3.18-2.585-5.795-5.772-5.795zm6.549 5.767c-.002 3.612-2.939 6.55-6.553 6.55-1.127 0-2.222-.29-3.186-.84l-3.535.927.944-3.447c-.608-1.026-.928-2.199-.927-3.402.002-3.613 2.94-6.55 6.555-6.55 3.614.001 6.552 2.94 6.552 6.552z" />
              </svg>
              <span>Instant Appointment Booking</span>
            </button>

            {/* Alternative Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAppointment();
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-purple-200 hover:border-purple-600 rounded-xl text-purple-950 font-medium text-xs hover:text-purple-700 transition-colors shadow-2xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#6B21A8]" />
                <span>Web Form</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 hover:border-purple-600 rounded-xl text-slate-800 font-medium text-xs hover:text-purple-700 transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#6B21A8]" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Direct WhatsApp input */}
          <form onSubmit={handleSendWhatsApp} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your WhatsApp message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="grow px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#25D366] text-slate-800"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shrink-0 cursor-pointer shadow-xs transition-colors"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button (Bottom Right with exact WhatsApp Logo) */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip / Pill Badge */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-slate-800 text-xs font-semibold shadow-lg border border-purple-100 hover:border-purple-300 transition-all hover:scale-102 cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-[#1E1035] group-hover:text-[#6B21A8] transition-colors">Book on WhatsApp</span>
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <button
          id="whatsapp-floating-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-108 active:scale-95 cursor-pointer focus:outline-hidden ring-4 ring-white/80"
          aria-label="Book on WhatsApp"
        >
          {/* Subtle Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>

          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            /* Official Authentic WhatsApp Logo SVG */
            <svg
              className="w-8 h-8 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
