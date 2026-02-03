import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';

interface LocationPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.name} Plumber - Plumbing Services in ${location.name}, TX`,
    description: `Professional plumbing services in ${location.name}, Texas. 24/7 emergency repairs, water heater installation, drain cleaning & more. Fast response times in ${location.county}.`,
  };
}

const services = [
  { name: 'Emergency Plumbing', href: '/services/plumbing/emergency-plumbing' },
  { name: 'Water Heater Services', href: '/services/plumbing/water-heater' },
  { name: 'Drain Cleaning', href: '/services/plumbing/drain-cleaning' },
  { name: 'Leak Detection', href: '/services/plumbing/leak-detection' },
  { name: 'Pipe Repair', href: '/services/plumbing/pipe-repair' },
  { name: 'Fixture Installation', href: '/services/plumbing/fixture-installation' },
];

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: `${siteConfig.name} - ${location.name}`,
    description: `Professional plumbing services in ${location.name}, ${siteConfig.state}`,
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'State',
        name: siteConfig.state,
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        addressLocality: location.name,
        addressRegion: siteConfig.state,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="bg-white">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <Image
            src="/images/local-answer-hvac-truck-north-dallas-neighborhood.png"
            alt="Local Answer service truck in Dallas neighborhood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-900/75" />
          <div className="relative mx-auto max-w-5xl px-4">
            <nav className="mb-4 text-sm">
              <Link href="/locations" className="text-brand-200 hover:text-white">
                Service Areas
              </Link>
              <span className="mx-2 text-brand-300">/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {location.name} Plumber
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-100">
              Professional plumbing services in {location.name}, Texas.
              Fast response times, upfront pricing, and 24/7 availability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-accent-600 hover:scale-105"
                data-casey-trigger="true"
              >
                Get a Free Quote in {location.name}
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

        {/* About Area */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Plumbing Services in {location.name}
                </h2>
                <p className="mt-4 text-gray-600">
                  {location.description}
                </p>
                <p className="mt-4 text-gray-600">
                  Whether you need emergency plumbing repairs, a new water heater installation,
                  or routine drain cleaning, our licensed plumbers are ready to help. We serve
                  all of {location.name} and surrounding areas in {location.county}.
                </p>

                {location.neighborhoods && location.neighborhoods.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900">
                      {location.name} Neighborhoods We Serve
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {location.neighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">{location.name} Quick Facts</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-gray-500">County</dt>
                      <dd className="font-medium text-gray-900">{location.county}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Population</dt>
                      <dd className="font-medium text-gray-900">{location.population}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">ZIP Codes Served</dt>
                      <dd className="font-medium text-gray-900">
                        {location.zipCodes.slice(0, 4).join(', ')}
                        {location.zipCodes.length > 4 && ` +${location.zipCodes.length - 4} more`}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Services Available in {location.name}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium text-gray-900">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Why {location.name} Homeowners Choose Us
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Fast Response</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We respond quickly to {location.name} service calls. Most appointments available same-day.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Licensed & Insured</h3>
                <p className="mt-2 text-sm text-gray-600">
                  All our plumbers are fully licensed in Texas and carry comprehensive insurance.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Upfront Pricing</h3>
                <p className="mt-2 text-sm text-gray-600">
                  No surprises. Get accurate quotes before any work begins on your {location.name} home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-600 py-12">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-white">
              Need a Plumber in {location.name}?
            </h2>
            <p className="mt-4 text-brand-100">
              Get instant answers and a free quote. We&apos;re available 24/7 for emergencies.
            </p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-white px-8 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50 hover:scale-105"
              data-casey-trigger="true"
            >
              Chat With Us Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
