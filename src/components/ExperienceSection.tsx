
import React, { useState } from 'react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'PRODAGO',
      position: 'Analista de Infraestrutura Pleno',
      period: 'Janeiro 2023 - Presente',
      responsibilities: [
        'Liderança de projetos de migração para AWS, resultando em 30% de redução de custos operacionais',
        'Implementação de pipelines CI/CD com Jenkins e GitLab, automatizando deploys em 95%',
        'Desenvolvimento de soluções em Python e React para automação de processos internos',
        'Gerenciamento de infraestrutura como código usando Terraform e CloudFormation',
        'Monitoramento e otimização de performance de aplicações em ambiente cloud'
      ]
    },
    {
      company: 'Freelancer',
      position: 'Desenvolvedor Full Stack',
      period: 'Março 2021 - Dezembro 2022',
      responsibilities: [
        'Desenvolvimento de aplicações web completas usando React, Node.js e PostgreSQL',
        'Criação de APIs RESTful e integração com serviços de terceiros',
        'Implementação de sistemas de autenticação e autorização',
        'Deploy e manutenção de aplicações em serviços cloud (AWS, Heroku)',
        'Consultoria em arquitetura de software e boas práticas de desenvolvimento'
      ]
    },
    {
      company: 'Tech Solutions',
      position: 'Suporte Técnico',
      period: 'Janeiro 2020 - Fevereiro 2021',
      responsibilities: [
        'Suporte técnico especializado em infraestrutura de rede e sistemas',
        'Configuração e manutenção de firewalls pfSense e equipamentos de rede',
        'Resolução de incidentes críticos com SLA de 99.5% de disponibilidade',
        'Documentação técnica e treinamento de usuários finais',
        'Automação de tarefas repetitivas usando scripts Python e Bash'
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
