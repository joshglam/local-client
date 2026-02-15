import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { plumbingServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Plumbing Repair & Emergency Plumber in DFW',
  description:
    '24/7 emergency plumbing repair across Dallas-Fort Worth. Pipe repair, drain cleaning, water heaters & more. Licensed plumbers, same-day service. Call now.',
};

export default function PlumbingServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/local-answer-plumber-under-sink-repair-dallas.png"
          alt="Local Answer plumber repairing pipes under kitchen sink"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-cyan-900/75" />
        <div className="relative mx-auto max-w-5xl px-4">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-cyan-200 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-cyan-300">/</span>
            <span className="text-white">Plumbing Services</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">Plumbing Repair & Emergency Plumber</h1>
          </div>
          <p className="text-lg text-cyan-100 max-w-2xl">
            From leaky faucets to major pipe repairs, our licensed plumbers handle it all. Serving {siteConfig.city} with reliable, professional plumbing services 24/7.
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
      <section className="py-12 bg-cyan-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">24/7 Emergency Service</h3>
              <p className="mt-2 text-sm text-gray-600">Burst pipe? Overflowing toilet? We&apos;re on call</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Licensed Plumbers</h3>
              <p className="mt-2 text-sm text-gray-600">Fully licensed, bonded, and insured</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Guaranteed Work</h3>
              <p className="mt-2 text-sm text-gray-600">All repairs backed by our warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Plumbing Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/plumbing/${service.slug}`}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Local Answer for Plumbing?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Response</h3>
                <p className="mt-1 text-sm text-gray-600">Plumbing emergencies can&apos;t wait. We arrive quickly to minimize water damage and restore your plumbing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                <p className="mt-1 text-sm text-gray-600">We provide detailed estimates before starting work. No surprise charges or hidden fees.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Camera Inspections</h3>
                <p className="mt-1 text-sm text-gray-600">We use video camera technology to diagnose drain and sewer problems accurately without guesswork.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Quality Parts</h3>
                <p className="mt-1 text-sm text-gray-600">We use high-quality replacement parts backed by manufacturer warranties for lasting repairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Need a Plumber?</h2>
          <p className="mt-4 text-brand-100">
            From simple repairs to complex installations, our licensed plumbers are ready to help.
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
