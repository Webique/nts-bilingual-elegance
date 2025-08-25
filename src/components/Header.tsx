import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="font-semibold text-lg text-nt-green">
              {t('hero.title')}
            </div>
            <nav className={`hidden md:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-grow"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-grow"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-grow"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};