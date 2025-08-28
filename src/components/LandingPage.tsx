import React, { useEffect } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { MessageVisionSection } from './MessageVisionSection';
import { ServicesSection } from './ServicesSection';
import { PartnersSection } from './PartnersSection';

import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in-up class
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MessageVisionSection />
        <ServicesSection />
        <PartnersSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};