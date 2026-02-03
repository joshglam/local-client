import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { heatingServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Heating Services',
  description: `Professional heating services in ${siteConfig.city}. Heater repair, furnace installation, heat pump services, and maintenance. Available 24/7 for emergencies.`,
};

export default function HeatingServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/local-answer-hvac-technician-rooftop-ac-repair-dallas.png"
          alt="Local Answer HVAC technician servicing heating unit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-orange-900/75" />
        <div className="relative mx-auto max-w-5xl px-4">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-orange-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-orange-300">/</span>
            <span className="text-white">Heating Services</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Heating Services</h1>
          </div>
          <p className="text-lg text-orange-100 max-w-2xl">
            Stay warm when temperatures drop with our reliable heating services. From furnace repairs to heat pump installations, we keep {siteConfig.city} homes comfortable all winter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent-600"
              data-casey-trigger="true"
            >
              {caseyConfig.ctaText}
            </button>
            <a
              href="tel:+1-469-259-4385"
              className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Call (469) 259-4385
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-orange-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">24/7 Emergency Service</h3>
              <p className="mt-2 text-sm text-gray-600">No heat? We&apos;re available around the clock</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Safety First</h3>
              <p className="mt-2 text-sm text-gray-600">Carbon monoxide testing with every service</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">All Heating Types</h3>
              <p className="mt-2 text-sm text-gray-600">Furnaces, heat pumps, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Heating Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {heatingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/heating/${service.slug}`}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Local Answer for Heating Services?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Response</h3>
                <p className="mt-1 text-sm text-gray-600">When your heater fails on a cold {siteConfig.city} night, we respond quickly to restore your comfort.</p>
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
                <p className="mt-1 text-sm text-gray-600">Get a clear quote before any work begins. No hidden fees or surprise charges.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">All Major Brands</h3>
                <p className="mt-1 text-sm text-gray-600">We service and install Carrier, Trane, Lennox, Goodman, Rheem, and all other major brands.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Safety Inspections</h3>
                <p className="mt-1 text-sm text-gray-600">Every heating service includes carbon monoxide testing and safety checks for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Need Heating Service?</h2>
          <p className="mt-4 text-brand-100">
            Whether your heater needs repair, maintenance, or you&apos;re ready for a new system, we&apos;re here to help.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-white px-8 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50 hover:scale-105"
            data-casey-trigger="true"
          >
            {caseyConfig.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
}
