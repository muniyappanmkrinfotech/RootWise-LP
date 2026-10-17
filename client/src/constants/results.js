import recedingHairlineBefore from '../assets/results/img-1.png';
import recedingHairlineAfter from '../assets/results/img-1.1.png';
import frontalThinningBefore from '../assets/results/img-2.png';
import frontalThinningAfter from '../assets/results/img-2.2.png';
import thinningCrownBefore from '../assets/results/img-3.png';
import thinningCrownAfter from '../assets/results/img-3.3.png';
import hairlineMidscalpBefore from '../assets/results/img-4.png';
import hairlineMidscalpAfter from '../assets/results/img-4.4.png';

export const PATIENT_CASES = [
  {
    id: 'receding-hairline',
    title: 'Receding hairline',
    subtitle: 'FUE · Age [ ] · Shared with written consent',
    images: [
      { src: recedingHairlineBefore, alt: 'Before treatment for a receding hairline', label: 'Before' },
      { src: recedingHairlineAfter, alt: 'After treatment for a receding hairline', label: '8 months later' },
    ],
    alt: 'Before and 8 months after hair transplant for receding hairline at Rootwise',
  },
  {
    id: 'frontal-thinning',
    title: 'Frontal thinning',
    subtitle: 'FUE · Age [ ] · Shared with written consent',
    images: [
      { src: frontalThinningBefore, alt: 'Before treatment for frontal thinning', label: 'Before' },
      { src: frontalThinningAfter, alt: 'After treatment for frontal thinning', label: '6 months later' },
    ],
    alt: 'Before and 6 months after hair transplant for frontal thinning at Rootwise',
  },
  {
    id: 'thinning-top-crown',
    title: 'Thinning top & crown',
    subtitle: 'FUE · Age [ ] · Shared with written consent',
    images: [
      { src: thinningCrownBefore, alt: 'Before treatment for thinning at the top and crown', label: 'Before' },
      { src: thinningCrownAfter, alt: 'Day of surgery for thinning at the top and crown', label: 'Day of surgery' },
    ],
    alt: 'Before and day of surgery hair transplant for thinning top & crown at Rootwise',
  },
  {
    id: 'hairline-midscalp',
    title: 'Hairline & mid-scalp',
    subtitle: 'FUE · Age [ ] · Shared with written consent',
    images: [
      { src: hairlineMidscalpBefore, alt: 'Before treatment for the hairline and mid-scalp', label: 'Before' },
      { src: hairlineMidscalpAfter, alt: 'Grafts placed for the hairline and mid-scalp', label: 'Grafts placed' },
    ],
    alt: 'Before and grafts placed hair transplant for hairline & mid-scalp at Rootwise',
  },
];
