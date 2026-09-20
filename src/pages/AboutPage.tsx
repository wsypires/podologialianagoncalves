import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Star,
  Check,
  Heart,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone,
  Lock,
  Stethoscope,
  Microscope,
  CheckCircle2,
  Users,
  Award,
  Clock,
  MapPin,
} from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2] text-[#2B2321] selection:bg-[#E3967C] selection:text-white">
      
      {/* ============================================================
          PARTE 1: HERO DA HISTÓRIA (Adaptado à Identidade Visual do Site)
          ============================================================ */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        {/* Soft atmospheric background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E3DA]/60 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8DDD4]/40 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-6">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nossa história · Campo Grande-MS</span>
            </div>

            {/* Editorial Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2321] leading-[1.12]">
              Nascemos do amor à podologia. <br />
              <span className="text-[#C66F53]">Crescemos pela confiança</span> <br />
              de quem cuidamos.
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full" />

            <p className="text-base sm:text-lg text-[#5D514D] leading-relaxed font-normal">
              Desde 2019, a Clínica de Podologia Liana Gonçalves atende Campo Grande com um propósito claro: elevar o nível da podologia clínica no Mato Grosso do Sul — com rigor técnico, atualização constante e cuidado verdadeiramente personalizado.
            </p>

            {/* Metric Cards in Site Tone */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
              <div className="bg-white rounded-2xl p-4 border border-[#E8DED6] text-center shadow-2xs hover:shadow-xs transition-all">
                <div className="font-serif text-2xl font-bold text-[#C66F53]">2011</div>
                <div className="text-[11px] text-[#736560] mt-1 font-medium leading-tight">início da trajetória de Liana</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E8DED6] text-center shadow-2xs hover:shadow-xs transition-all">
                <div className="font-serif text-2xl font-bold text-[#2B2321]">2.000+</div>
                <div className="text-[11px] text-[#736560] mt-1 font-medium leading-tight">pacientes atendidos</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E8DED6] text-center shadow-2xs hover:shadow-xs transition-all">
                <div className="font-serif text-2xl font-bold text-amber-500 flex items-center justify-center gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500 inline" />
                </div>
                <div className="text-[11px] text-[#736560] mt-1 font-medium leading-tight">207 avaliações no Google</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E8DED6] text-center shadow-2xs hover:shadow-xs transition-all">
                <div className="font-serif text-2xl font-bold text-[#C66F53]">50+</div>
                <div className="text-[11px] text-[#736560] mt-1 font-medium leading-tight">cursos e especializações</div>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-4 border border-[#E8DED6] text-center shadow-2xs hover:shadow-xs transition-all">
                <div className="font-serif text-2xl font-bold text-[#4B7358]">90%</div>
                <div className="text-[11px] text-[#736560] mt-1 font-medium leading-tight">taxa de sucesso</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          PARTE 2: A ORIGEM / UMA PAIXÃO QUE COMEÇOU EM 2011
          ============================================================ */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Foto Original da História */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#F3E3DA]/80 rounded-[36px] -rotate-2 transform scale-105 -z-10" />
              <div className="bg-gradient-to-b from-[#FAF4EE] to-[#F5ECE5] rounded-[32px] p-5 border border-[#EBDDD3] shadow-xs">
                <img
                  src="/images/sobre_nos/liana_historia.png"
                  alt="Dra. Alveliana Gonçalves - Podóloga Responsável"
                  className="w-full h-auto max-h-[480px] object-contain mx-auto rounded-2xl filter drop-shadow-sm"
                />
                <div className="mt-4 text-center bg-white/95 backdrop-blur-sm rounded-2xl py-3 px-4 border border-[#E8DDD4] shadow-2xs">
                  <div className="font-serif text-base font-bold text-[#2B2321]">Alveliana Gonçalves</div>
                  <div className="text-xs text-[#C66F53] font-semibold">Podóloga Clínica · 15 anos de trajetória</div>
                  <div className="flex justify-center text-amber-500 gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Linha do Tempo e Citação */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider mb-3">
                <span>A origem</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
                Uma paixão que começou <br />
                <span className="text-[#C66F53]">em 2011 e nunca parou</span>
              </h2>
            </div>

            {/* Timeline Milestones com visual da clínica */}
            <div className="space-y-6 relative border-l-2 border-[#E8DDD4] ml-3 pl-6">
              
              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#C66F53] ring-4 ring-[#FAF7F2]" />
                <div className="text-xs font-bold text-[#C66F53] uppercase tracking-wider">2011</div>
                <h3 className="font-serif text-lg font-bold text-[#2B2321] mt-0.5">Amor à primeira vista com a podologia</h3>
                <p className="text-sm text-[#635752] leading-relaxed mt-1">
                  Cursando Recursos Humanos, Alveliana Gonçalves teve seu primeiro contato com a podologia como auxiliar. Foi imediato: ela abandonou o curso de RH e se dedicou completamente à podologia. Não foi uma escolha de carreira — foi uma vocação.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#D28368] ring-4 ring-[#FAF7F2]" />
                <div className="text-xs font-bold text-[#D28368] uppercase tracking-wider">2018</div>
                <h3 className="font-serif text-lg font-bold text-[#2B2321] mt-0.5">O sonho começa a tomar forma</h3>
                <p className="text-sm text-[#635752] leading-relaxed mt-1">
                  Depois de 7 anos acumulando experiência, especializações e o olhar clínico que só o tempo constrói, Liana decidiu que Campo Grande merecia uma podologia em outro nível. Nasceu o projeto da clínica.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4B7358] ring-4 ring-[#FAF7F2]" />
                <div className="text-xs font-bold text-[#4B7358] uppercase tracking-wider">2019</div>
                <h3 className="font-serif text-lg font-bold text-[#2B2321] mt-0.5">A Clínica abre as portas</h3>
                <p className="text-sm text-[#635752] leading-relaxed mt-1">
                  Com equipamentos de última geração — incluindo o laser DMC Therapy iLib e XT, referência do mercado — a Clínica de Podologia Liana Gonçalves começa a atender com um padrão que até então não existia em Campo Grande-MS.
                </p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#C66F53] ring-4 ring-[#FAF7F2]" />
                <div className="text-xs font-bold text-[#C66F53] uppercase tracking-wider">Hoje</div>
                <h3 className="font-serif text-lg font-bold text-[#2B2321] mt-0.5">Referência em Mato Grosso do Sul</h3>
                <p className="text-sm text-[#635752] leading-relaxed mt-1">
                  Mais de 2.000 pacientes atendidos, 207 avaliações 4.9 no Google, indicada por médicos e dermatologistas da cidade — e formando outros profissionais de podologia no estado. O sonho virou legado.
                </p>
              </div>

            </div>

            {/* Citação Oficial da Dra. Liana */}
            <blockquote className="bg-[#FAF0E6] p-6 rounded-2xl border-l-4 border-[#C66F53] text-[#3D332F] italic shadow-2xs">
              <p className="text-sm sm:text-base leading-relaxed">
                "Focada exclusivamente na saúde dos pés, pois ter pés sem dores é muito importante para o seu bem-estar — e eu cuido de tudo pessoalmente para garantir o nível máximo de qualidade."
              </p>
              <footer className="mt-3 text-xs not-italic font-bold text-[#C66F53]">
                — Liana Gonçalves, podóloga responsável
              </footer>
            </blockquote>

          </div>

        </div>
      </section>

      {/* ============================================================
          PARTE 3: NOSSA EQUIPE (Harmonizada com a Paleta do Site)
          ============================================================ */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>As pessoas por trás do cuidado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Nossa <span className="text-[#C66F53]">Equipe</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-[#685C57] leading-relaxed">
            Todos os profissionais que atuam em nossa clínica são treinados para estarem sempre prontos para te atender da melhor forma possível sempre que precisar. Conheça as pessoas que amam cuidar da saúde dos seus pés e melhorar a sua qualidade de vida.
          </p>
        </div>

        {/* 1. LIANA GONÇALVES (Destaque Principal) */}
        <div className="bg-[#FAF4EE] rounded-[32px] p-8 sm:p-12 border border-[#EBDDD3] shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-[#E8DDD4] shadow-xs">
                <img
                  src="/images/sobre_nos/liana_equipe.jpg"
                  alt="Dra. Liana Gonçalves na clínica"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#E3967C] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                    Podóloga Responsável · Fundadora
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C66F53] uppercase tracking-wider mb-1">
                  <span>Podóloga · 15 anos de experiência</span>
                  <span>•</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
                  Liana Gonçalves
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#C66F53] mt-0.5">
                  Graduada em Podologia · Unicesumar · Nível Superior
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#5B4F4A] leading-relaxed">
                <p>
                  Liana começou na podologia em 2011 por vocação pura — largou o curso de Recursos Humanos no meio para se dedicar completamente à área. Depois de 7 anos acumulando experiência e especializações, fundou em 2019 a clínica com um propósito claro: <strong>elevar o padrão da podologia clínica em Campo Grande</strong>.
                </p>
                <p>
                  Hoje, além de atender mais de 2.000 pacientes com 90% de taxa de sucesso, forma outros profissionais de podologia no Mato Grosso do Sul e participa anualmente do CIAP — o maior congresso internacional de podologia do mundo.
                </p>
              </div>

              {/* Grid de Credenciais Rápidas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>Pós-grad. Diabetes e Complicações Crônicas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>Pós-grad. Dermatologia e Tratamento de Feridas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>Pós-grad. Geriatria e Gerontologia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>Laser DMC Therapy iLib e XT</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>Semiologia do Pé Diabético</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#332A26] bg-white/90 p-2.5 rounded-xl border border-[#E8DDD4]">
                  <Check className="w-4 h-4 text-[#C66F53] shrink-0" />
                  <span>CIAP Internacional 2023 · 2024 · 2025</span>
                </div>
              </div>

              {/* Callout de Reconhecimento Médico */}
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#E8DDD4] text-[#2B2321] text-xs sm:text-sm shadow-2xs">
                <Stethoscope className="w-5 h-5 shrink-0 text-[#C66F53]" />
                <span className="font-medium">
                  Indicada por médicos e dermatologistas de Campo Grande — e referência no MS para formação de novos profissionais de podologia.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 2 & 3. MARCIANA SOARES (Sage Verde de Ozônio) + JOCINEIA (Sand Quente) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card: Marciana Soares (Especialidade Verde-Sage) */}
          <div className="bg-[#EEF6F1] rounded-[28px] p-6 sm:p-8 border border-[#D3E5D8] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#4B7358] text-white">
                  Enfermeira · Ozonioterapeuta
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D3E5D8]">
                <img
                  src="/images/sobre_nos/marciana_equipe.jpg"
                  alt="Marciana da Silva Soares"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B2321]">
                  Marciana Soares
                </h3>
                <p className="text-xs text-[#4B7358] font-semibold mt-0.5">
                  COREN 296.442 · 15 anos de experiência
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4E5B51] leading-relaxed">
                Marciana traz a visão da enfermagem clínica para potencializar os resultados dos tratamentos podológicos. <strong>Responsável pelo serviço de ozonioterapia da clínica</strong>, é especialista Master O3 e uma das profissionais de referência no tema em Campo Grande-MS.
              </p>

              <div className="space-y-2 pt-3 border-t border-[#DFEBE3]">
                <div className="text-xs text-[#2E3C32] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                  <span>Graduação em Enfermagem</span>
                </div>
                <div className="text-xs text-[#2E3C32] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                  <span>Especialização Master O3 em Ozonioterapia</span>
                </div>
                <div className="text-xs text-[#2E3C32] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                  <span>15 anos de experiência clínica</span>
                </div>
                <div className="text-xs text-[#2E3C32] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4B7358] shrink-0" />
                  <span>Responsável técnica pela ozonioterapia Philozon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Jocineia (Sand Quente) */}
          <div className="bg-[#FAF2EB] rounded-[28px] p-6 sm:p-8 border border-[#EBDDD3] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D28368] text-white">
                  Podóloga Clínica
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#EBDDD3]">
                <img
                  src="/images/sobre_nos/jocineia_equipe.jpg"
                  alt="Jocineia Lima - Podóloga Clínica"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B2321]">
                  Jocineia
                </h3>
                <p className="text-xs text-[#C66F53] font-semibold mt-0.5">
                  Podóloga · equipe clínica
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4F49] leading-relaxed">
                Jocineia integra a equipe clínica da Liana Gonçalves atuando com os mesmos protocolos e padrão de excelência que definem cada atendimento da clínica. <strong>Cada paciente recebe o mesmo nível de cuidado</strong>, independentemente de qual profissional esteja atendendo — isso é uma escolha deliberada de cultura, não coincidência.
              </p>

              <div className="space-y-2 pt-3 border-t border-[#EFE5DC]">
                <div className="text-xs text-[#3D332F] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C66F53] shrink-0" />
                  <span>Podologia clínica com protocolos padronizados</span>
                </div>
                <div className="text-xs text-[#3D332F] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C66F53] shrink-0" />
                  <span>Atendimento com acolhimento e escuta</span>
                </div>
                <div className="text-xs text-[#3D332F] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C66F53] shrink-0" />
                  <span>Tratamentos: onicomicose, unha encravada, calos, profilaxia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4. EMILY REGIS (Recepção e Atendimento) */}
        <div className="bg-[#FDF6F1] rounded-[32px] p-8 sm:p-10 border border-[#F2DACF] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-[#E8DDD4]">
                <img
                  src="/images/sobre_nos/emily_equipe.jpg"
                  alt="Emily Regis - Recepção e Agendamento"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
                <span>O primeiro contato com a clínica</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2B2321]">
                  Emily Regis
                </h3>
                <p className="text-xs text-[#C66F53] font-semibold mt-0.5">
                  Recepcionista · atendimento presencial e WhatsApp
                </p>
              </div>

              <p className="text-sm text-[#5B4F4A] leading-relaxed">
                Antes de qualquer procedimento, existe um primeiro contato — e ele importa. Emily é a pessoa que recebe cada paciente na porta, responde pelo WhatsApp, organiza a agenda e garante que a experiência na clínica comece da forma certa: <strong>com atenção, clareza e acolhimento genuíno</strong>.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#382E2B] bg-white/80 p-3 rounded-xl border border-[#F2DACF]">
                  <Phone className="w-4 h-4 text-[#C66F53] shrink-0 mt-0.5" />
                  <span><strong>Agendamentos pelo WhatsApp e telefone:</strong> tira dúvidas sobre valores, horários e como funciona cada tratamento antes da consulta.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#382E2B] bg-white/80 p-3 rounded-xl border border-[#F2DACF]">
                  <Heart className="w-4 h-4 text-[#C66F53] shrink-0 mt-0.5" />
                  <span><strong>Recepção presencial:</strong> recebe cada paciente com o nome e o cuidado que cada pessoa merece desde o momento em que entra.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#382E2B] bg-white/80 p-3 rounded-xl border border-[#F2DACF]">
                  <Calendar className="w-4 h-4 text-[#C66F53] shrink-0 mt-0.5" />
                  <span><strong>Organização da agenda:</strong> garante que os atendimentos fluam sem atrasos e que cada paciente tenha o tempo necessário para seu caso.</span>
                </div>
              </div>

              <blockquote className="bg-white/90 p-4 rounded-xl border-l-4 border-[#C66F53] text-xs text-[#5C4F49] italic">
                "Cuidado começa antes do consultório. A experiência que queremos entregar começa já no primeiro 'olá' — seja pelo WhatsApp ou na porta da clínica."
              </blockquote>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================
          PARTE 4: OS VALORES QUE GUIAM CADA ATENDIMENTO
          ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>O que nos move</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Os valores que guiam <br className="hidden sm:inline" />
            <span className="text-[#C66F53]">cada atendimento</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Valor 1: Peach */}
          <div className="bg-[#FAF2EB] rounded-[24px] p-6 border border-[#EBDDD3] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#EBDDD3]">
              <Microscope className="w-5 h-5 text-[#C66F53]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Rigor Clínico
            </h3>
            <p className="text-xs sm:text-sm text-[#665954] leading-relaxed">
              Podologia é saúde, não estética. Cada protocolo é baseado em evidência científica e atualizado constantemente — por isso participamos dos principais congressos internacionais da área todo ano.
            </p>
          </div>

          {/* Valor 2: Sand */}
          <div className="bg-[#FBF0E7] rounded-[24px] p-6 border border-[#EEDACD] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#EEDACD]">
              <CheckCircle2 className="w-5 h-5 text-[#D28368]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Personalização Real
            </h3>
            <p className="text-xs sm:text-sm text-[#665954] leading-relaxed">
              Não existe protocolo genérico aqui. Cada paciente tem um histórico, um perfil de risco, um ritmo. O plano de tratamento é construído especificamente para você — não para "a condição".
            </p>
          </div>

          {/* Valor 3: Sage */}
          <div className="bg-[#EEF6F1] rounded-[24px] p-6 border border-[#D3E5D8] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#D3E5D8]">
              <Users className="w-5 h-5 text-[#4B7358]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Transparência Total
            </h3>
            <p className="text-xs sm:text-sm text-[#4E5B51] leading-relaxed">
              Explicamos o diagnóstico, as opções de tratamento e os custos com clareza. Você toma decisões informado — não porque "a especialista disse". Respeito à autonomia do paciente é inegociável.
            </p>
          </div>

          {/* Valor 4: Peach */}
          <div className="bg-[#FAF2EB] rounded-[24px] p-6 border border-[#EBDDD3] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#EBDDD3]">
              <Award className="w-5 h-5 text-[#C66F53]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Atualização Permanente
            </h3>
            <p className="text-xs sm:text-sm text-[#665954] leading-relaxed">
              Mais de 50 especializações e cursos acumulados. CIAP Internacional 2023, 2024 e 2025. A podologia avança — e nossa equipe avança junto. O que você recebe hoje é o que há de mais atual na área.
            </p>
          </div>

          {/* Valor 5: Sand */}
          <div className="bg-[#FBF0E7] rounded-[24px] p-6 border border-[#EEDACD] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#EEDACD]">
              <Sparkles className="w-5 h-5 text-[#D28368]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Tecnologia de Ponta
            </h3>
            <p className="text-xs sm:text-sm text-[#665954] leading-relaxed">
              Laser DMC Therapy iLib e XT — referência do mercado nacional em laserterapia podológica. Equipamentos de última geração não são diferencial de luxo: são parte do resultado que entregamos.
            </p>
          </div>

          {/* Valor 6: Sage */}
          <div className="bg-[#EEF6F1] rounded-[24px] p-6 border border-[#D3E5D8] shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-[#D3E5D8]">
              <ShieldCheck className="w-5 h-5 text-[#4B7358]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2B2321] mb-2">
              Resultado, Não Aparência
            </h3>
            <p className="text-xs sm:text-sm text-[#4E5B51] leading-relaxed">
              Nosso trabalho é medido em dor zero, mobilidade recuperada, infecções resolvidas, amputações prevenidas. Métricas de saúde — não de estética. Isso é podologia clínica de verdade.
            </p>
          </div>

        </div>

      </section>

      {/* ============================================================
          PARTE 5: CREDENCIAIS E RECONHECIMENTO (FORMAÇÃO ALÉM DO BÁSICO)
          ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E8DED6] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Esquerda: Lista de Formações */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
                <span>Credenciais e reconhecimento</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2321]">
                Formação que <span className="text-[#C66F53]">vai além do básico</span>
              </h2>

              <p className="text-sm text-[#665954] leading-relaxed">
                Cada pós-graduação e especialização foi escolhida para atender melhor os perfis mais complexos — diabéticos, idosos, pacientes com feridas crônicas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Pós-grad. em Diabetes e Complicações Crônicas',
                  'Pós-grad. em Enfermagem em Dermatologia e Tratamento de Feridas',
                  'Pós-grad. em Geriatria e Gerontologia',
                  'Pós-grad. em Nutrição com Ênfase em Obesidade',
                  'Especialização Master O3 em Ozonioterapia',
                  'Especialização em Semiologia do Pé Diabético',
                  'Especialização em Laser — Descomplicando Laserterapia',
                  'CIAP Internacional 2023 · 2024 · 2025',
                  '1º Congresso de Podologia MS · XIX Jornada Internacional',
                  'Forma outros profissionais de podologia no MS',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#382E2B] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EDE4DC]">
                    <Check className="w-3.5 h-3.5 text-[#C66F53] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita: Estatísticas Destacadas */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#FAF4EE] p-5 rounded-2xl border border-[#EBDDD3] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#C66F53]">2.000+</span>
                <span className="block text-xs font-medium text-[#73635C] mt-1">Pacientes atendidos</span>
              </div>

              <div className="bg-[#FAF4EE] p-5 rounded-2xl border border-[#EBDDD3] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#2B2321] inline-flex items-center justify-center gap-1">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500 inline" />
                </span>
                <span className="block text-xs font-medium text-[#73635C] mt-1">207 avaliações no Google</span>
              </div>

              <div className="bg-[#EEF6F1] p-5 rounded-2xl border border-[#D3E5D8] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#4B7358]">90%</span>
                <span className="block text-xs font-medium text-[#4E5B51] mt-1">Taxa de sucesso</span>
              </div>

              <div className="bg-[#FAF4EE] p-5 rounded-2xl border border-[#EBDDD3] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#C66F53]">50+</span>
                <span className="block text-xs font-medium text-[#73635C] mt-1">Cursos e especializações</span>
              </div>

              <div className="bg-[#FAF4EE] p-5 rounded-2xl border border-[#EBDDD3] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#D28368]">15 anos</span>
                <span className="block text-xs font-medium text-[#73635C] mt-1">de trajetória na podologia</span>
              </div>

              <div className="bg-[#FAF4EE] p-5 rounded-2xl border border-[#EBDDD3] text-center shadow-2xs">
                <span className="font-serif text-3xl font-bold text-[#C66F53]">3x</span>
                <span className="block text-xs font-medium text-[#73635C] mt-1">CIAP Internacional</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================
          PARTE 6: DEPOIMENTOS REAIS DO GOOGLE (Estética Quente e Acolhedora)
          ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <span>A voz de quem viveu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2321] tracking-tight">
            Mais de 2.000 pacientes. <br />
            <span className="text-[#C66F53]">207 avaliações. Uma consistência.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#2B2321]">4.9 · média Google</span>
            <span className="text-xs text-[#736560]">• Selo Verificado Trustindex</span>
          </div>
        </div>

        {/* Cards de Depoimentos Reais em Fundo Claro e Sofisticado */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          
          <div className="bg-white rounded-2xl p-5 border border-[#E8DED6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5C4F49] leading-relaxed italic">
                "Liana é uma ótima profissional. Gostei bastante do atendimento na clínica."
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F2ECE5] text-[11px]">
              <div className="font-semibold text-[#2B2321]">Sandra Luzinete Felix</div>
              <div className="text-[#8F7E77]">12/02/2026 · Google</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DED6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5C4F49] leading-relaxed italic">
                "Excelente atendimento. Profissional Liane, experiente, educada e é muito simpática."
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F2ECE5] text-[11px]">
              <div className="font-semibold text-[#2B2321]">Mirian Marconi</div>
              <div className="text-[#8F7E77]">10/02/2026 · Google</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DED6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5C4F49] leading-relaxed italic">
                "Foi um alívio, graças a Deus"
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F2ECE5] text-[11px]">
              <div className="font-semibold text-[#2B2321]">Roseli Gomes</div>
              <div className="text-[#8F7E77]">09/02/2026 · Google</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DED6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5C4F49] leading-relaxed italic">
                "Trabalho maravilhoso! Super recomendo!"
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F2ECE5] text-[11px]">
              <div className="font-semibold text-[#2B2321]">Jane Coutinho</div>
              <div className="text-[#8F7E77]">06/02/2026 · Google</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DED6] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between md:col-span-3 lg:col-span-1">
            <div>
              <div className="flex text-amber-500 gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5C4F49] leading-relaxed italic">
                "Atendimento para minha mãe idosa, excelente desde a recepção. Espaçosa, acessível e cuidadosa!"
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-[#F2ECE5] text-[11px]">
              <div className="font-semibold text-[#2B2321]">Cristina Treu</div>
              <div className="text-[#8F7E77]">22/01/2026 · Google</div>
            </div>
          </div>

        </div>

        {/* CTA Intermediário */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Agendar Consulta Presencial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* ============================================================
          PARTE 7: COMPROMISSO COM A PRIVACIDADE (LGPD)
          ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EDE4DC]">
        
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E8DED6] shadow-xs">
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>LGPD · Lei nº 13.709/2018</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2321]">
              Nosso compromisso com a <br />
              <span className="text-[#C66F53]">privacidade dos seus dados</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#665954] leading-relaxed">
              Em nossa clínica, tratamos dados pessoais e de saúde com o mesmo rigor que aplicamos aos nossos procedimentos clínicos. Seus dados são coletados apenas para o que é necessário ao seu atendimento — e protegidos em conformidade com a Lei Geral de Proteção de Dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#C66F53] mb-3">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Dados de saúde protegidos
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Informações clínicas são dados sensíveis pela LGPD. Coletamos apenas o necessário para o seu tratamento, com acesso restrito à equipe clínica.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#D28368] mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Finalidade específica
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Seus dados são usados exclusivamente para agendamento, atendimento clínico e comunicação relacionada à sua saúde. Não vendemos nem compartilhamos para fins comerciais.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#4B7358] mb-3">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Consentimento explícito
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Dados sensíveis de saúde são coletados apenas com seu consentimento. Você pode revogar a qualquer momento sem prejuízo do atendimento já realizado.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#3D6B47] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Armazenamento seguro
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Site com SSL, prontuário com acesso restrito e parceiros de tecnologia com obrigações contratuais de proteção. Seus dados não ficam expostos.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#C66F53] mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Seus direitos garantidos
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Acesso, correção, portabilidade e exclusão dos seus dados. Respondemos solicitações em até 15 dias úteis pelo WhatsApp ou e-mail da clínica.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4DC]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DDD4] flex items-center justify-center text-[#D28368] mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#2B2321] mb-1">
                Proteção reforçada para menores
              </h3>
              <p className="text-xs text-[#6B5E59] leading-relaxed">
                Dados de crianças e adolescentes são coletados apenas com consentimento dos responsáveis legais, presentes durante todo o atendimento.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================
          BANNER FINAL COM INFORMAÇÕES DE CONTATO (Visual Sofisticado)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#2B2321] text-white rounded-[32px] p-8 sm:p-12 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E3967C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 border border-white/20 shadow-sm">
              <img
                src="/images/sobre_nos/logo_sobre_nos.png"
                alt="Clínica Liana Gonçalves"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F2C99D] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span>Atendimento Particular</span>
              </div>
              <div className="font-serif font-bold text-xl sm:text-2xl text-white">
                {CLINIC_INFO.name}
              </div>
              <p className="text-xs sm:text-sm text-[#D1C5BD] mt-1">
                {CLINIC_INFO.address.street} · {CLINIC_INFO.address.neighborhood} · {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
              </p>
              <p className="text-xs text-[#A89A92] mt-0.5">
                {CLINIC_INFO.hours}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10 w-full lg:w-auto">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, vi a página Sobre Nós e gostaria de agendar uma consulta com a equipe')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all cursor-pointer"
            >
              Agendar Consulta Presencial
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
