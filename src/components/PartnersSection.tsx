import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const PartnersSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Create separate sector arrays for LTR and RTL to ensure proper ordering
  const sectorsLTR = [
    {
      title: t('partners.healthcare'),
      partners: ['Saad Medical Hospital', 'Saudi German Hospital', 'Alsalam Hospital'],
      arabicPartners: ['مستشفى سعد الطبي', 'المستشفى السعودي الألماني', 'مستشفى السلامة']
    },
    {
      title: t('partners.education'),
      partners: ['Al-Manarat Schools', 'Al-Rowwad Schools', 'University of Business & Technology'],
      arabicPartners: ['مدارس الرواد', 'مدارس الرواد', 'جامعة الأعمال والتكنولوجيا']
    },
    {
      title: t('partners.hospitality'),
      partners: ['Dar Al-Salam Group', 'Al-Ansar Group', 'Al-Biladi Group'],
      arabicPartners: ['مجموعة دار السلام', 'مجموعة الأنصار', 'مجموعة البلادي']
    },
    {
      title: t('partners.industrial'),
      partners: ['Jamjoom Industry of Pharmaceuticals', 'Savola Factories & Dates Mfg', 'Mahmoud Saeed Co.'],
      arabicPartners: ['مصنع الجمجوم للأدوية', 'مصنع صافولا وتصنيع التمور', 'شركة محمود سعيد']
    },
    {
      title: t('partners.commercial'),
      partners: ['Anan Group', 'Al-Suleiman Group', 'Metal Recycling Group'],
      arabicPartners: ['مجموعة عنان', 'مجموعة السليمان', 'مجموعة تدوير العلب']
    },
    {
      title: t('partners.realestate'),
      partners: ['Bin Saidan Group', 'Al-Bayan Group', 'Al-Mousa Group'],
      arabicPartners: ['مجموعة شركات بن سعيدان', 'مجموعة البيان', 'مجموعة الموسى']
    }
  ];

  // Use the same order for both LTR and RTL, but handle layout differently
  const sectors = sectorsLTR;

  return (
    <section id="partners" className="section-padding">
      <div className="container-wide">
        <div className="fade-in-up mb-12 text-center">
          <h2 className="text-h2 text-nt-navy mb-4">
            {t('partners.title')}
          </h2>
        </div>

        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className={`fade-in-up stagger-${(index % 3) + 1}`}
            >
              <div className="border-b border-border pb-6">
                <div className={`flex flex-col md:flex-row md:items-center gap-4 text-center ${isRTL ? 'md:flex-row-reverse md:text-right' : 'md:text-left'}`}>
                  <div className="md:w-1/4">
                    <h3 className="font-semibold text-nt-green text-lg">
                      {sector.title}
                    </h3>
                  </div>
                  <div className="md:w-3/4">
                    <div className={`flex flex-wrap gap-3 justify-center ${isRTL ? 'md:justify-end' : 'md:justify-start'}`}>
                      {(isRTL ? sector.arabicPartners : sector.partners).map((partner, partnerIndex) => (
                        <span
                          key={partnerIndex}
                          className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-nt-green/10 hover:text-nt-green transition-colors cursor-default"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};