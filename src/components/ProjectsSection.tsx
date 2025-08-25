import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const projects = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: t(`projects.${i + 1}`),
  }));

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-narrow">
        <div className="fade-in-up mb-12">
          <h2 className={`text-h2 text-nt-navy mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('projects.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-nt-green to-nt-navy ${isRTL ? 'right-4' : 'left-4'}`}></div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative fade-in-up stagger-${(index % 4) + 1}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-2 w-8 h-8 bg-nt-green rounded-full flex items-center justify-center shadow-lg ${isRTL ? 'right-0' : 'left-0'}`}>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`${isRTL ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-background/80 rounded-lg p-6 border border-border hover:border-nt-green/30 transition-colors hover-lift">
                    <p className="text-foreground leading-relaxed">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};