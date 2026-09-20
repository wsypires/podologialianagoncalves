export interface Treatment {
  id: string;
  name: string;
  category: 'urgencia' | 'micose' | 'preventivo' | 'especialidade';
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  includes: string[];
  priceFormatted: string;
  priceNote?: string;
  bgTone: 'peach' | 'sand' | 'sage';
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  verifiedSource: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface PathologyDetail {
  slug: string;
  name: string;
  scientificName?: string;
  badge: string;
  tagline: string;
  description: string;
  symptoms: string[];
  risksOfWaiting: string[];
  ourProtocol: {
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    technology: string[];
    whatIsIncluded: string[];
  };
  priceReference: string;
  priceNote?: string;
  faqs: { q: string; a: string }[];
  image: string;
  tone: 'peach' | 'sand' | 'sage';
}
