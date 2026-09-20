import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Heart,
  Zap,
  ArrowRight,
  MessageCircle,
  Stethoscope,
  Droplets,
  Bandage,
  Microscope,
} from 'lucide-react';
import { OZONIOTERAPIA_INFO, CLINIC_INFO } from '../data';

interface OzonioterapiaPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

const renderIndicationIcon = (iconName: string) => {
  switch (iconName) {
    case 'activity':
      return <Activity className="w-5 h-5 text-[#3D6B47]" />;
    case 'shield-check':
      return <ShieldCheck className="w-5 h-5 text-[#3D6B47]" />;
    case 'droplets':
      return <Droplets className="w-5 h-5 text-[#3D6B47]" />;
    case 'heart':
      return <Heart className="w-5 h-5 text-[#3D6B47]" />;
    case 'sparkles':
      return <Sparkles className="w-5 h-5 text-[#3D6B47]" />;
    case 'bandage':
      return <Bandage className="w-5 h-5 text-[#3D6B47]" />;
    case 'microscope':
      return <Microscope className="w-5 h-5 text-[#3D6B47]" />;
    case 'zap':
    default:
      return <Zap className="w-5 h-5 text-[#3D6B47]" />;
  }
};

export const OzonioterapiaPage: React.FC<OzonioterapiaPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F2E8] border border-[#CFDFD3] text-[#2F5A39] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{OZONIOTERAPIA_INFO.badge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Ozonioterapia Medicinal: <br />
            <span className="text-[#3D6B47]">Cura, Cicatrização e Oxigenação Celular</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#3D6B47] to-[#86B491] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Atendimento na mesma clínica com equipamento <strong>Philozon certificado pela ANVISA</strong> e conduzido pela especialista <strong>Enfermeira Marciana Soares</strong> (15 anos de experiência clínica).
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Ozonioterapia')}
              className="px-8 py-3.5 rounded-full bg-[#3D6B47] hover:bg-[#32583A] text-white text-sm font-semibold shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Sessão de Ozonioterapia</span>
            </button>
          </div>
        </div>
      </section>

      {/* Specialist & Equipment Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#FAF3ED] rounded-[32px] p-8 sm:p-12 border border-[#DFCEBF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden shadow-lg border-4 border-white aspect-[4/3] bg-white">
                <img
                  src="/images/original/treatment_ozonioterapia.png"
                  alt="Aparelho Philozon de Ozonioterapia na Clínica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D6B47]">
                Corpo Clínico Integrado
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B2321]">
                Enfermeira Marciana Soares & Gerador Philozon
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4F49] leading-relaxed">
                A ozonioterapia medicinal consiste na aplicação controlada de uma mistura precisa de oxigênio e ozônio puro gerada no momento do atendimento. É uma terapia biológica que atua como potente anti-inflamatório natural, fungicida, bactericida e acelerador da regeneração vascular.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#E8DDD2] text-xs space-y-1">
                  <div className="font-bold text-[#2B2321]">Aparelho Philozon Homologado</div>
                  <div className="text-[#786B65]">Calibração medicinal certificada com precisão milimétrica.</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E8DDD2] text-xs space-y-1">
                  <div className="font-bold text-[#2B2321]">15 Anos de Prática</div>
                  <div className="text-[#786B65]">Experiência consolidada em feridas complexas e dor crônica.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8 Indicações Clínicas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D6B47]">
            Ampla Aplicação Terapêutica
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2B2321]">
            As 8 Principais Indicações da Ozonioterapia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OZONIOTERAPIA_INFO.indications.map((ind, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E6DDD4] shadow-2xs space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#EAF4ED] border border-[#CFDFD3] flex items-center justify-center text-[#2F5A39] shadow-2xs">
                {renderIndicationIcon(ind.icon)}
              </div>
              <h3 className="font-serif font-bold text-base text-[#2B2321]">
                {ind.title}
              </h3>
              <p className="text-xs text-[#685B56] leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Como Funciona a Sessão */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E6DDD4] shadow-xs">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D6B47]">
              Conforto e Segurança
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
              Como Funciona a Sessão de Ozônio?
            </h2>
            <p className="text-xs sm:text-sm text-[#685B56]">
              A aplicação é rápida, indolor e adaptada especificamente à queixa do paciente (bagging para membros inferiores, insuflação ou óleo ozonizado).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D7] space-y-2">
              <div className="font-serif font-bold text-base text-[#2B2321]">1. Avaliação Inicial</div>
              <p className="text-xs text-[#6A5E59]">Análise detalhada do histórico de saúde, exames e definição do protocolo de ozônio adequado.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D7] space-y-2">
              <div className="font-serif font-bold text-base text-[#2B2321]">2. Aplicação Técnica</div>
              <p className="text-xs text-[#6A5E59]">Sessão de 20 a 40 minutos em ambiente relaxante e com total assepsia estéril.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D7] space-y-2">
              <div className="font-serif font-bold text-base text-[#2B2321]">3. Resposta Imediata</div>
              <p className="text-xs text-[#6A5E59]">Redução sensível de dor, diminuição do inchaço e ativação profunda da imunidade.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenBooking('Ozonioterapia')}
              className="px-8 py-3 rounded-full bg-[#3D6B47] hover:bg-[#32583A] text-white text-xs sm:text-sm font-semibold cursor-pointer"
            >
              Consultar Valores e Agendar Sessão
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
