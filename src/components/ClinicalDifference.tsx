import React from 'react';
import { Microscope, Zap, BookOpen, HeartPulse, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';

interface ClinicalDifferenceProps {
  onOpenBooking: () => void;
}

export const ClinicalDifference: React.FC<ClinicalDifferenceProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: Microscope,
      title: 'Exame Micológico Laboratorial',
      desc: 'Identificamos o fungo exato antes de tratar — não chutamos o protocolo.',
    },
    {
      icon: Zap,
      title: 'Laser DMC — A Marca Referência do Mercado',
      desc: 'Equipamentos Therapy iLib e XT para resultados precisos e sem dor.',
    },
    {
      icon: BookOpen,
      title: 'Congressos Médicos Internacionais',
      desc: 'CIAP 2023, 2024 e 2025 — atualização constante nos melhores eventos da área.',
    },
    {
      icon: HeartPulse,
      title: 'Pós-Graduações na Área Clínica',
      desc: 'Diabetes, Dermatologia, Geriatria — formação que vai além da podologia convencional.',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#FAF4EF] relative overflow-hidden border-t border-[#EDE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with clinical room */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white/90 bg-white">
                <img
                  src="/images/original/clinic_room_1.webp"
                  alt="Consultório Clínico e Esterilização - Podologia Liana Gonçalves"
                  className="w-full aspect-[4/3] object-cover object-center"
                />

                <div className="p-6 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
                      Biossegurança Hospitalar
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F1EA] text-[#3D6646]">
                      Autoclave Hospitalar
                    </span>
                  </div>
                  <p className="text-xs text-[#6A5D57] leading-relaxed">
                    100% dos instrumentais são autoclavados em embalagens com indicador biológico estéril ou totalmente descartáveis.
                  </p>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#FAF7F2] border border-[#DFD3C8] shadow-md rounded-2xl p-3.5 items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#DEEDE3] flex items-center justify-center text-[#3D6646]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2B2321]">Segurança Médica Rigorosa</div>
                  <div className="text-[10px] text-[#7A6D68]">Protocolos validados pela ANVISA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & 4 Clinical Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nosso posicionamento</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight leading-[1.15]">
                Podologia Clínica. <br />
                <span className="text-[#C66F53]">Não é Estética.</span> É Saúde.
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full" />
            </div>

            <div className="space-y-3 text-sm sm:text-base text-[#5E514C] leading-relaxed">
              <p>
                A maioria dos concorrentes ainda trata podologia como estética. Aqui, atuamos com a seriedade e os protocolos da medicina — porque os seus pés fazem parte do seu sistema de saúde, e não de um salão de beleza.
              </p>
              <p className="font-medium text-[#382C29]">
                Somos indicados por médicos e dermatologistas de Campo Grande porque eles sabem: quando um paciente precisa de podologia clínica de verdade, é aqui que encontra.
              </p>
            </div>

            {/* 4 Pillars Grid matching original website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E9DFD7] hover:border-[#C66F53]/40 transition-all shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FAF0EA] flex items-center justify-center text-[#C66F53] mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#2B2321] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#736661] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Endorsement banner matching original site */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DDD4] shadow-2xs">
              <div className="text-xs font-bold text-[#2B2321] flex items-center gap-2 mb-1">
                <Stethoscope className="w-4 h-4 text-[#C66F53]" />
                <span>Indicada por médicos e dermatologistas de Campo Grande</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6B5E59] leading-relaxed">
                Quando um médico indica a nossa clínica, é porque sabe que o paciente vai receber um tratamento com base científica, equipamentos certificados e protocolo individualizado — não um atendimento genérico.
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Agendar Avaliação Clínica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
