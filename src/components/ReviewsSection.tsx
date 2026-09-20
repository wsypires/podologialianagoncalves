import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C66F53]">
            A VOZ DE QUEM VIVEU
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Mais de 2.000 Pacientes. <br />
            <span className="italic font-normal text-[#C66F53]">207 Avaliações.</span> Uma Consistência.
          </h2>
          
          <p className="text-sm sm:text-base text-[#6B5E59]">
            A confiança da comunidade de Campo Grande construída caso a caso com respeito, ciência e acolhimento.
          </p>

          {/* Google Score Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E5DAD0] shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif text-lg font-bold text-[#2B2321]">4.9 / 5.0</span>
              <span className="text-xs text-[#7A6D68] border-l border-[#DFD3C8] pl-3">
                {CLINIC_INFO.reviewsCount} avaliações no Google
              </span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Slider / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 bg-white/90 border border-[#EBE1D8] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7E79]">{item.date}</span>
                </div>

                <Quote className="w-8 h-8 text-[#E3967C]/30 mb-2" />

                <p className="text-xs sm:text-sm text-[#483B37] leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2E8DF] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#2B2321]">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#7A6D68] flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-[#3E6B48]" />
                    <span>{item.verifiedSource}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight for Cristina Treu's detailed geriatric review */}
        <div className="bg-[#FAF2EB] rounded-3xl p-6 sm:p-8 border border-[#E9D9CC] max-w-4xl mx-auto shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#E3967C]/20 text-[#C66F53] flex items-center justify-center shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-semibold text-[#483B37] ml-2">
                  Atendimento Acessível para Idosos
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4B3E3A] leading-relaxed italic">
                "{TESTIMONIALS[4].text}"
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-[#2B2321]">
                  {TESTIMONIALS[4].name}
                </span>
                <span className="text-[11px] text-[#7E706B]">
                  {TESTIMONIALS[4].date} · Google Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
