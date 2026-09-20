import React from 'react';
import { ArrowRight, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { MAIN_CONDITIONS, CLINIC_INFO } from '../data';

interface ProblemCardsProps {
  onSelectCondition: (conditionName: string) => void;
}

export const ProblemCards: React.FC<ProblemCardsProps> = ({ onSelectCondition }) => {
  return (
    <section id="problemas" className="py-20 sm:py-28 bg-[#FAF7F2] relative border-t border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching original website */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Você se identifica?</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Você Está Sofrendo com <br className="hidden sm:inline" />
            <span className="text-[#C66F53]">Algum Desses Problemas?</span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#685C57] font-normal leading-relaxed">
            Problemas nos pés não desaparecem sozinhos — e quanto mais você espera, mais difícil e caro fica o tratamento.
          </p>
        </div>

        {/* 6 Problem Cards Grid matching original site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MAIN_CONDITIONS.map((cond) => {
            const cardStyle =
              cond.tone === 'peach'
                ? 'bg-[#F9ECE5] border-[#F2D7CB]'
                : cond.tone === 'sand'
                ? 'bg-[#FBF0E7] border-[#EEDACD]'
                : 'bg-[#DEEDE3] border-[#C8DFD0]';

            const tabBadge =
              cond.tone === 'peach'
                ? 'bg-[#E3967C] text-white'
                : cond.tone === 'sand'
                ? 'bg-[#D28368] text-white'
                : 'bg-[#4B7358] text-white';

            return (
              <div
                key={cond.id}
                id={cond.id}
                className={`relative rounded-[28px] p-6 border ${cardStyle} transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-lg font-bold text-[#2B2321] tracking-tight">
                      {cond.title}
                    </span>
                    <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full ${tabBadge}`}>
                      {cond.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white shadow-2xs border border-white/80">
                    <img
                      src={cond.image}
                      alt={cond.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Problem Description */}
                  <p className="text-xs sm:text-sm text-[#5B4E49] leading-relaxed mb-3">
                    {cond.problem}
                  </p>

                  {/* Clinical Solution */}
                  <p className="text-xs text-[#2E2421] bg-white/70 p-3 rounded-xl border border-white/60 leading-relaxed mb-5">
                    <strong className="text-[#C66F53]">Nosso Protocolo:</strong> {cond.action}
                  </p>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={() => onSelectCondition(cond.title)}
                  className="w-full py-2.5 rounded-full bg-white/95 hover:bg-white text-[#2B2321] text-xs font-semibold border border-[#DACDC3] hover:border-[#C66F53] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-2xs"
                >
                  <span>{cond.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C66F53] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout matching original site */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DED6] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF2EB] border border-[#E8DED6] flex items-center justify-center shrink-0 text-[#C66F53]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#2B2321]">
                Não sabe exatamente qual é seu problema?
              </h3>
              <p className="text-xs sm:text-sm text-[#736560]">
                Nossa podóloga identifica o diagnóstico e o protocolo correto na primeira consulta presencial.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Ol%C3%A1%2C+tenho+um+problema+no+p%C3%A9+mas+n%C3%A3o+sei+exatamente+o+que+%C3%A9.+Podem+me+orientar%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com Especialista →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
