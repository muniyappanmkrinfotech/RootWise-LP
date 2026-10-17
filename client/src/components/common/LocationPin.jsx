import React, { memo } from 'react';

/**
 * Exact Location Pin Icon (Solid Teardrop with Hole Cutout)
 * Matches the RootWise brand design for the Hero location pill badge.
 */
function LocationPin({ className = 'w-3.5 h-3.5 text-[#2C6A62]', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

export default memo(LocationPin);
