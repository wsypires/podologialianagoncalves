import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data';

interface ReviewsPageProps {
  onOpenBooking: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'dor' | 'micose' | 'idosos'>('all');

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Nota {CLINIC_INFO.rating} no Google Meu Negócio ({CLINIC_INFO.reviewsCount} Avaliações)</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            O Que Nossos Pacientes <br />
            <span className="text-[#C66F53]">Dizem Sobre a Experiência</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Mais de 2.000 pacientes tratados com carinho, técnica impecável e alívio comprovado da dor. Todas as opiniões abaixo são avaliações reais e públicas registradas no Google.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Clinica de Podologia Liana Goncalves Campo Grande MS')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#D5C9BF] hover:border-[#C66F53] text-[#4A3E3A] hover:text-[#C66F53] text-xs font-semibold bg-white transition-all shadow-2xs"
            >
              <span>Ver ficha no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Sua Consulta</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E8DED6] shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#8C7D77] font-medium">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4E423E] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E6DD] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#2B2321]">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#8C7D77]">
                    {item.verifiedSource}
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#EAF2EC] flex items-center justify-center text-[#3D6B47]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3EB] rounded-3xl p-8 border border-[#E9D9CC] text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-[#2B2321]">
            Já é nosso paciente?
          </h3>
          <p className="text-xs sm:text-sm text-[#6D5A53]">
            Sua opinião é fundamental para nós e ajuda outros pacientes que sofrem com dor nos pés a encontrarem tratamento adequado.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Clinica de Podologia Liana Goncalves Campo Grande MS')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white border border-[#D5C9BF] text-[#4A3E3A] hover:text-[#C66F53] text-xs font-semibold"
          >
            <span>Deixar uma Avaliação no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};
