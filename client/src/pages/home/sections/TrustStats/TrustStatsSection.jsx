import React from 'react';
import TickerBar from './TickerBar';
import StatItem from './StatItem';
import { CLINICAL_STATS, TRUST_TICKER_ITEMS } from '@/constants/stats';

/**
 * TrustStatsSection Component
 * 
 * Bridges the HeroSection with clinical credibility.
 * Features:
 * - Top Chartreuse Highlights Marquee Ribbon
 * - 5-Column High-Impact Medical Metrics
 * - 100% faithful to the RootWise Figma design
 */
function TrustStatsSection({
  stats = CLINICAL_STATS,
  tickerItems = TRUST_TICKER_ITEMS,
  className = '',
}) {
  return (
    <section
      id="stats"
      aria-label="RootWise Clinical Credentials and Performance Statistics"
      className={`relative -mt-4 mb-6 sm:-mt-6 sm:mb-10 lg:-mt-8 z-20 scroll-mt-16 sm:scroll-mt-[72px] ${className}`}
    >
      <div className="site-container max-sm:px-0">
        {/* Main Card Container with Cohesive Dual-Tone Rounded Architecture */}
        <div className="rounded-none sm:rounded-[36px] overflow-hidden bg-[#21544D] border-y border-[#2E6B62] sm:border shadow-[0_20px_50px_rgba(17,36,33,0.14)]">
          {/* Top Chartreuse Ticker Ribbon */}
          <TickerBar items={tickerItems} />

          {/* Bottom Dark Forest Teal Metrics Band */}
          <div className="relative bg-[#21544D]">
            {/* Desktop & Tablet: 5-column grid with vertical dividers */}
            <div className="hidden md:grid md:grid-cols-5 items-stretch divide-x divide-white/15">
              {stats.map((item, idx) => (
                <StatItem
                  key={item.id}
                  value={item.figmaValue || item.value}
                  mobileValue={item.mobileValue}
                  label={item.label}
                  isLast={idx === stats.length - 1}
                />
              ))}
            </div>

            {/* Mobile Responsive Layout (< 768px) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory divide-x divide-white/15 md:hidden mobile-carousel">
              {stats.map((item, idx) => (
                <StatItem
                  key={item.id}
                  value={item.figmaValue || item.value}
                  label={item.label}
                  mobileLabel={item.mobileLabel}
                  className={`${idx === stats.length - 1 ? 'border-r-0' : ''} min-w-[76px] flex-1 snap-start`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(TrustStatsSection);
