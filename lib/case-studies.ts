export type CaseStudy = {
  slug: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    year: '2025',
    role: 'Product Engineer',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    summary: 'A high-conversion marketing site with strong motion storytelling and fast load times.',
    challenge: 'The previous site looked outdated and had weak content hierarchy on mobile screens.',
    solution: 'I redesigned the page architecture, introduced modular sections, and built a lightweight animation system.',
    outcome: 'Bounce rate dropped and lead conversions improved after launch.',
    link: 'https://example.com'
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    year: '2024',
    role: 'Frontend Developer',
    stack: ['React', 'GSAP', 'Headless CMS'],
    summary: 'A campaign platform built for rapid publishing and consistent visual quality across pages.',
    challenge: 'The content team needed flexible blocks without relying on developers for every update.',
    solution: 'I created a reusable content model with preview workflows and optimized rendering.',
    outcome: 'Publishing speed increased while preserving consistent design quality.',
    link: 'https://example.com'
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    year: '2023',
    role: 'Full-Stack Developer',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    summary: 'A booking and management dashboard focused on clarity for operations teams.',
    challenge: 'Users were losing time in fragmented tools and manual status updates.',
    solution: 'I designed a single workflow with role-aware views and simplified reporting.',
    outcome: 'Operational effort decreased and visibility improved for all stakeholders.',
    link: 'https://example.com'
  }
];

export const findCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
