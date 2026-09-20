import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Microscope,
  Zap,
  Globe2,
  GraduationCap,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

interface DiferenciaisPageProps {
  onOpenBooking: () => void;
}

export const DiferenciaisPage: React.FC<DiferenciaisPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossos Diferenciais</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Podologia Clínica: <br />
            <span className="text-[#C66F53]">Não é Estética, é Saúde.</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Entenda a diferença crucial entre um procedimento de salão e o tratamento médico especializado realizado por quem tem formação clínica avançada.
          </p>
        </div>
      </section>

      {/* 4 Pilares Detalhados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
            Os 4 Pilares da Nossa Conduta Clínica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pilar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DDD4] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FBF0EA] flex items-center justify-center text-[#C66F53]">
              <Microscope className="w-6 h-6" />
            </div>
            <div className="inline-block text-[11px] font-bold text-[#C66F53] uppercase tracking-wider">
              Pilar 01
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2B2321]">
              Exame Micológico Laboratorial
            </h3>
            <p className="text-xs sm:text-sm text-[#5B4F4A] leading-relaxed">
              Não receitamos antifúngicos nem iniciamos protocolos às cegas. Coletamos amostras com instrumental estéril e enviamos para laboratório credenciado de análises clínicas. Somente com o laudo exato definimos a medicação ou laser adequado para aquela espécie fúngica.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#3E6B48] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sem medicação empírica sem comprovação científica</span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DDD4] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF2EB] flex items-center justify-center text-[#D28368]">
              <Zap className="w-6 h-6" />
            </div>
            <div className="inline-block text-[11px] font-bold text-[#D28368] uppercase tracking-wider">
              Pilar 02
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2B2321]">
              Laserterapia DMC Therapy (iLib & XT)
            </h3>
            <p className="text-xs sm:text-sm text-[#5B4F4A] leading-relaxed">
              Utilizamos a linha mais avançada de lasers médicos DMC. O laser promove analgesia imediata na unha encravada sem dor, reduz a inflamação, acelera a cicatrização celular e, através da Terapia Fotodinâmica (PDT), age destruindo a parede celular de fungos resistentes.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#3E6B48] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tratamentos mais rápidos, seguros e confortáveis</span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DDD4] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] flex items-center justify-center text-[#3D6B47]">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="inline-block text-[11px] font-bold text-[#3D6B47] uppercase tracking-wider">
              Pilar 03
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2B2321]">
              Atualização Internacional Contínua (CIAP 2023–2025)
            </h3>
            <p className="text-xs sm:text-sm text-[#5B4F4A] leading-relaxed">
              A ciência podológica evolui constantemente. Participamos ativamente dos maiores congressos mundiais e nacionais, trazendo para Campo Grande os mesmos protocolos que são referência na Europa e nos Estados Unidos.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#3E6B48] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Técnicas de última geração aplicadas ao seu caso</span>
            </div>
          </div>

          {/* Pilar 4 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DDD4] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F5F1] flex items-center justify-center text-[#4B7358]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="inline-block text-[11px] font-bold text-[#4B7358] uppercase tracking-wider">
              Pilar 04
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2B2321]">
              Pós-Graduações e Especializações Clínicas
            </h3>
            <p className="text-xs sm:text-sm text-[#5B4F4A] leading-relaxed">
              Formação de pós-graduação em Diabetes e Complicações Crônicas, Semiologia do Pé Diabético e Dermatologia Podológica. Isso garante olhar clínico aprofundado para pacientes com hipertensão, neuropatias, idosos e crianças.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#3E6B48] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Segurança máxima para diabéticos e casos graves</span>
            </div>
          </div>

        </div>
      </section>

      {/* Tabela Comparativa: Podologia Clínica vs. Salão de Beleza */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E8DED6] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
              Comparativo Transparente
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
              Clínica de Podologia vs. Salão Tradicional
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EAE0D7] bg-[#FAF7F2]">
                  <th className="p-4 font-bold text-[#2B2321]">Critério</th>
                  <th className="p-4 font-bold text-[#C66F53] bg-[#FBF0EA] rounded-t-xl">
                    Clínica Liana Gonçalves
                  </th>
                  <th className="p-4 font-bold text-[#6D5E58]">Salão de Beleza / Pedicure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE0D7]">
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Objetivo</td>
                  <td className="p-4 font-medium text-[#2B2321] bg-[#FDF7F4]">
                    Saúde, alívio da dor e cura de patologias
                  </td>
                  <td className="p-4 text-[#7A6B65]">Apenas estética superficial e esmaltação</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Esterilização</td>
                  <td className="p-4 font-medium text-[#3E6B48] bg-[#FDF7F4]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                      <span>Autoclave hospitalar com teste químico e biológico</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#8C4A4A]">Estufa simples, álcool 70% ou sem rastreabilidade</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Diagnóstico de Micose</td>
                  <td className="p-4 font-medium text-[#2B2321] bg-[#FDF7F4]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                      <span>Coleta e exame micológico laboratorial</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#7A6B65]">Dicas de esmaltes caseiros sem comprovação</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Unha Encravada</td>
                  <td className="p-4 font-medium text-[#2B2321] bg-[#FDF7F4]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                      <span>Analgesia a laser DMC e retirada milimétrica da espícula</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#8C4A4A]">Alicates comuns que cortam os cantos e pioram o quadro</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Atendimento ao Diabético</td>
                  <td className="p-4 font-medium text-[#2B2321] bg-[#FDF7F4]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                      <span>Pós-graduação em Diabetes e semiologia neurológica</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#8C4A4A]">Alto risco de microcortes e úlceras acidentais</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#2B2321]">Recibo para Reembolso</td>
                  <td className="p-4 font-medium text-[#3E6B48] bg-[#FDF7F4]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B48] shrink-0" />
                      <span>Emissão formal de recibo para convênio médico</span>
                    </div>
                  </td>
                  <td className="p-4 text-[#7A6B65]">Não emite documento aceito para reembolso de saúde</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-sm font-semibold shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta com Rigor Clínico</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
