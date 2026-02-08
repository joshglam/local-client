import { serviceCategories, getServicesByCategory } from '@/lib/services';
import type { ServiceCategorySlug, UrgencyLevel } from './types';

interface CategoryOption {
  slug: ServiceCategorySlug;
  name: string;
  description: string;
  icon: string;
}

export const categoryOptions: CategoryOption[] = serviceCategories.map((sc) => ({
  slug: sc.slug as ServiceCategorySlug,
  name: sc.name,
  description: sc.description,
  icon: sc.icon,
}));

interface ServiceOption {
  slug: string;
  name: string;
}

export function getServiceOptions(category: ServiceCategorySlug): ServiceOption[] {
  return getServicesByCategory(category).map((s) => ({
    slug: s.slug,
    name: s.name,
  }));
}

interface UrgencyOption {
  value: UrgencyLevel;
  label: string;
  description: string;
}

export const urgencyOptions: UrgencyOption[] = [
  { value: 'emergency', label: 'Emergency', description: 'Need help now' },
  { value: 'soon', label: 'Soon', description: 'Within a few days' },
  { value: 'planning', label: 'Planning Ahead', description: 'Flexible timeline' },
];
