import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const openWhatsApp = (phoneNumber: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmail = () => {
    const emailUrl = 'mailto:info@ntcorp.net';
    window.open(emailUrl);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="fade-in-up mb-12 text-center">
          <h2 className="text-h2 text-nt-navy mb-4">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto fade-in-up">
          <div className="bg-background/80 rounded-lg p-8 border border-border">
            <div className="space-y-6">
              <div className={`flex flex-col sm:flex-row items-center gap-4 text-center ${isRTL ? 'sm:flex-row-reverse sm:text-right' : 'sm:text-left'}`}>
                <div className="w-10 h-10 bg-nt-green/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-nt-green" />
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => openWhatsApp('+966126515834')}
                    className="font-medium text-foreground hover:text-nt-green transition-colors cursor-pointer block"
                  >
                    +966 12 651 5834
                  </button>
                  <button
                    onClick={() => openWhatsApp('+966555192424')}
                    className="font-medium text-foreground hover:text-nt-green transition-colors cursor-pointer block"
                  >
                    +966 55 519 2424
                  </button>
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row items-center gap-4 text-center ${isRTL ? 'sm:flex-row-reverse sm:text-right' : 'sm:text-left'}`}>
                <div className="w-10 h-10 bg-nt-navy/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-nt-navy" />
                </div>
                <div>
                  <button
                    onClick={openEmail}
                    className="font-medium text-foreground hover:text-nt-navy transition-colors cursor-pointer"
                  >
                    info@ntcorp.net
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};