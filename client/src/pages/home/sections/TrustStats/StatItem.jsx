import React from 'react';

/**
 * StatItem Component
 * Renders an individual clinical metric column with elegant serif numbers,
 * clean responsive typography, and subtle interactive elevation.
 */
function StatItem({
  value,
  mobileValue,
  label,
  mobileLabel,
  isLast = false,
  className = '',
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center py-3 sm:py-8 lg:py-10 px-1.5 sm:px-4 text-center select-none ${
        !isLast ? 'border-r border-white/15' : ''
      } ${className}`}
    >
      {/* Metric Number in Signature Chartreuse Serif */}
      <div className="font-serif text-lg sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight text-[#E2F15A] leading-none">
        <span className="md:hidden">{mobileValue || value}</span>
        <span className="hidden md:inline">{value}</span>
      </div>

      {/* Metric Descriptive Label */}
      <div className="mt-1.5 sm:mt-3.5 text-[9px] sm:text-xs md:text-[13px] xl:text-[13.5px] font-medium text-[#D5E4E1] leading-none whitespace-nowrap px-1 tracking-normal">
        <span className="md:hidden">{mobileLabel || label}</span>
        <span className="hidden md:inline">{label}</span>
      </div>
    </div>
  );
}

export default React.memo(StatItem);

