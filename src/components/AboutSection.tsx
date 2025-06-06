
import React, { useEffect, useRef, useState } from 'react';
import img from './image/image-perfil.webp'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'PHP',
    'JSON',
    'pfSense',
    'Hyper-V',
    'PostgreSQL',
    'MySQL',
    'FireBase',
    'OneDrive',
    'SharePoint',
    'MICROSOFT 365',
    'CloudFlare',
    'DNS Manager',
    'ZoneMider',
    'HTML/CSS',
    'GIT',
    'GITHUB',
    'Vercel'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="numbered-heading fade-in-up">Sobre mim</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed fade-in-left stagger-1">
              <p>
                Olá! Meu nome é <span className="text-lightest-slate font-medium">Mauro César</span> e tenho paixão por criar soluções tecnológicas que fazem a diferença. 
                Minha jornada na tecnologia começou em 2015, quando eu decidi fazer um overclock no meu computador, e desde então venho me aprofudando cada vez mais em software, hardware e especializando em 
                <span className="text-green font-medium"> Infraestrutura</span> e 
                <span className="text-green font-medium"> Desenvolvimento De Software</span>.
              </p>
              
              <p>
                Atualmente trabalho como <span className="text-green font-medium">Suporte de TI</span> na 
                <span className="text-green font-medium"> Segna Consultoria em Seguros </span>, 
                onde lidero projetos de migração para cloud, automação de processos e desenvolvimento de soluções web que impactam 
                milhares de usuários diariamente. Faço freelance em desenvolvimento de software, automações e criação de software empresarial.
              </p>
              
              <p>
                Minha experiência inclui trabalhar com tecnologias modernas como Vercel, React, Node.js, Python, JavaScript, TypeScript 
                sempre buscando as melhores práticas em <span className="text-green font-medium">DevOps</span> e 
                <span className="text-green font-medium"> arquitetura de sistemas distribuídos</span>. 
                Tenho particular interesse em desenvolvimento web, automação, segurança e otimização de performance.
              </p>
              
              <p>
                Aqui estão algumas das principais tecnologias com as quais trabalho atualmente:
              </p>
            </div>
            
            {/* Technologies Grid */}
            <div className="mt-6 sm:mt-8 fade-in-left stagger-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm font-mono">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-slate hover:text-green transition-colors duration-400 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-green mr-3 text-xs">▹</span>
                    <span className="truncate">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end fade-in-right stagger-1">
            <div className="relative group max-w-sm w-full">
              {/* Image container */}
              <div className="relative">
                <div className="aspect-square w-full max-w-80 lg:max-w-full bg-green rounded-xl overflow-hidden">
                  <img 
                    src={img}
                    alt="Mauro César Guimarães Santos Junior"
                    className="w-full h-full object-cover mix-blend-multiply filter grayscale transition-all duration-500 group-hover:filter-none group-hover:mix-blend-normal group-hover:scale-100"
                    loading="lazy"
                  />
                </div>
                
                {/* Border effect */}
                <div className="absolute inset-0 border-2 border-green rounded-xl translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green/20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
