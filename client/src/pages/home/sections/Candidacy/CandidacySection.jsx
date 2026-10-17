import React, { useState } from 'react';
import { SUITABLE_CRITERIA, ALTERNATIVE_CRITERIA } from '@/constants/candidacy';

/**
 * CandidacySection Component
 * Recreates the "Is it right for me?" section matching the Figma design.
 */
function CandidacySection({
  suitableList = SUITABLE_CRITERIA,
  alternativeList = ALTERNATIVE_CRITERIA,
}) {
  const [activeList, setActiveList] = useState('suitable');

  return (
    <section id="is-it-for-me" className="bg-[#EDF3F0] pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Section Header */}
        <div>
          {/* Pill Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            IS IT RIGHT FOR ME?
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.1] sm:leading-[1.15]">
            <span>A transplant isn’t for everyone. </span>
            <span className="italic font-serif text-[#A6945F]">Quick check.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-[#556460] mt-2 sm:mt-3 max-w-2xl leading-relaxed">
            The doctor confirms at your visit. This just gives you an idea.
          </p>
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <div
            role="group"
            aria-label="Choose hair transplant guidance"
            className="mb-3 flex rounded-full border border-[#DCE4E1] bg-white p-1 lg:hidden"
          >
            <button
              type="button"
              aria-pressed={activeList === 'suitable'}
              onClick={() => setActiveList('suitable')}
              className={`flex-1 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                activeList === 'suitable'
                  ? 'bg-[#2C6A62] text-white'
                  : 'text-[#42524E]'
              }`}
            >
              ✓ May suit you
            </button>
            <button
              type="button"
              aria-pressed={activeList === 'alternative'}
              onClick={() => setActiveList('alternative')}
              className={`flex-1 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                activeList === 'alternative'
                  ? 'bg-[#2C6A62] text-white'
                  : 'text-[#42524E]'
              }`}
            >
              Treat first
            </button>
          </div>

        {/* Two comparison cards on desktop; one selectable card on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-8 items-stretch">
          {/* Card 1: It may suit you if (Solid White Card with Lime Checkmark) */}
          <div className={`${activeList === 'suitable' ? 'block' : 'hidden'} lg:block bg-white rounded-xl sm:rounded-[28px] border border-[#E5EDE8] p-3.5 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] select-none`}>
            {/* Header: Lime Circle with Checkmark + Serif Heading */}
            <div className="hidden sm:flex items-center gap-3.5 mb-6 sm:mb-7">
              <div
                className="w-10 h-10 rounded-full bg-[#E2F15A] text-[#11201D] flex items-center justify-center flex-shrink-0 shadow-xs"
                aria-hidden="true"
              >
                <svg
                  className="w-5.5 h-5.5 text-[#11201D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#11201D] tracking-tight">
                It may suit you if
              </h3>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-4">
              {suitableList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#2C6A62] mt-1.5 sm:mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#33423F] font-normal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Treatment may come first if (Dashed Card with Sage Exclamation) */}
          <div className={`${activeList === 'alternative' ? 'block' : 'hidden'} lg:block bg-white sm:bg-transparent rounded-xl sm:rounded-[28px] border border-[#E5EDE8] sm:border-2 sm:border-dashed sm:border-[#C5D5CF] p-3.5 sm:p-8 lg:p-10 select-none`}>
            {/* Header: Sage Circle with ! + Serif Heading */}
            <div className="hidden sm:flex items-center gap-3.5 mb-6 sm:mb-7">
              <div
                className="w-10 h-10 rounded-full bg-[#DCE8E3] text-[#2C6A62] flex items-center justify-center flex-shrink-0 shadow-xs"
                aria-hidden="true"
              >
                <svg
                  className="w-5.5 h-5.5 text-[#2C6A62]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5.5" x2="12" y2="13.5" />
                  <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#11201D] tracking-tight">
                Treatment may come first if
              </h3>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-4">
              {alternativeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#647C75] mt-1.5 sm:mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#42524E] font-normal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default React.memo(CandidacySection);
