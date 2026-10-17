import React from 'react';
import DoctorCard from './DoctorCard';
import { DOCTORS_HEADER, DOCTORS_DATA } from '@/constants/doctors';

/**
 * DoctorsSection Component
 * Recreates the "Meet the doctors planning your hair" section
 * with 3 doctor cards matching the Figma design.
 */
function DoctorsSection({ doctors = DOCTORS_DATA }) {
  return (
    <section id="doctors" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-white border-t border-[#E8ECE9] scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl">
          {/* Pill Badge */}
          <div className="inline-block px-2.5 sm:px-3.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 sm:mb-3.5">
            {DOCTORS_HEADER.badge}
          </div>

          {/* Editorial Title */}
          <h2 className="font-serif max-w-[220px] text-[22px] sm:max-w-none sm:text-5xl font-normal text-[#11201D] tracking-tight leading-[1.02] sm:leading-[1.18]">
            <span>{DOCTORS_HEADER.titlePart1}</span>
            <span className="italic font-serif text-[#A6945F]">
              {DOCTORS_HEADER.titleAccent}
            </span>
            <span>{DOCTORS_HEADER.titlePart2}</span>
          </h2>
        </div>

        {/* Swipeable mobile doctor cards and desktop grid */}
        <div
          aria-label="Rootwise doctors"
          className="mobile-carousel mt-3 sm:mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto md:grid md:grid-cols-3 md:gap-7 md:overflow-visible items-stretch"
        >
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              className="w-[54vw] min-w-[54vw] snap-start md:w-auto md:min-w-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(DoctorsSection);
