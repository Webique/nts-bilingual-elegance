import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: t(`services.${i + 1}`),
  }));

  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div className="fade-in-up mb-12">
          <h2 className={`text-h2 text-nt-navy mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('services.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group hover-lift fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className={`flex items-start gap-4 p-6 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 border border-transparent hover:border-nt-green/20 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-semibold text-sm ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  {service.id}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground leading-relaxed underline-grow">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};