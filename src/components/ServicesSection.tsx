import React, { useState } from 'react';
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
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const serviceIcons = [
    Building2,      // 1. Financial, administrative, strategic, business advisory and arbitration services
    Users,          // 2. Assessment and preparation companies for mergers & acquisitions
    Shield,         // 3. Corporate restructuring and re-arrangement
    TrendingUp,     // 4. Developing & evaluating technical, administrative, marketing, operational strategies
    Globe,          // 5. Organizing debts, mobilizing financial resources, arranging finance facilities
    FileText,       // 6. Analyzing & evaluating investment opportunities
    Settings,       // 7. Preparing systems, manuals, governance procedures, internal policies
    Target,         // 8. Studies for best alternatives & optimal investment opportunities
    CheckCircle,    // 9. Financial investment feasibility studies
    BarChart3,      // 10. Strategic business plans
    Handshake,      // 11. Finding opportunities and creating partnerships
    Gavel,          // 12. Consensual arbitration (families & private companies)
    Search,         // 13. Reviewing business opportunities for sale
    Rocket          // 14. Pre-IPO company establishment; funds & financial portfolios via licensed companies
  ];

  const services = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: t(`services.${i + 1}`),
    icon: serviceIcons[i],
    description: t(`services.description.${i + 1}`) || 'Professional service with exceptional quality and reliability.',
    category: ['Business', 'Technology', 'Consulting', 'Support'][i % 4]
  }));

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

        {/* Services List */}
        <div className="space-y-4 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <div
                key={service.id}
                className={`group fade-in-up stagger-${(index % 6) + 1}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`
                  relative p-4 sm:p-6 rounded-xl bg-background/40 backdrop-blur-sm 
                  border-l-4 border-transparent transition-all duration-500 ease-out
                  hover:bg-background/80 hover:border-l-nt-green hover:shadow-lg hover:shadow-nt-green/10
                  ${isHovered ? 'scale-[1.02]' : 'scale-100'}
                  ${isRTL ? 'border-r-4 border-l-0 hover:border-r-nt-green' : ''}
                `}>
                  <div className={`flex flex-col items-center text-center gap-4 sm:gap-6 ${isRTL ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:items-center sm:text-left`}>
                    {/* Service Icon */}
                    <div className={`
                      w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-nt-green/20 to-nt-navy/20 
                      flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                      ${isHovered ? 'shadow-lg shadow-nt-green/25' : ''}
                    `}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-nt-green" />
                    </div>

                    {/* Service Content */}
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-nt-green transition-colors duration-300">
                          {service.title}
                        </h3>
                        <span className="px-2 py-1 bg-nt-green/10 text-nt-green text-xs font-medium rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-nt-green flex-shrink-0" />
                          Expert Team
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-nt-green flex-shrink-0" />
                          Quality Assured
                        </span>
                      </div>
                    </div>

                    {/* Service Number & Arrow */}
                    <div className={`flex flex-row items-center gap-3 ${isRTL ? 'sm:order-first' : ''}`}>
                      <div className={`
                        w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-nt-green to-nt-navy 
                        flex items-center justify-center text-white text-xs sm:text-sm font-bold
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        {service.id}
                      </div>
                      <div className={`
                        p-1.5 sm:p-2 rounded-full bg-nt-green/10 text-nt-green
                        group-hover:bg-nt-green group-hover:text-white transition-all duration-300
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}>
                        <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Hover Line Effect */}
                  <div className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-nt-green to-nt-navy 
                    transition-all duration-500 ease-out
                    ${isHovered ? 'w-full' : 'w-0'}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center fade-in-up">
          <button 
            onClick={() => {
              const whatsappUrl = `https://wa.me/966126515834`;
              window.open(whatsappUrl, '_blank');
            }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-nt-green to-nt-navy text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-nt-green/25 transition-all duration-300 cursor-pointer group"
          >
            <span>{isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project Today'}</span>
            <ArrowRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
          <p className="text-muted-foreground mt-4 text-sm">
            {isRTL ? 'احصل على استشارة مجانية خلال 24 ساعة' : 'Get free consultation within 24 hours'}
          </p>
        </div>
      </div>
    </section>
  );
};