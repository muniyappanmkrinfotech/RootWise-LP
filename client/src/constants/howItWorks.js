import timelineWeek1 from '../assets/timeline/timeline-week1.jpg';
import timelineMonth6 from '../assets/timeline/timeline-month6.jpg';
import timelineMonth12 from '../assets/timeline/timeline-month12.jpg';

/**
 * How It Works - 4-Step Patient Journey
 * Sourced directly from RootWise Figma Design
 */
export const HOW_IT_WORKS_STEPS = [
  {
    step: 'STEP 1',
    title: 'Meet the doctor',
    description:
      'The doctor looks closely at your hair and scalp, and asks about your hair loss.',
    icon: 'doctor',
  },
  {
    step: 'STEP 2',
    title: 'Get your plan',
    description:
      'Your new hairline is drawn, and you get the number of grafts and the cost in writing.',
    icon: 'plan',
  },
  {
    step: 'STEP 3',
    title: 'Procedure day',
    description:
      'Done at our R.S. Puram clinic with numbing medicine. Most patients need one session.',
    icon: 'procedure',
  },
  {
    step: 'STEP 4',
    title: 'Watch it grow',
    description:
      'New hair typically starts in 3 to 6 months. The full result usually shows in 12 to 18 months.',
    icon: 'growth',
  },
];

/**
 * Growth & Recovery Timeline Stages
 * Sourced directly from RootWise Figma Design
 */
export const GROWTH_TIMELINE_STAGES = [
  {
    stage: 'Week 1',
    badge: 'WEEK 1',
    image: timelineWeek1,
    alt: 'Hair transplant recovery stage at Week 1 with graft marks',
    mobileDescription: 'Scabs settle',
    description:
      'Tiny scabs form and usually settle within 7–10 days. Transplanted hairs commonly shed in weeks 2–8.',
  },
  {
    stage: 'Month 6',
    badge: 'MONTH 6',
    image: timelineMonth6,
    alt: 'Hair transplant growth stage at Month 6 with new hair growth',
    mobileDescription: 'Hair grows in',
    description:
      'New hair grows in gradually, often fine at first. A follow-up visit checks your progress.',
  },
  {
    stage: 'Month 12',
    badge: 'MONTH 12',
    image: timelineMonth12,
    alt: 'Hair transplant result stage at Month 12 with dense mature hair',
    mobileDescription: 'Density matures',
    description:
      'Density and texture keep maturing, typically up to 12–18 months.',
  },
];
