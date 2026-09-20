import React, { useState } from 'react';
import { Sparkles, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data';

interface FaqPageProps {
  onOpenBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Tire Suas Dúvidas Sobre <br />
            <span className="text-[#C66F53]">Nosso Atendimento Clínico</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Reunimos as respostas para as perguntas mais comuns sobre dor, anestesia, valores, reembolso em convênios e preparação para a consulta.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#EAE0D7] shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#2B2321]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#C66F53] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#FAF0E7]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5E514C] leading-relaxed border-t border-[#F5EDE6]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3EB] rounded-3xl p-8 border border-[#E8D9CC] text-center max-w-2xl mx-auto space-y-4">
          <HelpCircle className="w-8 h-8 text-[#C66F53] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#2B2321]">
            Não encontrou a resposta para a sua dúvida?
          </h3>
          <p className="text-xs sm:text-sm text-[#6C5B54]">
            Envie sua pergunta diretamente para a nossa equipe no WhatsApp. Responderemos com prazer!
          </p>
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold shadow-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Equipe no WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
};
