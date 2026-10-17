import React, { useState, useCallback } from 'react';
import FaqItem from './FaqItem';
import { FAQS_HEADER, FAQS_DATA } from '@/constants/faqs';
import { ArrowRight } from 'lucide-react';

/**
 * FaqSection Component
 * Senior-developer architecture for the FAQs Section:
 * - Semantic landmark section with aria-labelledby
 * - Responsive 2-column layout matching the Rootwise design system
 * - Sticky left column with FAQS pill badge, serif headline, subtitle & consultation CTA
 * - Semantic accordion region with accessible keyboard and screen-reader support
 * - Zero UI changes to visual styling
 */
function FaqSection({
  faqs = FAQS_DATA,
  onOpenBookingModal,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const handleBookingClick = useCallback((e) => {
    if (onOpenBookingModal) {
      onOpenBookingModal(e);
    } else {
      const el = document.getElementById('book-visit');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.dispatchEvent(new CustomEvent('open-booking-modal'));
      }
    }
  }, [onOpenBookingModal]);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#EDF3F0] border-t border-[#DFE7E2] scroll-mt-16 sm:scroll-mt-[72px]"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ================= LEFT COLUMN: Editorial Header & Consultation CTA ================= */}
          <header className="lg:col-span-5 lg:sticky lg:top-28">
            {/* Pill Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5">
              {FAQS_HEADER.badge}
            </div>

            {/* Editorial Title */}
            <h2
              id="faqs-heading"
              className="font-serif text-[26px] sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.08] sm:leading-[1.15]"
            >
              <span>{FAQS_HEADER.titlePart1}</span>
              <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#A6945F]">
                {FAQS_HEADER.titleAccent}
              </span>
              <span>{FAQS_HEADER.titlePart2}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-[#556460] mt-3 sm:mt-4 leading-relaxed font-sans max-w-md">
              {FAQS_HEADER.subtitle}
            </p>

            {/* Consultation CTA Pill Button */}
            <div className="mt-5 sm:mt-8">
              <button
                type="button"
                onClick={handleBookingClick}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#E2F15A] text-[#11201D] font-bold text-xs sm:text-sm tracking-tight shadow-[0_4px_16px_rgba(226,241,90,0.45)] hover:bg-[#d8e851] active:scale-[0.98] transition-all cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] focus-visible:ring-offset-2"
              >
                <span>{FAQS_HEADER.ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
              </button>
            </div>
          </header>

          {/* ================= RIGHT COLUMN: Stack of 6 Accordion Cards ================= */}
          <div
            role="region"
            aria-label="Frequently Asked Questions list"
            className="lg:col-span-7 space-y-3 sm:space-y-3.5"
          >
            {Array.isArray(faqs) &&
              faqs.map((faq, index) => (
                <FaqItem
                  key={faq.id || index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleToggle}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(FaqSection);
