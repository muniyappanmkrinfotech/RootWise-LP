import React from 'react';
import ActionCard from './ActionCard';
import {
  BOOK_VISIT_HEADER,
  BOOK_VISIT_ACTIONS,
} from '@/constants/bookVisit';

/**
 * BookVisitSection Component
 * Recreates the "Book your consultation in one tap" section
 * with 3 action cards on dark spruce teal background matching Figma.
 */
function BookVisitSection({
  actions = BOOK_VISIT_ACTIONS,
  onOpenBookingModal,
}) {
  return (
    <section
      id="book-visit"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#153D37] sm:bg-[#2C6A62] text-white scroll-mt-16 sm:scroll-mt-[72px]"
    >
      <div className="site-container text-left sm:text-center">
        {/* Centered Pill Badge */}
        <div className="inline-block px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E2F15A] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-4">
          {BOOK_VISIT_HEADER.badge}
        </div>

        {/* Editorial Title */}
        <h2 className="font-serif text-2xl sm:text-5xl font-normal text-white tracking-tight leading-[1.02] sm:leading-[1.18] max-w-[290px] sm:max-w-3xl sm:mx-auto">
          <span>{BOOK_VISIT_HEADER.titlePart1}</span>
          <br className="sm:hidden" />
          <span className="italic font-serif text-[#E2F15A]">
            {BOOK_VISIT_HEADER.titleAccent}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-[#BED5CF] mt-2 sm:mt-3.5 max-w-[280px] sm:max-w-2xl sm:mx-auto leading-[1.4] sm:leading-relaxed">
          <span className="sm:hidden">{BOOK_VISIT_HEADER.mobileSubtitle}</span>
          <span className="hidden sm:inline">{BOOK_VISIT_HEADER.subtitle}</span>
        </p>

        {/* 3 Action Cards (Pick a day and time, Call, WhatsApp) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-5 mt-3 sm:mt-8 max-w-4xl sm:mx-auto items-stretch">
          {actions.map((action) => (
            <ActionCard
              key={action.id}
              action={action}
              onOpenBookingModal={onOpenBookingModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(BookVisitSection);
