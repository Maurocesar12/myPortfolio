
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-green/5 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Greeting */}
          <p className="font-mono text-green text-sm sm:text-base md:text-lg mb-4 sm:mb-6 fade-in-up stagger-1">
            Olá, meu nome é
          </p>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-lightest-slate mb-4 sm:mb-6 leading-tight fade-in-up stagger-2">
            Mauro César Guimarães
            <br className="hidden sm:block" />
            <span className="block">Santos Junior</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate mb-6 sm:mb-8 leading-tight fade-in-up stagger-3">
            Especialista em Infraestrutura
            <br className="hidden sm:block" />
            <span className="block">e Desenvolvimento</span>
          </h2>
          
          {/* Description */}
          <div className="max-w-2xl xl:max-w-3xl fade-in-up stagger-4">
            <p className="text-base sm:text-lg md:text-xl text-slate leading-relaxed mb-8 sm:mb-12">
              Sou um profissional de TI especializado em{' '}
              <span className="text-green font-medium">infraestrutura multicloud</span>, 
              desenvolvimento fullstack e automações. Atualmente focado em criar 
              soluções robustas e escaláveis que conectam pessoas e tecnologias de 
              forma eficiente e inovadora.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 fade-in-up stagger-5">
            <Button 
              onClick={scrollToContact}
              className="btn-animated glow bg-transparent border-2 border-green text-green hover:bg-green hover:text-dark-navy font-mono text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto transition-all duration-300 group"
              aria-label="Ir para seção de contato"
            >
              <span className="relative z-10">Entre em contato!</span>
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn-animated text-lightest-slate hover:text-green font-mono text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border border-transparent hover:border-green/30"
              aria-label="Saber mais sobre mim"
            >
              Saiba mais
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block fade-in-up stagger-6">
            <div className="w-6 h-10 border-2 border-slate rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-green rounded-full floating opacity-60 hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-green rounded-full floating opacity-40 hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
