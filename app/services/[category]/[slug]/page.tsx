import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { caseyConfig } from '@/lib/config';
import { getServiceByCategoryAndSlug, getAllServiceParams } from '@/lib/services';

interface ServicePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const service = getServiceByCategoryAndSlug(category, slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.name,
    description: service.metaDescription,
  };
}

const categoryLabels: Record<string, string> = {
  cooling: 'Cooling',
  heating: 'Heating',
  plumbing: 'Plumbing',
  electrical: 'Electrical',
};

const categoryHeroColors: Record<string, { overlay: string; textLight: string; textMid: string }> = {
  cooling: { overlay: 'bg-blue-900/75', textLight: 'text-blue-200', textMid: 'text-blue-300' },
  heating: { overlay: 'bg-orange-900/75', textLight: 'text-orange-200', textMid: 'text-orange-300' },
  plumbing: { overlay: 'bg-cyan-900/75', textLight: 'text-cyan-200', textMid: 'text-cyan-300' },
  electrical: { overlay: 'bg-yellow-900/75', textLight: 'text-yellow-200', textMid: 'text-yellow-300' },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { category, slug } = await params;
  const service = getServiceByCategoryAndSlug(category, slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          {(service.category === 'cooling' || service.category === 'heating') && (
            <Image
              src="/images/local-answer-hvac-technician-rooftop-ac-repair-dallas.png"
              alt="Local Answer HVAC technician repairing AC unit on Dallas rooftop"
              fill
              className="object-cover"
              priority
            />
          )}
          {service.category === 'plumbing' && (
            <Image
              src="/images/local-answer-plumber-under-sink-repair-dallas.png"
              alt="Local Answer plumber repairing pipes under kitchen sink"
              fill
              className="object-cover"
              priority
            />
          )}
          {service.category === 'electrical' && (
            <Image
              src="/images/local-answer-electrician-panel-installation-dallas.png"
              alt="Local Answer electrician installing electrical panel"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className={`absolute inset-0 ${categoryHeroColors[service.category].overlay}`} />
          <div className="relative mx-auto max-w-5xl px-4">
            <nav className="mb-4 text-sm">
              <Link href={`/services/${service.category}`} className={`${categoryHeroColors[service.category].textLight} hover:text-white`}>
                {categoryLabels[service.category]} Services
              </Link>
              <span className={`mx-2 ${categoryHeroColors[service.category].textMid}`}>/</span>
              <span className="text-white">{service.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-white">{service.hero.title}</h1>
            <p className={`mt-4 text-lg ${categoryHeroColors[service.category].textLight}`}>{service.hero.subtitle}</p>
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

        {/* Quick Answer Box */}
        <section className="border-b border-gray-200 bg-brand-50 py-8">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-lg border border-brand-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Quick Answer
              </p>
              <p className="mt-2 text-lg leading-relaxed text-gray-800">
                {service.quickAnswer}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div
                  className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-ul:my-4 prose-li:my-1"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>
              <div className="lg:col-span-1">
                {/* Sidebar */}
                <div className="sticky top-4 space-y-6">
                  {/* Features */}
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <h3 className="font-bold text-gray-900">Service Features</h3>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-brand-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <span className="text-sm text-gray-500">Price Range</span>
                      <p className="font-semibold text-gray-900">{service.priceRange}</p>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="rounded-lg bg-brand-600 p-6 text-white">
                    <h3 className="font-bold">Need This Service?</h3>
                    <p className="mt-2 text-sm text-brand-100">
                      Get a free quote and schedule service today.
                    </p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-lg bg-white px-4 py-2 font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                      data-casey-trigger="true"
                    >
                      {caseyConfig.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-gray-900">
                    {faq.question}
                    <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="border-t border-gray-100 p-4 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-gray-600">
              Chat with us to get a free quote and schedule your {service.name.toLowerCase()} service.
            </p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-brand-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
              data-casey-trigger="true"
            >
              Get Your Free Quote
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
