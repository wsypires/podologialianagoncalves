import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF4EF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C66F53]">
            DÚVIDAS FREQUENTES
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Perguntas <span className="italic font-normal text-[#C66F53]">Frequentes</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#6B5E59]">
            Tudo o que você precisa saber sobre nossos protocolos, valores e segurança antes de agendar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white/90 border border-[#E8DDD3] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FCF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2B2321]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#E3967C] text-white rotate-180' : 'bg-[#FAF0EA] text-[#C66F53]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C4F4A] leading-relaxed border-t border-[#F5ECE5]/60 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center bg-white/60 rounded-2xl p-6 border border-[#EAE0D7]">
          <p className="text-xs sm:text-sm text-[#635550] mb-4">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+o+atendimento+da+cl%C3%ADnica`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#DFD3C8] hover:border-[#C66F53] text-[#443834] hover:text-[#C66F53] text-xs sm:text-sm font-semibold transition-all shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Falar com a recepção pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
