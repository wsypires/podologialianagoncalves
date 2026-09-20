import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight, MessageCircle, HeartPulse, Award } from 'lucide-react';
import { OZONIOTERAPIA_INFO, CLINIC_INFO } from '../data';

interface OzonioterapiaSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const OzonioterapiaSection: React.FC<OzonioterapiaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ozonioterapia" className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E5DAD0] relative overflow-hidden">
      {/* Decorative subtle background ring */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E3967C]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Indications */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D5A50]/10 border border-[#3D5A50]/20 text-[#2D4A40] text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3D5A50]" />
              <span>{OZONIOTERAPIA_INFO.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2321] leading-tight">
              Ozonioterapia <br />
              <span className="text-[#3D5A50]">na mesma clínica</span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#3D5A50] to-[#E3967C] rounded-full" />

            <p className="text-sm sm:text-base text-[#574B47] leading-relaxed">
              {OZONIOTERAPIA_INFO.description}
            </p>

            {/* Nurse credential banner */}
            <div className="p-4 rounded-2xl bg-white/80 border border-[#DDD1C7] flex items-center gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#3D5A50]/15 text-[#3D5A50] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-sm text-[#2B2321]">
                  Enfermeira Marciana Soares
                </div>
                <div className="text-xs text-[#736560]">
                  15 anos de atuação em Ozonioterapia Clínica · Equipamento Philozon Certificado
                </div>
              </div>
            </div>

            {/* 8 Indications Grid matching original site */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#736560] mb-3">
                Principais Indicações Terapêuticas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OZONIOTERAPIA_INFO.indications.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E5DAD0] hover:border-[#3D5A50]/40 transition-colors shadow-2xs flex items-start gap-3"
                  >
                    <span className="text-xl shrink-0 leading-none">{ind.icon}</span>
                    <div>
                      <div className="font-semibold text-xs text-[#2B2321] leading-tight">
                        {ind.title}
                      </div>
                      <div className="text-[11px] text-[#7E706B] leading-snug mt-0.5">
                        {ind.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking('Ozonioterapia')}
                className="px-6 py-3.5 rounded-full bg-[#3D5A50] hover:bg-[#2D453D] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer a Ozonioterapia</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Ozonioterapia+com+a+Enfermeira+Marciana`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white hover:bg-[#FAF4EE] text-[#483E3A] border border-[#DDD0C6] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 rounded-[38px] bg-[#3D5A50]/15 -rotate-2 -z-10" />

              <div className="rounded-[34px] overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/original/treatment_ozonioterapia.png"
                  alt="Ozonioterapia Medicinal com Equipamento Philozon na Clínica Liana Gonçalves"
                  className="w-full aspect-[4/3] object-cover object-center"
                />

                <div className="p-5 bg-gradient-to-t from-white via-white to-white/95 border-t border-[#EFE5DC]">
                  <div className="flex items-center gap-2 text-[#3D5A50] font-bold text-xs uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Tecnologia & Segurança Médica</span>
                  </div>
                  <p className="text-xs text-[#6B5E59] leading-relaxed">
                    Aparelho médico Philozon calibrado para dosagens terapêuticas exatas, garantindo analgesia duradoura e aceleração celular.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
