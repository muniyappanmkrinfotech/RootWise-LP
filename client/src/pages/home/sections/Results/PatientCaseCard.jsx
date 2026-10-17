import React, { memo } from 'react';

/**
 * PatientCaseCard Component
 * Displays a single patient transformation case with before/after photos and clinical details.
 */
function PatientCaseCard({
  title,
  subtitle,
  image,
  images,
  alt,
  className = '',
}) {
  const photos = images ?? (image ? [{ src: image, alt: alt || title }] : []);

  return (
    <article
      className={`bg-white rounded-2xl sm:rounded-[28px] border border-[#E5EDE8] p-2 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col justify-between ${className}`}
    >
      {/* High-Definition Comparison Photo Pair */}
      <div className="w-full aspect-[972/587] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F2F4F2] border border-[#E8ECE9] grid grid-cols-2">
        {photos.map((photo, index) => (
          <div key={photo.src} className="relative min-w-0 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt || alt || title}
              className="w-full h-full object-cover select-none"
              loading="lazy"
              decoding="async"
            />
            {photo.label && (
              <span
                className={`absolute top-1.5 left-1.5 sm:top-2 sm:left-2 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold shadow-2xs select-none ${
                  index === 0
                    ? 'bg-white/95 text-[#1F2E2B]'
                    : 'bg-[#E2F15A] text-[#1F2E2B]'
                }`}
              >
                {photo.label}
              </span>
            )}
            {index === 0 && photos.length > 1 && (
              <span className="absolute inset-y-0 right-0 w-px bg-white/80" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Case Details */}
      <div className="px-1 pt-2.5 sm:px-1.5 sm:pt-3.5 pb-1">
        <h3 className="font-bold text-lg text-[#11201D] tracking-tight">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs text-[#7A8783] mt-1 tracking-normal font-normal">
          {subtitle}
        </p>
      </div>
    </article>
  );
}

export default memo(PatientCaseCard);
