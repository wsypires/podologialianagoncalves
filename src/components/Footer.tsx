import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, Sparkles, Star, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contato" className="bg-[#261E1C] text-[#D8CDC7] pt-16 pb-12 border-t border-[#3B302D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#3D3330]">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block space-y-3">
              <img
                src="/images/original/logo_white.png"
                alt="Clínica de Podologia Liana Gonçalves"
                className="h-12 w-auto object-contain brightness-110"
              />
              <div className="text-[10px] uppercase tracking-widest text-[#B5A39B]">
                Podologia Clínica · Hospital do Pé
              </div>
            </Link>

            <p className="text-xs text-[#A89891] leading-relaxed">
              Podologia com seriedade, rigor científico e protocolos médicos em Campo Grande - MS.
              Mais de 15 anos de dedicação exclusiva à saúde, mobilidade e bem-estar dos seus pés.
            </p>

            {/* Google Rating in Footer */}
            <div className="flex items-center gap-2 pt-1 text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9 / 5.0</span>
              <span className="text-xs text-[#9E8E87]">· 207 avaliações no Google</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
              >
                Agendar Consulta pelo WhatsApp
              </button>
            </div>
          </div>

          {/* Col 2: Tratamentos com Links para Páginas Específicas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Páginas de Patologias
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A59E]">
              <li>
                <Link to="/patologias/fungos-micose" className="hover:text-[#E3967C] transition-colors">
                  Fungos nas Unhas (Onicomicose)
                </Link>
              </li>
              <li>
                <Link to="/patologias/unha-encravada" className="hover:text-[#E3967C] transition-colors">
                  Unha Encravada com Laserterapia
                </Link>
              </li>
              <li>
                <Link to="/patologias/pes-diabetico" className="hover:text-[#E3967C] transition-colors">
                  Pé Diabético Especializado
                </Link>
              </li>
              <li>
                <Link to="/patologias/podopediatria" className="hover:text-[#E3967C] transition-colors">
                  Podopediatria (Bebês e Crianças)
                </Link>
              </li>
              <li>
                <Link to="/patologias/podogeriatria" className="hover:text-[#E3967C] transition-colors">
                  Podogeriatria (Pés de Idosos)
                </Link>
              </li>
              <li>
                <Link to="/patologias/calos-e-calosidades" className="hover:text-[#E3967C] transition-colors">
                  Calos e Calosidades com Núcleo
                </Link>
              </li>
              <li>
                <Link to="/patologias/podoprofilaxia" className="hover:text-[#E3967C] transition-colors">
                  Podoprofilaxia Clínica Profunda
                </Link>
              </li>
              <li>
                <Link to="/ozonioterapia" className="hover:text-[#E3967C] transition-colors font-medium text-[#86B491]">
                  Ozonioterapia Medicinal Philozon
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação do Site & Horários */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navegação do Site
            </h4>
            <ul className="space-y-1.5 text-xs text-[#B5A59E] mb-4">
              <li>
                <Link to="/" className="hover:text-[#E3967C] transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="hover:text-[#E3967C] transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/patologias" className="hover:text-[#E3967C] transition-colors">Todas as Patologias</Link>
              </li>
              <li>
                <Link to="/diferenciais" className="hover:text-[#E3967C] transition-colors">Diferenciais</Link>
              </li>
              <li>
                <Link to="/quanto-custa" className="hover:text-[#E3967C] transition-colors">Quanto Custa</Link>
              </li>
              <li>
                <Link to="/avaliacoes" className="hover:text-[#E3967C] transition-colors">Avaliações</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#E3967C] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#E3967C] transition-colors">Contato & Localização</Link>
              </li>
            </ul>

            <div className="space-y-1 text-xs text-[#B5A59E] pt-2 border-t border-white/5">
              <div className="font-semibold text-white">Horário:</div>
              <div>Segunda a Sexta · 8h às 17h</div>
              <div className="text-[10px] text-[#A6948C]">Com agendamento prévio</div>
            </div>
          </div>

          {/* Col 4: Location & Phones */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Localização & Contato
            </h4>

            {/* Clinic facade photo */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xs aspect-video mb-3 bg-black/20">
              <img
                src="/images/original/clinic_facade.jpg"
                alt="Fachada Clínica de Podologia Liana Gonçalves em Campo Grande"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-3 text-xs text-[#B5A59E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3967C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{CLINIC_INFO.address.street}</p>
                  <p>{CLINIC_INFO.address.neighborhood} · {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}</p>
                  <p className="text-[11px] text-[#8C7D77]">{CLINIC_INFO.address.cep}</p>
                  <p className="text-[11px] text-[#A6948C] mt-1">{CLINIC_INFO.address.reference}</p>
                </div>
              </div>

              <div className="pt-1 space-y-2">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#E3967C] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: {CLINIC_INFO.whatsapp}</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white hover:text-[#E3967C] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E3967C]" />
                  <span>Telefone: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6C66]">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.legalName}). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & LGPD</span>
            <span>·</span>
            <span>Biossegurança RDC Anvisa</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#C66F53]">
              <Heart className="w-3.5 h-3.5 fill-current" /> Campo Grande - MS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
