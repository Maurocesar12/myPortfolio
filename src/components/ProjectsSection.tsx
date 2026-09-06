import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import imageZapiens from './image/ZAPIENS.jpg';
import imageQuickTools from './image/quicktools 3.jpg';
import imageGestaoEmpresarial from './image/Sistema De Gestao FInanceira.jpg';
import areaRestritaImage from './image/amvar.jpg';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  label?: string;
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Integrated Chat Bot AI',
      description: 'Chatbot para WhatsApp que utiliza inteligência artificial, feito em Node.js. Ele usa OpenAI (GPT) ou Google Gemini para responder automaticamente mensagens de amigos, colegas ou transformar uma assistente virtual para sua empresa.',
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'WpConnect'],
      github: 'https://github.com/Maurocesar12/ChatBot-integrando-com-IA',
      demo: 'https://zapiens.netlify.app/',
      image: imageZapiens,
      label: 'Projeto em Destaque'
    },
    {
      title: 'IT QuickTools',
      description: 'Ferramenta de automação de suporte técnico desenvolvida em C# (Windows Forms / .NET 8). O projeto utiliza WMI para leitura de hardware, gerenciamento de processos para execução de comandos CMD/PowerShell em background e programação assíncrona para garantir uma interface responsiva. Compilada como Single-File, roda diretamente de um pen drive sem instalação ou dependências externas.',
      technologies: ['C#', 'CMD/PowerShell', '.NET 8'],
      github: 'https://github.com/Maurocesar12/QuickTools_Project',
      demo: 'https://github.com/Maurocesar12/QuickTools_Project/releases/tag/v1.0',
      image: imageQuickTools,
      label: 'Projeto em Destaque'
    },
    {
      title: 'Sistema de Gestão Empresarial',
      description: 'Sistema web desenvolvido para gestão de empresas, com funcionalidades de controle de estoque, vendas, clientes e relatórios. A interface foi construída com React, TypeScript e TailwindCSS, enquanto o backend utiliza Node.js, Express e banco relacional para armazenamento das informações.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Maurocesar12/System_GestaoEmpresarial',
      demo:  'https://gestao-empresarial-web.vercel.app/',
      image: imageGestaoEmpresarial,
      label: 'Projeto em Destaque'
    },
    {
      title: 'Landing Page Nutricionista',
      description: 'Landing page criada para profissional de nutrição, com foco em apresentação de serviços, clareza na proposta de valor e conversão de visitantes em contatos. O projeto utiliza uma estrutura one page responsiva, seções de confiança e chamadas para ação pensadas para atendimento online e presencial.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsivo', 'Landing Page'],
      github: 'https://github.com/Maurocesar12/LandingPage_Nutricionista',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
      demo: 'https://arletenutricionista.com.br/',
      label: 'Projeto Realizado'
    },
    {
      title: 'Área Restrita de Colaboradores',
      description: 'Realizei a configuração e o desenvolvimento de uma área restrita para colaboradores em um site WordPress, utilizando o desenvolvimento com PHP e plugin Elementor.Implementei funçoes no SQL. A área foi projetada para fornecer acesso seguro a informações internas, documentos e recursos exclusivos para os funcionários da empresa. Além de fornercer todo amparo de mudança de hospedagem e atualizaçoes de segurança do site.',
      technologies: ['WordPress', 'PHP', 'Elementor', 'CSS', 'Performance', 'Cloudflare'],
      demo: 'https://amvvar.org.br/area-restrita/',
      image: areaRestritaImage,
      label: 'Projeto Realizado'
    }
  ];

  const openUrl = (url?: string) => {
    if (url?.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 lg:gap-12 items-center fade-in-up stagger-${index + 1}`}
            >
              <div className="w-full lg:w-3/5 relative group">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover transition-all duration-500 group-hover:scale-150"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />

                  <div className="absolute inset-0 bg-dark-navy/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green hover:text-lightest-slate p-3"
                          onClick={() => openUrl(project.github)}
                          aria-label={`Ver código do projeto ${project.title} no GitHub`}
                        >
                          <Github className="h-6 w-6" />
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green hover:text-lightest-slate p-3"
                          onClick={() => openUrl(project.demo)}
                          aria-label={`Ver demo do projeto ${project.title}`}
                        >
                          <ExternalLink className="h-6 w-6" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full lg:w-2/5 space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}>
                <div>
                  <p className="font-mono text-green text-sm mb-2">{project.label ?? 'Projeto em Destaque'}</p>
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
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-4 pt-2 ${
                  index % 2 === 1 ? 'lg:justify-end' : ''
                }`}>
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="btn-animated text-slate hover:text-green p-2 group"
                      onClick={() => openUrl(project.github)}
                      aria-label={`Ver código do projeto ${project.title} no GitHub`}
                    >
                      <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="btn-animated text-slate hover:text-green p-2 group"
                      onClick={() => openUrl(project.demo)}
                      aria-label={`Ver demo do projeto ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-20 fade-in-up stagger-5">
          <Button
            variant="outline"
            className="btn-animated border-green text-green hover:text-green hover:bg-green/20 font-mono text-base px-8 py-4 h-auto"
            onClick={() => openUrl('https://github.com/maurocesar12')}
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
