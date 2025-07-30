
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import pdf from '/public/MauroCésarGuimaraes.pdf';
import logo from './image/logo-atualizada.webp';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
 let lastScrollTop = window.scrollY;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    setIsScrolled(currentScrollTop > 50);

    // Fecha o menu mobile somente se estiver rolando para baixo e no modo mobile
    if (
      isMobileMenuOpen &&
      window.innerWidth < 1024 &&
      currentScrollTop > lastScrollTop
    ) {
      setIsMobileMenuOpen(false);
    }

    lastScrollTop = currentScrollTop;
  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50; // Navigation height offset
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-navy/95 backdrop-blur-md shadow-xl border-b border-lightest-navy/20' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-green font-mono text-lg lg:text-xl font-bold glow hover:scale-50 transition-transform duration-500 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-dark-navy"
                aria-label="Voltar ao início"
              >
                <img
                className='w-28 h-auto mx-auto object-contain' 
                src={logo}
                alt="logo atualizada"
                fetchPriority="high"
                decoding="async"
                loading="eager"
                 />
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'about', label: 'Sobre', number: '01' },
                { id: 'experience', label: 'Experiência', number: '02' },
                { id: 'projects', label: 'Projetos', number: '03' },
                { id: 'skills', label: 'Habilidades', number: '04' },
                { id: 'contact', label: 'Contato', number: '05' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-sm text-slate hover:text-green transition-all duration-300 hover-underline stagger-${index + 1} fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <span className="text-green">{item.number}.</span> {item.label}
                </button>
              ))}
              
              <Button 
                variant="outline" 
                className="transition-colors duration-200 text-green hover:text-green btn-animated border-green hover:bg-green/10 focus:ring-green font-mono text-sm px-8 py-2 ml-4"
               onClick={() => {
                const link = document.createElement('a')
                link.href = pdf;
                link.download ='MauroCésarGuimaraes.pdf'
                link.click();
              }}
                aria-label="Baixar currículo em PDF"
              >
                Currículo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-green hover:text-lightest-slate transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-dark-navy"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-4' : ''}`}></span>
                  <span className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-4' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-dark-navy/95 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center justify-center min-h-full space-y-8 px-6">
            {[
              { id: 'about', label: 'Sobre', number: '01' },
              { id: 'experience', label: 'Experiência', number: '02' },
              { id: 'projects', label: 'Projetos', number: '03' },
              { id: 'skills', label: 'Habilidades', number: '04' },
              { id: 'contact', label: 'Contato', number: '05' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-lg text-slate hover:text-green transition-colors duration-300 text-center"
              >
                <div className="mb-1">
                  <span className="text-green text-sm">{item.number}.</span>
                </div>
                <div>{item.label}</div>
              </button>
            ))}
            
            <Button 
              variant="outline" 
              className="btn-animated border-green text-green hover:text-green hover:bg-green/10 font-mono text-base px-8 py-3 mt-8"
              onClick={() => {
                const link = document.createElement('a')
                link.href = pdf;
                link.download ='MauroCésarGuimaraes.pdf'
                link.click();
              }}
            >
              Currículo
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;
