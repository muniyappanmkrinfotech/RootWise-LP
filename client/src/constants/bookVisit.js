/**
 * Book A Visit CTA Section Constants
 * Sourced directly from Figma design specification.
 */
export const BOOK_VISIT_HEADER = {
  badge: 'BOOK A VISIT',
  titlePart1: 'Book your consultation ',
  titleAccent: 'in one tap',
  subtitle:
    'Your hair-loss pattern, scalp health and donor strength checked by a doctor, then a written plan and cost.',
  mobileSubtitle:
    'Hair-loss pattern, scalp and donor strength checked by a doctor.',
};

export const BOOK_VISIT_ACTIONS = [
  {
    id: 'calendar',
    type: 'primary',
    title: 'Pick a day and time',
    subtitle: 'We call to confirm your slot',
    icon: 'calendar',
    actionType: 'modal',
  },
  {
    id: 'call',
    type: 'secondary',
    title: 'Call 93848 17372',
    subtitle: 'Talk to the clinic now',
    icon: 'phone',
    actionType: 'tel',
    href: 'tel:9384817372',
  },
  {
    id: 'whatsapp',
    type: 'secondary',
    title: 'WhatsApp us',
    subtitle: 'Send your hair photos',
    icon: 'whatsapp',
    actionType: 'whatsapp',
    href: 'https://wa.me/919384817372?text=Hi%20RootWise,%20I%20would%20like%20to%20consult%20regarding%20hair%20restoration',
  },
];
