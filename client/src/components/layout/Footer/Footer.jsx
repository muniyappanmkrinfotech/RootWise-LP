import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Navigation,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_INFO, FOOTER_LINKS } from '@/constants/navigation';
import { scrollToSection, scrollToTop } from '@/utils/scroll';
import footerLogo from '@/assets/branding/footer-logo-white.png';
import SocialIcons from './SocialIcons';
import {
  FooterPinIcon,
  FooterCalendarIcon,
  FooterPhoneIcon,
  FooterWhatsAppIcon,
} from './FooterIcons';

const CLINIC_ADDRESS =
  'Rootwise Aesthetics, 31 E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;
const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.phoneRaw.replace('+', '')}`;

/**
 * Footer Component
 * Professional, medical-grade clinic footer with structured 4-column directory,
 * verified contact options, single clean divider, and legal sub-footer.
 */
function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    scrollToTop();
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/');
    }
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      if (e && e.preventDefault) e.preventDefault();
      const targetId = href.substring(1);
      const scrolled = scrollToSection(targetId);
      if (scrolled) {
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', '#' + targetId);
        }
      } else {
        navigate('/#' + targetId);
      }
    }
  };

  return (
    <>
      <footer className="border-t border-[#23534B] bg-[#133A34] text-[#D1DEDA] pb-20 sm:pb-0 select-none">
        <div className="site-container py-6 sm:py-12 lg:py-14">
          {/* Main 4-Column Directory Grid */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
            {/* Col 1: Brand & Overview */}
            <div className="space-y-2 sm:space-y-4">
              <Link
                to="/"
                onClick={handleLogoClick}
                aria-label="Rootwise Aesthetics home"
                className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2F15A]"
              >
                <img
                  src={footerLogo}
                  alt="Rootwise Aesthetics"
                  className="h-6 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <p className="hidden sm:block text-xs sm:text-sm leading-relaxed text-[#A2B8B2] max-w-xs">
                Doctor-led hair transplant and hair restoration clinic in R.S. Puram, Coimbatore. Natural results designed for your face and your future.
              </p>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#C2D6D0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E2F15A]" />
                <span>NABH-standard clinical safety</span>
              </div>
              <div className="pt-1.5 sm:pt-2">
                <SocialIcons />
              </div>
            </div>

            {/* Col 2: Clinic Location & Hours */}
            <div className="space-y-1 sm:space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#E2F15A]">
                <span className="sm:hidden">Visit us</span>
                <span className="hidden sm:inline">Visit Our Clinic</span>
              </h3>
              <div className="flex items-start gap-2.5">
                <FooterPinIcon className="w-4 h-4 text-[#E2F15A] shrink-0 mt-0.5" />
                <address className="not-italic text-xs sm:text-sm text-[#A2B8B2] leading-relaxed">
                  <span className="sm:hidden">Rootwise Aesthetics, </span>
                  31 E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002
                </address>
              </div>
              <div className="flex items-start gap-2.5 pt-0.5 sm:pt-1">
                <FooterCalendarIcon className="w-4 h-4 text-[#E2F15A] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#A2B8B2] leading-relaxed">
                  <p className="hidden sm:block font-semibold text-white/90">Monday – Sunday</p>
                  <p className="sm:hidden text-[10px] font-bold uppercase tracking-wider text-[#E2F15A]">Hours</p>
                  <p>10:00 AM – 7:30 PM</p>
                </div>
              </div>
              <div className="hidden sm:block pt-1">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white text-xs font-semibold transition-colors hover:text-[#E2F15A] cursor-pointer"
                >
                  <Navigation className="w-3 h-3 text-[#E2F15A]" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Col 3: Direct Contact */}
            <div className="space-y-1 sm:space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#E2F15A]">
                <span className="sm:hidden">Call or WhatsApp</span>
                <span className="hidden sm:inline">Call &amp; WhatsApp</span>
              </h3>
              <p className="hidden sm:block text-xs text-[#A2B8B2]">
                Speak directly with our clinical patient coordinator:
              </p>
              <div className="space-y-1 sm:space-y-2 sm:pt-1">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-[#A2B8B2] sm:text-white text-xs sm:text-sm font-normal sm:font-semibold transition-colors hover:text-[#E2F15A]"
                >
                  <FooterPhoneIcon className="w-4 h-4 text-[#E2F15A] shrink-0" />
                  <span className="sm:hidden">{CONTACT_INFO.phoneDisplay}</span>
                  <span className="hidden sm:inline">+91 {CONTACT_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#A2B8B2] sm:text-white text-xs sm:text-sm font-semibold transition-colors hover:text-[#E2F15A]"
                >
                  <FooterWhatsAppIcon className="w-4 h-4 text-[#E2F15A] shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Col 4: Explore / Navigation */}
            <div className="space-y-1 sm:space-y-3.5">
              <h3 className="hidden sm:block text-xs font-bold uppercase tracking-wider text-[#E2F15A]">
                Explore
              </h3>
              <ul className="flex flex-wrap gap-1.5 sm:block sm:space-y-2 text-xs sm:text-sm">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="inline-flex items-center rounded-full border border-white/15 px-2.5 py-1 text-[9px] text-[#D1DEDA] transition-colors hover:border-white/40 hover:text-white sm:inline sm:rounded-none sm:border-0 sm:p-0 sm:text-sm sm:text-[#A2B8B2] sm:items-center sm:gap-1 group cursor-pointer"
                    >
                      <ArrowRight className="hidden sm:block w-3 h-3 text-[#E2F15A] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="sm:hidden">
                        {link.href === '#results'
                          ? 'Before & after'
                          : link.href === '#is-it-for-me'
                            ? 'Is it for me?'
                            : link.label}
                      </span>
                      <span className="hidden sm:inline">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Single Clean Divider */}
          <div className="my-8 sm:my-10 border-t border-white/10" />

          {/* Bottom Legal, Disclaimer & Credits */}
          <div className="space-y-4 text-xs text-[#8DA6A0]">
            {/* Medical Disclaimer */}
            <p className="text-[11px] sm:text-xs leading-relaxed text-[#7F9A94] max-w-4xl">
              <span className="sm:hidden">
                Medical disclaimer: Results vary between individuals. Treatment is recommended only after doctor assessment.
              </span>
              <span className="hidden sm:inline">
                <strong className="text-[#A2B8B2] font-semibold">Medical Disclaimer:</strong> Individual results may vary based on donor density, scalp physiology, and post-procedure care adherence. All surgical procedures (FUE, Sapphire FUE, DHI) are planned and executed under doctor supervision. Lifestyle photographs represent illustrative clinical concepts.
              </span>
            </p>

            {/* Bottom Bar: Copyright on Left, Credits on Right */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px] sm:text-xs text-[#8DA6A0]">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                <span>© {new Date().getFullYear()} Rootwise Aesthetics. All rights reserved.</span>
                <span>·</span>
                <a
                  href="mailto:care@rootwiseaesthetics.com"
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  care@rootwiseaesthetics.com
                </a>
                <span>·</span>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Floating Action Bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#DDE4E1] bg-white px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:hidden"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={CONTACT_INFO.phoneHref}
            className="flex h-9 flex-1 items-center justify-center rounded-full border border-[#B6C2BE] text-[10px] font-semibold text-[#11201D] active:scale-95 transition-transform"
          >
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 flex-1 items-center justify-center rounded-full border border-[#B6C2BE] text-[10px] font-semibold text-[#11201D] active:scale-95 transition-transform"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
            className="flex h-9 flex-[1.45] items-center justify-center gap-1 rounded-full bg-[#E2F15A] px-2 text-[10px] font-bold text-[#11201D] active:scale-95 transition-transform cursor-pointer"
          >
            Book consultation
            <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
