import React, { useCallback } from 'react';
import { GROWTH_TIMELINE_STAGES } from '@/constants/howItWorks';

/**
 * GrowthTimeline Component
 * Displays the 3-stage hair transplant growth and recovery progression.
 * Sourced directly from RootWise Figma design.
 */
function GrowthTimeline({
  stages = GROWTH_TIMELINE_STAGES,
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
    <div className="mt-4 sm:mt-10 pt-0 sm:pt-10 sm:border-t sm:border-[#E8ECE9]">
      {/* 3-Stage Hairline Images Gallery */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-4 lg:gap-6">
        {stages.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-md sm:rounded-[26px] overflow-hidden bg-[#FAFBF9] border border-[#E5EDE8] sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)] aspect-[3/5] sm:aspect-[4/5] flex items-center justify-center select-none"
          >
            {/* Stage Photo */}
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />


            {/* Bottom Stage Pill Badge */}
            <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#235D55] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Descriptive Columns Below Images */}
      <div className="grid grid-cols-3 gap-1 sm:gap-8 mt-2 sm:mt-6">
        {stages.map((item, idx) => (
          <div key={idx} className="text-center px-0.5 sm:px-2">
            <h3 className="font-serif text-[#245d55] text-lg font-normal tracking-tight">
              {item.stage}
            </h3>
            <p className="text-sm text-[#556460] font-normal leading-relaxed mt-0.5 sm:mt-2.5 max-w-xs mx-auto">
              <span className="sm:hidden">{item.mobileDescription || item.description}</span>
              <span className="hidden sm:inline">{item.description}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer Note */}
      <p className="text-[9px] sm:text-xs text-[#7A8A85] text-center mt-3 sm:mt-6 max-w-xl mx-auto leading-relaxed">
        Illustration of typical stages, not a patient’s result. Timelines vary by individual.
      </p>

      {/* Centered CTA Button */}
      <div className="hidden sm:flex mt-4 sm:mt-6 justify-center">
        <button
          type="button"
          onClick={handleBookingClick}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#E2F15A] text-[#11201D] font-bold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(226,241,90,0.45)] transition-all cursor-pointer select-none active:scale-98"
        >
          <span>Start with a consultation</span>
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
  );
}

export default React.memo(GrowthTimeline);
