import React from 'react';
import { CreditCard, AlertCircle, MessageCircle, CheckCircle2, Sparkles, HelpCircle, Microscope, Activity, ShieldCheck, Stethoscope } from 'lucide-react';
import { PRICING_TABLE, CLINIC_INFO } from '../data';

interface PricingSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

const renderPricingIcon = (icon: string) => {
  switch (icon) {
    case 'microscope':
      return <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#C66F53]" />;
    case 'activity':
      return <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#D28368]" />;
    case 'sparkles':
      return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#E3967C]" />;
    case 'footprints':
      return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B7358]" />;
    case 'stethoscope':
    default:
      return <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#C66F53]" />;
  }
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="valores" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EDE4DC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching original site */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparência</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2321] leading-tight mb-4">
            Quanto Custa Cuidar <br className="hidden sm:inline" />
            <span className="text-[#C66F53]">da Saúde dos seus Pés?</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto mb-5" />

          <p className="text-sm sm:text-base text-[#685B56] leading-relaxed">
            Acreditamos em transparência. Abaixo os valores de referência — o valor exato do tratamento só é definido após a consulta, pois cada caso é único.
          </p>
        </div>

        {/* Pricing Cards List */}
        <div className="space-y-4 mb-8">
          {PRICING_TABLE.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                item.highlight
                  ? 'bg-gradient-to-r from-[#FFF6F2] to-[#FAF2EB] border-[#E3967C]/40 shadow-sm ring-1 ring-[#E3967C]/20'
                  : 'bg-white border-[#E8DED6] hover:border-[#DACCC2] shadow-xs'
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#FAF7F2] border border-[#EDE4DC] flex items-center justify-center shadow-2xs">
                  {renderPricingIcon(item.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#2B2321]">
                      {item.procedure}
                    </h3>
                    {item.tag && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        item.highlight
                          ? 'bg-[#E3967C] text-white'
                          : 'bg-[#F0E6DE] text-[#635550]'
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#736560] leading-relaxed">
                    {item.details}
                  </p>
                  {item.note && (
                    <p className="text-[11px] font-medium text-[#C66F53] mt-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.note}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Right Price & Action */}
              <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#F0E6DE]">
                <div className="text-left md:text-right">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#8F7E77]">
                    Investimento
                  </div>
                  <div className="font-serif text-lg sm:text-2xl font-bold text-[#2B2321]">
                    {item.price}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(item.procedure)}
                  className={`mt-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    item.highlight
                      ? 'bg-[#E3967C] hover:bg-[#D48469] text-white shadow-xs'
                      : 'bg-[#FAF4EE] hover:bg-[#F2E5DC] text-[#483E3A] border border-[#DDD0C6]'
                  }`}
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods & Disclaimers matching original site */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DED6] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-[#2B2321]">
              <CreditCard className="w-4 h-4 text-[#C66F53]" />
              <span>Formas de Pagamento Facilitadas</span>
            </div>
            <p className="text-xs text-[#736560]">
              Parcelamos em até <strong className="text-[#2B2321]">10x no cartão</strong> (taxa da operadora) · Pix · Débito · Dinheiro
            </p>
            <p className="text-[11px] text-[#A08E87] flex items-center justify-center md:justify-start gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#C66F53] shrink-0" />
              <span>Valor final do tratamento definido com exatidão após avaliação clínica presencial.</span>
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=Ol%C3%A1%2C+gostaria+de+tirar+uma+d%C3%BAvida+sobre+os+valores+e+tratamentos+da+cl%C3%ADnica`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar Dúvidas pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
