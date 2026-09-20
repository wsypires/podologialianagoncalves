import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from './data';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PathologiesIndexPage } from './pages/PathologiesIndexPage';
import { PathologyDetailPage } from './pages/PathologyDetailPage';
import { DiferenciaisPage } from './pages/DiferenciaisPage';
import { PricingPage } from './pages/PricingPage';
import { OzonioterapiaPage } from './pages/OzonioterapiaPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedTreatment, setPreselectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentName?: string) => {
    setPreselectedTreatment(treatmentName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedTreatment(undefined);
  };

  return (
    <BrowserRouter>
      {/* Scroll restore to top on page navigation */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#2B2321] selection:bg-[#E3967C] selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            {/* Página Inicial */}
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />

            {/* Sobre Nós */}
            <Route path="/sobre-nos" element={<AboutPage onOpenBooking={handleOpenBooking} />} />

            {/* Catálogo de Patologias */}
            <Route path="/patologias" element={<PathologiesIndexPage onOpenBooking={handleOpenBooking} />} />

            {/* Página Específica de Cada Patologia */}
            <Route path="/patologias/:slug" element={<PathologyDetailPage onOpenBooking={handleOpenBooking} />} />

            {/* Diferenciais Clínicos */}
            <Route path="/diferenciais" element={<DiferenciaisPage onOpenBooking={handleOpenBooking} />} />

            {/* Quanto Custa / Tabela de Preços */}
            <Route path="/quanto-custa" element={<PricingPage onOpenBooking={handleOpenBooking} />} />

            {/* Ozonioterapia Philozon */}
            <Route path="/ozonioterapia" element={<OzonioterapiaPage onOpenBooking={handleOpenBooking} />} />

            {/* Avaliações do Google */}
            <Route path="/avaliacoes" element={<ReviewsPage onOpenBooking={handleOpenBooking} />} />

            {/* Dúvidas Frequentes */}
            <Route path="/faq" element={<FaqPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/duvidas" element={<FaqPage onOpenBooking={handleOpenBooking} />} />

            {/* Contato & Localização */}
            <Route path="/contato" element={<ContactPage onOpenBooking={handleOpenBooking} />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Interactive WhatsApp Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          preselectedTreatment={preselectedTreatment}
        />

        {/* Floating WhatsApp Quick Action Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, estou no site da Clínica Liana Gonçalves e gostaria de agendar um horário')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5B] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="hidden sm:inline font-semibold text-xs tracking-wide">
              Agendar no WhatsApp
            </span>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
