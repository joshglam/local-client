import { coolingServices } from './cooling';
import { heatingServices } from './heating';
import { plumbingServices } from './plumbing';
import { electricalServices } from './electrical';
import type { ServicePage } from './types';

export * from './types';

export const allServices: ServicePage[] = [
  ...coolingServices,
  ...heatingServices,
  ...plumbingServices,
  ...electricalServices,
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}

export function getAllServiceParams(): { category: string; slug: string }[] {
  return allServices.map((s) => ({ category: s.category, slug: s.slug }));
}

export function getServiceByCategoryAndSlug(
  category: string,
  slug: string
): ServicePage | undefined {
  return allServices.find((s) => s.category === category && s.slug === slug);
}

export function getServicesByCategory(category: ServicePage['category']): ServicePage[] {
  return allServices.filter((s) => s.category === category);
}

export { coolingServices, heatingServices, plumbingServices, electricalServices };
