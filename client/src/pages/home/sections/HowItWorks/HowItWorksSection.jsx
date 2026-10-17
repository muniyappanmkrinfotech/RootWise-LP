import React from 'react';
import StepCard from './StepCard';
import GrowthTimeline from './GrowthTimeline';
import { HOW_IT_WORKS_STEPS } from '@/constants/howItWorks';

/**
 * HowItWorksSection Component
 * Recreates the "From your first visit to new hair, in 4 steps" section
 * and the 3-stage growth progression matching the Figma design.
 */
function HowItWorksSection({
  steps = HOW_IT_WORKS_STEPS,
  onOpenBookingModal,
}) {
  return (
    <section id="how-it-works" className="bg-[#EDF3F0] pt-6 sm:bg-white sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 sm:border-t sm:border-[#E8ECE9] scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-left sm:text-center">
          {/* Pill Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            How it works
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif max-w-[260px] text-2xl sm:max-w-none sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.1] sm:leading-[1.15]">
            <span>From first visit to new hair, </span>
            <span className="italic font-serif text-[#A6945F]">in 4 steps</span>
          </h2>

          {/* Subtitle */}
          <p className="hidden sm:block text-sm text-[#556460] mt-3.5 max-w-2xl mx-auto leading-relaxed">
            A doctor plans every step. Hair growth takes time, so here is the typical path.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 gap-0 mt-4 overflow-hidden rounded-xl border border-[#E5EDE8] bg-white sm:mt-8 sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent lg:mt-9 lg:grid-cols-4 items-stretch">
          {steps.map((stepItem, idx) => (
            <StepCard key={idx} stepItem={stepItem} />
          ))}
        </div>

        {/* 3-Stage Hairline Growth & Recovery Timeline */}
        <GrowthTimeline onOpenBookingModal={onOpenBookingModal} />
      </div>
    </section>
  );
}

export default React.memo(HowItWorksSection);
