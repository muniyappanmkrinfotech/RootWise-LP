import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import ConsultationModal from './ConsultationModal';
import { NAV_LINKS, CONTACT_INFO } from '@/constants/navigation';
import { scrollToSection, scrollToTop } from '@/utils/scroll';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.substring(1));

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    return location.hash ? location.hash.replace('#', '') : location.pathname.replace(/^\/+/, '') || '';
  });

  const openBooking = useCallback(() => {
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      if (href.startsWith('#')) {
        if (e && e.preventDefault) e.preventDefault();
        const targetId = href.substring(1);

        if (targetId === 'top' || targetId === 'hero') {
          scrollToTop();
          setActiveSection('');
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', '/');
          }
          return;
        }

        const scrolled = scrollToSection(targetId);
        if (scrolled) {
          setActiveSection(targetId);
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', '#' + targetId);
          }
        } else {
          // If on a different page (e.g., /privacy-policy), navigate to home with hash
          navigate('/#' + targetId);
        }
      }
    },
    [navigate]
  );

  const handleMobileNavClick = useCallback(
    (e, href) => {
      if (!href.startsWith('#')) return;

      e.preventDefault();
      const targetId = href.substring(1);
      const route = `/${targetId}`;
      const currentPath = location.pathname.replace(/\/+$/, '') || '/';

      if (currentPath === route) {
        scrollToSection(targetId);
        setActiveSection(targetId);
        return;
      }

      navigate(route);
    },
    [location.pathname, navigate]
  );

  // Handle scroll state & active section tracking (Scrollspy with rAF throttle)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);

          const scrollPosition = window.scrollY + 100;

          let matched = false;
          for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
            const sectionId = SECTION_IDS[i];
            const element = document.getElementById(sectionId);
            if (element && element.offsetTop <= scrollPosition) {
              setActiveSection(sectionId);
              matched = true;
              break;
            }
          }
          if (!matched && window.scrollY < 200) {
            setActiveSection('');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('open-booking-modal', openBooking);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-booking-modal', openBooking);
    };
  }, [openBooking]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 w-full transition-all duration-200 py-2.5 sm:py-3 ${
          isScrolled
            ? 'bg-[#F8F8F4]/95 backdrop-blur-md border-b border-[#E4ECE8] shadow-[0_2px_12px_rgba(44,106,98,0.04)]'
            : 'bg-[#F8F8F4] border-b border-transparent'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Center: Floating Navigation Pill (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center"
          >
            <div className="flex items-center gap-1 xl:gap-2 px-3 xl:px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4E1] shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  isActive={activeSection === link.href.substring(1)}
                  onNavClick={handleNavClick}
                />
              ))}
            </div>
          </nav>

          {/* Right: Phone & CTA Button */}
          <div className="flex items-center gap-2 sm:gap-5 lg:gap-6">
            {/* Phone Number with exact Handset Icon */}
            <a
              href={CONTACT_INFO.phoneHref}
              aria-label={`Call RootWise at ${CONTACT_INFO.phoneDisplay}`}
              className="hidden sm:inline-flex items-center gap-2 group transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] rounded-full py-1 px-2 -mr-1"
            >
              <span className="inline-flex items-center justify-center text-[#2C6A62] group-hover:scale-110 transition-transform duration-200">
                {/* Precise angled handset SVG matching Figma screenshot */}
                <svg
                  className="w-4 h-4 fill-current text-[#2C6A62]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="text-[14.5px] lg:text-[15px] font-semibold tracking-tight text-[#1F2E2B] group-hover:text-[#2C6A62] transition-colors">
                {CONTACT_INFO.phoneDisplay}
              </span>
            </a>

            {/* Quick Call Icon (Mobile Circular Button) */}
            <a
              href={CONTACT_INFO.phoneHref}
              aria-label={`Call RootWise at ${CONTACT_INFO.phoneDisplay}`}
              className="sm:hidden w-9 h-9 rounded-full bg-white border border-[#DCE4E1] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#2C6A62] hover:border-[#2C6A62] hover:bg-stone-50 active:scale-95 transition-all duration-200"
            >
              <svg
                className="w-4 h-4 fill-current text-[#2C6A62]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>

            {/* CTA Button: "Book consultation" */}
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex items-center justify-center px-3 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#E2F15A] text-[#1E3A2F] text-xs sm:text-[14.5px] font-bold tracking-tight shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-[#d8e84e] hover:shadow-[0_4px_16px_rgba(226,241,90,0.45)] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] focus-visible:ring-offset-2"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book consultation</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex lg:hidden p-2 rounded-full text-[#1F2E2B] hover:text-[#2C6A62] hover:bg-stone-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onBookClick={openBooking}
        onNavClick={handleMobileNavClick}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
      />
    </>
  );
}

export default React.memo(Navbar);
