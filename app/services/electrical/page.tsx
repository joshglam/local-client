import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { electricalServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Electrical Services',
  description: `Professional electrical services in ${siteConfig.city}. Panel upgrades, outlet installation, lighting, and emergency electrical repairs. Licensed electricians available 24/7.`,
};

export default function ElectricalServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/local-answer-electrician-panel-installation-dallas.png"
          alt="Local Answer electrician installing electrical panel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-yellow-900/75" />
        <div className="relative mx-auto max-w-5xl px-4">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-yellow-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-yellow-300">/</span>
            <span className="text-white">Electrical Services</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Electrical Services</h1>
          </div>
          <p className="text-lg text-yellow-100 max-w-2xl">
            Safe, reliable electrical work from licensed professionals. From panel upgrades to new installations, we handle all your electrical needs in {siteConfig.city}.
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
      <section className="py-12 bg-yellow-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">24/7 Emergency Service</h3>
              <p className="mt-2 text-sm text-gray-600">Electrical emergencies handled promptly</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Licensed Electricians</h3>
              <p className="mt-2 text-sm text-gray-600">Fully licensed, bonded, and insured</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Code Compliant</h3>
              <p className="mt-2 text-sm text-gray-600">All work meets local electrical codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Electrical Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electricalServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/electrical/${service.slug}`}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Local Answer for Electrical Work?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Safety First</h3>
                <p className="mt-1 text-sm text-gray-600">Electrical work requires expertise. Our licensed electricians ensure every job is done safely and to code.</p>
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
                <p className="mt-1 text-sm text-gray-600">Get a clear quote before any work begins. We explain all costs so there are no surprises.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Permit & Inspection</h3>
                <p className="mt-1 text-sm text-gray-600">We handle all necessary permits and schedule inspections for major electrical work.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Residential & Commercial</h3>
                <p className="mt-1 text-sm text-gray-600">From home rewiring to commercial installations, we have the expertise for any project size.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-8 bg-yellow-100 border-y border-yellow-200">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-900">Electrical Safety Warning</h3>
              <p className="mt-1 text-sm text-yellow-800">
                DIY electrical work can be dangerous and may void your insurance or violate local codes. Always hire a licensed electrician for electrical repairs, installations, and upgrades. If you experience sparking, burning smells, or frequent breaker trips, call us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Need an Electrician?</h2>
          <p className="mt-4 text-brand-100">
            From simple outlet installations to complete rewiring, our licensed electricians are ready to help.
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
