import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  FileText,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { PRICING_TABLE, CLINIC_INFO } from '../data';

interface PricingPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Valores e Investimentos</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Transparência Total: <br />
            <span className="text-[#C66F53]">Quanto Custa o Seu Tratamento?</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Aqui você sabe exatamente o que está pagando e o que está incluso. Sem taxas ocultas, sem surpresas e com a garantia de biossegurança de um centro cirúrgico.
          </p>
        </div>
      </section>

      {/* Regra de Isenção Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#FAF0E7] border border-[#EACBB8] rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#C66F53] text-white flex items-center justify-center shrink-0">
            <Check className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h2 className="font-serif font-bold text-xl text-[#2B2321]">
              Regra de Isenção da Consulta no Mesmo Dia
            </h2>
            <p className="text-xs sm:text-sm text-[#634E46] leading-relaxed">
              Em todos os atendimentos (exceto micose com análise laboratorial), <strong>o valor da consulta de R$ 150,00 não é cobrado</strong> caso o procedimento ou tratamento seja iniciado no mesmo dia. Você paga apenas pelo tratamento realizado!
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Preços Completa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-[#E9DFD7] shadow-sm">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#2B2321]">
              Tabela de Referência de Procedimentos
            </h2>
          </div>

          <div className="space-y-4">
            {PRICING_TABLE.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  item.highlight
                    ? 'bg-[#FCF5F1] border-[#F2D7C8] shadow-xs'
                    : 'bg-[#FAF7F2]/60 border-[#EDE2D8]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl p-2.5 bg-white rounded-xl border border-[#E8DDD4] shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#2B2321]">
                        {item.procedure}
                      </h3>
                      {item.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          item.highlight ? 'bg-[#C66F53] text-white' : 'bg-[#EAE0D7] text-[#554641]'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#685A55] leading-relaxed max-w-2xl">
                      {item.details}
                    </p>
                    {item.note && (
                      <p className="text-[11px] text-[#C66F53] font-medium">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#E8DED6]">
                  <div className="font-serif text-2xl font-bold text-[#2B2321]">
                    {item.price}
                  </div>
                  <button
                    onClick={() => onOpenBooking(item.procedure)}
                    className="px-5 py-2 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold shadow-2xs cursor-pointer"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Pagamento e Reembolso */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Formas de Pagamento */}
          <div className="bg-white rounded-3xl p-8 border border-[#E9DFD7] shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#FBF0EA] flex items-center justify-center text-[#C66F53]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2B2321]">
              Facilidade e Formas de Pagamento
            </h3>
            <p className="text-xs sm:text-sm text-[#685B56] leading-relaxed">
              Aceitamos as principais modalidades de pagamento para o seu conforto:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#483B37]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                <span><strong>Pix:</strong> com desconto e confirmação imediata</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                <span><strong>Cartões de Crédito:</strong> parcelamento em até 12x</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                <span><strong>Cartão de Débito e Dinheiro</strong> em espécie</span>
              </li>
            </ul>
          </div>

          {/* Reembolso Convênio */}
          <div className="bg-white rounded-3xl p-8 border border-[#E9DFD7] shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF2EB] flex items-center justify-center text-[#3D6B47]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2B2321]">
              Recibo para Reembolso no Plano de Saúde
            </h3>
            <p className="text-xs sm:text-sm text-[#685B56] leading-relaxed">
              Atendemos de forma particular para garantir tempo sem pressa e materiais de centro cirúrgico. Emitimos recibo formal completo com CNPJ para que você possa solicitar reembolso junto ao seu convênio médico (como Cassems, Unimed, Bradesco, etc.).
            </p>
            <div className="text-[11px] text-[#786A65] p-3 rounded-xl bg-[#FAF7F2] border border-[#EDE2D8]">
              *Consulte as regras de reembolso de podologia clínica diretamente com a sua operadora de saúde.
            </div>
          </div>

        </div>
      </section>

      {/* Por que não damos preço por foto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3EB] rounded-3xl p-8 border border-[#EAD8C9] flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#D28368] text-white flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-[#2B2321]">
              Por que não precificamos procedimentos apenas por foto no WhatsApp?
            </h3>
            <p className="text-xs sm:text-sm text-[#6D5A53] leading-relaxed">
              Apenas a inspeção presencial permite avaliar profundidade da lesão, integridade vascular, comorbidades (como diabetes) e a presença de infecções ocultas. Isso garante que você receba um orçamento honesto e sem custos surpresa durante o atendimento.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold shrink-0 cursor-pointer"
          >
            Agendar Avaliação
          </button>
        </div>
      </section>

    </div>
  );
};
