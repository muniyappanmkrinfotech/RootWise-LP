import React, { memo } from 'react';
import { SOCIAL_LINKS } from '@/constants/navigation';

/**
 * Official Brand Icons matching exact SVG glyphs provided by client.
 */
function FacebookIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

const BRAND_CONFIG = {
  facebook: {
    icon: FacebookIcon,
    bgClass: 'bg-[#1877F2] hover:bg-[#166fe5]',
    shadowClass: 'shadow-[0_2px_8px_rgba(24,119,242,0.3)] hover:shadow-[0_4px_14px_rgba(24,119,242,0.45)]',
  },
  instagram: {
    icon: InstagramIcon,
    bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95',
    shadowClass: 'shadow-[0_2px_8px_rgba(220,39,67,0.3)] hover:shadow-[0_4px_14px_rgba(220,39,67,0.45)]',
  },
  linkedin: {
    icon: LinkedInIcon,
    bgClass: 'bg-[#0A66C2] hover:bg-[#095196]',
    shadowClass: 'shadow-[0_2px_8px_rgba(10,102,194,0.3)] hover:shadow-[0_4px_14px_rgba(10,102,194,0.45)]',
  },
};

/**
 * SocialIcons Component
 * Renders verified official branded social media links with accessible labels and smooth micro-interactions.
 */
function SocialIcons({ className = '' }) {
  return (
    <div
      role="list"
      aria-label="Rootwise Aesthetics social media profiles"
      className={`flex items-center gap-2.5 sm:gap-3 ${className}`}
    >
      {SOCIAL_LINKS.map((item) => {
        const config = BRAND_CONFIG[item.id];
        if (!config) return null;
        const IconComponent = config.icon;

        return (
          <span key={item.id} role="listitem">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className={`inline-flex items-center justify-center w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full text-white transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2F15A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#133A34] ${config.bgClass} ${config.shadowClass}`}
            >
              <IconComponent className="w-4 h-4 fill-current" />
              <span className="sr-only">{item.name}</span>
            </a>
          </span>
        );
      })}
    </div>
  );
}

export default memo(SocialIcons);
