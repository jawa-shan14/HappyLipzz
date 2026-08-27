import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { LocationContactSection } from './components/LocationContactSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutModal } from './components/AboutModal';
import { ReviewsModal } from './components/ReviewsModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/dentalData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string>('root-canal');
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);

  const handleOpenAppointment = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForAppointment(serviceId);
    }
    setAppointmentModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRootCanal = () => {
    const rootCanal = SERVICES_DATA.find((s) => s.id === 'root-canal') || null;
    setDetailService(rootCanal);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E1035] font-sans antialiased selection:bg-[#6B21A8] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onNavigate={handleNavigate}
      />

      {/* Main Landing Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreServices={() => handleNavigate('services')}
          onOpenReviews={() => setReviewsModalOpen(true)}
        />

        {/* 2. Stats Bar */}
        <StatsBar onOpenReviews={() => setReviewsModalOpen(true)} />

        {/* 3. Comprehensive Dental Care Services */}
        <ServicesSection
          onSelectService={(service) => setDetailService(service)}
          onBookService={(serviceId) => handleOpenAppointment(serviceId)}
        />

        {/* 4. Experience the Difference (Why Choose Us) */}
        <WhyChooseUsSection />

        {/* 5. About HappyLipzz Dental Care */}
        <AboutSection onOpenAboutModal={() => setAboutModalOpen(true)} />

        {/* 5.5 Our Clinic in Action / Before & After */}
        <GallerySection />

        {/* 6. Patient Reviews */}
        <ReviewsSection onOpenAllReviews={() => setReviewsModalOpen(true)} />

        {/* 7. Frequently Asked Questions (SEO & Schema) */}
        <FaqSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 8. Localities & Catchment Areas (Local SEO) */}
        <ServiceAreasSection />

        {/* 9. Location & Contact with Google Map */}
        <LocationContactSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 10. Call To Action Banner */}
        <CtaSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReviews={() => setReviewsModalOpen(true)}
        onSelectRootCanal={handleSelectRootCanal}
      />

      {/* Floating WhatsApp Booking Button at bottom right */}
      <WhatsAppFloatingButton onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialServiceId={selectedServiceForAppointment}
      />

      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onBookThisService={(serviceId) => handleOpenAppointment(serviceId)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      <ReviewsModal
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
        onOpenAppointment={() => handleOpenAppointment()}
      />
    </div>
  );
}
