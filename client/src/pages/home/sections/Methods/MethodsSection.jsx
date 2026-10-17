import React, { useRef, useState, useCallback, useEffect } from 'react';
import MethodCard from './MethodCard';
import {
  METHODS_HEADER,
  METHODS_DATA,
  METHODS_BANNER,
} from '@/constants/methods';
import { ArrowRight } from 'lucide-react';

/**
 * MethodsSection Component
 * Recreates the "FUE, Sapphire FUE or DHI? Your hair decides." section
 * with 4 clinical technique cards and bottom consultation banner.
 */
function MethodsSection({
  methods = METHODS_DATA,
  onOpenBookingModal,
}) {
  const carouselRef = useRef(null);
  const scrollRafId = useRef(null);
  const [activeMethodIndex, setActiveMethodIndex] = useState(0);

  const handleBookingClick = useCallback(() => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-booking-modal'));
    }
  }, [onOpenBookingModal]);

  const updateActiveMethod = useCallback(() => {
    if (scrollRafId.current) return;
    scrollRafId.current = requestAnimationFrame(() => {
      scrollRafId.current = null;
      const carousel = carouselRef.current;
      const firstCard = carousel?.firstElementChild;
      if (!carousel || !firstCard) return;

      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
      const cardStep = firstCard.getBoundingClientRect().width + gap;
      if (cardStep > 0) {
        setActiveMethodIndex(Math.min(methods.length - 1, Math.round(carousel.scrollLeft / cardStep)));
      }
    });
  }, [methods.length]);

  useEffect(() => {
    return () => {
      if (scrollRafId.current) cancelAnimationFrame(scrollRafId.current);
    };
  }, []);

  const showMethod = useCallback((index) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index];
    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="methods" className="bg-white pt-6 sm:bg-[#F1F5F3] sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 border-t border-[#E5EDE8] scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Left-Aligned Section Header */}
        <div className="max-w-4xl">
          {/* Pill Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            {METHODS_HEADER.badge}
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif max-w-[310px] text-2xl sm:max-w-none sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.1] sm:leading-[1.18]">
            <span>{METHODS_HEADER.titlePart1}</span>
            <span className="italic font-serif text-[#A6945F]">{METHODS_HEADER.titleAccent}</span>
            <span>{METHODS_HEADER.titlePart2}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-[#51615D] mt-2 sm:mt-3.5 max-w-3xl leading-relaxed">
            {METHODS_HEADER.description}
          </p>
        </div>

        {/* 4 Methods Grid */}
        <div
          ref={carouselRef}
          onScroll={updateActiveMethod}
          aria-label="Hair transplant methods"
          className="mobile-carousel mt-4 sm:mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-4 items-stretch"
        >
          {methods.map((method) => (
            <MethodCard
              key={method.id}
              method={method}
              className="w-[78vw] min-w-[78vw] snap-start sm:w-auto sm:min-w-0"
            />
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 sm:hidden" aria-label="Choose a method">
          {methods.map((method, index) => (
            <button
              key={method.id}
              type="button"
              onClick={() => showMethod(index)}
              aria-label={`Show method ${index + 1}`}
              aria-current={activeMethodIndex === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all ${
                activeMethodIndex === index ? 'w-3 bg-[#2C6A62]' : 'w-1.5 bg-[#CAD8D3]'
              }`}
            />
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-4 sm:mt-6 bg-[#EDF3F0] sm:bg-white rounded-2xl sm:rounded-[22px] border border-[#E5EDE8] p-3.5 sm:p-5 lg:p-6 flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <p className="text-[13px] sm:text-[15px] md:text-base font-bold text-[#11201D] text-left">
            {METHODS_BANNER.text}
          </p>

          <button
            type="button"
            onClick={handleBookingClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#E2F15A] text-[#11201D] font-bold text-xs sm:text-sm tracking-tight shadow-[0_4px_16px_rgba(226,241,90,0.45)] whitespace-nowrap cursor-pointer active:scale-[0.98] transition-transform"
          >
            <span>{METHODS_BANNER.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-0.5 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default React.memo(MethodsSection);
