import React from 'react';
import VideoQuoteCard from './VideoQuoteCard';
import GoogleReviewsBanner from './GoogleReviewsBanner';
import {
  PATIENT_STORIES_HEADER,
  FEATURED_STORY,
} from '@/constants/patientStories';

/**
 * PatientStoriesSection Component
 * Recreates the "Hear it from our patients" section
 * with video testimonial card and Google review embed notice.
 */
function PatientStoriesSection({ story = FEATURED_STORY }) {
  return (
    <section
      id="patient-stories"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#EAF1ED] border-t border-[#DFE7E2] scroll-mt-16 sm:scroll-mt-[72px]"
    >
      <div className="site-container">
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl">
          {/* Pill Badge */}
          <div className="inline-block px-2.5 sm:px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            {PATIENT_STORIES_HEADER.badge}
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif text-2xl sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.05] sm:leading-[1.18]">
            <span>{PATIENT_STORIES_HEADER.titlePart1}</span>
            <span className="italic font-serif text-[#A6945F]">
              {PATIENT_STORIES_HEADER.titleAccent}
            </span>
          </h2>
        </div>

        {/* Video Testimonial Card */}
        <div className="mt-3 sm:mt-8">
          <VideoQuoteCard story={story} />
        </div>

        {/* Google Reviews Embed Notice */}
        <GoogleReviewsBanner />
      </div>
    </section>
  );
}

export default React.memo(PatientStoriesSection);
