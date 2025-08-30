import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const openWhatsAppChat = () => {
    const phoneNumber = '+966555192424';
    const message = 'Hello! I would like to learn more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmailForm = () => {
    const email = 'info@ntcorp.net';
    const subject = 'Inquiry about Northern Trust Services';
    const body = 'Hello,\n\nI would like to learn more about your services.\n\nBest regards,';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="fade-in-up mb-12 text-center">
          <h2 className="text-h2 text-nt-navy mb-4">
            {t('contact.title')}
          </h2>
        </div>

        {/* Contact Buttons */}
        <div className="max-w-2xl mx-auto fade-in-up mb-12">
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              onClick={openWhatsAppChat}
              size="lg"
              className="bg-nt-green hover:bg-nt-green/90 text-white px-8 py-4 text-base flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t('hero.cta.whatsapp')}
            </Button>
            <Button
              onClick={openEmailForm}
              variant="outline"
              size="lg"
              className="border-nt-navy text-nt-navy hover:bg-nt-navy hover:text-white px-8 py-4 text-base flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('hero.cta.email')}
            </Button>
          </div>
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
                    onClick={() => openWhatsApp('+966554660012')}
                    className="font-medium text-foreground hover:text-nt-green transition-colors cursor-pointer block"
                  >
                    {isRTL ? '٠٥٥٤٦٦٠٠١٢' : '966 55 466 0012'}
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