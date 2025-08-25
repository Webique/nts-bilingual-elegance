import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: isRTL ? "تم إرسال الرسالة" : "Message sent",
      description: isRTL ? "سنتواصل معك قريباً" : "We'll get back to you soon",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="fade-in-up mb-12">
          <h2 className={`text-h2 text-nt-navy mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contact.title')}
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-cols-2' : ''}`}>
          {/* Contact Form */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} fade-in-up`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.name')}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.email')}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('contact.phone')}
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  dir="ltr"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('contact.message')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`bg-nt-green hover:bg-nt-green/90 text-white px-8 py-3 ${isRTL ? 'flex-row-reverse' : ''} flex items-center gap-2`}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {t('contact.submit')}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} fade-in-up stagger-1`}>
            <div className="bg-background/80 rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-10 h-10 bg-nt-green/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-nt-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      +966 12 651 5834
                    </p>
                    <p className="font-medium text-foreground">
                      +966 55 519 2424
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-10 h-10 bg-nt-navy/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-nt-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      info@ntcorp.net
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-10 h-10 bg-nt-green/10 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-nt-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      www.ntcorp.net
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-nt-green/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-nt-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? 'خريطة الموقع' : 'Location Map'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};