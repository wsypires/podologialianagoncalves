import React from 'react';
import { Award, GraduationCap, Globe, BookMarked, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface SpecialistSectionProps {
  onOpenBooking: () => void;
}

export const SpecialistSection: React.FC<SpecialistSectionProps> = ({ onOpenBooking }) => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Graduação Nível Superior',
      desc: 'Unicesumar · Campo Grande - MS',
    },
    {
      icon: Award,
      title: 'Pós-Graduação em Diabetes',
      desc: 'E Complicações Crônicas em Pés de Alto Risco',
    },
    {
      icon: BookMarked,
      title: 'Pós-Grad. em Dermatologia',
      desc: 'E Tratamento Avançado de Feridas Complexas',
    },
    {
      icon: Globe,
      title: 'CIAP Congresso Internacional',
      desc: 'Edições consecutivas de 2023, 2024 e 2025',
    },
    {
      icon: Sparkles,
      title: 'Palestrante Beauty Fair 2025',
      desc: 'Palco oficial de Podologia da maior feira das Américas',
    },
    {
      icon: CheckCircle,
      title: '50+ Cursos & Ex-Tutora Senac',
      desc: 'Formação continuada e docência técnica em MS',
    },
  ];

  return (
    <section id="especialista" className="py-20 sm:py-28 bg-[#FAF4EF] relative border-t border-[#EDE4DC]">
      <div id="sobre" className="-top-24 relative" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px]">
              
              {/* Decorative pastel aura */}
              <div className="absolute -inset-3 rounded-[40px] bg-[#E3967C]/20 -rotate-2 -z-10" />
              
              {/* Framed Image */}
              <div className="relative rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-gradient-to-b from-[#FAF4EF] to-[#F3E7DE] aspect-[3/4] flex items-end justify-center">
                <img
                  src="/images/original/liana_profile.png"
                  alt="Podóloga Clínica Liana Gonçalves - 15 Anos de Experiência"
                  className="w-full h-full object-contain object-bottom pt-4"
                />

                {/* Overlaid experience pill */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-[#F0E6DE]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif text-lg font-bold text-[#2B2321]">
                        Liana Gonçalves
                      </div>
                      <div className="text-xs text-[#C66F53] font-semibold">
                        Podóloga Clínica Especialista
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF0EA] text-[#C66F53] border border-[#F2D7CB]">
                      15+ Anos
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C66F53]">
                CONHEÇA A ESPECIALISTA
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight leading-[1.15]">
                A Profissional que <br />
                <span className="italic font-normal text-[#C66F53]">Cuida dos seus Pés</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5B4F4A] leading-relaxed">
              <p>
                Liana Gonçalves iniciou sua trajetória em 2011, quando se apaixonou pela podologia ao perceber
                o poder transformador de devolver a marcha sem dor às pessoas. Desde então, dedicou mais de 15 anos
                ao estudo rigoroso e à prática clínica — aliando formação superior pela Unicesumar a pós-graduações
                específicas na área da saúde.
              </p>
              <p>
                Palestrante no palco de podologia da <strong>Beauty Fair 2025</strong> — a maior feira de estética e saúde
                das Américas — e participante assídua do <strong>Congresso Internacional CIAP (2023, 2024 e 2025)</strong>,
                Liana também atuou como tutora de turmas técnicas no Senac MS.
              </p>
              <p className="font-medium text-[#2E2421]">
                Não é por acaso que médicos e dermatologistas de Campo Grande encaminham rotineiramente seus
                casos mais desafiadores para a nossa clínica.
              </p>
            </div>

            {/* Credentials Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/80 border border-[#EAE0D8] flex items-start gap-3 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FAF0EA] flex items-center justify-center text-[#C66F53] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B2321]">{item.title}</div>
                      <div className="text-[11px] text-[#7A6D68]">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Agendar com a Dra. Liana</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
