import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Phone, MessageCircle, Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, PATHOLOGIES_MENU } from '../data';

interface NavbarProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patologiasDropdownOpen, setPatologiasDropdownOpen] = useState(false);
  const [mobilePatologiasOpen, setMobilePatologiasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPatologiasDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPatologiasDropdownOpen(false);
    setMobilePatologiasOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/98 backdrop-blur-md shadow-sm py-2.5 border-b border-[#EAE3DB]'
          : 'bg-[#FAF7F2]/90 backdrop-blur-xs py-4 border-b border-[#EAE3DB]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" id="logo-link" className="flex items-center gap-3 group shrink-0">
            <img
              src="/images/original/logo_clinica.png"
              alt="Clínica de Podologia Liana Gonçalves"
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <div className="border-l border-[#DDD1C7] pl-3">
              <div className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#2B2321] leading-none group-hover:text-[#C66F53] transition-colors">
                Liana Gonçalves
              </div>
              <div className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest text-[#7E706B] mt-1 flex items-center gap-1.5">
                <span>Podologia Clínica</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#E3967C]"></span>
                <span className="hidden sm:inline">Hospital do Pé</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links matching original site */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`text-[13px] font-medium transition-colors py-1 ${
                isActive('/') ? 'text-[#C66F53] font-bold' : 'text-[#574B47] hover:text-[#C66F53]'
              }`}
            >
              Início
            </Link>

            <Link
              to="/sobre-nos"
              className={`text-[13px] font-medium transition-colors py-1 ${
                isActive('/sobre-nos') ? 'text-[#C66F53] font-bold' : 'text-[#574B47] hover:text-[#C66F53]'
              }`}
            >
              Sobre nós
            </Link>

            {/* Patologias with Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setPatologiasDropdownOpen(true)}
              onMouseLeave={() => setPatologiasDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/patologias"
                  className={`text-[13px] font-medium transition-colors py-1 ${
                    isActive('/patologias') ? 'text-[#C66F53] font-bold' : 'text-[#574B47] hover:text-[#C66F53]'
                  }`}
                >
                  Patologias
                </Link>
                <button
                  type="button"
                  onClick={() => setPatologiasDropdownOpen(!patologiasDropdownOpen)}
                  className="p-1 text-[#574B47] hover:text-[#C66F53] cursor-pointer"
                  aria-expanded={patologiasDropdownOpen}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${patologiasDropdownOpen ? 'rotate-180 text-[#C66F53]' : ''}`} />
                </button>
              </div>

              {patologiasDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-[#E8DED6] py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 mb-1 flex items-center justify-between border-b border-[#F0E6DE]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A08E87]">
                      Tratamentos & Patologias
                    </span>
                    <Link
                      to="/patologias"
                      onClick={() => setPatologiasDropdownOpen(false)}
                      className="text-[10px] text-[#C66F53] hover:underline font-semibold"
                    >
                      Ver todas →
                    </Link>
                  </div>
                  <div className="space-y-0.5 max-h-[60vh] overflow-y-auto">
                    {PATHOLOGIES_MENU.map((item) => (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => setPatologiasDropdownOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-[#483E3A] hover:bg-[#FAF2EB] hover:text-[#C66F53] transition-colors"
                      >
                        <div className="font-semibold text-xs text-[#2B2321]">{item.name}</div>
                        <div className="text-[10px] text-[#8C7C75] leading-tight">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/ozonioterapia"
              className={`text-[13px] font-medium transition-colors py-1 ${
                isActive('/ozonioterapia') ? 'text-[#3D6B47] font-bold' : 'text-[#574B47] hover:text-[#3D6B47]'
              }`}
            >
              Ozonioterapia
            </Link>

            <Link
              to="/faq"
              className={`text-[13px] font-medium transition-colors py-1 ${
                isActive('/faq') ? 'text-[#C66F53] font-bold' : 'text-[#574B47] hover:text-[#C66F53]'
              }`}
            >
              Dúvidas
            </Link>

            <Link
              to="/contato"
              className={`text-[13px] font-medium transition-colors py-1 ${
                isActive('/contato') ? 'text-[#C66F53] font-bold' : 'text-[#574B47] hover:text-[#C66F53]'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Right Action & CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, gostaria de informações sobre consulta de podologia')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#483E3A] hover:text-[#C66F53] transition-colors px-3 py-1.5 rounded-full border border-[#DFD5CB] hover:border-[#C66F53] bg-white/70"
              title="Fale conosco no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>(67) 99916-0929</span>
            </a>

            <button
              id="header-cta-button"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-full bg-[#E3967C] hover:bg-[#D48469] text-white text-xs font-semibold tracking-wide shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full bg-[#E3967C] text-white text-xs font-medium cursor-pointer"
            >
              Agendar
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3B302D] hover:bg-[#F0E6DE] transition-colors cursor-pointer"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DED6] px-5 py-5 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-1.5 border-b border-[#EFE5DC]/80 ${
                isActive('/') ? 'text-[#C66F53]' : 'text-[#483E3A] hover:text-[#C66F53]'
              }`}
            >
              Início
            </Link>

            <Link
              to="/sobre-nos"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-1.5 border-b border-[#EFE5DC]/80 ${
                isActive('/sobre-nos') ? 'text-[#C66F53]' : 'text-[#483E3A] hover:text-[#C66F53]'
              }`}
            >
              Sobre nós
            </Link>

            {/* Collapsible Mobile Patologias Submenu */}
            <div className="border-b border-[#EFE5DC]/80 pb-1.5">
              <div className="flex items-center justify-between">
                <Link
                  to="/patologias"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1.5 ${
                    isActive('/patologias') ? 'text-[#C66F53]' : 'text-[#483E3A] hover:text-[#C66F53]'
                  }`}
                >
                  Patologias & Tratamentos
                </Link>
                <button
                  type="button"
                  onClick={() => setMobilePatologiasOpen(!mobilePatologiasOpen)}
                  className="p-1 text-[#483E3A] hover:text-[#C66F53]"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePatologiasOpen ? 'rotate-180 text-[#C66F53]' : ''}`} />
                </button>
              </div>

              {mobilePatologiasOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1 bg-white/60 rounded-xl my-1 border border-[#E8DED6]">
                  {PATHOLOGIES_MENU.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => {
                        setMobilePatologiasOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="block py-1.5 text-xs text-[#5C4F4A] hover:text-[#C66F53] border-b last:border-b-0 border-[#F2EAE3]"
                    >
                      • {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/ozonioterapia"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-1.5 border-b border-[#EFE5DC]/80 ${
                isActive('/ozonioterapia') ? 'text-[#3D6B47]' : 'text-[#483E3A] hover:text-[#3D6B47]'
              }`}
            >
              Ozonioterapia
            </Link>

            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-1.5 border-b border-[#EFE5DC]/80 ${
                isActive('/faq') ? 'text-[#C66F53]' : 'text-[#483E3A] hover:text-[#C66F53]'
              }`}
            >
              Perguntas Frequentes (FAQ)
            </Link>

            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-semibold py-1.5 ${
                isActive('/contato') ? 'text-[#C66F53]' : 'text-[#483E3A] hover:text-[#C66F53]'
              }`}
            >
              Contato & Localização
            </Link>
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 rounded-full border border-[#D5C9BF] text-xs font-semibold text-[#483E3A]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C66F53]" />
              Ligar para {CLINIC_INFO.phone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-full bg-[#E3967C] text-white text-xs font-semibold shadow-xs text-center cursor-pointer"
            >
              Agendar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
