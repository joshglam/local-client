'use client';

import Link from 'next/link';
import { siteConfig, caseyConfig } from '@/lib/config';
import { serviceCategories, coolingServices, heatingServices, plumbingServices, electricalServices } from '@/lib/services';

const servicesByCategory = {
  cooling: coolingServices.slice(0, 3),
  heating: heatingServices.slice(0, 3),
  plumbing: plumbingServices.slice(0, 3),
  electrical: electricalServices.slice(0, 3),
};

const popularLocations = [
  { name: 'Dallas', slug: 'dallas' },
  { name: 'Plano', slug: 'plano' },
  { name: 'Frisco', slug: 'frisco' },
  { name: 'McKinney', slug: 'mckinney' },
  { name: 'Arlington', slug: 'arlington' },
  { name: 'Fort Worth', slug: 'fort-worth' },
];

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Services Dropdown */}
          <div className="group relative">
            <Link
              href="/services/cooling"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-600"
            >
              Services
              <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-[600px] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
                <div className="grid grid-cols-4 gap-4">
                  {serviceCategories.map((category) => (
                    <div key={category.slug}>
                      <Link
                        href={`/services/${category.slug}`}
                        className="text-sm font-semibold text-gray-900 hover:text-brand-600"
                      >
                        {category.name}
                      </Link>
                      <ul className="mt-2 space-y-1">
                        {servicesByCategory[category.slug as keyof typeof servicesByCategory].map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${category.slug}/${service.slug}`}
                              className="text-sm text-gray-600 hover:text-brand-600"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Dropdown */}
          <div className="group relative">
            <Link
              href="/locations"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-600"
            >
              Service Areas
              <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-48 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-xl">
                <ul className="space-y-1">
                  {popularLocations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="block rounded px-3 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-600"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 border-t border-gray-100 pt-2">
                  <Link
                    href="/locations"
                    className="block rounded px-3 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50"
                  >
                    View all areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/pro-tips"
            className="text-sm font-medium text-gray-600 hover:text-brand-600"
          >
            Pro Tips
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-brand-600"
          >
            About
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          data-casey-trigger="true"
        >
          {caseyConfig.ctaText}
        </button>
      </div>
    </header>
  );
}
