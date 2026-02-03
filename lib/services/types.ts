export interface ServicePage {
  slug: string;
  name: string;
  category: 'plumbing' | 'cooling' | 'heating' | 'electrical';
  metaDescription: string;
  hero: {
    title: string;
    subtitle: string;
  };
  quickAnswer: string;
  content: string;
  faqs: Array<{ question: string; answer: string }>;
  priceRange: string;
  features: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'cooling',
    name: 'Cooling',
    description: 'AC repair, installation, and maintenance',
    icon: 'snowflake',
    color: 'blue',
  },
  {
    slug: 'heating',
    name: 'Heating',
    description: 'Heater repair, installation, and maintenance',
    icon: 'flame',
    color: 'orange',
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    description: 'Repairs, installations, and drain cleaning',
    icon: 'droplet',
    color: 'cyan',
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    description: 'Repairs, installations, and inspections',
    icon: 'zap',
    color: 'yellow',
  },
];
