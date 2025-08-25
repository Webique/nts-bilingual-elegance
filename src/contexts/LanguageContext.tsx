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
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Northern Trust Services',
    'hero.tagline': 'Trust, Transparency, Expertise for Over 40 Years.',
    'hero.cta.services': 'Explore Our Services',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'Company Profile',
    'about.text': 'A professional office offering consultancies in financial studies, investment, financing, administrative work and technical advisory services, specialized in local, regional and international expertise for more than 40 years with strong wide leadership experience.',
    
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
    'services.category.consulting': 'Consulting',
    'services.category.support': 'Support',
    'services.1': 'Financial, administrative, strategic, business advisory and arbitration services.',
    'services.description.1': 'Professional financial consulting and strategic advisory services with over 40 years of expertise.',
    'services.2': 'Assessment and preparation companies for mergers & acquisitions.',
    'services.description.2': 'Expert evaluation and preparation services for successful mergers and acquisitions.',
    'services.3': 'Corporate restructuring and re-arrangement.',
    'services.description.3': 'Comprehensive corporate restructuring solutions to optimize business operations.',
    'services.4': 'Developing & evaluating technical, administrative, marketing, operational strategies.',
    'services.description.4': 'Strategic planning and evaluation across all business functions and operations.',
    'services.5': 'Organizing debts, mobilizing financial resources, arranging finance facilities.',
    'services.description.5': 'Professional debt management and financial resource optimization services.',
    'services.6': 'Analyzing & evaluating investment opportunities.',
    'services.description.6': 'Thorough analysis and evaluation of investment opportunities for optimal returns.',
    'services.7': 'Preparing systems, manuals, governance procedures, internal policies.',
    'services.description.7': 'Comprehensive system development and governance framework establishment.',
    'services.8': 'Studies for best alternatives & optimal investment opportunities.',
    'services.description.8': 'In-depth studies to identify the best investment alternatives and opportunities.',
    'services.9': 'Financial investment feasibility studies.',
    'services.description.9': 'Detailed feasibility studies for financial investments and business ventures.',
    'services.10': 'Strategic business plans.',
    'services.description.10': 'Comprehensive strategic planning for business growth and development.',
    'services.11': 'Finding opportunities and creating partnerships.',
    'services.description.11': 'Strategic partnership development and opportunity identification services.',
    'services.12': 'Consensual arbitration (families & private companies).',
    'services.description.12': 'Professional arbitration services for families and private companies.',
    'services.13': 'Reviewing business opportunities for sale.',
    'services.description.13': 'Comprehensive review and evaluation of business opportunities for sale.',
    'services.14': 'Pre-IPO company establishment; funds & financial portfolios via licensed companies.',
    'services.description.14': 'Pre-IPO preparation and establishment of funds and financial portfolios.',
    
    // Partners
    'partners.title': 'Partners with Success',
    'partners.healthcare': 'Healthcare',
    'partners.education': 'Education',
    'partners.hospitality': 'Hospitality',
    'partners.industrial': 'Industrial',
    'partners.commercial': 'Commercial & Retail',
    'partners.realestate': 'Real Estate & Development',
    
    // Alliances
    'alliances.title': 'Alliances & Strategic Partnerships',
    'alliances.text': 'Audit & financial companies; architects & engineering consultants; property management & real estate companies; contractors & development organizations; certified real estate evaluators; independent general & professional consultants; licensed companies by the Capital Market Authority.',
    
    // Projects
    'projects.title': 'Previous Projects',
    'projects.1': 'Establishing companies listed locally & regionally (automobile & movable finance group; real estate finance company; asset financing companies)',
    'projects.2': 'Restructuring loans & debts; corporate indebtedness settlement; bankruptcy protection; consensual arbitration',
    'projects.3': 'Manufacturing (food & biscuits, chocolate & nuts)',
    'projects.4': 'Environmental & recycling restructuring',
    'projects.5': 'Light equipment bankruptcy protection',
    'projects.6': 'Real estate development arbitration settlements',
    'projects.7': 'Liquidating partnerships in food industries',
    
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
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'شمال الثقة للخدمات',
    'hero.tagline': 'الثقة، الشفافية، الخبرة لأكثر من ٤٠ عامًا.',
    'hero.cta.services': 'اكتشف خدماتنا',
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
    'services.category.consulting': 'الاستشارات',
    'services.category.support': 'الدعم',
    'services.1': 'خدمات استشارية مالية وإدارية وإستراتيجية وتحكيمية.',
    'services.description.1': 'خدمات استشارية مالية احترافية واستشارات إستراتيجية بأكثر من 40 عامًا من الخبرة.',
    'services.2': 'تقييم وإعداد وتهيئة للمنشآت لغرض الاندماج والاستحواذ.',
    'services.description.2': 'خدمات تقييم وإعداد احترافية للاندماج والاستحواذ الناجح.',
    'services.3': 'إعادة هيكلة الشركات.',
    'services.description.3': 'حلول شاملة لإعادة هيكلة الشركات لتحسين العمليات التجارية.',
    'services.4': 'وضع وتقييم إستراتيجيات الأعمال الفنية والإدارية والتسويقية والتشغيلية.',
    'services.description.4': 'التخطيط الإستراتيجي والتقييم عبر جميع الوظائف والعمليات التجارية.',
    'services.5': 'هيكلة الحلول التمويلية للمنشآت، وضع الخطط التمويلية لحشد الموارد المالية وترتيب وتنظيم تعاقداتها.',
    'services.description.5': 'خدمات احترافية لإدارة الديون وتحسين الموارد المالية.',
    'services.6': 'تحليل وتقييم الفرص الاستثمارية.',
    'services.description.6': 'تحليل وتقييم شامل للفرص الاستثمارية للحصول على أفضل العوائد.',
    'services.7': 'إعداد الأنظمة وأدلة إجراءات العمل والسياسات الداخلية وأنظمة الحوكمة والتشريعات.',
    'services.description.7': 'تطوير شامل للأنظمة وإنشاء إطار عمل الحوكمة.',
    'services.8': 'إعداد الدراسات لأفضل البدائل للاستغلال الاستثماري الأمثل للفرص.',
    'services.description.8': 'دراسات متعمقة لتحديد أفضل البدائل والفرص الاستثمارية.',
    'services.9': 'إعداد دراسات الجدوى الاستثمارية.',
    'services.description.9': 'دراسات جدوى مفصلة للاستثمارات المالية والمشاريع التجارية.',
    'services.10': 'إعداد الخطط الاستراتيجية للأعمال.',
    'services.description.10': 'تخطيط إستراتيجي شامل لنمو وتطوير الأعمال.',
    'services.11': 'إيجاد الفرص وعقد الشراكات.',
    'services.description.11': 'خدمات تطوير الشراكات الإستراتيجية وتحديد الفرص.',
    'services.12': 'التحكيم الرضائي والعائلي والخاص.',
    'services.description.12': 'خدمات تحكيم احترافية للعائلات والشركات الخاصة.',
    'services.13': 'إعداد وتقييم وترتيب الفرص الاستثمارية والتجارية للبيع.',
    'services.description.13': 'مراجعة وتقييم شامل لفرص الأعمال التجارية للبيع.',
    'services.14': 'الترتيب لإنشاء وإدارة الصناديق والمحافظ الاستثمارية والصكوك المالية والإعداد للطرح في أسواق المال.',
    'services.description.14': 'الإعداد للطرح العام الأولي وإنشاء الصناديق والمحافظ الاستثمارية.',
    
    // Partners
    'partners.title': 'شركاء النجاح',
    'partners.healthcare': 'القطاع الصحي',
    'partners.education': 'القطاع التعليمي',
    'partners.hospitality': 'القطاع الفندقي',
    'partners.industrial': 'القطاع الصناعي',
    'partners.commercial': 'القطاع التجاري والتجزئة',
    'partners.realestate': 'القطاع العقاري والتطوير',
    
    // Alliances
    'alliances.title': 'التحالفات والشراكات الاستراتيجية',
    'alliances.text': 'شركات المراجعة المالية والتدقيق؛ المكاتب الهندسية والاستشاريون؛ الشركات العقارية وإدارة الممتلكات؛ شركات المقاولات والتنمية؛ شركات التقييم العقاري؛ المستشارون المستقلون؛ الشركات المرخصة من هيئة سوق المال.',
    
    // Projects
    'projects.title': 'المشاريع السابقة',
    'projects.1': 'تأسيس شركات وكيانات (بعضها مُدرج محليًا وإقليميًا): قطاع تمويل المعدات والآلات؛ التمويل العقاري؛ تمويل الأصول',
    'projects.2': 'إعادة هيكلة التمويلات؛ تسويات الديون المتعثرة؛ الحماية من الإفلاس؛ التحكيم الرضائي',
    'projects.3': 'شركات في قطاع التغذية والتصنيع',
    'projects.4': 'شركة في قطاع إعادة التدوير',
    'projects.5': 'هيكلة أعمال شركات لأغراض التحكيم التجاري',
    'projects.6': 'تصفية شراكات في قطاع الصناعات الغذائية',
    'projects.7': 'مشاريع متنوعة في القطاعات المختلفة',
    
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