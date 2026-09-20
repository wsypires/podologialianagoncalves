import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Clock, User, AlertCircle, ShieldCheck, Check } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
}) => {
  const [patientName, setPatientName] = useState('');
  const [selectedService, setSelectedService] = useState(
    preselectedTreatment || 'Unha Encravada com Analgesia a Laser'
  );
  const [preferredShift, setPreferredShift] = useState<'manha' | 'tarde'>('manha');
  const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    if (preselectedTreatment) {
      setSelectedService(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  if (!isOpen) return null;

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    const greeting = `Olá, meu nome é *${patientName || 'Paciente'}*.`;
    const serviceText = `Gostaria de agendar uma consulta para: *${selectedService}*.`;
    const shiftText = `Tenho preferência pelo turno da *${preferredShift === 'manha' ? 'Manhã (08h às 12h)' : 'Tarde (13h às 17h)'}*.`;
    const detailsText = symptoms ? `Detalhes adicionais: ${symptoms}` : '';

    const fullMessage = `${greeting}\n\n${serviceText}\n${shiftText}\n${detailsText}\n\nVi pelo site da Clínica de Podologia Liana Gonçalves. Poderia me informar os próximos horários disponíveis?`;

    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-[32px] border border-[#E8DDD4] shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-[#F2E5DD] text-[#443834] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#C66F53]">
            ATENDIMENTO RÁPIDO & ACOLHEDOR
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2321]">
            Agendar sua Consulta
          </h3>
          <p className="text-xs sm:text-sm text-[#6E605B]">
            Preencha abaixo para enviar uma mensagem formatada diretamente à nossa recepção via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsapp} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold text-[#483B37] mb-1">
              Seu Nome Completo
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#A89891] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ex.: Mariana Silva"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#DDD0C5] text-xs sm:text-sm text-[#2B2321] focus:outline-hidden focus:border-[#C66F53] focus:ring-1 focus:ring-[#C66F53]"
              />
            </div>
          </div>

          {/* Service Field */}
          <div>
            <label className="block text-xs font-semibold text-[#483B37] mb-1">
              Motivo da Consulta ou Tratamento
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD0C5] text-xs sm:text-sm text-[#2B2321] focus:outline-hidden focus:border-[#C66F53]"
            >
              <option value="Unha Encravada com Analgesia a Laser (Urgência)">
                Unha Encravada (Urgência / Alívio da dor)
              </option>
              <option value="Consulta & Tratamento de Fungos / Onicomicose">
                Fungos e Micoses (com Exame Laboratorial)
              </option>
              <option value="Acompanhamento do Pé Diabético">
                Pé Diabético (Prevenção & Rastreio)
              </option>
              <option value="Podopediatria (Bebês e Crianças)">
                Podopediatria (Cuidado para Bebês e Crianças)
              </option>
              <option value="Calos e Calosidades com Núcleo">
                Calos e Calosidades com Dor
              </option>
              <option value="Podoprofilaxia Clínica (Limpeza Profunda)">
                Podoprofilaxia (Limpeza Clínica Completa)
              </option>
              <option value="Ozonioterapia Medicinal">
                Ozonioterapia Medicinal (Dor Crônica / Fascite)
              </option>
              <option value="Avaliação Geral da Podóloga">
                Avaliação Geral (Não sei exatamente o que tenho)
              </option>
            </select>
          </div>

          {/* Shift selection */}
          <div>
            <label className="block text-xs font-semibold text-[#483B37] mb-1">
              Turno de Preferência
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPreferredShift('manha')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border cursor-pointer transition-all ${
                  preferredShift === 'manha'
                    ? 'bg-[#E3967C] text-white border-[#E3967C]'
                    : 'bg-white text-[#584C47] border-[#DDD0C5] hover:bg-[#F8EFE9]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Manhã (08h às 12h)</span>
              </button>

              <button
                type="button"
                onClick={() => setPreferredShift('tarde')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border cursor-pointer transition-all ${
                  preferredShift === 'tarde'
                    ? 'bg-[#E3967C] text-white border-[#E3967C]'
                    : 'bg-white text-[#584C47] border-[#DDD0C5] hover:bg-[#F8EFE9]'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Tarde (13h às 17h)</span>
              </button>
            </div>
          </div>

          {/* Symptoms note */}
          <div>
            <label className="block text-xs font-semibold text-[#483B37] mb-1">
              Você sente dor ou tem alguma observação? (Opcional)
            </label>
            <textarea
              rows={2}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Ex.: Dói muito ao usar tênis fechado, começou há 5 dias..."
              className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD0C5] text-xs sm:text-sm text-[#2B2321] focus:outline-hidden focus:border-[#C66F53]"
            />
          </div>

          {/* Quick Notice */}
          <div className="flex items-start gap-2 text-[11px] text-[#695D58] bg-[#E8F2EA] p-3 rounded-xl border border-[#D1E5D5]">
            <ShieldCheck className="w-4 h-4 text-[#396944] shrink-0 mt-0.5" />
            <span>
              A taxa da consulta (R$ 150) é isenta caso você inicie o tratamento no mesmo dia da avaliação presencial.
            </span>
          </div>

          {/* Submit WhatsApp Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enviar Solicitação via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
