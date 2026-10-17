import React, { useCallback } from 'react';
import WhyFeatureCard from './WhyFeatureCard';
import { WHY_ROOTWISE_FEATURES } from '@/constants/whyRootwise';

/**
 * WhyRootwiseSection Component
 * Recreates the "Why patients choose Rootwise" section matching the Figma design.
 */
function WhyRootwiseSection({
  features = WHY_ROOTWISE_FEATURES,
  onOpenBookingModal,
}) {
  const handleBookingClick = useCallback(() => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-booking-modal'));
    }
  }, [onOpenBookingModal]);

  return (
    <section id="why-rootwise" className="bg-white pt-6 sm:pt-8 lg:bg-[#EEF2EA] lg:pt-10 pb-8 sm:pb-12 lg:pb-16 scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Section Header */}
        <div>
          {/* Pill Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            Why Rootwise
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif max-w-[300px] text-2xl sm:max-w-none sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.1] sm:leading-[1.15]">
            <span>Why patients </span>
            <span className="italic font-serif text-[#A6945F]">choose</span>
            <span className="block sm:inline"> Rootwise</span>
          </h2>
        </div>

        {/* 6 Features Grid */}
        <div className="mt-5 grid grid-cols-1 divide-y divide-[#E5EDE8] overflow-hidden rounded-2xl border border-[#E5EDE8] bg-white md:mt-8 md:grid-cols-2 md:gap-6 md:divide-y-0 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent lg:mt-8 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <WhyFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-4 flex justify-start md:mt-10 md:justify-center">
          <button
            type="button"
            onClick={handleBookingClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-[#E2F15A] text-[#11201D] font-bold text-xs sm:text-[15px] shadow-[0_8px_24px_rgba(226,241,90,0.45)] transition-all cursor-pointer select-none active:scale-98"
          >
            <span>Book a consultation</span>
            <svg
              className="w-4 h-4 text-[#11201D]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default React.memo(WhyRootwiseSection);
