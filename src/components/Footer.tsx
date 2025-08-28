import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide">
        <div className={`grid md:grid-cols-3 gap-8 text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
          {/* Company Info */}
          <div className="fade-in-up">
            <div className="mb-4 flex justify-center md:justify-start">
              <Logo size="md" />
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t('hero.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up stagger-1">
            <h4 className="font-medium mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-background/80 hover:text-nt-green-light transition-colors text-sm underline-grow"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-background/80 hover:text-nt-green-light transition-colors text-sm underline-grow"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-nt-green-light transition-colors text-sm underline-grow"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up stagger-2">
            <h4 className="font-medium mb-4">
              {t('nav.contact')}
            </h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>{isRTL ? '٠٥٥٤٦٦٠٠١٢' : '966 55 466 0012'}</p>
              <p>info@ntcorp.net</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className={`flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-background/60 text-sm">
              {t('footer.rights')}
            </p>
            <p className="text-background/40 text-xs">
              {isRTL ? 'محكوم بأنظمة الحوكمة المؤسسية' : 'Governed by corporate governance systems'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};