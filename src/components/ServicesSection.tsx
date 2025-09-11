import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building2, 
  Users, 
  Shield, 
  TrendingUp, 
  Globe, 
  FileText, 
  Settings, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Briefcase,
  BarChart3,
  Lightbulb,
  Gavel,
  Search,
  BookOpen,
  Calculator,
  Handshake,
  Eye,
  Rocket,
  PieChart,
  Award
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const serviceCategories = [
    {
      icon: Building2,
      title: t('services.category.business'),
      description: t('services.description.1'),
      color: 'from-nt-green to-nt-navy'
    },
    {
      icon: TrendingUp,
      title: t('services.category.technology'),
      description: t('services.description.4'),
      color: 'from-nt-navy to-nt-green'
    },
    {
      icon: Shield,
      title: t('services.category.consultation'),
      description: t('services.description.3'),
      color: 'from-nt-green to-nt-navy'
    },
    {
      icon: PieChart,
      title: t('services.category.financial'),
      description: t('services.description.1'),
      color: 'from-nt-navy to-nt-green'
    },
    {
      icon: Handshake,
      title: t('services.category.support'),
      description: t('services.description.11'),
      color: 'from-nt-green to-nt-navy'
    }
  ];

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/966126515834`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmail = () => {
    const emailUrl = 'mailto:info@ntcorp.net';
    window.open(emailUrl, '_self');
  };

  return (
    <section id="services" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #166534 2px, transparent 2px), radial-gradient(circle at 75% 75%, #2563eb 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-h2 text-nt-navy mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.description') || 'Comprehensive solutions tailored to meet your business needs with excellence and innovation.'}
          </p>
        </div>

        {/* Services Grid - 5 Main Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group fade-in-up stagger-${(index % 5) + 1} cursor-pointer`}
                onClick={openWhatsApp}
              >
                <div className={`
                  relative p-6 rounded-xl bg-background/60 backdrop-blur-sm 
                  border border-border/50 transition-all duration-500 ease-out
                  hover:bg-background/80 hover:border-nt-green hover:shadow-xl hover:shadow-nt-green/20
                  hover:scale-105
                `}>
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${category.color}
                    flex items-center justify-center mb-4 mx-auto
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-nt-green transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${category.color}
                    transition-all duration-500 ease-out
                    ${'w-0 group-hover:w-full'}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA Buttons */}
        <div className="text-center fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-nt-green to-nt-navy text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-nt-green/25 transition-all duration-300"
            >
              <span>{isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</span>
            </button>
            <button 
              onClick={openEmail}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-nt-navy text-nt-navy rounded-full font-semibold text-base sm:text-lg hover:bg-nt-navy hover:text-white transition-all duration-300"
            >
              <span>{isRTL ? 'تواصل عبر البريد' : 'Contact via Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};