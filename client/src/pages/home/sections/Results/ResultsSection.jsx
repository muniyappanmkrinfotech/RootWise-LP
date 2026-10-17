import React, { useRef, useState, useCallback, useEffect } from 'react';
import PatientCaseCard from './PatientCaseCard';
import { PATIENT_CASES } from '@/constants/results';
import { ArrowRight } from 'lucide-react';

/**
 * ResultsSection Component
 * Recreates the "Before and after at Rootwise" patient transformation gallery.
 */
function ResultsSection({
  cases = PATIENT_CASES,
  onOpenBookingModal,
}) {
  const carouselRef = useRef(null);
  const scrollRafId = useRef(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const handleBookingClick = useCallback(() => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-booking-modal'));
    }
  }, [onOpenBookingModal]);

  const updateActiveCase = useCallback(() => {
    if (scrollRafId.current) return;
    scrollRafId.current = requestAnimationFrame(() => {
      scrollRafId.current = null;
      const carousel = carouselRef.current;
      const firstCard = carousel?.firstElementChild;
      if (!carousel || !firstCard) return;

      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
      const cardStep = firstCard.getBoundingClientRect().width + gap;
      if (cardStep > 0) {
        setActiveCaseIndex(Math.min(cases.length - 1, Math.round(carousel.scrollLeft / cardStep)));
      }
    });
  }, [cases.length]);

  useEffect(() => {
    return () => {
      if (scrollRafId.current) cancelAnimationFrame(scrollRafId.current);
    };
  }, []);

  const showCase = useCallback((index) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index];
    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="results" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#FAFBF9] scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 pb-2">
          {/* Header Left */}
          <div>
            {/* Pill Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3">
              REAL PATIENTS
            </div>

            {/* Editorial Title */}
            <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.1] sm:leading-[1.15]">
              <span>Before and after </span>
              <span className="italic font-serif text-[#A6945F]">at Rootwise</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-[#556460] mt-2 sm:mt-3 max-w-xl leading-relaxed">
              Real Rootwise patients, shared with their written permission. Eyes are blurred to protect their privacy.
            </p>
          </div>

          {/* Header Right: CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <button
              type="button"
              onClick={handleBookingClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#11201D] text-[#11201D] text-xs sm:text-[13px] font-bold tracking-tight bg-white hover:bg-[#11201D] hover:text-white transition-colors duration-200 cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] focus-visible:ring-offset-2"
            >
              <span>Book a check-up</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Swipeable mobile gallery and desktop case grid */}
        <div
          ref={carouselRef}
          onScroll={updateActiveCase}
          aria-label="Patient before-and-after cases"
          className="mobile-carousel mt-5 sm:mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-2 md:gap-6 md:overflow-visible"
        >
          {cases.map((patientCase) => (
            <PatientCaseCard
              key={patientCase.id}
              title={patientCase.title}
              subtitle={patientCase.subtitle}
              image={patientCase.image}
              images={patientCase.images}
              alt={patientCase.alt}
              className="w-[78vw] min-w-[78vw] snap-start md:w-auto md:min-w-0"
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-1.5" aria-label="Choose a patient case">
            {cases.map((patientCase, index) => (
              <button
                key={patientCase.id}
                type="button"
                onClick={() => showCase(index)}
                aria-label={`Show patient case ${index + 1}`}
                aria-current={activeCaseIndex === index ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  activeCaseIndex === index ? 'w-3 bg-[#2C6A62]' : 'w-1.5 bg-[#CAD8D3]'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleBookingClick}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#11201D] bg-white px-4 py-2 text-[11px] font-bold tracking-tight text-[#11201D] transition-colors hover:bg-[#11201D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62]"
          >
            Book a check-up
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom Medical Disclaimer */}
        <p className="hidden md:block text-xs text-[#8A9591] text-center sm:text-left mt-8 sm:mt-10 leading-normal">
          Results are different for every person. All photos are Rootwise patients, shared with their written consent.
        </p>
      </div>
    </section>
  );
}

export default React.memo(ResultsSection);
