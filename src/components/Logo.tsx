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
    <div className={`flex items-center justify-center ${containerClasses} relative overflow-hidden`}>
      <img 
        src="/logo.png" 
        alt="Northern Trust Services Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
