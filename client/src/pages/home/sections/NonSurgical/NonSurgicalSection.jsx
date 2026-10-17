import React from 'react';
import TreatmentCard from './TreatmentCard';
import GFCResultCard from './GFCResultCard';
import {
  NON_SURGICAL_HEADER,
  TREATMENTS_DATA,
  GFC_RESULTS_HEADER,
  GFC_RESULTS_DATA,
} from '@/constants/nonSurgical';

/**
 * NonSurgicalSection Component
 * Recreates the "Sometimes you don't need a transplant at all" section
 * with PRP, GFC, Medicines cards and real non-surgical GFC comparison results.
 */
function NonSurgicalSection({
  treatments = TREATMENTS_DATA,
  results = GFC_RESULTS_DATA,
}) {
  return (
    <section id="non-surgical" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#E1E8C6] border-t border-[#D5DCBA] scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-14 items-start">
          {/* Left Column: Non-Surgical Options & Description */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Pill Badge */}
              <div className="inline-block px-2.5 sm:px-3.5 py-1 rounded-full bg-[#D4E2DC] text-[9px] sm:text-[11px] text-[#2C6A62] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
                {NON_SURGICAL_HEADER.badge}
              </div>

              {/* Editorial Title */}
              <h2 className="font-serif text-[26px] sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[0.98] sm:leading-[1.18]">
                <span>{NON_SURGICAL_HEADER.titlePart1}</span>
                <span className="hidden sm:inline"> need a </span>
                <br className="sm:hidden" />
                <span className="sm:hidden">need a </span>
                <span className="italic font-serif text-[#A6945F]">
                  {NON_SURGICAL_HEADER.titleAccent}
                </span>
                <span>{NON_SURGICAL_HEADER.titlePart2}</span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-[#556460] mt-2 sm:mt-3.5 leading-[1.45] sm:leading-relaxed">
                {NON_SURGICAL_HEADER.subtitle}
              </p>
            </div>

            <div className="mt-2 rounded-[14px] bg-white px-2.5 py-1.5 border border-[#D5DCBA] sm:hidden">
              {treatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  className={`py-2.5 ${index < treatments.length - 1 ? 'border-b border-[#E2E8D7]' : ''}`}
                >
                  <h3 className="text-lg font-bold text-[#11201D] leading-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-[#556460] leading-[1.4] mt-0.5">
                    {treatment.mobileDescription || treatment.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 3 Treatment Cards (PRP, GFC, Medicines) */}
            <div className="hidden sm:block space-y-3.5 sm:space-y-4 mt-6 sm:mt-7">
              {treatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>

            {/* Left Footnote */}
            <p className="hidden sm:block text-xs text-[#6B796F] mt-4 pt-1">
              {NON_SURGICAL_HEADER.footnote}
            </p>
          </div>

          {/* Right Column: Real GFC Results (No Surgery) */}
          <div className="lg:col-span-6 lg:pt-1">
            {/* Right Column Title */}
            <h3 className="hidden sm:block text-lg font-bold text-[#11201D] tracking-tight mb-4 sm:mb-5">
              {GFC_RESULTS_HEADER.title}
            </h3>

            {/* 2 Result Comparison Cards */}
            <div className="hidden sm:block space-y-4 sm:space-y-5">
              {results.map((result) => (
                <GFCResultCard key={result.id} result={result} />
              ))}
            </div>

            {results[0] && (
              <GFCResultCard
                className="sm:hidden"
                result={results[0]}
                mobileTitle="Thin crown - GFC, no surgery"
                mobileSubtitle="Real Rootwise GFC result. Results vary."
              />
            )}

            {/* Right Footnote / Disclaimer */}
            <p className="hidden sm:block text-[11.5px] text-[#6B796F] mt-3.5 leading-relaxed">
              {GFC_RESULTS_HEADER.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(NonSurgicalSection);
