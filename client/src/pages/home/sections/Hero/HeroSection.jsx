import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
  ChevronDown,
  Check,
  CheckCircle2,
} from 'lucide-react';
import LocationPin from '@/components/common/LocationPin';

import beforeImg from '@/assets/hero/transformation-before.jpg';
import month3Img from '@/assets/hero/transformation-month3.jpg';
import month6Img from '@/assets/hero/transformation-month6.jpg';
import month12Img from '@/assets/hero/transformation-month12.jpg';

const STAGES = [
  { label: 'Before', img: beforeImg, alt: 'Before hair transplant' },
  { label: 'Month 3', img: month3Img, alt: 'Month 3 growth stage' },
  { label: 'Month 6', img: month6Img, alt: 'Month 6 growth stage' },
  { label: 'Month 12+', img: month12Img, alt: 'Month 12+ final results' },
];

const CONCERN_OPTIONS = [
  { value: 'receding-hairline', label: 'Hairline recession' },
  { value: 'crown-thinning', label: 'Crown thinning' },
  { value: 'advanced-baldness', label: 'Advanced hair loss' },
  { value: 'beard-eyebrow', label: 'Beard or eyebrow restoration' },
  { value: 'repair-transplant', label: 'Correction of a previous transplant' },
  { value: 'pricing-enquiry', label: 'Treatment options and pricing' },
];

