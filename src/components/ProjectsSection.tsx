import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: t(`projects.${i + 1}`),
  }));

  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-nt-green/5 via-transparent to-nt-navy/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-nt-green/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-nt-navy/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-nt-green/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 fade-in-up">
          <h2 className="text-h2 text-nt-navy mb-6">
            {t('projects.title')}
          </h2>
        </div>

        {/* Projects Showcase */}
        <div className="relative">
          {/* Central Hub - Responsive */}
          <div className="relative mb-12 sm:mb-16">
            <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-nt-green to-nt-navy rounded-full flex items-center justify-center shadow-2xl shadow-nt-green/25">
              <div className="text-center text-white">
                <Zap className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-semibold">7</div>
                <div className="text-xs opacity-80 hidden sm:block">Projects</div>
              </div>
            </div>
          </div>

          {/* Projects Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const isActive = activeProject === project.id;
              const row = Math.floor(index / 3);
              const isEvenRow = row % 2 === 0;
              
              return (
                <div
                  key={project.id}
                  className={`group relative fade-in-up stagger-${(index % 6) + 1} cursor-pointer`}
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {/* Project Container */}
                  <div className={`
                    relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 ease-out
                    ${isActive 
                      ? 'bg-gradient-to-br from-nt-green/20 to-nt-navy/20 border-2 border-nt-green/40 shadow-xl sm:shadow-2xl shadow-nt-green/20 scale-105' 
                      : 'bg-background/60 backdrop-blur-sm border border-border/50 hover:bg-background/80 hover:border-nt-green/30 hover:shadow-lg hover:shadow-nt-green/10'
                    }
                    ${isEvenRow ? 'transform translate-y-0 sm:translate-y-4' : ''}
                  `}>
                    
                    {/* Project Number Badge - Responsive */}
                    <div className={`
                      absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                      bg-gradient-to-br from-nt-green to-nt-navy 
                      flex items-center justify-center text-white font-bold text-base sm:text-lg
                      shadow-lg group-hover:scale-110 transition-transform duration-300
                    `}>
                      {project.id}
                    </div>

                    {/* Project Content */}
                    <div className="pt-4 sm:pt-6">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground leading-relaxed group-hover:text-nt-green transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-nt-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Connection Line to Hub - Hidden on Mobile */}
                  <div className="absolute top-1/2 left-1/2 w-px h-8 sm:h-16 bg-gradient-to-b from-nt-green/30 to-transparent -translate-x-1/2 -translate-y-full pointer-events-none hidden sm:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};