import React from 'react';
import gfcCase1Before from '@/assets/nonSurgical/gfc_case1_before.jpg';
import gfcCase1After from '@/assets/nonSurgical/gfc_case1_after.jpg';
import gfcCase2Before from '@/assets/nonSurgical/gfc_case2_before.jpg';
import gfcCase2After from '@/assets/nonSurgical/gfc_case2_after.jpg';

const CASE_PHOTOS = {
  gfc_case1: { before: gfcCase1Before, after: gfcCase1After },
  gfc_case2: { before: gfcCase2Before, after: gfcCase2After },
};

/**
 * GFCResultCard Component
 * Displays a crown density before/after GFC result card in full high definition.
 */
function GFCResultCard({
  result,
  className = '',
  mobileTitle,
  mobileSubtitle,
}) {
  const { imageKey, title, subtitle } = result;
  const photos = CASE_PHOTOS[imageKey] || CASE_PHOTOS.gfc_case1;

  return (
    <div className={`bg-white rounded-[16px] sm:rounded-[24px] p-2 sm:p-4 border border-[#D5DCBA] shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${className}`}>
      {/* Before / After GFC Comparison Photo Pair */}
      <div className="w-full aspect-[2/1] rounded-[10px] sm:rounded-[16px] overflow-hidden bg-[#FAFBF7] grid grid-cols-2 gap-1 sm:gap-2">
        {/* Before */}
        <div className="relative min-w-0 overflow-hidden bg-stone-100">
          <img
            src={photos.before}
            alt={`${title} before GFC treatment`}
            className="w-full h-full object-cover select-none"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 rounded-full bg-white/95 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold text-[#1F2E2B] shadow-2xs select-none">
            Before
          </span>
        </div>

        {/* After GFC */}
        <div className="relative min-w-0 overflow-hidden bg-stone-100">
          <img
            src={photos.after}
            alt={`${title} after GFC treatment`}
            className="w-full h-full object-cover select-none"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 rounded-full bg-[#E2F15A] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold text-[#1F2E2B] shadow-2xs select-none">
            After GFC
          </span>
        </div>
      </div>

      {/* Caption Details */}
      <div className="pt-2 sm:pt-3.5 px-1 pb-0.5 sm:pb-1">
        <h4 className="text-base sm:text-lg font-bold text-[#11201D] tracking-tight">
          {mobileTitle || title}
        </h4>
        <p className="text-[11px] sm:text-xs text-[#718074] mt-0.5 sm:mt-1">
          {mobileSubtitle || subtitle}
        </p>
      </div>
    </div>
  );
}

export default React.memo(GFCResultCard);
