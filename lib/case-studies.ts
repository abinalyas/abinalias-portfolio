export type CaseStudy = {
  slug: string;
  title: string;
  year: string;
  location: string;
  role: string;
  stack: string[];
  category: string;
  image: string;
  archiveUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'find-rooms-roommates',
    title: 'Find Rooms & Roommates',
    year: '2021',
    location: 'Kerala, India',
    role: 'Product Designer',
    stack: ['UX Strategy', 'UI Design', 'Prototyping'],
    category: 'Case Study',
    image: '/case-studies/find-rooms-roommates.png',
    archiveUrl: 'https://web.archive.org/web/20250123032533/https://abinalias.com/portfolio/find-your-roommates-case-study/',
    summary: 'Roommate-matching product concept focused on trust, browsing flow, and onboarding clarity.',
    challenge: 'Archived page content is password-protected, so only public metadata and visuals were recoverable.',
    solution: 'Migrated verified project title, category, and original archived thumbnail from the old portfolio.',
    outcome: 'Project card is now live in the new portfolio with source attribution to the Internet Archive.'
  },
  {
    slug: 'winzip-driver-app-redesign',
    title: 'Winzip Driver App Redesign',
    year: '2021',
    location: 'Kerala, India',
    role: 'Product Designer',
    stack: ['Product Design', 'UX Research', 'Visual Systems'],
    category: 'Software Redesign',
    image: '/case-studies/winzip-driver-redesign.png',
    archiveUrl: 'https://web.archive.org/web/20250123032533/https://abinalias.com/portfolio/winzip-driver-app-redesign/',
    summary: 'Redesign concept for a utility app, with focus on cleaner workflows and visual hierarchy.',
    challenge: 'Full case study narrative was private in the archived portfolio snapshot.',
    solution: 'Imported project identity, category, and screenshot assets that were publicly visible in the old site.',
    outcome: 'The project is preserved in version one and can be expanded when you share final narrative details.'
  },
  {
    slug: 'freshop',
    title: 'Freshop',
    year: '2021',
    location: 'Kerala, India',
    role: 'Visual Designer',
    stack: ['Concept Design', 'Visual Design', 'Interaction Design'],
    category: 'Concept, Visual Design',
    image: '/case-studies/freshop.png',
    archiveUrl: 'https://web.archive.org/web/20250123032533/https://abinalias.com/portfolio/freshop/',
    summary: 'Concept exploration for a grocery shopping experience with strong visual-led storytelling.',
    challenge: 'Archived post body is not publicly readable due password protection in the original WordPress post.',
    solution: 'Ported trustworthy metadata from the archive and attached the original thumbnail from the legacy portfolio.',
    outcome: 'Freshop is now included as a real project entry instead of a placeholder.'
  }
];

export const findCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
