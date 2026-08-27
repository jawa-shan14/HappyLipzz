import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenAppointment: (serviceId?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Why Choose Us', target: 'why-choose-us' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled
        ? 'bg-white shadow-sm border-b border-purple-100/80 py-3'
        : 'bg-white border-b border-slate-100/80 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-14 h-14 shrink-0">
              <img
                src="/happy-logoooo.png"
                alt="HappyLipzz Sentinel of Smiles Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#1E1035] font-bold text-lg tracking-tight leading-none group-hover:text-[#6B21A8] transition-colors">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[#7C6F93] text-[10px] font-semibold tracking-[0.16em] uppercase mt-1">
                {CLINIC_INFO.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="text-[#475569] hover:text-[#6B21A8] font-medium text-[15px] transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-call-btn"
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-[#6B21A8] text-[#1E1035] hover:text-[#6B21A8] font-medium text-sm transition-all bg-white hover:bg-purple-50/50"
            >
              <Phone className="w-4 h-4 text-[#6B21A8]" />
              <span>Call</span>
            </a>
            <button
              id="header-book-btn"
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-[#4A0E78] to-[#6B21A8] hover:from-[#3B0764] hover:to-[#581C87] text-white font-semibold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-call-btn"
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-full border border-purple-100 text-[#1E1035] hover:bg-purple-50"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4 text-[#6B21A8]" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-purple-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="sm:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="text-left py-2 px-3 text-[#334155] hover:text-[#6B21A8] hover:bg-purple-50 rounded-md font-medium text-base transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-purple-100 flex flex-col gap-2.5">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-slate-200 text-[#1E1035] font-medium text-sm text-center hover:bg-purple-50"
            >
              <Phone className="w-4 h-4 text-[#6B21A8]" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#4A0E78] to-[#6B21A8] text-white font-semibold text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
