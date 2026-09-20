import React from 'react';
import { Star, ShieldCheck, ArrowRight, MessageCircle, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-hero">
      {/* Subtle organic background ambient glows */}
      <div className="absolute top-10 left-[-80px] w-96 h-96 rounded-full bg-[#DCEEE2]/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#FCE5DC]/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            
            {/* Trust rating badge matching original website */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E8DDD4] shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#483B37]">
                207 Avaliações no Google &nbsp;|&nbsp; 7 Anos Cuidando dos seus Pés
              </span>
            </div>

            {/* Headline matching the editorial style in the original site */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2321] leading-[1.12]">
              Seus Pés Merecem <br />
              <span className="text-[#C66F53]">Cuidado Clínico.</span> <br />
              Não Improvisação.
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-[#C66F53] to-[#E3967C] rounded-full" />

            {/* Subtitle & Value Proposition matching original site */}
            <p className="text-base sm:text-lg text-[#5D514D] font-normal leading-relaxed max-w-xl">
              Clínica de Podologia Clínica em Campo Grande — MS. Foco exclusivo na <strong className="text-[#2B2321] font-semibold">saúde dos seus pés</strong>, com protocolos médicos, equipamentos de ponta e mais de 15 anos de experiência especializada.
            </p>

            {/* Indication Banner */}
            <p className="text-xs sm:text-sm font-medium text-[#736560] italic flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C66F53]"></span>
              Indicada por médicos e dermatologistas de Campo Grande.
            </p>

            {/* Action Buttons matching original site */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-whatsapp"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm sm:text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#tratamentos"
                className="px-6 py-3.5 rounded-full border border-[#D5C9BE] hover:border-[#C66F53] hover:text-[#C66F53] text-[#4A3E3A] text-sm sm:text-base font-semibold transition-all text-center bg-white/60"
              >
                Ver tratamentos →
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-[#EAE2D9] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {CLINIC_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#483B37] leading-tight">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[11px] text-[#867873] hidden sm:block leading-tight">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Portrait matching uploaded layout */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background organic aura & shapes */}
            <div className="relative w-full max-w-[420px] aspect-[3/4]">
              {/* Rounded image container with luxury border */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden shadow-xl border-4 border-white/80 bg-white">
                <img
                  src="/images/original/hero_liana.jpg"
                  alt="Podóloga Clínica Liana Gonçalves - Hospital do Pé"
                  className="w-full h-full object-cover object-top transform hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle soft gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2321]/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-md border border-[#F0E6DE]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E3967C]/20 flex items-center justify-center text-[#C66F53] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2B2321]">Atendimento Particular Exclusivo</p>
                      <p className="text-[11px] text-[#6A5E59]">Biossegurança hospitalar e laserterapia sem dor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circular Seal in center bottom (referencing concept image) */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 rounded-full bg-[#FAF7F2] border border-[#E3967C]/40 shadow-lg flex items-center justify-center p-2 text-center">
                <div className="w-full h-full rounded-full border border-dashed border-[#E3967C] flex flex-col items-center justify-center text-[9px] font-bold tracking-tighter text-[#C66F53] leading-none">
                  <Sparkles className="w-3.5 h-3.5 mb-0.5 text-[#E3967C]" />
                  <span>CIÊNCIA &</span>
                  <span>CUIDADO</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
