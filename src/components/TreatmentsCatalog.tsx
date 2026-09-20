import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, CreditCard, Sparkles, AlertCircle, Microscope, Activity, Stethoscope } from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

interface TreatmentsCatalogProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsCatalog: React.FC<TreatmentsCatalogProps> = ({ onSelectTreatment }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');

  const filteredTreatments =
    selectedFilter === 'todos'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === selectedFilter);

  const filters = [
    { id: 'todos', label: 'Todos os Tratamentos' },
    { id: 'urgencia', label: 'Urgências & Dor' },
    { id: 'micose', label: 'Fungos & Micose' },
    { id: 'especialidade', label: 'Especialidades Médicas' },
    { id: 'preventivo', label: 'Preventivo & Saúde' },
  ];

  return (
    <section id="tratamentos" className="py-20 sm:py-28 bg-[#FAF7F2] relative border-t border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching original website */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tratamentos especializados</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Nossos Principais Tratamentos
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-sm sm:text-base text-[#6B5E59] font-normal leading-relaxed">
            Cada caso é único. Cada protocolo é personalizado. Isso é o que separa o tratamento eficaz do paliativo.
          </p>
        </div>

        {/* 3 Top Featured Cards matching original site */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Fungos nas Unhas (Carro-chefe) */}
          <div className="rounded-[30px] p-7 bg-[#FBF0EA] border border-[#F2DACF] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#C66F53] border border-[#F2DACF] shadow-2xs">
                  <Microscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E3967C] text-white">
                  Carro-chefe
                </span>
              </div>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-2xs border border-white">
                <img
                  src="/images/original/treatment_fungos.webp"
                  alt="Tratamento de Fungos e Micose Onicomicose"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2321]">
                  Fungos nas Unhas
                </h3>
                <p className="text-xs text-[#685B56] leading-relaxed mt-1">
                  Diagnóstico com exame micológico laboratorial. Identificamos o fungo exato para o protocolo certo. Protocolo especializado e comprovado.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#F2DACF] space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#A08E87]">
                  Consulta inclui:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#382C29]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#E3967C] shrink-0" />
                    <span>Coleta micológica</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#E3967C] shrink-0" />
                    <span>Análise laboratorial</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#E3967C] shrink-0" />
                    <span>1ª limpeza completa</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#E3967C] shrink-0" />
                    <span>Plano personalizado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#F0D5C9]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-[#736560]">Investimento:</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-[#2B2321]">R$ 370,00</span>
                  <div className="text-[10px] text-[#8F7E77]">consulta com tudo incluso</div>
                </div>
              </div>

              <button
                onClick={() => onSelectTreatment('Fungos nas Unhas (Onicomicose)')}
                className="w-full py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Iniciar Tratamento →</span>
              </button>
            </div>
          </div>

          {/* Card 2: Unha Encravada (Urgência) */}
          <div className="rounded-[30px] p-7 bg-[#FAF3EC] border border-[#EDE0D4] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#D28368] border border-[#EDE0D4] shadow-2xs">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D28368] text-white">
                  Urgência
                </span>
              </div>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-2xs border border-white">
                <img
                  src="/images/original/treatment_unha_encravada.webp"
                  alt="Tratamento de Unha Encravada com Analgesia a Laser"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2321]">
                  Unha Encravada
                </h3>
                <p className="text-xs text-[#685B56] leading-relaxed mt-1">
                  Procedimento rápido com alívio imediato da dor. Atendemos casos infeccionados, com granuloma, em bebês e em diabéticos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#EDE0D4] space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#A08E87]">
                  O procedimento inclui:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#382C29]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D28368] shrink-0" />
                    <span>Analgesia com laser</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D28368] shrink-0" />
                    <span>Todos os curativos</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D28368] shrink-0" />
                    <span>Todos os retornos</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D28368] shrink-0" />
                    <span>Alívio imediato</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E8D9CD]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-[#736560]">Investimento:</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-[#2B2321]">R$ 150,00*</span>
                  <div className="text-[10px] text-[#8F7E77]">*isenta se feito no mesmo dia</div>
                </div>
              </div>

              <button
                onClick={() => onSelectTreatment('Unha Encravada')}
                className="w-full py-3 rounded-full bg-[#D28368] hover:bg-[#C07258] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Aliviar a Dor Hoje →</span>
              </button>
            </div>
          </div>

          {/* Card 3: Pé do Diabético (Especialidade) */}
          <div className="rounded-[30px] p-7 bg-[#EAF3EC] border border-[#CFDFD3] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#4B7358] border border-[#CFDFD3] shadow-2xs">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#4B7358] text-white">
                  Especialidade
                </span>
              </div>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-2xs border border-white">
                <img
                  src="/images/original/treatment_diabetico.webp"
                  alt="Acompanhamento e Cuidados com o Pé Diabético"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2321]">
                  Pé do Diabético
                </h3>
                <p className="text-xs text-[#685B56] leading-relaxed mt-1">
                  Prevenção e tratamento especializado com pós-graduação em Diabetes. Evite úlceras e complicações graves com acompanhamento contínuo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#CFDFD3] space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#738C7A]">
                  Nosso diferencial:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#28382C]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                    <span>Pós-grad. Diabetes</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                    <span>Ozonioterapia Philozon</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                    <span>Semiologia neurológica</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                    <span>Protocolos médicos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#C3D7C8]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-semibold text-[#617767]">Investimento:</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-[#2B2321]">R$ 150,00*</span>
                  <div className="text-[10px] text-[#6E8574]">*isenta se iniciar no dia</div>
                </div>
              </div>

              <button
                onClick={() => onSelectTreatment('Pé Diabético')}
                className="w-full py-3 rounded-full bg-[#4B7358] hover:bg-[#3E6149] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Avaliação →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Catalog Filter Header */}
        <div className="pt-6 border-t border-[#EDE4DC]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2321]">
                Catálogo Completo de Procedimentos
              </h3>
              <p className="text-xs sm:text-sm text-[#736560]">
                Explore todos os tratamentos realizados na clínica com instrumental esterilizado.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filters.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedFilter === tab.id
                      ? 'bg-[#E3967C] text-white shadow-xs'
                      : 'bg-white text-[#5B4F4A] hover:bg-[#F2E5DC] border border-[#E5DCD3]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of All Filtered Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl p-5 border border-[#E8DED6] hover:border-[#DACCC2] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F5ECE5] text-[#C66F53]">
                      {item.badge}
                    </span>
                    <span className="font-serif font-bold text-sm text-[#2B2321]">
                      {item.priceFormatted}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-base text-[#2B2321] mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6B5E59] leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#F2ECE5]">
                    {item.includes.map((inc, i) => (
                      <div key={i} className="text-[11px] text-[#4F433E] flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#E3967C] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTreatment(item.name)}
                  className="w-full py-2 rounded-full bg-[#FAF4EE] hover:bg-[#F0E4DA] text-[#3D322E] text-xs font-semibold border border-[#E0D4CA] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Agendar este procedimento</span>
                  <ArrowRight className="w-3 h-3 text-[#C66F53]" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
