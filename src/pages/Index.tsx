
import Navigation from '@/components/Navigation';
import BackgroundFX from '@/components/BackgroundFX';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    // Sem cor de fundo aqui: o bg-dark-navy do body é a base e deixa o
    // BackgroundFX (z negativo) visível.
    <div className="min-h-screen">
      <BackgroundFX />
      <Navigation />
      <SocialLinks />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
