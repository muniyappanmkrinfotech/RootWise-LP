import React from 'react';

const STEP_ICON_PROPS = {
  className: 'w-7 h-7 sm:w-8 sm:h-8 text-[#2C6A62]',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/**
 * Step Icon Component
 * Vector-accurate icons matching the RootWise Figma design.
 */
function StepIcon({ type }) {
  switch (type) {
    case 'doctor':
      return (
        <svg {...STEP_ICON_PROPS}>
          {/* Stethoscope binaural tube */}
          <path d="M5 4v6a5 5 0 0 0 10 0V4" />
          {/* Flexible tubing & chest piece loop */}
          <path d="M10 15v1a3.5 3.5 0 0 0 7 0v-2" />
          <circle cx="17" cy="13" r="2" />
        </svg>
      );

    case 'plan':
      return (
        <svg {...STEP_ICON_PROPS}>
          {/* Document sheet with folded dog-ear corner */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          {/* 2 Plan lines */}
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      );

    case 'procedure':
      return (
        <svg {...STEP_ICON_PROPS}>
          {/* Top T-handle */}
          <line x1="10" y1="3.5" x2="14" y2="3.5" />
          <line x1="12" y1="3.5" x2="12" y2="7.5" />
          {/* Console chassis */}
          <rect x="5.5" y="7.5" width="13" height="11" rx="2" />
          {/* Inner horizontal port / screen */}
          <rect x="8.5" y="11.5" width="7" height="3.5" rx="0.75" />
          {/* Baseline */}
          <line x1="3.5" y1="18.5" x2="20.5" y2="18.5" />
        </svg>
      );

    case 'growth':
      return (
        <svg {...STEP_ICON_PROPS}>
          {/* Scalp baseline */}
          <line x1="4" y1="19.5" x2="20" y2="19.5" />
          {/* Scalp contour arch */}
          <path d="M5.5 16C5.5 11 8.5 7.5 12 7.5C15.5 7.5 18.5 11 18.5 16" />
          {/* Sprouting hair rays */}
          <line x1="12" y1="7.5" x2="12" y2="4.5" />
          <line x1="8" y1="9.5" x2="6.5" y2="7.5" />
          <line x1="16" y1="9.5" x2="17.5" y2="7.5" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * StepCard Component
 * Displays a single step in the 4-step journey with pill badge, icon, and copy.
 */
function StepCard({ stepItem }) {
  const { step, title, description, icon } = stepItem;
  const stepNumber = step.replace(/^STEP\s+/i, '');

  return (
    <div className="flex items-start gap-3 border-b border-[#E5EDE8] p-3.5 last:border-b-0 select-none sm:flex-col sm:rounded-[28px] sm:border sm:bg-white sm:p-7 sm:shadow-[0_2px_12px_rgba(0,0,0,0.02)] lg:p-8">
      {/* Step Pill Badge */}
      <div className="mt-0.5 shrink-0 sm:mb-4 sm:mt-0 sm:self-start lg:mb-5">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#E2F15A] text-[10px] font-bold text-[#11201D] sm:hidden">
          {stepNumber}
        </span>
        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#E2F15A] text-[#11201D] text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider">
          {step}
        </span>
      </div>

      {/* Step Icon */}
      <div className="hidden sm:block mb-4 sm:mb-5">
        <StepIcon type={icon} />
      </div>

      {/* Step Title */}
      <div className="min-w-0">
        <h3 className="font-bold text-[#11201D] text-lg leading-snug tracking-tight sm:mb-2.5">
          {title}
        </h3>

        <p className="text-sm text-[#556460] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default React.memo(StepCard);
