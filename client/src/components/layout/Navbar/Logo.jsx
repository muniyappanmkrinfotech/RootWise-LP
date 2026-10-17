import React, { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import navbarlogo from '@/assets/branding/navbar-logo.png';
import { scrollToTop } from '@/utils/scroll';

function Logo({ className = '' }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (location.pathname === '/' || !location.pathname || location.pathname === '') {
      scrollToTop();
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      aria-label="RootWise - Return to Homepage"
      className={`inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] focus-visible:ring-offset-2 rounded-md cursor-pointer ${className}`}
    >
      <img
        src={navbarlogo}
        alt="ROOTWISE"
        className="h-6 md:h-10 w-auto object-contain select-none"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}

export default memo(Logo);
