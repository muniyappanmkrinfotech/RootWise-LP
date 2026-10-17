import React from 'react';

/**
 * TreatmentCard Component
 * Displays a non-surgical treatment item (PRP, GFC, Medicines).
 */
function TreatmentCard({ treatment }) {
  const { title, description } = treatment;

  return (
    <div className="bg-white rounded-[20px] p-5 sm:px-6 sm:py-5 border border-[#D5DCBA] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <h3 className="text-lg font-bold text-[#11201D] tracking-tight mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#556460] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default React.memo(TreatmentCard);
