/**
 * Patient Stories Section Constants
 * Sourced directly from Figma design specification.
 */
export const PATIENT_STORIES_HEADER = {
  badge: 'PATIENT STORIES',
  titlePart1: 'Hear it from ',
  titleAccent: 'our patients',
};

export const FEATURED_STORY = {
  quote:
    'Choosing RootWise was the best decision for my hair. From the initial 3D graft design to the procedure itself, the medical team was completely transparent and caring. By month 12, my hairline looked so natural that no one could tell I had a transplant.',
  attribution: 'Arjun K. · 2,800 Grafts FUE · 12 Months Post-Op',
  videoTitle: 'Arjun’s 12-Month Restoration Journey',
  duration: '2:15 min',
  quality: '1080p FHD',
  // You can set a direct MP4 URL, local path, or YouTube ID below:
  videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  youtubeId: '',
};

export const GOOGLE_REVIEWS_BANNER = {
  boldText: 'Google review appears here.',
  regularText:
    ' Embed the live widget from the clinic’s Google Business Profile. Never type reviews by hand.',
  mobileText: 'Google review widget goes here (live embed only).',
};

export const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: 'V. Sackesh Raja',
    avatarLetter: 'V',
    avatarClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    profileUrl: 'https://www.google.com/maps/contrib/100045319468198678388/reviews?hl=en-GB',
    service: 'Carbon Laser Treatment',
    serviceType: 'laser',
    rating: 5,
    text: '“I took a consultation a month back and started my carbon laser treatment here. Aesthetician Raji ma’am attended to me; she was kind and friendly. Overall, the treatment gave me good results. Special thanks to Manager Saranya ma’am.”',
  },
  {
    id: 2,
    name: 'Varusha Sharon Christopher',
    avatarLetter: 'V',
    avatarClass: 'bg-teal-100 text-teal-800 border-teal-200',
    profileUrl: 'https://www.google.com/maps/contrib/118285352990740076279/reviews?hl=en-GB',
    service: 'Skin & Aesthetic Care',
    serviceType: 'skin',
    rating: 5,
    text: '“The service is very good. The staff is caring and supportive. Ms. Rajalakshmi and Saranya are very attentive, analyse concerns accurately, and helped me throughout.”',
  },
  {
    id: 3,
    name: 'Rupa Lodaya',
    avatarLetter: 'R',
    avatarClass: 'bg-amber-100 text-amber-800 border-amber-200',
    profileUrl: 'https://www.google.com/maps/contrib/100773092975499294124/reviews?hl=en-GB',
    service: 'Hair & Skin Care',
    serviceType: 'hair',
    rating: 5,
    text: '“The clinic offers good services and products based on individual hair and skin concerns. The staff are courteous, and the ambience is good.”',
  },
  {
    id: 4,
    name: 'Meera Ponnusamy',
    avatarLetter: 'M',
    avatarClass: 'bg-purple-100 text-purple-800 border-purple-200',
    profileUrl: 'https://www.google.com/maps/contrib/111122090384138282771/reviews?hl=en-GB',
    service: 'Tattoo Removal',
    serviceType: 'treatment',
    rating: 5,
    text: '“Rootwise Aesthetics in Coimbatore provides excellent and customer-friendly services. I had a tattoo removal session with Aesthetician Rajalakshmi ma’am. She was very kind and caring. Compared with other clinics, Rootwise is the best.”',
  },
  {
    id: 5,
    name: 'Kaarthic Raja',
    avatarLetter: 'K',
    avatarClass: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    profileUrl: 'https://www.google.com/maps/contrib/108155056462861012796/reviews?hl=en-GB',
    service: 'Skin Consultation',
    serviceType: 'consult',
    rating: 5,
    text: '“Overall, it was a very good experience. If anyone is looking for a reliable skin and aesthetic clinic in Coimbatore, this place is definitely worth visiting. I’m happy with the consultation experience.”',
  },
  {
    id: 6,
    name: 'Fasila S',
    avatarLetter: 'F',
    avatarClass: 'bg-rose-100 text-rose-800 border-rose-200',
    profileUrl: 'https://www.google.com/maps/contrib/113180032900489601749/reviews?hl=en-GB',
    service: 'Antiox Flush Treatment',
    serviceType: 'glow',
    rating: 5,
    text: '“I absolutely loved my Antiox Flush treatment. A huge thank you to my wonderful therapists, Rajalakshmi and Jinu, for doing such an amazing job! The procedure was completely relaxing and gave my skin an instant radiant glow with no downtime. My face feels deeply cleansed, hydrated, and incredibly smooth.”',
  },
  {
    id: 7,
    name: 'Jeenupratha R',
    avatarLetter: 'J',
    avatarClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    profileUrl: 'https://www.google.com/maps/contrib/116369419088129189917/reviews?hl=en-GB',
    service: 'IVG & Laser Treatment',
    serviceType: 'laser',
    rating: 5,
    text: '“I had previously taken IVG and laser treatments at another clinic but did not get good results. After seeing the ads and reviews for Rootwise Aesthetic Clinic, I came here for a consultation. The doctor and staff were very friendly and explained every detail. I have now completed my sessions, and the results are very good. I personally recommend this clinic.”',
  },
  {
    id: 8,
    name: 'Ayswariya Rosho',
    avatarLetter: 'A',
    avatarClass: 'bg-orange-100 text-orange-800 border-orange-200',
    profileUrl: 'https://www.google.com/maps/contrib/114510812676316961750/reviews?hl=en-GB',
    service: 'Personalised Skin Treatment',
    serviceType: 'skin',
    rating: 5,
    text: '“I visited for a skin concern, and they prescribed treatment based on my skin type. The service was excellent, the staff were kind, and the clinic was clean. The results were visible even after the first session. I would definitely recommend this clinic.”',
  },
  {
    id: 9,
    name: 'Madhu Nisha',
    avatarLetter: 'M',
    avatarClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    profileUrl: 'https://www.google.com/maps/contrib/104674356667968466368/reviews?hl=en-GB',
    service: 'Lip Pigmentation Peel',
    serviceType: 'peel',
    rating: 5,
    text: '“I visited the clinic for lip pigmentation, and the doctors suggested a lip peel. The process was very quick and effective. I would highly recommend Rootwise Clinic for any skin- and hair-related treatments.”',
  },
  {
    id: 10,
    name: 'Sindhu',
    avatarLetter: 'S',
    avatarClass: 'bg-blue-100 text-blue-800 border-blue-200',
    profileUrl: 'https://www.google.com/maps/search/?api=1&query=Rootwise%20Aesthetics%2C%2031%20E%20TV%20Swamy%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore',
    service: 'Chemical Peel',
    serviceType: 'peel',
    rating: 5,
    text: '“I received excellent customer service here. I came for a chemical peel and have completed two sessions, and I can already see a noticeable difference. Another impressive part is the clinic’s ambience, which feels very peaceful.”',
  },
];

