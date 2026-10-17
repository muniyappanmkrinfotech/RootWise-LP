import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import {
  Star,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Heart,
  ShieldCheck,
  Stethoscope,
  Droplets,
  FlaskConical,
} from 'lucide-react';
import { GOOGLE_REVIEWS } from '@/constants/patientStories';

function GoogleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function getServiceIcon(type) {
  switch (type) {
    case 'laser':
      return <Sparkles className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'skin':
      return <Heart className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'hair':
      return <Sparkles className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'treatment':
      return <ShieldCheck className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'consult':
      return <Stethoscope className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'glow':
      return <Droplets className="w-3.5 h-3.5 text-[#2C6A62]" />;
    case 'peel':
      return <FlaskConical className="w-3.5 h-3.5 text-[#2C6A62]" />;
    default:
      return <Sparkles className="w-3.5 h-3.5 text-[#2C6A62]" />;
  }
}

/**
 * GoogleReviewsBanner Component
 * Infinite auto-scrolling patient reviews ticker with pause on hover and touch.
 */
function GoogleReviewsBanner() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInteractingRef = useRef(false);

  // Triple set ensures completely seamless infinite loop in both scroll directions
  const reviewsStream = useMemo(
    () => [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS],
    []
  );

  // Auto-scroll loop using requestAnimationFrame for continuous 60fps movement
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start in middle set of cards so left and right scrolling both work seamlessly
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }

    let animationFrameId;
    let lastTime = performance.now();

    const scrollLoop = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      // Pause while visitors hover or touch the reviews.
      if (!isHovered && !isInteractingRef.current && el) {
        // 15px per second — ultra-smooth, gentle and slow reading drift
        const px = (15 * delta) / 1000;
        el.scrollLeft += px;

        const currentOneSet = el.scrollWidth / 3;
        if (currentOneSet > 0) {
          // Wrap infinitely without any visual discontinuity
          if (el.scrollLeft >= currentOneSet * 2) {
            el.scrollLeft -= currentOneSet;
          } else if (el.scrollLeft <= 5) {
            el.scrollLeft += currentOneSet;
          }
        }
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Touch interaction handlers for mobile
  const handleTouchStart = () => {
    isInteractingRef.current = true;
  };

  const handleTouchEnd = () => {
    isInteractingRef.current = false;
  };

  return (
    <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-5 sm:p-8 lg:p-10 shadow-xs relative">
      {/* Google Header / Trust Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#EAF1ED]">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F8FAF9] border border-[#E3ECE8] flex items-center justify-center shadow-xs shrink-0">
            <GoogleIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm sm:text-base text-[#11201D]">
                Google Rating
              </span>
              <div className="flex items-center text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FBBC05] text-[#FBBC05]"
                  />
                ))}
              </div>
              <span className="font-bold text-sm sm:text-base text-[#11201D]">
                4.9 / 5.0
              </span>
            </div>
            <p className="text-xs text-[#5D6F6A] mt-0.5">
              Verified patient reviews from Coimbatore · Rootwise Aesthetics
            </p>
          </div>
        </div>

      </div>

      {/* Auto-scrolling Track Container with Soft Edge Gradients */}
      <div
        className="relative mt-6 sm:mt-8 -mx-5 sm:-mx-8 lg:-mx-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft edge blur masks for continuous stream appearance */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Native scrollable track with hidden scrollbars */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 sm:gap-5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-5 sm:px-8 lg:px-10 py-2 cursor-grab active:cursor-grabbing"
        >
          {reviewsStream.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[300px] sm:w-[360px] lg:w-[390px] shrink-0"
            >
              <div className="h-full bg-[#FAFBFB] rounded-2xl sm:rounded-3xl border border-[#E7ECE9] p-5 sm:p-6 flex flex-col justify-between hover:border-[#2C6A62]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 select-none">
                <div>
                  {/* Rating & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center text-[#FBBC05] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#2C6A62] bg-[#EAF1ED] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#2C6A62]" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-sm text-[#2D3E3A] leading-relaxed line-clamp-5 min-h-[5.5rem]">
                    {review.text}
                  </p>

                  {/* Service Badge */}
                  <div className="mt-3.5 pt-3 border-t border-[#EDF2EF]">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFF4F1] text-[11px] font-semibold text-[#2C6A62]">
                      {getServiceIcon(review.serviceType)}
                      <span className="truncate max-w-[200px]">{review.service}</span>
                    </div>
                  </div>
                </div>

                {/* Reviewer Footer */}
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#EDF2EF]">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 border ${review.avatarClass}`}
                  >
                    {review.avatarLetter}
                  </div>
                  <div className="min-w-0 flex-1">
                    <a
                      href={review.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#11201D] hover:text-[#2C6A62] transition-colors truncate max-w-full"
                    >
                      <span className="truncate">{review.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 shrink-0" />
                    </a>
                    <p className="text-[10px] text-[#71827E] flex items-center gap-1">
                      <GoogleIcon className="w-2.5 h-2.5" />
                      <span>Google Maps Review</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpful Hint on Mobile/Desktop */}
      <div className="flex items-center justify-between text-[11px] text-[#71827E] pt-3 sm:pt-4 border-t border-[#EAF1ED] mt-2">
        <span className="hidden sm:inline">
          Hover over any review card to pause and read.
        </span>
        <span className="sm:hidden">
          Touch and hold a review to pause and read.
        </span>
        <span className="font-semibold text-[#2C6A62]">
          100% Genuine Google Patient Reviews
        </span>
      </div>
    </div>
  );
}

export default memo(GoogleReviewsBanner);
