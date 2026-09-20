import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Send,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_INFO, PATHOLOGIES_MENU } from '../data';

interface ContactPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pathology, setPathology] = useState('Unha encravada');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${name || 'Paciente'}.\nTelefone: ${phone || 'Não informado'}\nAssunto/Patologia: ${pathology}\n${message ? `Mensagem: ${message}` : ''}`;
    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAF7F2]">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3967C]/15 border border-[#E3967C]/30 text-[#C66F53] text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fale Conosco</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2B2321] tracking-tight">
            Contato & Agendamento <br />
            <span className="text-[#C66F53]">em Campo Grande — MS</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#E3967C] to-[#C66F53] rounded-full mx-auto" />

          <p className="text-base text-[#685C57] leading-relaxed">
            Estamos localizados no Monte Castelo, próximo à Avenida Afonso Pena. Agende sua consulta pelo WhatsApp ou envie uma mensagem através do formulário abaixo.
          </p>
        </div>
      </section>

      {/* Main Grid: Info on left, Form on right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DED6] shadow-xs space-y-6">
              <h2 className="font-serif font-bold text-2xl text-[#2B2321]">
                Informações da Clínica
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#5B4E49]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF2EB] flex items-center justify-center text-[#C66F53] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2B2321] block">Endereço</strong>
                    <span>{CLINIC_INFO.address.street} — {CLINIC_INFO.address.neighborhood}</span>
                    <div className="text-[11px] text-[#85746E]">{CLINIC_INFO.address.city} — {CLINIC_INFO.address.state} (CEP {CLINIC_INFO.address.cep})</div>
                    <div className="text-[11px] text-[#C66F53] font-medium mt-0.5">{CLINIC_INFO.address.reference}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF2EB] flex items-center justify-center text-[#C66F53] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2B2321] block">Horário de Atendimento</strong>
                    <span>{CLINIC_INFO.hours}</span>
                    <div className="text-[11px] text-[#85746E]">Atendimento com agendamento prévio</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF2EB] flex items-center justify-center text-[#C66F53] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2B2321] block">Telefones</strong>
                    <div>WhatsApp: <strong>{CLINIC_INFO.whatsapp}</strong></div>
                    <div>Telefone Fixo: {CLINIC_INFO.phone}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na Clínica Liana Gonçalves.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#3D6B47] hover:bg-[#32583A] text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Link / Navigation */}
            <div className="bg-[#FAF3EB] rounded-3xl p-6 border border-[#E8D9CC] flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-base text-[#2B2321]">
                  Abrir no Google Maps
                </h3>
                <p className="text-xs text-[#6F5B54]">
                  Trace sua rota de carro ou transporte público até a nossa clínica.
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.neighborhood}, ${CLINIC_INFO.address.city} MS`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white border border-[#D5C9BF] text-[#2B2321] hover:text-[#C66F53] text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-2xs"
              >
                <span>Como Chegar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Message & Pre-Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DED6] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C66F53]">
                  Agendamento Rápido
                </span>
                <h2 className="font-serif font-bold text-2xl text-[#2B2321] mt-1">
                  Envie Sua Mensagem
                </h2>
                <p className="text-xs text-[#6E5D57] mt-1">
                  Preencha os campos abaixo para iniciar uma triagem rápida diretamente pelo nosso WhatsApp oficial.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2B2321] mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria da Silva"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5C9BF] text-xs text-[#2B2321] focus:outline-none focus:border-[#C66F53] bg-[#FAF7F2]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2321] mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (67) 99999-9999"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5C9BF] text-xs text-[#2B2321] focus:outline-none focus:border-[#C66F53] bg-[#FAF7F2]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2321] mb-1">
                    Qual patologia ou motivo do atendimento?
                  </label>
                  <select
                    value={pathology}
                    onChange={(e) => setPathology(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5C9BF] text-xs text-[#2B2321] focus:outline-none focus:border-[#C66F53] bg-[#FAF7F2]/50"
                  >
                    {PATHOLOGIES_MENU.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                    <option value="Outro assunto">Outro assunto / Avaliação geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2321] mb-1">
                    Conte brevemente o que está sentindo (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Estou com muita dor no canto do dedão há 3 dias..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D5C9BF] text-xs text-[#2B2321] focus:outline-none focus:border-[#C66F53] bg-[#FAF7F2]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
