import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MessageVisionSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className={`grid md:grid-cols-2 gap-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Message */}
          <div className="fade-in-up">
            <div className="border-l-4 border-nt-green pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
              <h3 className="text-h3 text-nt-green mb-4 font-semibold">
                {t('message.title')}
              </h3>
              <blockquote className="text-lead text-muted-foreground italic leading-relaxed">
                "{t('message.text')}"
              </blockquote>
            </div>
          </div>

          {/* Vision */}
          <div className="fade-in-up stagger-1">
            <div className="border-l-4 border-nt-navy pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
              <h3 className="text-h3 text-nt-navy mb-4 font-semibold">
                {t('vision.title')}
              </h3>
              <p className="text-lead text-muted-foreground leading-relaxed">
                {t('vision.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};