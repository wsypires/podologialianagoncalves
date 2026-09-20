import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle, MessageCircle } from 'lucide-react';
import { PATHOLOGIES_MENU } from '../data';
import { DETAILED_PATHOLOGIES } from '../data/pathologiesData';

interface PathologiesIndexPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const PathologiesIndexPage: React.FC<PathologiesIndexPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'urgencia' | 'micose' | 'especialidade' | 'preventivo'>('all');

  // Map each pathology slug to its detailed data
  const pathologiesList = Object.values(DETAILED_PATHOLOGIES);

  const filteredPathologies = pathologiesList.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'urgencia') return item.slug === 'unha-encravada' || item.slug === 'calos-e-calosidades';
    if (selectedCategory === 'micose') return item.slug === 'fungos-micose' || item.slug === 'olho-de-peixe';
    if (selectedCategory === 'especialidade') return item.slug === 'pes-diabetico' || item.slug === 'podopediatria' || item.slug === 'podogeriatria';
    if (selectedCategory === 'preventivo') return item.slug === 'podoprofilaxia';
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guia Clínico de Tratamentos</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Patologias e Especialidades Podológicas
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Selecione a patologia correspondente ao seu caso para conhecer detalhadamente os sintomas, os riscos e nosso protocolo clínico exclusivo.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#C66F53] text-white shadow-xs'
                : 'bg-white text-[#5B4E49] border border-[#E0D5CC] hover:border-[#C66F53]'
            }`}
          >
            Todas as Patologias ({pathologiesList.length})
          </button>
          <button
            onClick={() => setSelectedCategory('urgencia')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'urgencia'
                ? 'bg-[#C66F53] text-white shadow-xs'
                : 'bg-white text-[#5B4E49] border border-[#E0D5CC] hover:border-[#C66F53]'
            }`}
          >
            Dor & Urgência (Unha Encravada, Calos)
          </button>
          <button
            onClick={() => setSelectedCategory('micose')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'micose'
                ? 'bg-[#C66F53] text-white shadow-xs'
                : 'bg-white text-[#5B4E49] border border-[#E0D5CC] hover:border-[#C66F53]'
            }`}
          >
            Fungos, Micoses & Verrugas
          </button>
          <button
            onClick={() => setSelectedCategory('especialidade')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'especialidade'
                ? 'bg-[#C66F53] text-white shadow-xs'
                : 'bg-white text-[#5B4E49] border border-[#E0D5CC] hover:border-[#C66F53]'
            }`}
          >
            Pé Diabético, Crianças & Idosos
          </button>
          <button
            onClick={() => setSelectedCategory('preventivo')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'preventivo'
                ? 'bg-[#C66F53] text-white shadow-xs'
                : 'bg-white text-[#5B4E49] border border-[#E0D5CC] hover:border-[#C66F53]'
            }`}
          >
            Podoprofilaxia Preventiva
          </button>
        </div>
      </section>

      {/* Grid of Dedicated Pathology Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPathologies.map((patho) => {
            const cardStyle =
              patho.tone === 'peach'
                ? 'bg-[#F9ECE5] border-[#F2D7CB]'
                : patho.tone === 'sand'
                ? 'bg-[#FBF0E7] border-[#EEDACD]'
                : 'bg-[#DEEDE3] border-[#C8DFD0]';

            const badgeStyle =
              patho.tone === 'peach'
                ? 'bg-[#E3967C] text-white'
                : patho.tone === 'sand'
                ? 'bg-[#D28368] text-white'
                : 'bg-[#4B7358] text-white';

            return (
              <div
                key={patho.slug}
                className={`rounded-[28px] p-6 border ${cardStyle} shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#2B2321]">
                        {patho.name}
                      </h3>
                      {patho.scientificName && (
                        <div className="text-[11px] text-[#73635E] italic">
                          {patho.scientificName}
                        </div>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeStyle}`}>
                      {patho.badge}
                    </span>
                  </div>

                  {/* Image */}
                  <Link to={`/patologias/${patho.slug}`} className="block w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-2xs border border-white">
                    <img
                      src={patho.image}
                      alt={patho.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Tagline & Description snippet */}
                  <p className="text-xs sm:text-sm text-[#4E413C] leading-relaxed font-medium">
                    {patho.tagline}
                  </p>

                  {/* Symptoms bullets */}
                  <div className="p-3 bg-white/75 rounded-xl text-xs space-y-1 text-[#554641] border border-white/60">
                    <div className="font-semibold text-[11px] text-[#2B2321] uppercase tracking-wider mb-1">
                      Principais Sintomas:
                    </div>
                    {patho.symptoms.slice(0, 2).map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 leading-tight">
                        <span className="text-[#C66F53] font-bold">•</span>
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-4 border-t border-black/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#736560] block">Investimento de ref.:</span>
                    <span className="font-serif font-bold text-base text-[#2B2321]">{patho.priceReference}</span>
                  </div>

                  <Link
                    to={`/patologias/${patho.slug}`}
                    className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF2EB] text-[#2B2321] hover:text-[#C66F53] text-xs font-bold border border-[#DACDC3] hover:border-[#C66F53] transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Ver página completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Ozonioterapia Card in Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#EBF3ED] rounded-3xl p-8 border border-[#CFDFD3] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#3D6B47] text-white">
              Terapia Complementar
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#203325]">
              Ozonioterapia Medicinal Philozon
            </h3>
            <p className="text-xs sm:text-sm text-[#526657] max-w-2xl leading-relaxed">
              Atendimento especializado com a Enfermeira Marciana Soares para acelerar a cicatrização de feridas, tratar dores crônicas, esporão, fascite plantar e potencializar a eliminação de micoses.
            </p>
          </div>
          <Link
            to="/ozonioterapia"
            className="px-6 py-3 rounded-full bg-[#3D6B47] hover:bg-[#32583A] text-white text-xs sm:text-sm font-semibold shrink-0"
          >
            Acessar Página da Ozonioterapia →
          </Link>
        </div>
      </section>

      {/* Dúvida sobre o diagnóstico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 border border-[#E8DED6] shadow-xs max-w-2xl mx-auto space-y-4">
          <HelpCircle className="w-8 h-8 text-[#C66F53] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#2B2321]">
            Não sabe ao certo qual é a sua patologia?
          </h3>
          <p className="text-xs sm:text-sm text-[#685B56]">
            Nossa equipe clínica faz a avaliação minuciosa durante a consulta e define o protocolo correto para o seu caso.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-7 py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold shadow-xs inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp e Agendar Avaliação</span>
          </button>
        </div>
      </section>

    </div>
  );
};
