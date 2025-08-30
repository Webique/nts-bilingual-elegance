import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Northern Trust Services',
    'hero.tagline': 'Trust, Transparency, Expertise for Over 45 Years.',
    'hero.cta.services': 'Explore Our Services',
    'hero.cta.whatsapp': 'WhatsApp Chat',
    'hero.cta.email': 'Send Email',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'Company Profile',
    'about.text': 'A professional office offering consultancies in financial studies, investment, financing, administrative work and technical advisory services, specialized in local, regional and international expertise for more than 45 years with strong wide leadership experience.',
    
    // Message & Vision
    'message.title': 'Our Message',
    'message.text': 'Trust, transparency, honesty and credibility of business advice.',
    'vision.title': 'Our Vision',
    'vision.text': 'Achieving success to our clients\' expectations by providing satisfactory studies and success opportunities, with a positive contribution through professional planning, drawing financial and administrative policies & procedures for their business and marketing programs locally and globally through professional alliances with the best expertise around the world managed by corporate governance systems.',
    
    // Target Customers
    'customers.title': 'Target Customers',
    'customers.text': 'Private sector companies, institutions, government institutions and agencies, developing opportunities through direct and joint venture government participation.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Our Core Services',
    'services.description': 'Comprehensive solutions tailored to meet your business needs with excellence and innovation.',
    'services.expert-team': 'Expert Team',
    'services.quality-assured': 'Quality Assured',
    'services.support': 'Support',
    'services.category.business': 'Business',
    'services.category.technology': 'Technology',
    'services.category.consultation': 'Consultation',
    'services.category.financial': 'Financial',
    'services.category.support': 'Support',
    'services.1': 'Financial, administrative, strategic, business advisory and arbitration services.',
    'services.description.1': 'Financial & business advisory with 45+ years expertise.',
    'services.2': 'Assessment and preparation companies for mergers & acquisitions.',
    'services.description.2': 'M&A evaluation and preparation services.',
    'services.3': 'Corporate restructuring and re-arrangement.',
    'services.description.3': 'Corporate restructuring solutions.',
    'services.4': 'Developing & evaluating technical, administrative, marketing, operational strategies.',
    'services.description.4': 'Strategic planning across all business functions.',
    'services.5': 'Organizing debts, mobilizing financial resources, arranging finance facilities.',
    'services.description.5': 'Debt management & financial optimization.',
    'services.6': 'Analyzing & evaluating investment opportunities.',
    'services.description.6': 'Investment opportunity analysis.',
    'services.7': 'Preparing systems, manuals, governance procedures, internal policies.',
    'services.description.7': 'Systems & governance framework development.',
    'services.8': 'Studies for best alternatives & optimal investment opportunities.',
    'services.description.8': 'Investment alternatives research.',
    'services.9': 'Financial investment feasibility studies.',
    'services.description.9': 'Financial feasibility studies.',
    'services.10': 'Strategic business plans.',
    'services.description.10': 'Strategic business planning.',
    'services.11': 'Finding opportunities and creating partnerships.',
    'services.description.11': 'Partnership development & opportunity identification.',
    'services.12': 'Consensual arbitration (families & private companies).',
    'services.description.12': 'Family & corporate arbitration services.',
    'services.13': 'Reviewing business opportunities for sale.',
    'services.description.13': 'Business opportunity review for sale.',
    'services.14': 'Pre-IPO company establishment; funds & financial portfolios via licensed companies.',
    'services.description.14': 'Pre-IPO preparation & fund establishment.',
    
    // Partners
    'partners.title': 'Our top clients',
    'partners.healthcare': 'Healthcare',
    'partners.education': 'Education',
    'partners.hospitality': 'Hospitality',
    'partners.industrial': 'Industrial',
    'partners.commercial': 'Commercial & Retail',
    'partners.realestate': 'Real Estate & Development',
    
    // Alliances
    'alliances.title': 'Alliances & Strategic Partnerships',
    'alliances.text': 'Audit & financial companies; architects & engineering consultants; property management & real estate companies; contractors & development organizations; certified real estate evaluators; independent general & professional consultants; licensed companies by the Capital Market Authority.',
    

    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.info': '+966 12 651 5834 / +966 55 519 2424 · info@ntcorp.net · www.ntcorp.net',
    
    // Footer
    'footer.rights': '© 2024 Northern Trust Services. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.about': 'عن الشركة',
    'nav.clients': 'العملاء',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'شمال الثقة للخدمات',
    'hero.tagline': 'الثقة، الشفافية، الخبرة لأكثر من ٤٠ عامًا.',
    'hero.cta.services': 'اكتشف خدماتنا',
    'hero.cta.whatsapp': 'الدردشة في واتساب',
    'hero.cta.email': 'إرسال بريد إلكتروني',
    'hero.cta.contact': 'تواصل معنا',
    
    // About Section
    'about.title': 'ملف الشركة',
    'about.text': 'مكتب مهني احترافي لتقديم خدمات المشورة المالية الاستثمارية والتمويلية والعملية والإدارية والفنية ومتخصص بخبرات محلية وإقليمية ودولية منذ أكثر من 40 عامًا وبقدرة قيادية.',
    
    // Message & Vision
    'message.title': 'رسالتنا',
    'message.text': 'الثقة، الشفافية، الأمانة ومصداقية النصح والمشورة في الأعمال.',
    'vision.title': 'رؤيتنا',
    'vision.text': 'تحقيق النجاح لعملائنا وتوفير فرص حقيقية مدروسة ومرضية للجميع وبمساهمة إيجابية من خلال التخطيط المهني والاحترافي ورسم السياسات المالية والإدارية للمشاريع وتطبيق السياسات واللوائح محليًا وعالميًا من خلال التحالفات مع أفضل مكاتب الخبرات حول العالم وبأنظمة حوكمة محكمة ومرنة.',
    
    // Target Customers
    'customers.title': 'العملاء المستهدفون',
    'customers.text': 'شركات ومؤسسات القطاع الخاص والمؤسسات والهيئات الحكومية والقطاعات الخاصة والأفراد محليًا وإقليميًا.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'خدماتنا الأساسية',
    'services.description': 'حلول شاملة مصممة لتلبية احتياجات عملك بالتميز والابتكار.',
    'services.expert-team': 'فريق خبراء',
    'services.quality-assured': 'الجودة المضمونة',
    'services.support': 'الدعم',
    'services.category.business': 'الأعمال',
    'services.category.technology': 'التكنولوجيا',
    'services.category.consultation': 'الاستشارات',
    'services.category.financial': 'المالية',
    'services.category.support': 'الدعم',
    'services.1': 'خدمات استشارية مالية وإدارية وإستراتيجية وتحكيمية.',
    'services.description.1': 'استشارات مالية وأعمال بخبرة 40+ عام.',
    'services.2': 'تقييم وإعداد وتهيئة للمنشآت لغرض الاندماج والاستحواذ.',
    'services.description.2': 'خدمات تقييم وإعداد الاندماج والاستحواذ.',
    'services.3': 'إعادة هيكلة الشركات.',
    'services.description.3': 'حلول إعادة هيكلة الشركات.',
    'services.4': 'وضع وتقييم إستراتيجيات الأعمال الفنية والإدارية والتسويقية والتشغيلية.',
    'services.description.4': 'التخطيط الإستراتيجي لجميع الوظائف.',
    'services.5': 'هيكلة الحلول التمويلية للمنشآت، وضع الخطط التمويلية لحشد الموارد المالية وترتيب وتنظيم تعاقداتها.',
    'services.description.5': 'إدارة الديون وتحسين الموارد المالية.',
    'services.6': 'تحليل وتقييم الفرص الاستثمارية.',
    'services.description.6': 'تحليل الفرص الاستثمارية.',
    'services.7': 'إعداد الأنظمة وأدلة إجراءات العمل والسياسات الداخلية وأنظمة الحوكمة والتشريعات.',
    'services.description.7': 'تطوير الأنظمة وإطار عمل الحوكمة.',
    'services.8': 'إعداد الدراسات لأفضل البدائل للاستغلال الاستثماري الأمثل للفرص.',
    'services.description.8': 'دراسات البدائل الاستثمارية.',
    'services.9': 'إعداد دراسات الجدوى الاستثمارية.',
    'services.description.9': 'دراسات الجدوى الاستثمارية.',
    'services.10': 'إعداد الخطط الاستراتيجية للأعمال.',
    'services.description.10': 'التخطيط الإستراتيجي للأعمال.',
    'services.11': 'إيجاد الفرص وعقد الشراكات.',
    'services.description.11': 'تطوير الشراكات وتحديد الفرص.',
    'services.12': 'التحكيم الرضائي والعائلي والخاص.',
    'services.description.12': 'خدمات التحكيم العائلي والشركات.',
    'services.13': 'إعداد وتقييم وترتيب الفرص الاستثمارية والتجارية للبيع.',
    'services.description.13': 'مراجعة فرص الأعمال للبيع.',
    'services.14': 'الترتيب لإنشاء وإدارة الصناديق والمحافظ الاستثمارية والصكوك المالية والإعداد للطرح في أسواق المال.',
    'services.description.14': 'الإعداد للطرح العام وإنشاء الصناديق.',
    
    // Partners
    'partners.title': 'أفضل عملائنا',
    'partners.healthcare': 'القطاع الصحي',
    'partners.education': 'القطاع التعليمي',
    'partners.hospitality': 'القطاع الفندقي',
    'partners.industrial': 'القطاع الصناعي',
    'partners.commercial': 'القطاع التجاري والتجزئة',
    'partners.realestate': 'القطاع العقاري والتطوير',
    
    // Alliances
    'alliances.title': 'التحالفات والشراكات الاستراتيجية',
    'alliances.text': 'شركات المراجعة المالية والتدقيق؛ المكاتب الهندسية والاستشاريون؛ الشركات العقارية وإدارة الممتلكات؛ شركات المقاولات والتنمية؛ شركات التقييم العقاري؛ المستشارون المستقلون؛ الشركات المرخصة من هيئة سوق المال.',
    

    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    'contact.info': '‎+966 12 651 5834 / ‎+966 55 519 2424 · info@ntcorp.net · www.ntcorp.net',
    
    // Footer
    'footer.rights': '© ٢٠٢٤ شمال الثقة للخدمات. جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    // Set document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};