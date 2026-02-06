import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { serviceCategories } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Plumber & HVAC Services in Dallas-Fort Worth',
  description:
    'Need a plumber in Dallas-Fort Worth? Local Answer provides emergency plumbing, HVAC repair, and electrical services across 50+ DFW cities. Licensed, insured, same-day service.',
};

const categoryIcons: Record<string, React.ReactNode> = {
  cooling: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  heating: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  plumbing: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  electrical: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

const trustPoints = [
  { label: 'Licensed & Insured', icon: '✓' },
  { label: '24/7 Emergency Service', icon: '⏰' },
  { label: 'Upfront Pricing', icon: '$' },
  { label: 'Satisfaction Guaranteed', icon: '★' },
];

const proTips = [
  {
    title: 'Change Your Air Filter',
    tip: 'Replace HVAC filters every 1-3 months. Dirty filters make your system work harder, increasing energy bills and reducing equipment life.',
  },
  {
    title: 'Know Your Shut-Offs',
    tip: 'Locate your water shut-off valve and electrical panel before an emergency. Quick action can prevent thousands in damage.',
  },
  {
    title: 'Schedule Seasonal Tune-Ups',
    tip: 'Service your AC in spring and heater in fall. Regular maintenance prevents 95% of breakdowns and extends system life.',
  },
];

const serviceAreas = [
  'Dallas', 'Plano', 'Frisco', 'Richardson', 'Garland', 'Irving',
  'Arlington', 'Fort Worth', 'McKinney', 'Allen', 'Carrollton', 'Lewisville',
  'Denton', 'Mesquite', 'Grand Prairie', 'Flower Mound',
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/local-answer-hvac-service-van-dallas-skyline.png"
          alt="Local Answer service van with Dallas skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              HVAC, Plumbing & Electrical Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
              Professional home services for {siteConfig.city} homes and businesses.
              Get instant answers and upfront pricing — no waiting on hold.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="rounded-lg bg-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:scale-105"
                data-casey-trigger="true"
              >
                {caseyConfig.ctaText}
              </button>
              <a
                href="tel:+1-469-259-4385"
                className="rounded-lg bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Call (469) 259-4385
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 bg-gray-50 py-4">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs text-brand-700">
                  {point.icon}
                </span>
                {point.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-2 text-gray-600">
              Complete home services under one roof
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  {categoryIcons[category.slug]}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-brand-600">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-600 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Get Expert Help in Minutes — Not Hours
          </h2>
          <p className="mt-2 text-brand-100">
            Chat with us now for instant answers, accurate quotes, and same-day scheduling.
          </p>
          <button
            type="button"
            className="mt-4 rounded-lg bg-white px-8 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50 hover:scale-105"
            data-casey-trigger="true"
          >
            Start Chat Now
          </button>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Pro Tips</h2>
            <p className="mt-2 text-gray-600">
              Helpful advice from our expert technicians
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {proTips.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.tip}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pro-tips"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all pro tips →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Serving {siteConfig.city} and Surrounding Areas
            </h2>
            <p className="mt-2 text-gray-600">
              Professional home services throughout the DFW metroplex
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/locations"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get a free quote in minutes. No obligation, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-brand-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-brand-600 hover:scale-105"
              data-casey-trigger="true"
            >
              {caseyConfig.ctaText}
            </button>
            <a
              href="tel:+1-469-259-4385"
              className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              (469) 259-4385
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
