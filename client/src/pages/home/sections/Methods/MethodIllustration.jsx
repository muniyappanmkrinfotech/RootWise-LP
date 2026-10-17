import React from 'react';

/**
 * FUE Extraction Graphic
 * Depicts micro-punch cylindrical extraction core isolating an individual follicular unit.
 */
export function FUEExtractionGraphic() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-full block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tissueGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#634537" />
          <stop offset="100%" stopColor="#4A3125" />
        </linearGradient>
      </defs>

      {/* Dark Spruce Teal Container */}
      <rect width="240" height="160" rx="16" fill="#2C6A62" />

      {/* Scalp Tissue Layer */}
      <rect x="22" y="68" width="196" height="74" rx="2" fill="url(#tissueGrad1)" />
      <line x1="22" y1="68" x2="218" y2="68" stroke="#7A5545" strokeWidth="1.2" />

      {/* Hair Shafts (Extending upward into teal area) */}
      <path d="M116 88 L108 20" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M120 88 L116 17" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M124 88 L124 21" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />

      {/* Follicular Unit Bulb */}
      <rect x="111" y="84" width="18" height="12" rx="6" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />

      {/* Gold Extraction Punch Cylinder */}
      <line x1="105" y1="54" x2="105" y2="124" stroke="#CCA855" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="135" y1="54" x2="135" y2="124" stroke="#CCA855" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="105" y1="124" x2="135" y2="124" stroke="#CCA855" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="105" y1="87" x2="135" y2="87" stroke="#CCA855" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Sapphire FUE Graphic
 * Depicts ultra-sharp sapphire gemstone blade creating precise recipient channels.
 */
export function SapphireFUEGraphic() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-full block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tissueGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#634537" />
          <stop offset="100%" stopColor="#4A3125" />
        </linearGradient>
        <linearGradient id="sapphireGemGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#87C2E0" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#5494BA" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#397495" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Dark Spruce Teal Container */}
      <rect width="240" height="160" rx="16" fill="#2C6A62" />

      {/* Scalp Tissue Layer */}
      <rect x="22" y="68" width="196" height="74" rx="2" fill="url(#tissueGrad2)" />
      <line x1="22" y1="68" x2="218" y2="68" stroke="#7A5545" strokeWidth="1.2" />

      {/* Existing Graft on Left */}
      <path d="M89 104 L74 30" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M94 104 L82 28" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="84" y="100" width="16" height="13" rx="6.5" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="92" cy="104" rx="14" ry="22" fill="none" stroke="#CCA855" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.8" />

      {/* Incision Slit in Tissue */}
      <line x1="168" y1="68" x2="168" y2="116" stroke="#2B1810" strokeWidth="2.5" strokeLinecap="round" />

      {/* Sapphire Blade Instrument */}
      {/* Gold Top Collar */}
      <rect x="157" y="24" width="22" height="18" rx="2" fill="#CCA855" stroke="#B38F40" strokeWidth="1" />
      {/* Translucent Sapphire Gemstone Blade */}
      <polygon
        points="159,42 177,42 174,106 168,118 162,106"
        fill="url(#sapphireGemGrad)"
        stroke="#B3DBEE"
        strokeWidth="1"
      />
      {/* Blue Micro-tip Shimmer */}
      <line x1="168" y1="106" x2="168" y2="122" stroke="#6FA2BF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * DHI Implantation Graphic
 * Depicts Choi implanter placement along precision angle trajectory.
 */
