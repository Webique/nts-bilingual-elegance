import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h1 className="text-hero text-nt-green mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lead text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up stagger-1">
              {t('hero.tagline')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-nt-green hover:bg-nt-green/90 text-white px-8 py-4 text-base"
              >
                {t('hero.cta.services')}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-nt-navy text-nt-navy hover:bg-nt-navy hover:text-white px-8 py-4 text-base"
              >
                {t('hero.cta.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};