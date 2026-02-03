import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { proTips, categoryLabels } from '@/lib/pro-tips';

export const metadata: Metadata = {
  title: 'Pro Tips - Plumbing Advice from the Experts',
  description: `Expert plumbing tips and advice from ${siteConfig.name}. Learn how to maintain your plumbing, prevent emergencies, and save money on repairs.`,
};

export default function ProTipsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/local-answer-homeowner-taking-notes-pro-tips.jpg"
          alt="Homeowner taking notes on home maintenance tips"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Pro Tips</h1>
          <p className="mt-4 text-lg text-brand-100">
            Expert plumbing advice to help you maintain your home
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {proTips.map((tip) => (
              <article
                key={tip.slug}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all hover:border-brand-300 hover:shadow-lg"
              >
                <Link href={`/pro-tips/${tip.slug}`} className="block p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                      {categoryLabels[tip.category]}
                    </span>
                    <span className="text-xs text-gray-500">{tip.readTime} read</span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-brand-600">
                    {tip.title}
                  </h2>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {tip.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-brand-600">
                    Read more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Have a Plumbing Question?</h2>
          <p className="mt-4 text-gray-600">
            Our team is available 24/7 to answer your plumbing questions and provide expert advice.
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
