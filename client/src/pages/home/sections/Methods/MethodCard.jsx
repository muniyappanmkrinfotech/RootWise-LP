import React from 'react';
import MethodIllustration from './MethodIllustration';

/**
 * MethodCard Component
 * Displays an individual transplant method card with medical SVG illustration,
 * category tag, title, description, and optional footnote.
 */
function MethodCard({ method, className = '' }) {
  const { id, category, title, description, mobileDescription, footnote } = method;

  return (
    <div className={`bg-white rounded-2xl sm:rounded-[24px] border border-[#E5EDE8] p-2 sm:p-5 flex flex-col h-full shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${className}`}>
      {/* Medical Cross-Section Diagram Box */}
      <div className="w-full aspect-[1.38/1] rounded-xl sm:rounded-[16px] overflow-hidden mb-2.5 sm:mb-5 bg-[#2C6A62]">
        <MethodIllustration methodId={id} />
      </div>

      {/* Category Tag */}
      <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2C6A62] mb-1 sm:mb-1.5 block">
        {category}
      </span>

      {/* Method Title */}
      <h3 className="text-lg font-bold text-[#11201D] tracking-tight mb-1 sm:mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#51615D] leading-relaxed flex-1">
        <span className="sm:hidden">{mobileDescription || description}</span>
        <span className="hidden sm:inline">{description}</span>
      </p>

      {/* Optional Footnote (Used for DHI relation to FUE) */}
      {footnote && (
        <div className="hidden sm:block mt-4 pt-3 border-t border-[#EEF2F0]">
          <p className="text-[11.5px] text-[#71827E] leading-relaxed">
            {footnote}
          </p>
        </div>
      )}
    </div>
  );
}

export default React.memo(MethodCard);
