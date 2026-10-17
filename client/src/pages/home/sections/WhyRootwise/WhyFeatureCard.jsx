import React from 'react';

const ICON_PROPS = {
  className: 'w-5 h-5 md:w-8 md:h-8 text-[#2C6A62]',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/**
 * Feature Icon Renderer
 * Produces pixel-accurate SVGs matching the RootWise Figma design.
 */
function FeatureIcon({ type }) {
  switch (type) {
    case 'diagnosis':
      return (
        <svg {...ICON_PROPS}>
          {/* Magnifying lens with centered medical plus sign */}
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      );

    case 'hairline':
      return (
        <svg {...ICON_PROPS}>
          {/* Upper cranial contour arch */}
          <path d="M5 14C5 7.5 8 4 12 4C16 4 19 7.5 19 14" />
          {/* Doctor-marked planned hairline (dashed) */}
          <path d="M6 13C8 11.5 12 12.5 12 12.5C12 12.5 16 11.5 18 13" strokeDasharray="2 2.5" />
          {/* Forehead / brow bridge arch */}
          <path d="M7.5 19.5C9.5 16.5 14.5 16.5 16.5 19.5" />
        </svg>
      );

    case 'techniques':
      return (
        <svg {...ICON_PROPS}>
          {/* Scalp baseline */}
          <line x1="4" y1="20" x2="20" y2="20" />
          {/* Follicle 1 */}
          <line x1="7" y1="20" x2="7" y2="13" />
          {/* Follicle 2 with Choi / sapphire punch ring */}
          <line x1="11" y1="20" x2="11" y2="8.5" />
          <circle cx="11" cy="6" r="1.8" />
          {/* Follicle 3 */}
          <line x1="15" y1="20" x2="15" y2="11" />
          {/* Follicle 4 */}
          <line x1="18" y1="20" x2="18" y2="14" />
        </svg>
      );

    case 'dermatology':
      return (
        <svg {...ICON_PROPS}>
          {/* Doctor / Specialist head */}
          <circle cx="12" cy="7" r="4" />
          {/* Torso / shoulder arc */}
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
          {/* Medical cross on chest */}
          <line x1="12" y1="14" x2="12" y2="18" />
          <line x1="10" y1="16" x2="14" y2="16" />
        </svg>
      );

    case 'dedicatedRoom':
      return (
        <svg {...ICON_PROPS}>
          {/* Calendar outline */}
          <rect x="3" y="4" width="18" height="17" rx="3" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="9.5" x2="21" y2="9.5" />
          {/* Checkmark inside */}
          <polyline points="9 15 11 17 15 13" />
        </svg>
      );

    case 'writtenPlan':
      return (
        <svg {...ICON_PROPS}>
          {/* Document sheet with folded corner */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          {/* Written line markings */}
          <line x1="8" y1="12.5" x2="15" y2="12.5" />
          <line x1="8" y1="15.5" x2="15" y2="15.5" />
          <line x1="8" y1="18.5" x2="12.5" y2="18.5" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * WhyFeatureCard Component
 * Displays a single value proposition card with icon, title, and body copy.
 */
function WhyFeatureCard({ feature }) {
  const { title, description, mobileTitle, mobileDescription, icon } = feature;

  return (
    <div className="flex items-start gap-3 bg-white p-3.5 select-none md:flex-col md:gap-0 md:rounded-[24px] md:border md:border-[#E5EDE8] md:p-8 md:shadow-[0_2px_12px_rgba(0,0,0,0.02)] lg:rounded-[28px] lg:p-9">
      {/* Icon Container */}
      <div className="mt-0.5 shrink-0 md:mb-5 md:mt-0 md:shrink">
        <FeatureIcon type={icon} />
      </div>

      <div className="min-w-0">
        <h3 className="font-bold text-[#11201D] text-lg leading-snug tracking-tight md:mb-3">
          <span className="md:hidden">{mobileTitle || title}</span>
          <span className="hidden md:inline">{title}</span>
        </h3>

        <p className="text-sm text-[#556460] font-normal leading-relaxed">
          <span className="md:hidden">{mobileDescription || description}</span>
          <span className="hidden md:inline">{description}</span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(WhyFeatureCard);
