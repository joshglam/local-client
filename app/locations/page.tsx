import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: `${siteConfig.name} provides professional plumbing services throughout the Dallas-Fort Worth metroplex. Find your city and get local plumbing help today.`,
};

export default function LocationsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/local-answer-ac-technician-rooftop-dallas-summer.png"
          alt="Local Answer technician servicing AC unit on Dallas rooftop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Service Areas</h1>
          <p className="mt-4 text-lg text-brand-100">
            Professional plumbing services throughout the DFW metroplex
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                    {location.name}
                  </h2>
                  <svg
                    className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="mt-1 text-sm text-gray-500">{location.county}</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {location.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Don&apos;t See Your City?</h2>
          <p className="mt-4 text-gray-600">
            We serve many additional areas in the Dallas-Fort Worth metroplex.
            Chat with us to confirm service availability in your area.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-brand-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
            data-casey-trigger="true"
          >
            {caseyConfig.ctaText}
          </button>
        </div>
      </section>
    </div>
  );
}
