
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Infrastructure & Cloud',
      skills: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Microsoft 365',
        'SharePoint',
        'OneDrive',
        'CloudFlare',
        'Linux Administration',
        'Windows Manager',
        'pfSense',
        'VMware'
      ]
    },
    {
      title: 'Development',
      skills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Node.js',
        'Python',
        'PHP',
        'PostgreSQL',
        'MongoDB',
        'RESTful APIs'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'GitLab CI/CD',
        'GitHub Actions',
        'GIT',
        'Grafana',
        'Apache'


      ]
    },
    {
      title: 'Networking & Security',
      skills: [
        'Network Architecture',
        'Firewall Configuration',
        'VPN Setup',
        'SSL/TLS',
        'Network Monitoring',
        'Incident Response',
        'Security Auditing',
        'Backup Strategies',
        'Disaster Recovery'
      ]
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6">
      <div className="animate-fade-in">
        <h2 className="numbered-heading">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-light-navy rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-lightest-slate mb-6 flex items-center">
                <span className="w-2 h-2 bg-green rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center text-slate hover:text-green transition-colors duration-200"
                  >
                    <span className="text-green mr-3 text-sm">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate text-lg mb-8">
            Certificações e aprendizado contínuo são fundamentais na minha jornada profissional
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">JavaScript Developer</span>
            </div>
            <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">Node.JS Fundamentals</span>
            </div>
            <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">Azure Fundamentals</span>
            </div>
            <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">HTML/CSS Web Developer</span>
            </div>
            <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">React Fundamentals</span>
            </div>
             <div className="bg-lightest-navy px-4 py-2 rounded-lg">
              <span className="text-green font-mono text-sm">Cybersecurity Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
