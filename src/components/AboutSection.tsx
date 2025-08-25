import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
          {/* Text Content */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} fade-in-up text-center lg:text-left`}>
            <h2 className="text-h2 text-nt-navy mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lead text-muted-foreground leading-relaxed">
              {t('about.text')}
            </p>
          </div>

          {/* Professional Corporate Image */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} fade-in-up stagger-1`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-nt-navy/20">
                <img 
                  src="/1.png" 
                  alt="Professional corporate team in boardroom with city skyline and data visualization" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-nt-navy/20 via-transparent to-transparent"></div>
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