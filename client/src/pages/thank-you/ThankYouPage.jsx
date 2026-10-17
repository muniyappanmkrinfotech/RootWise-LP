import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import navbarLogo from '@/assets/branding/navbar-logo.png';

// 6 Before / After Results Images
import patientBefore1 from '@/assets/results/img-1.png';
import patientAfter1 from '@/assets/results/img-1.1.png';
import patientBefore2 from '@/assets/results/img-2.png';
import patientAfter2 from '@/assets/results/img-2.2.png';
import patientBefore3 from '@/assets/results/img-3.png';
import patientAfter3 from '@/assets/results/img-3.3.png';

const RESULTS_SHOWCASE = [
  { id: 'c1-before', img: patientBefore1, badge: 'Before', isAfter: false, alt: 'Patient 1 before hair transplant' },
  { id: 'c1-after', img: patientAfter1, badge: '8 months later', isAfter: true, alt: 'Patient 1 8 months later' },
  { id: 'c2-before', img: patientBefore2, badge: 'Before', isAfter: false, alt: 'Patient 2 before hair transplant' },
  { id: 'c2-after', img: patientAfter2, badge: '6 months later', isAfter: true, alt: 'Patient 2 6 months later' },
  { id: 'c3-before', img: patientBefore3, badge: 'Before', isAfter: false, alt: 'Patient 3 before hair transplant' },
  { id: 'c3-after', img: patientAfter3, badge: 'Day of surgery', isAfter: true, alt: 'Patient 3 day of surgery' },
];

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#EDF3F0] text-[#1F2E2B] flex flex-col font-sans selection:bg-[#E2F15A] selection:text-[#1E3A2F]">
      <header className="bg-[#153D37] sm:bg-white border-b border-[#28524B] sm:border-[#E8ECE9] sticky top-0 z-30">
        <div className="w-full max-w-[420px] sm:max-w-7xl mx-auto px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Rootwise Aesthetics home"
            className="inline-flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src={navbarLogo}
              alt="ROOTWISE"
              className="h-5 sm:h-8 w-auto object-contain select-none brightness-0 invert sm:brightness-100 sm:invert-0"
            />
          </Link>

          <a
            href="tel:9384817372"
            className="text-white sm:text-[#11201D] font-bold text-[10px] sm:text-base tracking-tight hover:text-[#E2F15A] sm:hover:text-[#2C6A62] transition-colors"
          >
            93848 17372
          </a>
        </div>
      </header>

      <main className="flex-1 py-2 sm:py-14 px-3 sm:px-6">
        <div className="w-full max-w-[360px] sm:max-w-[660px] mx-auto bg-white rounded-[18px] sm:rounded-[36px] border border-[#E2E8E4] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3 sm:p-10 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E2F15A] text-[#11201D] mb-4 sm:mb-6 shadow-[0_4px_16px_rgba(226,241,90,0.45)]">
            <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
          </div>

          <h1 className="font-sans text-[25px] sm:text-4xl lg:text-[40px] leading-[1.08] tracking-[-0.04em] text-[#11201D] font-[500] mb-2 sm:mb-3">
            Thank you!{' '}
            <span className="font-serif italic font-normal text-[#2C6A62]">
              We’ve got your details.
            </span>
          </h1>

          <p className="text-[11px] sm:text-sm text-[#556460] leading-relaxed max-w-md mx-auto mb-3 sm:mb-8">
            Our hair team will call you within 24 working hours from 93848 17372.
            <br className="hidden sm:inline" />
            {' '}Please keep your phone close.
          </p>

          <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-8 text-left">
            <div className="bg-[#EDF3F0] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-[#DFE7E2] flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#2C6A62] text-[11px] font-bold shadow-2xs select-none">
                1
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-[#11201D] text-[10px] sm:text-sm mb-0.5 tracking-tight">
                  We call you
                </h4>
                <p className="text-[9px] sm:text-xs text-[#556460] leading-snug">
                  Short chat about your concern
                </p>
              </div>
            </div>

            <div className="bg-[#EDF3F0] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-[#DFE7E2] flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#2C6A62] text-[11px] font-bold shadow-2xs select-none">
                2
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-[#11201D] text-[10px] sm:text-sm mb-0.5 tracking-tight">
                  Doctor visit
                </h4>
                <p className="text-[9px] sm:text-xs text-[#556460] leading-snug">
                  Scalp &amp; donor check at R.S. Puram
                </p>
              </div>
            </div>

            <div className="bg-[#EDF3F0] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-[#DFE7E2] flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#2C6A62] text-[11px] font-bold shadow-2xs select-none">
                3
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-[#11201D] text-[10px] sm:text-sm mb-0.5 tracking-tight">
                  Written plan
                </h4>
                <p className="text-[9px] sm:text-xs text-[#556460] leading-snug">
                  Grafts, method and cost in writing
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <a
              href="https://wa.me/919384817372?text=Hi%2C%20I%20just%20submitted%20my%20details%20on%20Rootwise.%20Sharing%20my%20hair%20photos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2 sm:py-3 rounded-full bg-[#E2F15A] hover:bg-[#d8e84e] active:scale-[0.99] text-[#1E3A2F] font-bold text-[11px] sm:text-sm shadow-[0_4px_16px_rgba(226,241,90,0.4)] hover:shadow-[0_6px_22px_rgba(226,241,90,0.6)] transition-all cursor-pointer"
            >
              <span>WhatsApp your hair photos</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              to="/"
              className="w-full inline-flex items-center justify-center px-5 py-2 sm:py-3 rounded-full border border-[#11201D] bg-white hover:bg-[#11201D] hover:text-white text-[#11201D] font-bold text-[11px] sm:text-sm transition-colors duration-200 cursor-pointer"
            >
              Back to home
            </Link>
          </div>

          <p className="text-[9px] sm:text-xs text-[#7A8A85]">
            Need to change something? Call us on{' '}
            <a href="tel:9384817372" className="text-[#11201D] font-semibold hover:underline">
              93848 17372
            </a>
            .
          </p>
        </div>

        <div className="mt-4 sm:mt-12 max-w-[360px] sm:max-w-4xl mx-auto">
          <h3 className="text-center font-bold text-[10px] sm:text-[15px] text-[#11201D] tracking-tight mb-2 sm:mb-5">
            While you wait: real Rootwise results
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-2.5">
            {RESULTS_SHOWCASE.map((item, index) => (
              <div
                key={item.id}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-[#DFE7E2] shadow-2xs ${index >= 4 ? 'hidden sm:block' : ''}`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center select-none"
                  loading="lazy"
                />
                <span
                  className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold shadow-2xs select-none ${
                    item.isAfter
                      ? 'bg-[#E2F15A] text-[#1F2E2B]'
                      : 'bg-white/95 text-[#1F2E2B] backdrop-blur-xs'
                  }`}
                >
                  <span className="sm:hidden">{item.isAfter ? 'After' : 'Before'}</span>
                  <span className="hidden sm:inline">{item.badge}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#153D37] py-2 sm:py-3.5 px-4 text-center text-[8px] sm:text-[11px] text-[#A9BFBA] border-t border-[#28524B]">
        © Rootwise Aesthetics · R.S. Puram, Coimbatore
      </footer>
    </div>
  );
}
