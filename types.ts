export type Language = 'en' | 'id';
export type Theme = 'light' | 'dark';

export interface ContentSection {
  title?: string;
  subtitle?: string;
  description?: string;
  items?: ContentItem[];
  [key: string]: any;
}

export interface ContentItem {
  title: string;
  description: string;
  icon?: any;
  stat?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  ex: string;
  image?: string;
  linkedin?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogItem {
  title: string;
  category: string;
  readTime: string;
  date: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    whyUs: string;
    impact: string;
    howItWorks: string;
    about: string;
    faq: string;
    blog: string;
    contact: string;
  };
  hero: {
    label: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { label: string; value: string }[];
  };
  marketGap: {
    title: string;
    subtitle: string;
    supplyTitle: string;
    supplyDesc: string;
    gapTitle: string;
    gapDesc: string;
    demandTitle: string;
    demandDesc: string;
    problemSupply: string;
    problemDemand: string;
    label: string;
  };
  beneficiaries: {
    subtitle: string;
    assetsLabel: string;
    assetsDesc: string;
    yieldLabel: string;
    yieldDesc: string;
  };
  solution: {
    title: string;
    subtitle: string;
    description: string;
    cards: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  process: {
    title: string;
    valuePropTitle: string;
    valueProps: string[];
    steps: { number: string; title: string; desc: string }[];
  };
  vision: {
    title: string;
    subtitle: string;
    points: string[];
    impactTitle: string;
    impactDesc: string;
  };
  credibility: {
    title: string;
    subtitle: string;
    team: TeamMember[];
  };
  leadGen: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      org: string;
      email: string;
      interest: string;
      submit: string;
    };
    disclaimer: string;
  };
  faq: {
    subtitle: string;
    items: FAQItem[];
  };
  blog: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: BlogItem[];
  };
  footer: {
    contactTitle: string;
    quickLinksTitle: string;
    copyright: string;
  };
}