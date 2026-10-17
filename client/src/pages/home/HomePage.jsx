import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from './sections/Hero/HeroSection';
import TrustStatsSection from './sections/TrustStats/TrustStatsSection';
import ResultsSection from './sections/Results/ResultsSection';
import CandidacySection from './sections/Candidacy/CandidacySection';
import WhyRootwiseSection from './sections/WhyRootwise/WhyRootwiseSection';
import HowItWorksSection from './sections/HowItWorks/HowItWorksSection';
import MethodsSection from './sections/Methods/MethodsSection';
import NonSurgicalSection from './sections/NonSurgical/NonSurgicalSection';
import DoctorsSection from './sections/Doctors/DoctorsSection';
import PatientStoriesSection from './sections/PatientStories/PatientStoriesSection';
import BookVisitSection from './sections/BookVisit/BookVisitSection';
import FaqSection from './sections/Faqs/FaqSection';
import { scrollToSection, scrollToTop } from '@/utils/scroll';

const ROUTE_SECTION_MAP = {
  '/': 'top',
  '/hero': 'hero',
  '/stats': 'stats',
  '/trust-stats': 'stats',
  '/results': 'results',
  '/is-it-for-me': 'is-it-for-me',
  '/candidacy': 'is-it-for-me',
  '/why-rootwise': 'why-rootwise',
  '/how-it-works': 'how-it-works',
  '/methods': 'methods',
  '/non-surgical': 'non-surgical',
  '/doctors': 'doctors',
  '/patient-stories': 'patient-stories',
  '/reviews': 'patient-stories',
  '/book-visit': 'book-visit',
  '/consultation': 'book-visit',
  '/faqs': 'faqs',
  '/faq': 'faqs',
};

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
    const hashId = location.hash ? location.hash.replace('#', '') : null;
    const targetId = hashId || ROUTE_SECTION_MAP[rawPath];

    if (!targetId || targetId === 'top') {
      if (rawPath === '/' && !hashId) {
        scrollToTop();
      }
      return;
    }

    const timer = setTimeout(() => {
      scrollToSection(targetId);
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div id="top" className="flex-1">
      {/* Figma Hero Section */}
      <HeroSection />

      {/* Trust & Clinical Performance Stats Banner (Figma Next Section) */}
      <TrustStatsSection />

      {/* Section 1: Real Patients Before & After Results (Figma) */}
      <ResultsSection />

      {/* Section 2: Is it right for me? (Figma Candidacy Evaluation) */}
      <CandidacySection />

      {/* Section 3: Why Patients Choose Rootwise (Figma) */}
      <WhyRootwiseSection />

      {/* Section 4: How it works (Figma 4 Steps) */}
      <HowItWorksSection />

      {/* Section 5: Methods (FUE, Sapphire FUE, DHI, FUT) */}
      <MethodsSection />

      {/* Section 6: Non-Surgical Options (PRP, GFC, Medicines & Crown Results) */}
      <NonSurgicalSection />

      {/* Section 7: Meet the Doctors */}
      <DoctorsSection />

      {/* Section 8: Patient Stories & Video Testimonials */}
      <PatientStoriesSection />

      {/* Section 9: Book A Visit (One-Tap Consultation) */}
      <BookVisitSection />

      {/* Section 10: FAQs (Questions, answered honestly) */}
      <FaqSection />
    </div>
  );
}
