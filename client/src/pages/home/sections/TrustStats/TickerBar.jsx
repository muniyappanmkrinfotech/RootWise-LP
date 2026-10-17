import React from 'react';
import { TRUST_TICKER_ITEMS } from '@/constants/stats';

/**
 * TickerBar Component
 * Renders the top chartreuse highlight ribbon featuring clinical credentials.
 */
function TickerBar({ items = TRUST_TICKER_ITEMS }) {
  const renderItemSet = (ariaHidden = false) => (
    <div
      aria-hidden={ariaHidden}
      className="flex items-center gap-10 sm:gap-14 lg:gap-16 shrink-0 pr-10 sm:pr-14 lg:pr-16"
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="text-[10px] sm:text-[13.5px] font-semibold tracking-tight text-[#11201D] whitespace-nowrap cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      role="region"
      aria-label="Clinical Highlights Marquee"
      className="w-full bg-[#E2F15A] text-[#11201D] overflow-hidden py-1.5 sm:py-3.5 select-none border-b border-[#D4E34F] relative"
    >
      {/* Smooth Continuous Right-to-Left Marquee on All Screen Sizes */}
      <div className="flex w-max animate-ticker">
        {renderItemSet(false)}
        {renderItemSet(true)}
      </div>
    </div>
  );
}

export default React.memo(TickerBar);

