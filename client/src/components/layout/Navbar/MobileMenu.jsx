import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/constants/navigation';

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  onBookClick,
  onNavClick,
}) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 top-[72px]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F2320]/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Card */}
      <div className="relative mx-4 mt-2 p-6 bg-[#FAFBF9] border border-[#DCE4E1] rounded-3xl shadow-xl space-y-6 animate-in slide-in-from-top-4 duration-200">
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.label}>
                  <Link
                    to={`/${link.href.substring(1)}`}
                    onClick={(e) => {
                      if (onNavClick) onNavClick(e, link.href);
                      onClose();
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] transition-colors ${
                      isActive
                        ? 'bg-[#2C6A62]/10 text-[#2C6A62] font-semibold'
                        : 'text-[#2D3A37] font-medium hover:bg-stone-100/70 hover:text-[#2C6A62]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-4 border-t border-[#E8ECE9] space-y-3">
          {/* Phone call CTA */}
          <a
            href={CONTACT_INFO.phoneHref}
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-2xl bg-white border border-[#DCE4E1] text-[#1F2E2B] font-semibold text-sm hover:border-[#2C6A62] transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#2C6A62] fill-[#2C6A62]" />
            <span>Call {CONTACT_INFO.phoneDisplay}</span>
          </a>

          {/* Book consultation CTA */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#E2F15A] text-[#1E3A2F] font-bold text-sm hover:bg-[#d8e84e] shadow-sm transition-all duration-200"
          >
            <span>Book consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
