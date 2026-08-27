import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/dentalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'root-canal',
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone) return;

    try {
      const existing = JSON.parse(localStorage.getItem('happylipzz_appointments') || '[]');
      const newBooking = {
        id: Date.now().toString(),
        serviceId: selectedService,
        serviceTitle: selectedServiceObj.title,
        patientName,
        phone,
        date: date || 'Earliest available',
        timeSlot,
        notes,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('happylipzz_appointments', JSON.stringify([newBooking, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPhone('');
    setDate('');
    setNotes('');
    onClose();
  };

  const selectedServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello HappyLipzz Dental Care! I'd like to book an appointment.\n\n👤 Name: ${patientName}\n📞 Phone: ${phone}\n🦷 Service: ${selectedServiceObj.title}\n📅 Date: ${date || 'Earliest Available'}\n⏰ Time: ${timeSlot}\n💬 Notes: ${notes || 'None'}`
    );
    window.open(`https://wa.me/917892742373?text=${text}`, '_blank');
  };

  return (
    <div
      id="appointment-modal-overlay"
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="appointment-modal-card"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-4 sm:my-8 mx-auto"
      >
        {/* Modal Header */}
        <div className="bg-[#007D88] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
              H
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Book an Appointment</h3>
              <p className="text-white/80 text-xs">{CLINIC_INFO.fullName}</p>
            </div>
          </div>
          <button
            id="close-appointment-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div id="booking-success-state" className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-[#0A2533]">Appointment Requested!</h4>
                <p className="text-[#64748B] text-sm max-w-sm mx-auto">
                  Thank you <span className="font-semibold text-slate-800">{patientName}</span>. The clinic coordinator will call you at <span className="font-semibold text-slate-800">{phone}</span> to confirm your slot for <span className="font-semibold text-[#007D88]">{selectedServiceObj.title}</span>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 text-xs text-slate-600 text-left space-y-1.5 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-medium text-slate-700">135, 1st Cross Rd, Hebbal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Direct Helpline:</span>
                  <span className="font-medium text-[#007D88]">{CLINIC_INFO.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Preferred Slot:</span>
                  <span className="font-medium text-slate-700">{date || 'Earliest available'} at {timeSlot}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details on WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-full border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Select Treatment / Service
                </label>
                <select
                  id="appointment-service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent bg-white"
                >
                  {SERVICES_DATA.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    id="appointment-name-input"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    id="appointment-phone-input"
                    type="tel"
                    required
                    placeholder="e.g. 098765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="appointment-date-input"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      id="appointment-timeslot-select"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Any specific dental concerns (optional)
                </label>
                <textarea
                  id="appointment-notes-input"
                  rows={2}
                  placeholder="e.g. Tooth sensitivity, severe ache, regular checkup..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-[#0A2533] focus:outline-hidden focus:ring-2 focus:ring-[#007D88] focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2">
                <button
                  id="submit-appointment-btn"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full bg-[#007D88] hover:bg-[#006A73] text-white font-bold text-base transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Appointment Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-[#64748B]">
                  No upfront payment required. The clinic will confirm your consultation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
