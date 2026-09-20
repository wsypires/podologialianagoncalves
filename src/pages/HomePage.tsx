import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  MessageCircle,
  Clock,
  MapPin,
  Check,
  Zap,
  Microscope,
  Activity,
  Stethoscope,
  BookOpen,
} from 'lucide-react';
import { CLINIC_INFO, MAIN_CONDITIONS, TREATMENTS, TESTIMONIALS } from '../data';

interface HomePageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#FAF7F2]">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E3DA]/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8DDD4]/30 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & Intent */}
            <div className="lg:col-span-7 space-y-6 lg:pr-6">
              
              {/* Trust rating badge matching original website */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E8DDD4] shadow-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#483B37]">
                  207 Avaliações no Google &nbsp;|&nbsp; 7 Anos Cuidando dos seus Pés
                </span>
              </div>

              {/* Headline matching the editorial style in the original site */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2321] leading-[1.12]">
                Seus Pés Merecem <br />
                <span className="text-[#C66F53]">Cuidado Clínico.</span> <br />
                Não Improvisação.
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-[#C66F53] to-[#E3967C] rounded-full" />

              {/* Subtitle & Value Proposition matching original site */}
              <p className="text-base sm:text-lg text-[#5D514D] font-normal leading-relaxed max-w-xl">
                Clínica de Podologia Clínica em Campo Grande — MS. Foco exclusivo na <strong className="text-[#2B2321] font-semibold">saúde dos seus pés</strong>, com protocolos médicos, equipamentos de ponta e mais de 15 anos de experiência especializada.
              </p>

              {/* Indication Banner */}
              <p className="text-xs sm:text-sm font-medium text-[#736560] italic flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C66F53]"></span>
                Indicada por médicos e dermatologistas renomados de Campo Grande.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm sm:text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/patologias"
                  className="px-6 py-3.5 rounded-full border border-[#D5C9BE] hover:border-[#C66F53] hover:text-[#C66F53] text-[#4A3E3A] text-sm sm:text-base font-semibold transition-all text-center bg-white/60"
                >
                  Ver todas as patologias →
                </Link>
              </div>

              {/* Key Credentials Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#EAE0D7]">
                <div className="flex items-center gap-2 text-xs text-[#5D504B]">
                  <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                  <span>Laserterapia DMC sem dor</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5D504B]">
                  <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                  <span>Exame Micológico</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5D504B] col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                  <span>Autoclave Hospitalar</span>
                </div>
              </div>

            </div>

            {/* Right Column: Specialist Photo with Clinical Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Framed Portrait */}
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#E8DDD4] aspect-[4/5]">
                  <img
                    src="/images/original/liana_portrait.png"
                    alt="Podóloga Liana Gonçalves em atendimento clínico"
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2321]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Caption at bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="font-serif font-bold text-lg leading-tight">
                      Liana Gonçalves
                    </div>
                    <div className="text-xs text-[#F2DFD7] font-light mt-0.5">
                      Graduada em Podologia · Unicesumar | 15+ Anos de Prática
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: 15 Anos */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xs border border-[#E8DDD4] shadow-lg rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF2EB] flex items-center justify-center text-[#C66F53] font-bold text-sm">
                    15+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2B2321]">Anos de Experiência</div>
                    <div className="text-[10px] text-[#786A65]">Podologia Clínica Especializada</div>
                  </div>
                </div>

                {/* Floating Badge 2: Localização */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-xs border border-[#E8DDD4] shadow-lg rounded-2xl p-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#EAF2EC] flex items-center justify-center text-[#3D6B47]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2B2321]">Hospital do Pé</div>
                    <div className="text-[10px] text-[#786A65]">Campo Grande — MS</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. IDENTIFICAÇÃO DE PROBLEMAS (Cards com link para a página específica de cada patologia) */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
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
              Clique no problema que você está sentindo para ver a página com o diagnóstico e o protocolo de tratamento específico.
            </p>
          </div>

          {/* 6 Problem Cards Grid linking to dedicated pages */}
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
                    <Link to={cond.pageHref} className="block w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white shadow-2xs border border-white/80">
                      <img
                        src={cond.image}
                        alt={cond.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Problem Description */}
                    <p className="text-xs sm:text-sm text-[#5B4E49] leading-relaxed mb-3">
                      {cond.problem}
                    </p>

                    {/* Clinical Solution */}
                    <p className="text-xs text-[#2E2421] bg-white/70 p-3 rounded-xl border border-white/60 leading-relaxed mb-5">
                      <strong className="text-[#C66F53]">Nosso Protocolo:</strong> {cond.action}
                    </p>
                  </div>

                  {/* Card Action Link to dedicated page */}
                  <Link
                    to={cond.pageHref}
                    className="w-full py-2.5 rounded-full bg-white/95 hover:bg-white text-[#2B2321] text-xs font-semibold border border-[#DACDC3] hover:border-[#C66F53] transition-all flex items-center justify-center gap-2 group shadow-2xs"
                  >
                    <span>{cond.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C66F53] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DED6] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF2EB] border border-[#E8DED6] flex items-center justify-center shrink-0 text-[#C66F53]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#2B2321]">
                  Não tem certeza de qual é o seu diagnóstico?
                </h3>
                <p className="text-xs sm:text-sm text-[#736560]">
                  Consulte nosso índice completo de patologias ou converse com nossa equipe via WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/patologias"
                className="px-5 py-2.5 rounded-full border border-[#D5C9BF] hover:border-[#C66F53] text-xs font-semibold text-[#483E3A]"
              >
                Ver Todas as Patologias
              </Link>
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Orientação Rápida</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CLINICAL DIFFERENCE TEASER */}
      <section className="py-20 sm:py-24 bg-[#FAF4EF] border-t border-[#EDE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/original/clinic_room_1.webp"
                  alt="Consultório Clínico e Biossegurança"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
                      Biossegurança Hospitalar
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E8F1EA] text-[#3D6646]">
                      Autoclave Hospitalar
                    </span>
                  </div>
                  <p className="text-xs text-[#6A5D57]">
                    100% dos instrumentais passam por autoclave com teste biológico ou são descartáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Por que somos diferentes</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2321] tracking-tight">
                Podologia Clínica. <br />
                <span className="text-[#C66F53]">Não é Estética.</span> É Saúde.
              </h2>

              <p className="text-sm sm:text-base text-[#5E514C] leading-relaxed">
                Aqui atuamos com a seriedade e os protocolos da medicina — porque os seus pés fazem parte do seu sistema de saúde, e não de um salão de beleza. Não improvisamos nem mascaramos sintomas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E9DFD7]">
                  <div className="flex items-center gap-1.5 font-semibold text-xs text-[#2B2321] mb-1">
                    <Microscope className="w-3.5 h-3.5 text-[#C66F53]" />
                    <span>Exame Micológico</span>
                  </div>
                  <div className="text-[11px] text-[#736661]">Identificamos o fungo exato em laboratório antes de tratar.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E9DFD7]">
                  <div className="flex items-center gap-1.5 font-semibold text-xs text-[#2B2321] mb-1">
                    <Zap className="w-3.5 h-3.5 text-[#D28368]" />
                    <span>Laserterapia DMC</span>
                  </div>
                  <div className="text-[11px] text-[#736661]">Equipamentos Therapy iLib e XT para analgesia sem dor.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E9DFD7]">
                  <div className="flex items-center gap-1.5 font-semibold text-xs text-[#2B2321] mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#C66F53]" />
                    <span>Congressos Internacionais</span>
                  </div>
                  <div className="text-[11px] text-[#736661]">CIAP 2023, 2024 e 2025 com atualização constante.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E9DFD7]">
                  <div className="flex items-center gap-1.5 font-semibold text-xs text-[#2B2321] mb-1">
                    <Stethoscope className="w-3.5 h-3.5 text-[#4B7358]" />
                    <span>Pós-Graduações Clínicas</span>
                  </div>
                  <div className="text-[11px] text-[#736661]">Especializações em Diabetes, Geriatria e Dermatologia.</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/diferenciais"
                  className="px-6 py-2.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs flex items-center gap-2"
                >
                  <span>Conhecer Todos os Diferenciais</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/sobre-nos"
                  className="text-xs sm:text-sm font-semibold text-[#5B4F4A] hover:text-[#C66F53]"
                >
                  Conhecer a Dra. Liana →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS DESTAQUES COM LINKS ESPECÍFICOS */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Destaques Clínicos</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2321] tracking-tight">
              Procedimentos com Protocolos Exclusivos
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1: Fungos */}
            <div className="rounded-[28px] p-7 bg-[#FBF0EA] border border-[#F2DACF] shadow-sm flex flex-col justify-between">
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
                  <img src="/images/original/treatment_fungos.webp" alt="Fungos nas Unhas" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2321]">Fungos nas Unhas</h3>
                  <p className="text-xs text-[#685B56] mt-1">
                    Diagnóstico com exame micológico laboratorial. Identificamos o fungo exato para o protocolo certo.
                  </p>
                </div>
                <div className="p-3 bg-white/70 rounded-xl text-xs space-y-1 text-[#483B37]">
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#E3967C]" /><span>Coleta e envio a laboratório credenciado</span></div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#E3967C]" /><span>1ª limpeza profunda e plano personalizado</span></div>
                </div>
              </div>
              <div className="pt-5 mt-4 border-t border-[#F0D5C9]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-[#736560]">Investimento:</span>
                  <span className="font-serif text-xl font-bold text-[#2B2321]">R$ 370,00</span>
                </div>
                <Link
                  to="/patologias/fungos-micose"
                  className="w-full py-2.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold text-center block"
                >
                  Ver Página do Tratamento →
                </Link>
              </div>
            </div>

            {/* Card 2: Unha Encravada */}
            <div className="rounded-[28px] p-7 bg-[#FAF3EC] border border-[#EDE0D4] shadow-sm flex flex-col justify-between">
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
                  <img src="/images/original/treatment_unha_encravada.webp" alt="Unha Encravada" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2321]">Unha Encravada</h3>
                  <p className="text-xs text-[#685B56] mt-1">
                    Procedimento rápido com alívio imediato da dor. Analgesia a laser DMC e remoção atraumática da espícula.
                  </p>
                </div>
                <div className="p-3 bg-white/70 rounded-xl text-xs space-y-1 text-[#483B37]">
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#D28368]" /><span>Analgesia com laser DMC e curativos</span></div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#D28368]" /><span>Todos os retornos de revisão inclusos</span></div>
                </div>
              </div>
              <div className="pt-5 mt-4 border-t border-[#E8D9CD]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-[#736560]">Investimento:</span>
                  <span className="font-serif text-xl font-bold text-[#2B2321]">R$ 150,00*</span>
                </div>
                <Link
                  to="/patologias/unha-encravada"
                  className="w-full py-2.5 rounded-full bg-[#D28368] hover:bg-[#C07258] text-white text-xs font-semibold text-center block"
                >
                  Ver Página do Tratamento →
                </Link>
              </div>
            </div>

            {/* Card 3: Pé Diabético */}
            <div className="rounded-[28px] p-7 bg-[#EAF3EC] border border-[#CFDFD3] shadow-sm flex flex-col justify-between">
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
                  <img src="/images/original/treatment_diabetico.webp" alt="Pé Diabético" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2321]">Pé do Diabético</h3>
                  <p className="text-xs text-[#685B56] mt-1">
                    Prevenção especializada contra úlceras com profissional pós-graduada em Diabetes e semiologia neurológica.
                  </p>
                </div>
                <div className="p-3 bg-white/70 rounded-xl text-xs space-y-1 text-[#483B37]">
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#4B7358]" /><span>Pós-graduação em Diabetes e Complicações</span></div>
                  <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#4B7358]" /><span>Ozonioterapia Philozon para cicatrização</span></div>
                </div>
              </div>
              <div className="pt-5 mt-4 border-t border-[#C3D7C8]">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-[#617767]">Investimento:</span>
                  <span className="font-serif text-xl font-bold text-[#2B2321]">R$ 150,00*</span>
                </div>
                <Link
                  to="/patologias/pes-diabetico"
                  className="w-full py-2.5 rounded-full bg-[#4B7358] hover:bg-[#3E6149] text-white text-xs font-semibold text-center block"
                >
                  Ver Página do Tratamento →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/patologias"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#D5C9BE] hover:border-[#C66F53] text-[#483E3A] hover:text-[#C66F53] text-xs sm:text-sm font-semibold transition-all bg-white"
            >
              <span>Ver todas as 9 patologias e tratamentos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. OZONIOTERAPIA HIGHLIGHT */}
      <section className="py-16 sm:py-20 bg-[#F5F8F6] border-t border-[#DFEAE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D2E2D6] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E5F2E8] text-[#2F5A39]">
                Aprovado pelo CFM 2025 · Equipamento Philozon
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#203325]">
                Ozonioterapia Medicinal na Mesma Clínica
              </h3>
              <p className="text-xs sm:text-sm text-[#526657] leading-relaxed">
                Contamos com a enfermeira parceira Marciana Soares (15 anos de experiência) e equipamento Philozon homologado pela Anvisa. Protocolos para dor crônica, imunidade, pés diabéticos, feridas de difícil cicatrização e fascite plantar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/ozonioterapia"
                className="px-6 py-3 rounded-full bg-[#3D6B47] hover:bg-[#32583A] text-white text-xs sm:text-sm font-semibold text-center"
              >
                Página da Ozonioterapia →
              </Link>
              <button
                onClick={() => onOpenBooking('Ozonioterapia')}
                className="px-6 py-3 rounded-full border border-[#BCD4C3] text-[#2D5436] hover:bg-[#EAF3EC] text-xs sm:text-sm font-semibold text-center"
              >
                Agendar Sessão
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOOGLE REVIEWS TEASER */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold">
              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>4.9 no Google · 207 Avaliações Verificadas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2321]">
              O Que Nossos Pacientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 border border-[#EAE1D9] shadow-2xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#524541] leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F2ECE5]">
                  <div className="text-xs font-bold text-[#2B2321]">{item.name}</div>
                  <div className="text-[10px] text-[#8C7D77]">{item.verifiedSource} · {item.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/avaliacoes"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D5C9BE] text-[#483E3A] hover:text-[#C66F53] hover:border-[#C66F53] text-xs font-semibold bg-white"
            >
              <span>Ver todas as avaliações no Google</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. URGENT CTA BANNER */}
      <section className="py-16 bg-[#2B2321] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#E3967C] text-[11px] font-bold uppercase tracking-wider">
            <span>Atendimento Rápido em Campo Grande</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Está Sentindo Dor Agora? <br />
            <span className="text-[#E3967C]">Não Deixe Seu Pé Piorar.</span>
          </h2>
          <p className="text-sm text-[#C8BCB6] max-w-xl mx-auto">
            Agende pelo WhatsApp e receba acolhimento clínico profissional hoje mesmo com a Dra. Liana Gonçalves.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm font-semibold shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp: (67) 99916-0929</span>
            </button>
            <Link
              to="/quanto-custa"
              className="px-6 py-3.5 rounded-full border border-[#6E5E58] hover:border-white text-xs font-semibold text-[#DCD1CC]"
            >
              Ver Tabela de Valores
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
