import React, { useCallback } from 'react';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/**
 * ActionCard Component
 * Renders one of the 3 consultation booking action cards (Pick day & time, Call, WhatsApp).
 * Normal state is clean translucent dark teal; on hover, illuminates to chartreuse highlight.
 */
function ActionCard({ action, onOpenBookingModal }) {
  const { title, subtitle, icon, actionType, href } = action;

  const handleClick = useCallback((e) => {
    if (actionType === 'modal') {
      e.preventDefault();
      if (onOpenBookingModal) {
        onOpenBookingModal();
      } else {
        window.dispatchEvent(new CustomEvent('open-booking-modal'));
      }
    }
  }, [actionType, onOpenBookingModal]);

  const renderIcon = () => {
    if (icon === 'calendar') {
      return (
        <Calendar
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#E2F15A] group-hover:text-[#11201D] stroke-[2.2] transition-colors duration-200"
        />
      );
    }
    if (icon === 'phone') {
      return (
        <Phone
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#E2F15A] group-hover:text-[#11201D] stroke-[2.2] transition-colors duration-200"
        />
      );
    }
    if (icon === 'whatsapp') {
      return (
        <WhatsAppIcon
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#E2F15A] group-hover:text-[#11201D] transition-colors duration-200"
        />
      );
    }
    return null;
  };

  const content = (
    <div
      className="group rounded-[10px] sm:rounded-2xl p-2.5 sm:p-5 flex items-center gap-2 sm:gap-4 transition-all duration-200 cursor-pointer text-left h-full bg-white/10 hover:bg-[#E2F15A] border border-[#3E7067] hover:border-[#E2F15A] hover:shadow-[0_6px_24px_rgba(226,241,90,0.35)] active:scale-[0.98] backdrop-blur-xs"
    >
      <div className="hidden shrink-0 sm:block">{renderIcon()}</div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold tracking-tight leading-snug text-white group-hover:text-[#11201D] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm mt-0.5 text-[#AEC7C1] group-hover:text-[#4E5E57] transition-colors duration-200">
          {subtitle}
        </p>
      </div>
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 text-white group-hover:text-[#11201D] transition-colors duration-200 sm:hidden"
        aria-hidden="true"
      />
    </div>
  );

  if (actionType === 'modal') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="w-full block text-left focus:outline-none"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={actionType === 'whatsapp' ? '_blank' : undefined}
      rel={actionType === 'whatsapp' ? 'noopener noreferrer' : undefined}
      className="w-full block text-left focus:outline-none"
    >
      {content}
    </a>
  );
}

export default React.memo(ActionCard);
