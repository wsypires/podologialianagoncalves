import React from 'react';
import { AlertTriangle, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface UrgentBannerProps {
  onOpenBooking: () => void;
}

export const UrgentBanner: React.FC<UrgentBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-gradient-to-r from-[#F4E2D8] via-[#F8ECE3] to-[#E2EFE5] p-8 sm:p-12 border border-[#E8D8CD] shadow-md text-center space-y-6 relative overflow-hidden">
          
          {/* Subtle icon indicator */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E3967C] text-white shadow-xs mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C66F53]">
              PREVENÇÃO & AÇÃO IMEDIATA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2321] tracking-tight">
              Problemas nos Pés Não Desaparecem Sozinhos
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#594C47] leading-relaxed">
              Fungos criam biofilmes mais resistentes com o tempo. Unhas encravadas infeccionam e
              geram granulomas dolorosos. E pés diabéticos sem acompanhamento especializado correm
              riscos de complicações severas.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#2E2320]">
              Quanto mais cedo você consulta, mais rápido, simples e econômico é o tratamento.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Agora pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#483B37] text-xs sm:text-sm font-semibold border border-[#D8CAC0] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C66F53]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
