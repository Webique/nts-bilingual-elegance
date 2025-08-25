import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      <button
        onClick={() => setLanguage('en')}
        className={`lang-toggle ${language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`lang-toggle ${language === 'ar' ? 'active' : ''}`}
      >
        العربية
      </button>
    </div>
  );
};