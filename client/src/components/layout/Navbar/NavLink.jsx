import React, { memo } from 'react';

function NavLink({ href, label, isActive, onNavClick }) {
  const handleClick = (e) => {
    if (onNavClick) {
      onNavClick(e, href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative py-1.5 px-3 text-[14px] transition-all duration-200 rounded-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] ${
        isActive
          ? 'text-[#2C6A62] font-semibold bg-[#2C6A62]/10'
          : 'text-[#2D3A37] font-medium hover:text-[#2C6A62] hover:bg-stone-100/60'
      }`}
    >
      {label}
    </a>
  );
}

export default memo(NavLink);
