import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import patientBefore from '@/assets/results/img-1.png';
import patientAfter from '@/assets/results/img-1.1.png';

export default function ConsultationModal({ isOpen, onClose, onInteract }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      navigate('/thank-you');
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-[11px] sm:p-5 md:p-6"
      onPointerDownCapture={onInteract}
      onFocusCapture={onInteract}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1A17]/70 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-none sm:max-w-[480px] md:max-w-[800px] h-auto max-h-[calc(100dvh-22px)] sm:max-h-[92vh] translate-y-5 sm:translate-y-0 bg-[#F8F8F7] rounded-[14px] sm:rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-stone-200/90 overflow-hidden z-10 overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full border border-stone-300 bg-white/90 hover:bg-white text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.08)] z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62]"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="p-6 sm:p-10 text-center max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E2F15A]/40 text-[#2C6A62] mb-3">
              <CheckCircle2 className="w-8 h-8 text-[#2C6A62]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1F2E2B] tracking-tight mb-2">
              Call Back Requested!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
              Thank you, <span className="font-semibold text-stone-900">{formData.name || 'there'}</span>. Our hair team will call you back at{' '}
              <span className="font-semibold text-stone-900">+91 {formData.phone || '93848 17372'}</span> shortly to answer your questions and book your visit.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 px-6 rounded-full bg-[#2C6A62] text-white font-semibold text-sm hover:bg-[#23564F] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Left Column: Real Patient Case */}
            <div
              className="hidden md:flex md:col-span-5 bg-[#F4F6F4] p-4 sm:p-5 lg:p-6 border-b md:border-b-0 md:border-r border-dashed border-[#5EB4A5]/70 flex-col justify-between"
            >
              <div>
                {/* 2 Side-by-Side Before / After Images */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {/* Before */}
                  <div className="relative aspect-[4/7] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-xs">
                    <img
                      src={patientBefore}
                      alt="Before hair transplant"
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#1F2E2B] text-[11px] font-bold shadow-xs select-none">
                      Before
                    </span>
                  </div>

                  {/* 8 Months */}
                  <div className="relative aspect-[4/7] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-xs">
                    <img
                      src={patientAfter}
                      alt="8 months after hair transplant"
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#E2F15A] text-[#1F2E2B] text-[10.5px] font-bold shadow-xs select-none">
                      8 months later
                    </span>
                  </div>
                </div>

                {/* Patient Summary */}
                <h4 className="font-bold text-[#1F2E2B] text-sm sm:text-[15px] mt-3 mb-2 tracking-tight">
                  Real Rootwise patient · FUE
                </h4>

                <ul className="space-y-1 text-xs sm:text-[13px] text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C6A62] shrink-0" />
                    <span>Doctor-led diagnosis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C6A62] shrink-0" />
                    <span>Written plan and cost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C6A62] shrink-0" />
                    <span>From ₹1,20,000*</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Callback Request Form */}
            <div
              className="md:col-span-7 bg-white p-[18px] sm:p-5 md:p-6 lg:p-7 flex flex-col justify-start md:justify-center"
            >
              <div className="mb-3 flex items-center justify-start md:hidden">
                <div className="flex gap-1.5">
                  <img
                    src={patientBefore}
                    alt="Patient before treatment"
                    className="h-[58px] w-[52px] rounded-[10px] border border-stone-200/80 object-cover shadow-sm"
                  />
                  <img
                    src={patientAfter}
                    alt="Patient after treatment"
                    className="h-[58px] w-[52px] rounded-[10px] border border-stone-200/80 object-cover shadow-sm"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-block self-start px-2.5 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase mb-3 sm:mb-2.5">
                FREE HAIR ASSESSMENT
              </div>

              {/* Headline */}
              <h3
                id="modal-title"
                className="font-serif text-[28px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.02] tracking-[-0.025em] text-[#1F2E2B] mb-2"
              >
                <span className="block font-medium">Not sure if you need a</span>
                <span className="italic font-serif font-normal text-[#9B7038]">
                  transplant?
                </span>
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-sm text-stone-600 leading-relaxed mb-3.5 sm:mb-4 max-w-[32ch] md:max-w-none">
                Leave your number. Our hair team calls you back, answers your questions and books a doctor visit. No obligation.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white/90 focus:bg-white text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2C6A62] transition-all shadow-xs"
                  />
                </div>

                <div className="flex items-center w-full rounded-xl border border-stone-300 bg-white/90 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2C6A62] transition-all shadow-xs overflow-hidden">
                  <span className="pl-3.5 pr-1 text-sm font-semibold text-stone-800 shrink-0 select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 pr-3.5 pl-1.5 bg-transparent text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-6 rounded-full bg-[#E2F15A] hover:bg-[#d8e84e] active:scale-[0.99] text-[#1E3A2F] font-bold text-[15px] sm:text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_16px_rgba(226,241,90,0.4)] hover:shadow-[0_6px_22px_rgba(226,241,90,0.6)] cursor-pointer disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#1E3A2F] border-t-transparent rounded-full animate-spin"></span>
                        Connecting...
                      </span>
                    ) : (
                      <>
                        <span>Get a free call back</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-left text-[11px] sm:text-xs text-stone-500 pt-0.5 tracking-tight pl-1">
                  Details stay private · We never share your number
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
