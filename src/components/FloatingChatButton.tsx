import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, X, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FloatingChatButtonProps {
  onOpenAppointment: () => void;
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({
  onOpenAppointment,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = chatMessage.trim() || 'Hi, I would like to inquire about a dental treatment at HappyLipzz.';
    const url = `https://wa.me/917892742373?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
    setChatMessage('');
    setIsOpen(false);
  };

  return (
    <div id="floating-chat-container" className="fixed bottom-5 left-5 z-40">
      {/* Chat Popup Drawer/Card */}
      {isOpen && (
        <div
          id="floating-chat-popup"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-xs sm:w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-[#007D88] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-[#2E0854] shrink-0">
                <img
                  src="/new-happy-logo.png"
                  alt="HappyLipzz Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">HappyLipzz Dental Care</h4>
                <p className="text-[11px] text-teal-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Hebbal, Dasarahalli Clinic
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10"
              aria-label="Close chat assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 space-y-3 bg-slate-50 border-b border-slate-100 text-xs">
            <p className="text-slate-600">
              Welcome! How can we assist you with your dental health today?
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAppointment();
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 hover:border-[#007D88] rounded-xl text-slate-800 font-medium hover:text-[#007D88] transition-colors shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#007D88]" />
                <span>Book Slot</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 hover:border-[#007D88] rounded-xl text-slate-800 font-medium hover:text-[#007D88] transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#007D88]" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Input */}
          <form onSubmit={handleSendWhatsApp} className="p-3 bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question on WhatsApp..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="grow px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#007D88] text-slate-800"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#007D88] hover:bg-[#006A73] text-white shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button matching Screenshot */}
      <button
        id="floating-chat-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#007D88] hover:bg-[#006A73] text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-hidden ring-4 ring-white/50"
        aria-label="Open chat assistance"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};
