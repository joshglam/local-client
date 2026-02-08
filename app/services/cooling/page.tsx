import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { coolingServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cooling Services',
  description: `Professional air conditioning services in ${siteConfig.city}. AC repair, installation, maintenance, duct cleaning, and indoor air quality solutions. Available 24/7.`,
};

export default function CoolingServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/local-answer-ac-technician-rooftop-dallas-summer.png"
          alt="Local Answer AC technician servicing rooftop unit in Dallas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative mx-auto max-w-5xl px-4">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-blue-300">/</span>
            <span className="text-white">Cooling Services</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Cooling Services</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-2xl">
            Stay cool year-round with our comprehensive air conditioning services. From emergency repairs to new installations, our certified technicians keep {siteConfig.city} homes comfortable.
          </p>
          <div className="mt-8">
            <a
              href={caseyConfig.phoneHref}
              className="inline-block rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent-600"
            >
              Call {caseyConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-blue-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">24/7 Emergency Service</h3>
              <p className="mt-2 text-sm text-gray-600">AC emergencies don&apos;t wait—neither do we</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Licensed & Insured</h3>
              <p className="mt-2 text-sm text-gray-600">Fully certified technicians you can trust</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Satisfaction Guaranteed</h3>
              <p className="mt-2 text-sm text-gray-600">We stand behind every job we complete</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Cooling Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coolingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/cooling/${service.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {service.hero.subtitle}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-400">{service.priceRange}</span>
                  <span className="text-sm font-medium text-brand-600 group-hover:underline">
                    Learn more →
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="text-xs bg-brand-50 text-brand-600 px-2 py-1 rounded">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Local Answer for Cooling Services?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                <p className="mt-1 text-sm text-gray-600">Most repairs completed the same day you call. We know how important a working AC is in {siteConfig.city}.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Upfront Pricing</h3>
                <p className="mt-1 text-sm text-gray-600">Know the cost before work begins. No surprises, no hidden fees—just honest pricing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">All Brands Serviced</h3>
                <p className="mt-1 text-sm text-gray-600">We repair and install all major brands including Carrier, Trane, Lennox, Rheem, and more.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Expert Technicians</h3>
                <p className="mt-1 text-sm text-gray-600">Our NATE-certified technicians receive ongoing training to stay current with the latest AC technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Need Cooling Service?</h2>
          <p className="mt-4 text-brand-100">
            Whether your AC needs repair, maintenance, or you&apos;re ready for a new system, we&apos;re here to help.
          </p>
          <div className="mt-6">
            <a
              href={caseyConfig.phoneHref}
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50 hover:scale-105"
            >
              Call {caseyConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
