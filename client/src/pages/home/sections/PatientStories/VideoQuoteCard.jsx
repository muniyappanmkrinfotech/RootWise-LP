import React, { useState, useRef, memo, useMemo } from 'react';
import { Play, X } from 'lucide-react';
import defaultPoster from '@/assets/patientStories/patient-video-poster.jpg';

/**
 * Resolves any YouTube, Vimeo, or direct video URL into an embed/playback object.
 */
function resolveVideoEmbed(urlOrId) {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();

  // YouTube match (URL or 11-char ID)
  const ytMatch = str.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i
  );
  if (ytMatch) {
    return {
      type: 'iframe',
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
    };
  }
  if (/^[\w-]{11}$/.test(str)) {
    return {
      type: 'iframe',
      embedUrl: `https://www.youtube-nocookie.com/embed/${str}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  // Vimeo match (URL or numeric ID)
  const vimeoMatch = str.match(/(?:vimeo\.com\/(?:video\/)?)(\d+)/i);
  if (vimeoMatch) {
    return {
      type: 'iframe',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&title=0&byline=0`,
    };
  }
  return {
    type: 'html5',
    src: str,
  };
}


function VideoQuoteCard({ story }) {
  const {
    quote = 'Choosing RootWise was the best decision for my hair. From the initial 3D graft design to the procedure itself, the medical team was completely transparent and caring. By month 12, my hairline looked so natural that no one could tell I had a transplant.',
    attribution = 'Arjun K. · 2,800 Grafts FUE · 12 Months Post-Op',
    videoUrl = '',
    videoSrc = '',
    youtubeId = '',
    videoPoster = defaultPoster,
    videoTitle = 'Arjun’s 12-Month Restoration Journey',
    duration = '2:15 min',
  } = story || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Resolve video link from videoUrl, youtubeId, or videoSrc
  const videoSource = useMemo(() => {
    return resolveVideoEmbed(videoUrl || youtubeId || videoSrc);
  }, [videoUrl, youtubeId, videoSrc]);

  const handlePlayToggle = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-[14px] sm:rounded-[28px] border border-[#E5EDE8] overflow-hidden grid grid-cols-1 md:grid-cols-2 md:h-[240px] shadow-[0_2px_14px_rgba(0,0,0,0.02)]">
      {/* Left: Video Player Box */}
      <div className="w-full aspect-video md:aspect-auto md:h-full relative overflow-hidden bg-[#11201D] select-none flex items-center justify-center">
        {/* Active Playback State */}
        {isPlaying && videoSource ? (
          <div className="relative w-full h-full">
            {videoSource.type === 'iframe' ? (
              <iframe
                src={videoSource.embedUrl}
                title={videoTitle}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={videoSource.src}
                poster={videoPoster}
                autoPlay
                playsInline
                controls
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />
            )}

            {/* Quick Exit / Close Button */}
            <button
              type="button"
              onClick={handleCloseVideo}
              aria-label="Close video player"
              className="absolute top-3 right-3 z-30 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md shadow-md transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>
        ) : (
          /* High-Definition Video Poster & Controls Overlay */
          <div
            onClick={handlePlayToggle}
            className="relative w-full h-full flex items-center justify-center group cursor-pointer"
          >
            {/* Poster Image */}
            <img
              src={videoPoster}
              alt={videoTitle}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
            />

            {/* Gradient Dark Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] sm:text-xs font-semibold backdrop-blur-xs border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F15A] animate-pulse" />
                Patient Story
              </span>
            </div>

            {/* Center Circular Play Button */}
            <button
              type="button"
              aria-label="Play patient story video"
              className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#11201D] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xs transition-all duration-300 group-hover:scale-110 active:scale-95 group-hover:bg-white sm:h-14 sm:w-14 cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60 pointer-events-none" />
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5 text-[#11201D]" />
            </button>

            {/* Bottom Info Bar Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between text-white pointer-events-none">
              <div>
                <p className="text-xs sm:text-sm font-bold text-white drop-shadow-sm">
                  {videoTitle}
                </p>
                <p className="text-[10px] sm:text-xs text-white/80">
                  Full HD Patient Testimonial · {duration}
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-[11px] text-white/90 backdrop-blur-xs border border-white/15">
                {duration}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Right: Quote Content */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center bg-white">
        {/* Quote Mark Icon */}
        <div className="hidden sm:block text-[#A6945F] mb-2 sm:mb-3">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.324 1.202-4.544 3.285-4.608 4.887.375-.246.852-.392 1.385-.392 1.942 0 3.3 1.38 3.3 3.313 0 2.016-1.57 3.513-3.417 3.513-.772 0-1.464-.265-2-.601zm11 0C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.894 1.378c-3.325 1.202-4.544 3.285-4.609 4.887.375-.246.853-.392 1.385-.392 1.942 0 3.3 1.38 3.3 3.313 0 2.016-1.57 3.513-3.417 3.513-.772 0-1.464-.265-2-.601z" />
          </svg>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-[#11201D] leading-[1.4]">
          “{quote}”
        </blockquote>

        {/* Attribution Meta */}
        <div className="mt-3 sm:mt-4 sm:pt-3 sm:border-t sm:border-[#EEF2F0]">
          <p className="text-[10px] sm:text-[13px] text-[#556460] font-medium tracking-wide">
            {attribution}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(VideoQuoteCard);
