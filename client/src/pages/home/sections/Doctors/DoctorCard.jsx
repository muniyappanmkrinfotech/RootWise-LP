import React, { memo } from 'react';
import dharmikaImg from '@/assets/doctors/doctor-dharmika-hd.jpg';
import subhadharshiniImg from '@/assets/doctors/doctor-subhadharshini-hd.jpg';
import vivekImg from '@/assets/doctors/doctor-vivek-hd.jpg';

const DOCTOR_IMAGES = {
  dharmika: dharmikaImg,
  subhadharshini: subhadharshiniImg,
  vivek: vivekImg,
};

/**
 * DoctorCard Component
 * Displays individual doctor profile with portrait photo, qualification,
 * bio description, and clinical registration notice.
 */
function DoctorCard({ doctor, className = '' }) {
  const { name, imageKey, title, bio, registration } = doctor;
  const imageSrc = DOCTOR_IMAGES[imageKey] || dharmikaImg;

  return (
    <div className={`bg-white rounded-[14px] sm:rounded-[26px] border border-[#E5EDE8] overflow-hidden flex flex-col h-full shadow-[0_2px_12px_rgba(0,0,0,0.02)] ${className}`}>
      {/* Doctor Portrait Container */}
      <div className="w-full aspect-[1/0.88] overflow-hidden bg-[#EBF1ED]">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>

      {/* Doctor Details */}
      <div className="p-2 sm:p-6 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-lg font-bold text-[#11201D] mb-1 sm:mb-1.5 leading-snug">
          {name}
        </h3>

        {/* Title / Qualification */}
        <p className="text-sm font-semibold text-[#2C6A62] mb-1 sm:mb-3 leading-snug">
          {title}
        </p>

        {/* Bio */}
        <p className="hidden sm:block text-sm text-[#51615D] leading-relaxed flex-1">
          {bio}
        </p>

        {/* Registration */}
        {registration && (
          <p className="text-[8px] sm:text-[12px] text-[#8A9793] mt-1 sm:mt-3.5 sm:pt-1">
            {registration}
          </p>
        )}
      </div>
    </div>
  );
}

export default memo(DoctorCard);
