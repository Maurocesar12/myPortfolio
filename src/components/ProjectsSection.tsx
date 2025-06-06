
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Integrated Chat Bot AI',
      description: 'Chatbot para WhatsApp com inteligência artificial, feito em Node.js. Ele usa OpenAI (GPT) ou Google Gemini para responder automaticamente mensagens de amigos, colegas ou transformar uma assistente virtual para sua empresa.',
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'WpConnect',],
      github: 'https://github.com/Maurocesar12/ChatBot-integrando-com-IA',
      demo: '',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Email classifier',
      description: 'Projeto web que classifica e-mails como produtivos ou improdutivos e sugere respostas automáticas usando IA generativa. Interface simples, suporte a .txt, .pdf e texto direto, com deploy na nuvem.',
      technologies: ['Python', 'BootStrap 5', 'Google Gemini', 'NLTK+Regex', 'PymuPDF','Render'],
      github: 'https://github.com/Maurocesar12/CasePratico',
      demo: 'https://casepratico.onrender.com/',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'LandinPage for marketing professionals ',
      description: 'Landing page criada para destacar o trabalho de uma profissional de marketing. Moderna, responsiva e feita com tecnologias como React, TypeScript e Tailwind, unindo design e performance em um só lugar.',
      technologies: ['React', 'TypeScript', 'TalwindCSS', 'Vite', 'Vercel', 'JavaScript'],
      github: 'https://github.com/Maurocesar12/marketing-muse-landing-main',
      demo: 'https://glendacarvalho.com.br/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      featured: true
    }
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
      id="projects" 
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="numbered-heading fade-in-up">Alguns projetos que desenvolvi</h2>
        
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 lg:gap-12 items-center fade-in-up stagger-${index + 1}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-green/20 transition-opacity duration-300 group-hover:opacity-0"></div>
                  
                  {/* Project overlay on hover */}
                  <div className="absolute inset-0 bg-dark-navy/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green hover:text-lightest-slate hover:bg-green/20 p-3"
                        onClick={() => window.open(project.github, '_blank')}
                        aria-label={`Ver código do projeto ${project.title} no GitHub`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green hover:text-lightest-slate hover:bg-green/20 p-3"
                        onClick={() => window.open(project.demo, '_blank')}
                        aria-label={`Ver demo do projeto ${project.title}`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`w-full lg:w-2/5 space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}>
                <div>
                  <p className="font-mono text-green text-sm mb-2">Projeto em Destaque</p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-lightest-slate hover-underline cursor-default">
                    {project.title}
                  </h3>
                </div>
                
                <div className="project-card">
                  <p className="text-slate leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className={`flex flex-wrap gap-2 sm:gap-3 ${
                  index % 2 === 1 ? 'lg:justify-end' : ''
                }`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-tag text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`flex gap-4 pt-2 ${
                  index % 2 === 1 ? 'lg:justify-end' : ''
                }`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="btn-animated text-slate hover:text-green p-2 group"
                    onClick={() => window.open(project.github, '_blank')}
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="btn-animated text-slate hover:text-green p-2 group"
                    onClick={() => window.open(project.demo, '_blank')}
                    aria-label={`Ver demo do projeto ${project.title}`}
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-16 lg:mt-20 fade-in-up stagger-4">
          <Button 
            variant="outline" 
            className="btn-animated border-green text-green hover:text-green hover:bg-green/20 font-mono text-base px-8 py-4 h-auto"
            onClick={() => window.open('https://github.com/maurocesar12', '_blank')}
            aria-label="Ver todos os projetos no GitHub"
          >
            Ver todos os projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
