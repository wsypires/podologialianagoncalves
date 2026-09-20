import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Check,
  MessageCircle,
  HelpCircle,
  Stethoscope,
  Microscope,
  Zap,
} from 'lucide-react';
import { DETAILED_PATHOLOGIES } from '../data/pathologiesData';
import { CLINIC_INFO } from '../data';

interface PathologyDetailPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const PathologyDetailPage: React.FC<PathologyDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();

  // If slug is not provided or not in dictionary, try matching or fallback
  const pathology = slug ? DETAILED_PATHOLOGIES[slug] : undefined;

  if (!pathology) {
    return <Navigate to="/patologias" replace />;
  }

  const toneBg =
    pathology.tone === 'peach'
      ? 'bg-[#FBF0EA]'
      : pathology.tone === 'sand'
      ? 'bg-[#FAF3EC]'
      : 'bg-[#EBF3ED]';

  const toneBorder =
    pathology.tone === 'peach'
      ? 'border-[#F2DACF]'
      : pathology.tone === 'sand'
      ? 'border-[#EDE0D4]'
      : 'border-[#CFDFD3]';

  const badgeColor =
    pathology.tone === 'peach'
      ? 'bg-[#E3967C] text-white'
      : pathology.tone === 'sand'
      ? 'bg-[#D28368] text-white'
      : 'bg-[#4B7358] text-white';

  const otherPathologies = Object.values(DETAILED_PATHOLOGIES).filter((p) => p.slug !== pathology.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Breadcrumbs & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#786A65]">
          <Link to="/" className="hover:text-[#C66F53] transition-colors">Início</Link>
          <span>/</span>
          <Link to="/patologias" className="hover:text-[#C66F53] transition-colors">Patologias</Link>
          <span>/</span>
          <span className="font-semibold text-[#2B2321]">{pathology.name}</span>
        </div>
      </div>

      {/* Main Hero Header for this Specific Pathology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className={`rounded-[32px] p-8 sm:p-12 border ${toneBorder} ${toneBg} shadow-xs`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${badgeColor}`}>
                  {pathology.badge}
                </span>
                {pathology.scientificName && (
                  <span className="text-xs italic text-[#6E5F5A] px-3 py-1 rounded-full bg-white/70 border border-white/60">
                    Termo Clínico: {pathology.scientificName}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
                {pathology.name}
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full" />

              <p className="text-base sm:text-lg text-[#3E322E] font-medium leading-relaxed">
                {pathology.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#5C4F4A] leading-relaxed">
                {pathology.description}
              </p>

              {/* Price reference pill & Booking CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking(pathology.name)}
                  className="px-7 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta para {pathology.name}</span>
                </button>

                <div className="px-4 py-2.5 rounded-2xl bg-white/80 border border-white text-xs text-[#52443F]">
                  <span className="font-bold text-[#2B2321]">Valor de referência:</span> {pathology.priceReference}
                  {pathology.priceNote && (
                    <div className="text-[10px] text-[#786A65] mt-0.5">{pathology.priceNote}</div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Clinical Picture */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-white">
                <img
                  src={pathology.image}
                  alt={`Tratamento de ${pathology.name} na Clínica Liana Gonçalves`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-xs">
                  <div className="font-semibold">Atendimento Clínico Especializado</div>
                  <div className="text-[10px] opacity-80">Hospital do Pé · Campo Grande MS</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Symptoms and Risks in 2 Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Symptoms */}
          <div className="bg-white rounded-3xl p-8 border border-[#E9DFD7] shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FBF0EA] flex items-center justify-center text-[#C66F53]">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B2321]">
                Sintomas Mais Comuns
              </h2>
            </div>
            
            <p className="text-xs text-[#685A55]">
              Identifique se você ou algum familiar está passando por algum destes sinais clínicos:
            </p>

            <ul className="space-y-3 pt-2">
              {pathology.symptoms.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4E413C] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#FAF2EB] text-[#C66F53] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks of Waiting or Home Experiments */}
          <div className="bg-[#FCF5F3] rounded-3xl p-8 border border-[#F2D7D1] shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FCE8E4] flex items-center justify-center text-[#C44335]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B2321]">
                Riscos de Adiar ou Tentar em Casa
              </h2>
            </div>

            <p className="text-xs text-[#7A5B57]">
              O que acontece quando se tenta cortar com alicates não esterilizados ou usar remédios caseiros:
            </p>

            <ul className="space-y-3 pt-2">
              {pathology.risksOfWaiting.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#573E3B] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#FCE8E4] text-[#C44335] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* The Clinical Protocol (Step-by-Step) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E9DFD7] shadow-xs">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
              Como Funciona o Tratamento
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B2321]">
              {pathology.ourProtocol.title}
            </h2>
            <p className="text-sm text-[#685B56] leading-relaxed">
              {pathology.ourProtocol.description}
            </p>
          </div>

          {/* 4 Protocol Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {pathology.ourProtocol.steps.map((step, idx) => (
              <div key={idx} className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#EDE2D8] space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#C66F53] text-white text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-sm text-[#2B2321]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6A5D57] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Technology & What is Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#EDE2D8]">
            
            {/* Tech used */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-[#2B2321] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C66F53]" />
                <span>Tecnologias e Equipamentos Utilizados</span>
              </h3>
              <ul className="space-y-2">
                {pathology.ourProtocol.technology.map((tech, idx) => (
                  <li key={idx} className="text-xs text-[#52443F] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6B48] shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What is included */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-base text-[#2B2321] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3E6B48]" />
                <span>O Que Está Incluso no Procedimento</span>
              </h3>
              <ul className="space-y-2">
                {pathology.ourProtocol.whatIsIncluded.map((inc, idx) => (
                  <li key={idx} className="text-xs text-[#52443F] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C66F53] shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Specific FAQs for this Pathology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
              Esclareça Suas Dúvidas
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
              Perguntas Frequentes sobre {pathology.name}
            </h2>
          </div>

          <div className="space-y-4">
            {pathology.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8DED6] shadow-2xs space-y-2">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#2B2321]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#685A55] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking Card for this Pathology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#2B2321] text-white rounded-[32px] p-8 sm:p-12 text-center space-y-5">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-[#E3967C]">
            Agendamento Rápido em Campo Grande
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Deseja Tratar {pathology.name} com Segurança?
          </h2>
          <p className="text-xs sm:text-sm text-[#C4B7B1] max-w-xl mx-auto leading-relaxed">
            Nossa equipe está pronta para lhe atender. Clique no botão abaixo para iniciar uma conversa no WhatsApp e escolher o melhor horário.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking(pathology.name)}
              className="px-8 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm font-semibold shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp e Agendar Agora</span>
            </button>
          </div>
        </div>
      </section>

      {/* Explore Other Pathologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="font-serif text-xl font-bold text-[#2B2321]">
            Conheça Também Outros Tratamentos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPathologies.map((other) => (
            <Link
              key={other.slug}
              to={`/patologias/${other.slug}`}
              className="bg-white rounded-2xl p-5 border border-[#E9DFD7] hover:border-[#C66F53] hover:shadow-xs transition-all flex items-center justify-between group"
            >
              <div>
                <div className="font-serif font-bold text-sm text-[#2B2321] group-hover:text-[#C66F53] transition-colors">
                  {other.name}
                </div>
                <div className="text-[11px] text-[#786B65]">
                  {other.badge}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C66F53] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
