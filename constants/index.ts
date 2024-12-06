// constants.js or constants.ts
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '#camp', key: 'gallery', label: 'Gallery' },
  { href: '#guide', key: 'rooms_and_rates', label: 'About Us' },
  { href: '#features', key: 'features ', label: 'Features' },
  { href: '#activity', key: 'top_things_to_do ', label: 'Local Attractions' },
  { href: '#get-app', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  // '/person-1.png',
  // '/person-2.png',
  // '/person-3.png',
  // '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Homestay with kitchen in Shimla',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Experience the comfort of home with our attached kitchens. Prepare your favorite meals using fresh, local ingredients from Shimla's markets. Perfect for families, long-stay guests, or anyone who loves to cook while traveling.",
  },
  {
    title: 'Stunning Views',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Wake up to panoramic views of Shimla's picturesque landscape. Our comfortable rooms offer breathtaking vistas of snow-capped Himalayan peaks, lush pine forests, and the charming town below. Each window frames a perfect postcard moment.",
  },
  {
    title: 'Accommodation for food lovers in Shimla',
    icon: '/tech.svg',
    variant: 'green',
    description:
      "Food lovers rejoice! Our homestay is surrounded by some of Shimla's most wonderful restaurants. From local Himachali cuisine to international flavors, a world of culinary experiences is just a short walk away. Ask our staff for personalized recommendations.",
  },
  {
    title: 'Prime Location',
    icon: '/location.svg',
    variant: 'orange',
    description:
      "Enjoy quiet accommodation near Shimla attractions – our homestay is just minutes away from Shimla's main attractions like The Ridge and Mall Road, yet nestled in a quiet area away from the city's hustle and bustle. Experience peace and convenience in one location."
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      { label: 'About Cozy Haven', href: '#guide' },
      { label: 'Gallery', href: '#camp' },
    ],
  },
  {
    title: 'Our Community',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Local Attractions', href: '#activity' },
      { label: 'Pricing', href: '#get-app' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Call us', href: 'tel:+919418454877', value: '+91 9418454877, +91 9418464877' },
    { label: 'Email us', href: 'mailto:nikhilbhardwaj2212@gmail.com', value: 'nikhilbhardwaj2212@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    { href: 'https://www.instagram.com/yourprofile', icon: '/instagram.svg', alt: 'Instagram' },
    // Add more social links as needed
  ],
};
