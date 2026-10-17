import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  FileText,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  ChevronUp,
} from 'lucide-react';
import navbarLogo from '@/assets/branding/navbar-logo.png';
import footerLogo from '@/assets/branding/footer-logo-white.png';

const SECTIONS = [
  { id: 'section-1', num: '01', title: 'Information We Collect' },
  { id: 'section-2', num: '02', title: 'How We Use Your Information' },
  { id: 'section-3', num: '03', title: 'Health and Treatment Information' },
  { id: 'section-4', num: '04', title: 'Consultation & Appointment Forms' },
  { id: 'section-5', num: '05', title: 'WhatsApp, Phone & Email' },
  { id: 'section-6', num: '06', title: 'Cookies & Website Analytics' },
  { id: 'section-7', num: '07', title: 'Third-Party Services' },
  { id: 'section-8', num: '08', title: 'Advertising and Marketing' },
  { id: 'section-9', num: '09', title: 'How We Protect Your Information' },
  { id: 'section-10', num: '10', title: 'Data Retention' },
  { id: 'section-11', num: '11', title: 'Your Privacy Rights' },
  { id: 'section-12', num: '12', title: 'Children’s Privacy' },
  { id: 'section-13', num: '13', title: 'External Links' },
  { id: 'section-14', num: '14', title: 'Changes to This Policy' },
  { id: 'section-15', num: '15', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Track active section as user scrolls for sticky Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 96; // Offset for sticky top header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8F6] text-[#1E2E2B] font-sans antialiased selection:bg-[#E2F15A] selection:text-[#11201D]">
      {/* Sticky Top Header Bar - Aligned to max-w-6xl */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5EDE8] shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6A62] rounded-md"
              aria-label="Rootwise Aesthetics Home"
            >
              <img
                src={navbarLogo}
                alt="Rootwise Aesthetics"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs text-[#71827E] border-l border-[#DFE7E2] pl-4">
              <Link to="/" className="hover:text-[#11201D] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#2C6A62] font-semibold">Privacy Policy</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DCE4E1] bg-white hover:bg-[#EFF4F1] text-xs sm:text-sm font-semibold text-[#2C6A62] transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Clinic</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header - Left-aligned with structured metadata */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE8E3] text-[#2C6A62] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal &amp; Clinical Governance</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#11201D] tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-[#556460] leading-relaxed">
              How Rootwise Aesthetics collects, uses, handles, and safeguards your health and personal information when you use our website or consult with our medical team.
            </p>

            {/* Governance Metadata Badges */}
            <div className="mt-5 flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E0E7E3] text-[11px] font-medium text-[#556460] shadow-2xs">
                <Lock className="w-3 h-3 text-[#2C6A62]" />
                <span>Last Updated: October 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E0E7E3] text-[11px] font-medium text-[#556460] shadow-2xs">
                <MapPin className="w-3 h-3 text-[#2C6A62]" />
                <span>Rootwise Aesthetics · R.S. Puram, Coimbatore</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4F0] border border-[#D5E5DE] text-[11px] font-semibold text-[#2C6A62]">
                <ShieldCheck className="w-3 h-3 text-[#2C6A62]" />
                <span>NABH-Aligned Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Desktop Sticky Sidebar + Main Document */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
            {/* Desktop Table of Contents Sidebar */}
            <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAF1ED]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2C6A62]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#11201D]">
                    Contents
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#71827E]">
                  15 Sections
                </span>
              </div>

              {/* Scrollable Navigation List */}
              <nav className="space-y-1 text-xs max-h-[calc(100vh-16rem)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                {SECTIONS.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`flex items-center gap-2.5 py-1.5 px-2.5 rounded-xl transition-all leading-snug cursor-pointer ${
                        isActive
                          ? 'bg-[#133A34] text-white font-semibold shadow-xs'
                          : 'text-[#556460] hover:bg-[#EFF4F1] hover:text-[#11201D]'
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] w-5 text-right shrink-0 ${
                          isActive ? 'text-[#E2F15A]' : 'text-[#8DA6A0]'
                        }`}
                      >
                        {sec.num}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Quick Jump to Contact Clinic */}
              <div className="mt-4 pt-3 border-t border-[#EAF1ED]">
                <a
                  href="#section-15"
                  onClick={(e) => scrollToSection(e, 'section-15')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#EFF4F1] hover:bg-[#E2EDE8] text-[#2C6A62] text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Clinic Directly</span>
                </a>
              </div>
            </aside>

            {/* Main Document Body */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
              {/* Introduction Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs leading-relaxed text-sm text-[#4A5854]">
                <p>
                  Rootwise Aesthetics (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and handling your personal and health-related information with transparency, security, and care. This Privacy Policy describes how we collect, use, store, and protect information when you visit our website, request a consultation, communicate with our team, or use our clinical services.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <section id="section-1" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    01
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>When you visit our website, book a consultation, or communicate with us, we may collect information such as:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Preferred appointment date and time</li>
                    <li>Skin, hair, or aesthetic concerns you voluntarily provide</li>
                    <li>Messages and enquiries submitted through our website</li>
                    <li>Information provided through phone calls or WhatsApp</li>
                    <li>IP address, browser type, device type, and website usage information</li>
                    <li>Any other information you voluntarily provide while communicating with our team</li>
                  </ul>
                  <p className="pt-2 text-xs bg-[#F3F7F5] p-3.5 rounded-xl border border-[#E2EBE6]">
                    Our website currently allows users to submit their name, phone number, primary concern, preferred date, and preferred time when requesting a consultation.
                  </p>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section id="section-2" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    02
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>We may use your personal information to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Respond to your enquiries</li>
                    <li>Schedule and manage consultations or appointments</li>
                    <li>Contact you regarding your requested treatment or service</li>
                    <li>Understand your skin, hair, or aesthetic concerns</li>
                    <li>Provide personalised information about relevant treatments</li>
                    <li>Send appointment confirmations, reminders, or follow-up communications</li>
                    <li>Improve our website, services, and customer experience</li>
                    <li>Maintain website security and prevent misuse</li>
                    <li>Comply with applicable legal or regulatory requirements</li>
                  </ul>
                  <p className="font-semibold text-[#11201D] pt-1">
                    We do not sell or rent your personal information to third parties.
                  </p>
                </div>
              </section>

              {/* 3. Health and Treatment Information */}
              <section id="section-3" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    03
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Health and Treatment Information
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    Because Rootwise Aesthetics provides skin, hair, and aesthetic services, you may voluntarily provide information relating to your skin, hair, medical history, previous treatments, medications, or other health-related concerns.
                  </p>
                  <p>
                    Such information will be used only where reasonably necessary to understand your enquiry, assess your requirements, prepare for your consultation, or provide appropriate care.
                  </p>
                  <div className="p-4 rounded-xl bg-[#FFFDF5] border border-[#E8DFC0] text-xs text-[#6B5A24] space-y-1.5">
                    <p className="font-semibold">Important Medical Notice:</p>
                    <p>
                      Information submitted through our website does not by itself establish a doctor-patient relationship and should not be considered a substitute for professional medical consultation, diagnosis, or treatment.
                    </p>
                  </div>
                  <p className="text-xs text-[#2C6A62] font-medium pt-1">
                    Rootwise’s existing Sensitive Content Policy also states that information submitted through consultation requests and WhatsApp communications is treated as confidential.
                  </p>
                </div>
              </section>

              {/* 4. Consultation and Appointment Forms */}
              <section id="section-4" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    04
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Consultation and Appointment Forms
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    When you submit a consultation or appointment form through our website, the information you provide may be received and reviewed by our authorised team.
                  </p>
                  <p>We may contact you by phone, email, or WhatsApp to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Confirm your consultation</li>
                    <li>Discuss your enquiry</li>
                    <li>Understand your requirements</li>
                    <li>Provide appointment information</li>
                    <li>Follow up regarding your requested service</li>
                  </ul>
                  <p className="text-xs text-[#556460] italic pt-1">
                    Submitting a form does not guarantee an appointment until it has been confirmed by our team.
                  </p>
                </div>
              </section>

              {/* 5. WhatsApp, Phone and Email Communication */}
              <section id="section-5" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    05
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    WhatsApp, Phone and Email Communication
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    You may choose to contact Rootwise Aesthetics through WhatsApp, phone, email, or other communication channels.
                  </p>
                  <p>
                    When you communicate through third-party platforms such as WhatsApp, your information may also be processed according to the privacy policies and terms of those service providers.
                  </p>
                  <p className="text-xs bg-[#F3F7F5] p-3.5 rounded-xl border border-[#E2EBE6]">
                    We encourage you not to send highly sensitive medical or personal information through unsecured communication channels unless necessary.
                  </p>
                </div>
              </section>

              {/* 6. Cookies and Website Analytics */}
              <section id="section-6" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    06
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Cookies and Website Analytics
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    Our website may use cookies and similar technologies to provide website functionality, understand visitor behaviour, measure performance, and improve the overall user experience.
                  </p>
                  <p>Cookies and analytics technologies may collect information such as:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Browser and device type</li>
                    <li>IP address</li>
                    <li>Pages visited</li>
                    <li>Time spent on the website</li>
                    <li>Referral source</li>
                    <li>General website interactions</li>
                  </ul>
                  <p className="text-xs text-[#556460] pt-1">
                    You may control or disable cookies through your browser settings. Disabling certain cookies may affect some website features.
                  </p>
                </div>
              </section>

              {/* 7. Third-Party Services */}
              <section id="section-7" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    07
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Third-Party Services
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    We may use trusted third-party service providers to operate and maintain our website and services, including providers for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Website hosting and CDN</li>
                    <li>Analytics and site measurement</li>
                    <li>Contact and consultation forms</li>
                    <li>Website security and spam prevention</li>
                    <li>Email infrastructure</li>
                    <li>Maps and clinic location services</li>
                    <li>WhatsApp and patient communication channels</li>
                    <li>Advertising and marketing platforms</li>
                  </ul>
                  <p className="pt-2 text-xs text-[#556460]">
                    These providers process limited personal information only as necessary to perform their respective services in accordance with standard data privacy agreements.
                  </p>
                </div>
              </section>

              {/* 8. Advertising and Marketing */}
              <section id="section-8" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    08
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Advertising and Marketing
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>We may use advertising platforms such as Google or Meta to promote our services.</p>
                  <p>
                    Where legally required, personal information will not be used for personalised marketing without appropriate consent.
                  </p>
                  <p>
                    We do not intentionally use sensitive health information for targeted advertising in a manner prohibited by applicable advertising or privacy requirements.
                  </p>
                  <p className="text-xs font-medium text-[#2C6A62] pt-1">
                    Rootwise’s published advertising policies state that sensitive health information and treatment interests are not used for remarketing without patient consent.
                  </p>
                </div>
              </section>

              {/* 9. How We Protect Your Information */}
              <section id="section-9" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    09
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    How We Protect Your Information
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    We take reasonable administrative, organisational, and technical measures to protect personal information against:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Unauthorised access</li>
                    <li>Loss or misuse</li>
                    <li>Unauthorised disclosure</li>
                    <li>Alteration</li>
                    <li>Destruction</li>
                  </ul>
                  <p className="pt-2">
                    Access to personal information is limited strictly to authorised clinic personnel who require it for legitimate medical, clinical, or operational purposes.
                  </p>
                  <p className="text-xs text-[#7A8A85] italic">
                    While we maintain rigorous safeguards, no internet transmission or electronic storage system can be guaranteed to be 100% immune from security threats.
                  </p>
                </div>
              </section>

              {/* 10. Data Retention */}
              <section id="section-10" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    10
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Data Retention
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>We retain personal information only for as long as reasonably necessary to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Respond to your enquiry</li>
                    <li>Manage appointments and consultations</li>
                    <li>Provide requested services</li>
                    <li>Maintain appropriate business or clinical records</li>
                    <li>Resolve disputes</li>
                    <li>Meet applicable legal, clinical, and regulatory obligations</li>
                  </ul>
                  <p className="pt-2 text-xs text-[#556460]">
                    When information is no longer required, we securely delete or anonymise it, subject to statutory healthcare record retention rules.
                  </p>
                </div>
              </section>

              {/* 11. Your Privacy Rights */}
              <section id="section-11" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    11
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Your Privacy Rights
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>Subject to applicable laws, you may contact us to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Request information about the personal data we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of eligible personal information</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Request that certain communications be stopped</li>
                    <li>Raise a concern regarding the handling of your personal information</li>
                  </ul>
                  <p className="pt-2 text-xs text-[#556460]">
                    Certain medical record information may need to be retained where required by law or medical governance regulations.
                  </p>
                </div>
              </section>

              {/* 12. Children’s Privacy */}
              <section id="section-12" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    12
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Children’s Privacy
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    Our website is not intended to independently collect personal information from children without appropriate involvement or consent from a parent or legal guardian where required.
                  </p>
                  <p className="text-xs text-[#556460]">
                    If you believe that a child’s personal information has been submitted to us without appropriate consent, please contact our clinic so that we can review and resolve the matter promptly.
                  </p>
                </div>
              </section>

              {/* 13. External Links */}
              <section id="section-13" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    13
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    External Links
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    Our website may contain links to third-party websites, social media platforms, maps, or other external services.
                  </p>
                  <p>
                    Rootwise Aesthetics is not responsible for the privacy practices, security, or content of external third-party services.
                  </p>
                  <p className="text-xs text-[#556460]">
                    We recommend reviewing the privacy policy of any external platform before providing personal details.
                  </p>
                </div>
              </section>

              {/* 14. Changes to This Privacy Policy */}
              <section id="section-14" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    14
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Changes to This Privacy Policy
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#4A5854] leading-relaxed">
                  <p>We may update this Privacy Policy periodically to reflect changes in:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#3E4D49]">
                    <li>Our website features or clinic services</li>
                    <li>How we process personal information</li>
                    <li>Technologies or clinical tools we use</li>
                    <li>Applicable healthcare, legal, or regulatory guidelines</li>
                  </ul>
                  <p className="pt-2 text-xs text-[#556460]">
                    Any updates will be published on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage patients and visitors to review this policy periodically.
                  </p>
                </div>
              </section>

              {/* 15. Contact Us */}
              <section id="section-15" className="bg-white rounded-2xl sm:rounded-3xl border border-[#DFE7E2] p-6 sm:p-8 shadow-xs scroll-mt-28">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#EFF4F1] text-[#2C6A62] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#DCE4E1]">
                    15
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#11201D] tracking-tight">
                    Contact Us
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-[#4A5854] leading-relaxed">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is collected, used, stored, or protected, please contact:
                  </p>

                  {/* Brand Dark Forest Green Contact Card */}
                  <div className="bg-[#133A34] text-[#D1DEDA] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#23534B] shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                      {/* Left: VISIT OUR CLINIC */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#E2F15A]">
                          VISIT OUR CLINIC
                        </h3>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#E2F15A] shrink-0 mt-0.5" />
                          <address className="not-italic text-xs sm:text-sm text-[#A2B8B2] leading-relaxed">
                            31 E TV Swamy Rd, R.S. Puram,<br />
                            Coimbatore, Tamil Nadu 641002
                          </address>
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                          <Clock className="w-5 h-5 text-[#E2F15A] shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-[#A2B8B2] leading-relaxed">
                            <p className="font-semibold text-white/95">Monday – Sunday</p>
                            <p>10:00 AM – 7:30 PM</p>
                          </div>
                        </div>

                        <div className="pt-1">
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Rootwise%20Aesthetics%2C%2031%20E%20TV%20Swamy%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold transition-colors hover:text-[#E2F15A]"
                          >
                            <Navigation className="w-4 h-4 text-[#E2F15A]" />
                            <span>Get Directions on Google Maps</span>
                          </a>
                        </div>
                      </div>

                      {/* Right: CALL & WHATSAPP */}
                      <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#E2F15A]">
                          CALL &amp; WHATSAPP
                        </h3>

                        <p className="text-xs sm:text-sm text-[#A2B8B2]">
                          Speak directly with our clinical patient coordinator:
                        </p>

                        <div className="space-y-3 pt-1">
                          <a
                            href="tel:9384817372"
                            className="inline-flex items-center gap-2.5 text-[#E2F15A] text-sm sm:text-base font-bold hover:underline transition-colors"
                          >
                            <Phone className="w-5 h-5 text-[#E2F15A]" />
                            <span>+91 93848 17372</span>
                          </a>

                          <div>
                            <a
                              href="https://wa.me/919384817372"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2.5 text-[#E2F15A] text-sm sm:text-base font-bold hover:underline transition-colors"
                            >
                              <MessageCircle className="w-5 h-5 text-[#E2F15A]" />
                              <span>Chat on WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Return Button */}
              <div className="pt-4 text-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#133A34] text-white text-sm font-semibold hover:bg-[#1C4D45] transition-all shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Rootwise Aesthetics</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Unified max-w-6xl container */}
      <footer className="border-t border-[#23534B] bg-[#133A34] text-[#D1DEDA] py-8 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={footerLogo} alt="Rootwise" className="h-6 w-auto" />
            <span className="text-[#8DA6A0]">· R.S. Puram, Coimbatore, Tamil Nadu</span>
          </div>

          <p className="text-[#8DA6A0] text-center sm:text-right">
            © {new Date().getFullYear()} Rootwise Aesthetics. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#E2F15A] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
