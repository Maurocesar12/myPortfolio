
import React, { useState } from 'react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Segna Consultoria',
      position: 'Suporte De TI',
      period: 'Fevereiro 2024 - Presente',
      responsibilities: [
        'Suporte ao usuário e otimização de tecnologias para a empresa',
        'Configuração de câmeras IP, DVRs/NVRs, e adequação da infraestrutura de rede (endereçamento IP, VLANs, switches PoE, acesso remoto).',
        'Desenvolvimento, personalização e manutenção de sites institucionais com WordPress, incluindo temas, plugins e otimização de desempenho',
        'Gerenciamento de infraestrutura com Hyper-V e DNS Manager seguindo práticas de IaC',
        'Implementação de políticas e protocolos de segurança web',
        'Aplicação de medidas preventivas contra ataques cibernéticos, como cloudflare, firewall e controle de acesso.',
        'Ajustes e personalização de aplicações corporativas (como ERPs, CRMs e sistemas legados), visando melhor performance, usabilidade e integração com o ambiente de TI.',
        'Diagnóstico e correção de falhas em hardware corporativo, com foco em manutenção preventiva e substituição de componentes',
      ]
    },
    {
      company: 'Freelancer',
      position: 'Desenvolvedor Full Stack',
      period: 'Março 2024 - Fevereiro 2025',
      responsibilities: [
        'Desenvolvimento de aplicações web completas usando TypeScript, JavaScript, HTML/CSS, React, PHP, WordPress',
        'Criação de APIs RESTful e integração com serviços de terceiros',
        'Implementação de sistemas de autenticação e autorização',
        'Deploy e manutenção de aplicações em serviços cloud (Vercel, AWS)',
        'Consultoria em arquitetura de software e boas práticas de desenvolvimento',
        'Aprimoramento de consultas e estrutura em banco de dados SQL para ganho de performance',
        'Análise de desempenho da aplicação web visando otimização'
      ]
    } 
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6">
      <div className="animate-fade-in">
        <h2 className="numbered-heading">Onde trabalhei</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 py-3 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                    activeTab === index
                      ? 'text-green bg-lightest-navy/50'
                      : 'text-slate hover:text-green hover:bg-lightest-navy/25'
                  }`}
                >
                  {exp.company}
                  {activeTab === index && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-green md:block hidden"></div>
                  )}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-green md:hidden block"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-lightest-slate">
                {experiences[activeTab].position}{' '}
                <span className="text-green">@ {experiences[activeTab].company}</span>
              </h3>
              
              <p className="font-mono text-sm text-slate">
                {experiences[activeTab].period}
              </p>
              
              <div className="space-y-3">
                {experiences[activeTab].responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green mr-3 mt-2 text-sm">▹</span>
                    <p className="text-slate leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
