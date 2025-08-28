import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left side in LTR, Right side in RTL */}
          <div className={`flex items-center ${isRTL ? 'order-3' : 'order-1'}`}>
            <div className="w-28 h-16 flex items-center justify-center overflow-hidden">
              <Logo className="w-full h-full" />
            </div>
          </div>

          {/* Navigation - Center */}
          <nav className={`hidden md:flex items-center gap-6 order-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
              onClick={() => scrollToSection('partners')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-grow"
            >
              {t('nav.clients')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-grow"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Toggle - Right side in LTR, Left side in RTL */}
          <div className={`flex items-center ${isRTL ? 'order-1' : 'order-3'}`}>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};