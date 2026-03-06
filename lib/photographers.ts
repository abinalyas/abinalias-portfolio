export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export type Photographer = {
  slug: string;
  name: string;
  companyName: string;
  specialty: string;
  city: string;
  state: string;
  location: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  hourlyRate: number;
  bio: string;
  services: string[];
  bookingModes: Array<'hourly' | 'day' | 'full-event'>;
  socials: {
    instagram: string;
    website: string;
  };
  portfolio: PortfolioItem[];
  patternIndex: number;
};

export type AvailabilityDay = {
  date: string;
  slots: string[];
};

const SLOT_PATTERNS = [
  ['09:00', '11:00', '15:00'],
  ['10:00', '13:00', '16:00'],
  ['08:30', '12:30', '17:30'],
  ['09:30', '14:30', '18:00']
] as const;

export const photographers: Photographer[] = [
  {
    slug: 'aisha-turner',
    name: 'Aisha Turner',
    companyName: 'Aisha Moments Studio',
    specialty: 'Weddings & Engagements',
    city: 'Kochi',
    state: 'Kerala',
    location: 'Kochi, Kerala',
    rating: 4.9,
    reviewCount: 328,
    googleMapsUrl: 'https://maps.google.com/?q=photographer+kochi',
    hourlyRate: 120,
    bio: 'Documentary-style wedding photographer focused on natural light and candid moments.',
    services: ['Wedding', 'Engagement', 'Elopement'],
    bookingModes: ['hourly', 'day', 'full-event'],
    socials: {
      instagram: 'https://instagram.com/',
      website: 'https://example.com'
    },
    portfolio: [
      { title: 'Beachside Wedding', category: 'Wedding', image: '/gallery/placeholder-1.svg' },
      { title: 'Temple Ceremony', category: 'Wedding', image: '/gallery/placeholder-2.svg' },
      { title: 'Golden Hour Couple', category: 'Engagement', image: '/gallery/placeholder-3.svg' }
    ],
    patternIndex: 0
  },
  {
    slug: 'marco-silva',
    name: 'Marco Silva',
    companyName: 'Silva Portrait Lab',
    specialty: 'Portrait & Fashion',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    location: 'Thiruvananthapuram, Kerala',
    rating: 4.8,
    reviewCount: 214,
    googleMapsUrl: 'https://maps.google.com/?q=portrait+photographer+trivandrum',
    hourlyRate: 95,
    bio: 'Portrait specialist blending editorial framing with expressive color palettes.',
    services: ['Portrait', 'Fashion', 'Personal Brand'],
    bookingModes: ['hourly', 'day'],
    socials: {
      instagram: 'https://instagram.com/',
      website: 'https://example.com'
    },
    portfolio: [
      { title: 'Editorial Street Set', category: 'Fashion', image: '/gallery/placeholder-4.svg' },
      { title: 'Founder Portraits', category: 'Branding', image: '/gallery/placeholder-5.svg' },
      { title: 'Studio Character Shot', category: 'Portrait', image: '/gallery/placeholder-6.svg' }
    ],
    patternIndex: 1
  },
  {
    slug: 'nina-brooks',
    name: 'Nina Brooks',
    companyName: 'Nina Commerce Visuals',
    specialty: 'Product & E-commerce',
    city: 'Kozhikode',
    state: 'Kerala',
    location: 'Kozhikode, Kerala',
    rating: 5,
    reviewCount: 171,
    googleMapsUrl: 'https://maps.google.com/?q=product+photography+kozhikode',
    hourlyRate: 110,
    bio: 'Commercial photographer for product launches, online stores, and paid media.',
    services: ['Product', 'E-commerce', 'Food'],
    bookingModes: ['hourly', 'day'],
    socials: {
      instagram: 'https://instagram.com/',
      website: 'https://example.com'
    },
    portfolio: [
      { title: 'Skincare Drop', category: 'Product', image: '/gallery/placeholder-1.svg' },
      { title: 'Jewelry Macro Set', category: 'E-commerce', image: '/gallery/placeholder-2.svg' },
      { title: 'Food Launch Campaign', category: 'Food', image: '/gallery/placeholder-3.svg' }
    ],
    patternIndex: 2
  },
  {
    slug: 'kevin-cho',
    name: 'Kevin Cho',
    companyName: 'Frameline Events Co.',
    specialty: 'Events & Corporate',
    city: 'Thrissur',
    state: 'Kerala',
    location: 'Thrissur, Kerala',
    rating: 4.7,
    reviewCount: 198,
    googleMapsUrl: 'https://maps.google.com/?q=event+photographer+thrissur',
    hourlyRate: 100,
    bio: 'Fast-turnaround event and conference coverage with polished post-processing.',
    services: ['Event', 'Conference', 'Corporate'],
    bookingModes: ['day', 'full-event'],
    socials: {
      instagram: 'https://instagram.com/',
      website: 'https://example.com'
    },
    portfolio: [
      { title: 'Summit Main Stage', category: 'Conference', image: '/gallery/placeholder-4.svg' },
      { title: 'Awards Night', category: 'Event', image: '/gallery/placeholder-5.svg' },
      { title: 'Corporate Offsite', category: 'Corporate', image: '/gallery/placeholder-6.svg' }
    ],
    patternIndex: 3
  }
];

function toIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getPhotographerBySlug(slug: string) {
  return photographers.find((photographer) => photographer.slug === slug);
}

export function getAvailabilityForPhotographer(slug: string, days = 30): AvailabilityDay[] {
  const photographer = getPhotographerBySlug(slug);
  if (!photographer) {
    return [];
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: days }, (_, index) => {
    const current = new Date(today);
    current.setDate(today.getDate() + index);

    const weekday = current.getDay();
    const pattern = SLOT_PATTERNS[(photographer.patternIndex + index) % SLOT_PATTERNS.length];

    let slots = [...pattern];
    if (weekday === 0) {
      slots = [];
    } else if (weekday === 6) {
      slots = pattern.slice(0, 2);
    }

    return {
      date: toIsoDate(current),
      slots
    };
  });
}

export function getCities() {
  return Array.from(new Set(photographers.map((photographer) => photographer.city))).sort();
}

export function getServices() {
  return Array.from(new Set(photographers.flatMap((photographer) => photographer.services))).sort();
}
