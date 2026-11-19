// Nama divisi bebas diisi, jadi pengurus baru boleh membuat divisi baru
// tanpa perlu mengubah kode program.
export type LeaderDivision = string;

export type EventStatus = "open" | "closing-soon" | "closed" | "completed";

// Kategori program bebas diisi dan otomatis muncul di filter halaman program.
export type ProgramCategory = string;

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  division: LeaderDivision;
  photo: string;
  period: string;
  order: number;
  bio: string;
  instagram?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** Urutan foto di dalam album (angka kecil tampil lebih dulu). */
  order: number;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  album: string;
  date: string;
  cover: string;
  description: string;
  images: GalleryImage[];
  order: number;
}

export interface EventAgendaItem {
  time: string;
  title: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string[];
  poster: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  statusLabel: string;
  registrationNote: string;
  quota: string;
  whatsapp?: string;
  agenda: EventAgendaItem[];
  featured?: boolean;
  order: number;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProgramCategory;
  visible: boolean;
  order: number;
  highlights: string[];
  schedule: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  date: string;
  excerpt: string;
  author: string;
  authorRole: string;
  readMinutes: number;
  /** false = artikel disimpan tetapi tidak tampil di website. */
  published: boolean;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  year: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: "integrity" | "innovation" | "collaboration" | "professionalism";
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface PageIntro {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

export interface SiteSettings {
  organizationName: string;
  shortName: string;
  fullName: string;
  university: string;
  tagline: string;
  period: string;
  logo: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappGroup: string;
  instagram: string;
  instagramHandle: string;
  address: string;
  addressShort: string;
  mapsUrl: string;
  officeHours: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    background: string;
    image: string;
    imageAlt: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  stats: Stat[];
  ticker: string[];
  footer: {
    description: string;
    copyright: string;
    credit: string;
  };
  labels: {
    readMore: string;
    viewAll: string;
    register: string;
    viewDetail: string;
    contactUs: string;
    joinCta: string;
    backHome: string;
    all: string;
    noResults: string;
    registrationClosed: string;
    activityFinished: string;
    viewGallery: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    whatsappMessage: string;
  };
}

export interface LeadershipPage {
  intro: PageIntro;
  periodNote: string;
  joinNote: string;
}

export interface ProgramsPage {
  intro: PageIntro;
  note: string;
}

export interface EventsPage {
  intro: PageIntro;
  upcomingTitle: string;
  upcomingDescription: string;
  archiveTitle: string;
  archiveDescription: string;
  emptyText: string;
}

export interface ArticlesPage {
  intro: PageIntro;
  featuredLabel: string;
  emptyText: string;
}

export interface GalleryPage {
  intro: PageIntro;
  collection: SectionIntro;
  albumsLabel: string;
  emptyText: string;
}

export interface AboutContent {
  intro: PageIntro;
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  vision: string;
  mission: string[];
  values: ValueItem[];
  timeline: TimelineItem[];
  timelineTitle: string;
  timelineDescription: string;
  quote: {
    text: string;
    name: string;
    role: string;
  };
}

export interface HomeContent {
  about: SectionIntro;
  programs: SectionIntro;
  leadership: SectionIntro;
  events: SectionIntro;
  gallery: SectionIntro;
  articles: SectionIntro;
  testimonials: SectionIntro;
  tickerLabel: string;
}

export interface SeoContent {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  locale: string;
  themeColor: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export interface ContactPage {
  intro: PageIntro;
  formTitle: string;
  formDescription: string;
  channelTitle: string;
  channelDescription: string;
  mapTitle: string;
  mapDescription: string;
}

export interface JoinPage {
  intro: PageIntro;
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: { title: string; description: string }[];
  stepsTitle: string;
  stepsDescription: string;
  steps: { step: string; title: string; description: string }[];
  formTitle: string;
  formDescription: string;
  faqTitle: string;
  faqDescription: string;
  faq: { question: string; answer: string }[];
  divisions: { label: string; value: string }[];
}
