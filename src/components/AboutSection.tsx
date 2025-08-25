import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
          {/* Text Content */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} fade-in-up`}>
            <h2 className="text-h2 text-nt-navy mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lead text-muted-foreground leading-relaxed">
              {t('about.text')}
            </p>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} fade-in-up stagger-1`}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-nt-green/10 to-nt-navy/10 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-nt-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-nt-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Professional Excellence
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-nt-green/5 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-nt-navy/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};