export function DHIImplantationGraphic() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-full block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tissueGrad3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#634537" />
          <stop offset="100%" stopColor="#4A3125" />
        </linearGradient>
      </defs>

      {/* Dark Spruce Teal Container */}
      <rect width="240" height="160" rx="16" fill="#2C6A62" />

      {/* Scalp Tissue Layer */}
      <rect x="22" y="68" width="196" height="74" rx="2" fill="url(#tissueGrad3)" />
      <line x1="22" y1="68" x2="218" y2="68" stroke="#7A5545" strokeWidth="1.2" />

      {/* Graft Root on Left */}
      <path d="M115 110 L102 36" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M120 110 L110 34" stroke="#11201D" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="110" y="106" width="16" height="13" rx="6.5" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="118" cy="108" rx="14" ry="22" fill="none" stroke="#CCA855" strokeWidth="1.3" strokeDasharray="3 3" opacity="0.8" />

      {/* Choi Implanter Pen */}
      <path
        d="M141 24 L153 24 A2 2 0 0 1 155 26 L155 64 L150 78 L147 78 L142 64 L142 26 A2 2 0 0 1 144 24 Z"
        fill="#143A33"
        stroke="#CCA855"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Implanter Gold Tip */}
      <line x1="148.5" y1="76" x2="148.5" y2="83" stroke="#CCA855" strokeWidth="2" strokeLinecap="round" />

      {/* Precision Implantation Trajectory Line */}
      <path d="M148.5 83 L132 106" stroke="#CCA855" strokeWidth="1.8" strokeDasharray="3 3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * FUT Strip Graphic
 * Depicts thin donor strip boundary enclosing multiple follicular units.
 */
export function FUTStripGraphic() {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-full block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tissueGrad4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#634537" />
          <stop offset="100%" stopColor="#4A3125" />
        </linearGradient>
      </defs>

      {/* Dark Spruce Teal Container */}
      <rect width="240" height="160" rx="16" fill="#2C6A62" />

      {/* Scalp Tissue Layer */}
      <rect x="22" y="68" width="196" height="74" rx="2" fill="url(#tissueGrad4)" />
      <line x1="22" y1="68" x2="218" y2="68" stroke="#7A5545" strokeWidth="1.2" />

      {/* Follicle 1 */}
      <path d="M56 112 L44 36" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="56" cy="116" r="6" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="56" cy="110" rx="11" ry="18" fill="none" stroke="#CCA855" strokeWidth="1.1" strokeDasharray="2.5 2.5" opacity="0.75" />

      {/* Follicle 2 */}
      <path d="M93 110 L80 34" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M98 110 L89 32" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="89" y="108" width="14" height="14" rx="7" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="96" cy="110" rx="12" ry="18" fill="none" stroke="#CCA855" strokeWidth="1.1" strokeDasharray="2.5 2.5" opacity="0.75" />

      {/* Follicle 3 */}
      <path d="M137 108 L124 34" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M142 108 L133 32" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M147 108 L142 34" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="133" y="106" width="18" height="16" rx="8" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="142" cy="110" rx="14" ry="19" fill="none" stroke="#CCA855" strokeWidth="1.1" strokeDasharray="2.5 2.5" opacity="0.75" />

      {/* Follicle 4 */}
      <path d="M184 112 L172 36" stroke="#11201D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="184" cy="116" r="6" fill="#DCB898" stroke="#BF9776" strokeWidth="0.8" />
      <ellipse cx="184" cy="110" rx="11" ry="18" fill="none" stroke="#CCA855" strokeWidth="1.1" strokeDasharray="2.5 2.5" opacity="0.75" />

      {/* Harvested Donor Strip Capsule */}
      <rect x="36" y="78" width="168" height="26" rx="13" fill="none" stroke="#CCA855" strokeWidth="1.8" strokeDasharray="4 3" />
    </svg>
  );
}

/**
 * Illustration Switcher by method id
 */
export default function MethodIllustration({ methodId }) {
  switch (methodId) {
    case 'fue':
      return <FUEExtractionGraphic />;
    case 'sapphire-fue':
      return <SapphireFUEGraphic />;
    case 'dhi':
      return <DHIImplantationGraphic />;
    case 'fut':
      return <FUTStripGraphic />;
    default:
      return <FUEExtractionGraphic />;
  }
}