function HeroSection({ onOpenBookingModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    concern: '',
    agreed: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 500);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#EDF3F0] pt-3 pb-6 sm:bg-transparent sm:pt-5 sm:pb-10 lg:pt-8 lg:pb-14 scroll-mt-16 sm:scroll-mt-[72px]">
      <div className="site-container">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-8 xl:gap-10">
          {/* ================= LEFT COLUMN ================= */}
          <div className="min-w-0 flex flex-col justify-between space-y-3 sm:space-y-6">
            {/* Location Pill Badge */}
            <div className="inline-flex w-fit self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8E4] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <LocationPin className="w-3.5 h-3.5 text-[#2C6A62]" />
              <span className="text-xs sm:text-[13px] font-medium text-[#1E2E2B] tracking-tight">
                R.S. Puram, Coimbatore
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif max-w-[310px] text-[28px] sm:max-w-none sm:text-5xl leading-[1.05] sm:leading-[1.12] tracking-tight text-[#11201D]">
              <span>Doctor-led </span>
              <span className="italic text-[#2C6A62]">hair</span>
              <br />
              <span className="italic text-[#2C6A62]">transplant</span>
              <span> in Coimbatore</span>
            </h1>

            {/* Subheadline with Price Highlight */}
            <p className="text-sm text-[#4A5854] leading-relaxed max-w-xl">
              FUE, Sapphire FUE and DHI, planned by a doctor for your face and your future.{' '}
              <span className="font-bold text-[#142320]">From ₹1,20,000*</span>
            </p>

            {/* Feature Pills */}
            <div className="space-y-1.5 pt-0.5 sm:space-y-2.5 sm:pt-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
                {/* Pill 1 */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:gap-2 sm:px-3.5 sm:py-2 rounded-full bg-white border border-[#DCE4E1] shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-[10px] sm:text-[13.5px] font-medium text-[#1E2E2B]">
                  <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 text-[#2C6A62]" />
                  <span>Diagnosis by a doctor</span>
                </div>

                {/* Pill 2 */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:gap-2 sm:px-3.5 sm:py-2 rounded-full bg-white border border-[#DCE4E1] shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-[10px] sm:text-[13.5px] font-medium text-[#1E2E2B]">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#2C6A62]" />
                  <span>Dermatology and anaesthesia support</span>
                </div>
              </div>

              {/* Pill 3 */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:gap-2 sm:px-3.5 sm:py-2 rounded-full bg-white border border-[#DCE4E1] shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-[10px] sm:text-[13.5px] font-medium text-[#1E2E2B]">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-[#2C6A62]" />
                <span>Written plan and cost</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] sm:text-xs text-[#7A8783] pt-0.5">
              *Final cost is confirmed after your doctor assessment.
            </p>

            {/* Transformation 4-Stage Showcase */}
            <div className="pt-1.5 sm:pt-3 max-w-xl sm:max-w-[560px] lg:max-w-full">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3.5">
                {STAGES.map((stage) => (
                  <div key={stage.label} className="flex flex-col items-center">
                    <div className="w-full aspect-[3/4] rounded-lg sm:rounded-2xl overflow-hidden bg-[#EFF2EE] border border-[#E3EAE6] shadow-xs">
                      <img
                        src={stage.img}
                        alt={stage.alt}
                        className="w-full h-full object-cover select-none"
                        loading="eager"
                      />
                    </div>
                    <span className="text-[10px] sm:text-[13px] font-semibold text-[#2C6A62] mt-1 sm:mt-2 text-center">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[9px] sm:text-xs text-[#7A8783] mt-2 sm:mt-3">
                Typical growth stages · Illustrative model, not a patient result. Results vary
              </p>
            </div>
          </div>
          {/* ================= RIGHT COLUMN: LEAD GEN CARD ================= */}
          <div className="flex min-w-0 justify-center lg:justify-end lg:h-full">
            <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-[32px] p-4 sm:p-8 md:p-9 border border-[#E5EDE8] shadow-[0_20px_50px_rgba(44,106,98,0.07)] flex flex-col justify-between lg:h-full">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300 my-auto">
                  <div className="w-14 h-14 rounded-full bg-[#E2F15A]/40 text-[#2C6A62] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#2C6A62]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#142320]">
                    We'll Call You Shortly!
                  </h3>
                  <p className="text-sm text-[#556460] leading-relaxed">
                    Thank you, <span className="font-semibold text-[#142320]">{formData.name}</span>. Our senior Coimbatore medical coordinator will reach out to <span className="font-semibold text-[#142320]">+91 {formData.mobile}</span> within 15 minutes.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#2C6A62] hover:underline"
                    >
                      Submit another query
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Card Title - Strictly 2 Lines */}
                    <h2 className="font-serif text-[22px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-normal text-[#142320] leading-[1.12] sm:leading-[1.15] tracking-tight">
                      <span className="block">Get a call back from</span>
                      <span className="block">our hair team</span>
                    </h2>

                    {/* Card Subtitle */}
                    <p className="text-xs sm:text-sm text-[#556460] mt-1.5 sm:mt-2.5 leading-relaxed">
                      Tell us your concern. We call you, answer your questions
                      <br className="hidden sm:inline" /> and book your doctor visit if you want one.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5 sm:space-y-4">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="hero-name" className="sr-only sm:not-sr-only sm:block text-xs font-semibold text-[#1E2E2B] mb-1.5">
                          Full name
                        </label>
                        <input
                          id="hero-name"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg sm:rounded-xl border border-[#DCE4E1] bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#1E2E2B] placeholder:text-[#A1AEA9] focus:outline-none focus:ring-2 focus:ring-[#2C6A62] focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Mobile Input */}
                      <div>
                        <label htmlFor="hero-phone" className="sr-only sm:not-sr-only sm:block text-xs font-semibold text-[#1E2E2B] mb-1.5">
                          Phone number
                        </label>
                        <div className="flex rounded-xl overflow-hidden border border-[#DCE4E1] focus-within:ring-2 focus-within:ring-[#2C6A62] focus-within:border-transparent transition-all">
                          <div className="bg-[#EFF3F0] px-3 py-2 sm:px-3.5 sm:py-3 border-r border-[#DCE4E1] flex items-center justify-center text-xs sm:text-sm font-semibold text-[#1E2E2B] select-none">
                            +91
                          </div>
                          <input
                            id="hero-phone"
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#1E2E2B] placeholder:text-[#A1AEA9] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Concern Dropdown */}
                      <div>
                        <label htmlFor="hero-concern" className="sr-only sm:not-sr-only sm:block text-xs font-semibold text-[#1E2E2B] mb-1.5">
                          Primary concern
                        </label>
                        <div className="relative" ref={dropdownRef}>
                          <button
                            id="hero-concern"
                            type="button"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            aria-haspopup="listbox"
                            aria-expanded={isDropdownOpen}
                            className={`w-full rounded-lg sm:rounded-xl border bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-left flex items-center justify-between cursor-pointer transition-all ${
                              isDropdownOpen
                                ? 'border-[#2C6A62] ring-2 ring-[#2C6A62]/20'
                                : 'border-[#DCE4E1] hover:border-[#B8C8C2]'
                            }`}
                          >
                            <span className={formData.concern ? 'text-[#1E2E2B] font-medium' : 'text-[#A1AEA9]'}>
                              {CONCERN_OPTIONS.find((opt) => opt.value === formData.concern)?.label ||
                                'Select a concern (optional)'}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#7A8783] transition-transform duration-200 shrink-0 ${
                                isDropdownOpen ? 'rotate-180 text-[#2C6A62]' : ''
                              }`}
                            />
                          </button>

                          {/* Custom Popover Dropdown Menu - 4-Side Rounded Radius with Smooth Scroll */}
                          {isDropdownOpen && (
                            <div
                              role="listbox"
                              className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-xl sm:rounded-2xl border border-[#DCE4E1] shadow-[0_14px_36px_rgba(17,32,29,0.16)] p-1.5 sm:p-2 max-h-[195px] sm:max-h-[220px] overflow-y-auto overscroll-contain space-y-1 [scrollbar-width:thin] [scrollbar-color:#D0DCD7_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#D0DCD7] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#A1AEA9] animate-in fade-in-50 zoom-in-95 duration-150"
                            >
                              <div
                                role="option"
                                aria-selected={formData.concern === ''}
                                onClick={() => {
                                  setFormData({ ...formData, concern: '' });
                                  setIsDropdownOpen(false);
                                }}
                                className="px-3 sm:px-3.5 py-2 text-xs sm:text-sm text-[#7A8783] hover:bg-[#F3F7F5] hover:text-[#11201D] cursor-pointer transition-colors rounded-lg sm:rounded-xl border-b border-[#F0F4F2]"
                              >
                                Select a concern (optional)
                              </div>
                              {CONCERN_OPTIONS.map((option) => {
                                const isSelected = formData.concern === option.value;
                                return (
                                  <div
                                    key={option.value}
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => {
                                      setFormData({ ...formData, concern: option.value });
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`px-3 sm:px-3.5 py-2 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors rounded-lg sm:rounded-xl ${
                                      isSelected
                                        ? 'bg-[#EAF4F0] text-[#133A34] font-semibold'
                                        : 'text-[#2D3E3A] hover:bg-[#F3F7F5] hover:text-[#133A34]'
                                    }`}
                                  >
                                    <span>{option.label}</span>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-[#2C6A62] shrink-0" />}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Consent Checkbox */}
                      <div className="flex items-start gap-2 pt-0.5 sm:gap-2.5 sm:pt-1">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={formData.agreed}
                          onClick={() => setFormData({ ...formData, agreed: !formData.agreed })}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                            formData.agreed
                              ? 'bg-[#2C6A62] text-white'
                              : 'border border-[#C2CCC8] bg-white'
                          }`}
                        >
                          {formData.agreed && <Check className="w-3 h-3 stroke-[3]" />}
                        </button>
                        <label
                          onClick={() => setFormData({ ...formData, agreed: !formData.agreed })}
                          className="text-[9px] sm:text-xs text-[#556460] leading-snug cursor-pointer select-none"
                        >
                          I agree to be contacted by Rootwise Aesthetics by call, SMS or WhatsApp.
                        </label>
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 space-y-2">
                      {/* CTA Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 rounded-full bg-[#E2F15A] text-[#1E3A2F] text-xs sm:text-[15px] font-bold tracking-tight shadow-[0_2px_8px_rgba(226,241,90,0.35)] hover:bg-[#d8e84e] hover:shadow-[0_4px_20px_rgba(226,241,90,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-75"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-[#1E3A2F] border-t-transparent rounded-full animate-spin"></span>
                              Connecting...
                            </span>
                          ) : (
                            <>
                              <span>Get a call back</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Footer Lock & Slot Picker */}
                      <div className="flex items-center justify-center gap-1 text-[9px] sm:gap-1.5 sm:text-xs text-[#7A8783] pt-0.5">
                        <Lock className="w-3.5 h-3.5 text-[#7A8783]" />
                        <span>Details stay private</span>
                        <span>·</span>
                        <button
                          type="button"
                          onClick={() => {
                            if (onOpenBookingModal) onOpenBookingModal();
                            window.dispatchEvent(new CustomEvent('open-booking-modal'));
                          }}
                          className="text-[#1E2E2B] underline font-medium hover:text-[#2C6A62] transition-colors cursor-pointer"
                        >
                          Or pick a visit slot
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HeroSection);
