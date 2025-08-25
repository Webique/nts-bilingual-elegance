import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const { isRTL } = useLanguage();

  const sizeClasses = {
    sm: 'w-24 h-16',
    md: 'w-32 h-20',
    lg: 'w-40 h-24'
  };

  // If className is provided, use it instead of size classes
  const containerClasses = className || sizeClasses[size];

  return (
    <div className={`flex flex-col items-center justify-center ${containerClasses} relative overflow-hidden`}>
      {/* Graphic Mark */}
      <div className="relative flex items-center justify-center mb-1">
        {/* Upward Arrow */}
        <svg 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-2"
          viewBox="0 0 32 12" 
          fill="none"
        >
          <path 
            d="M2 10L8 4L14 8L20 2L26 6L30 2" 
            stroke="#166534" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M26 6L30 2L30 6" 
            stroke="#166534" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Stylized "n" */}
        <div className="w-4 h-6 bg-[#166534] rounded-l-full rounded-r-full mr-1"></div>
        
        {/* Stylized "t" */}
        <div className="relative">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-[#2563eb] rounded-full"></div>
        </div>
      </div>
      
      {/* Text */}
      <div className="text-center">
        <div className="text-[#166534] font-semibold text-[10px] leading-tight">
          شمال الثقة للخدمات
        </div>
        <div className="text-[#2563eb] font-semibold text-[10px] leading-tight">
          Northern Trust Services
        </div>
      </div>
    </div>
  );
};
