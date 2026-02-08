import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';
import { getProTipBySlug, getAllProTipSlugs, categoryLabels, proTips } from '@/lib/pro-tips';

interface ProTipPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProTipSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProTipPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = getProTipBySlug(slug);

  if (!tip) {
    return { title: 'Article Not Found' };
  }

  return {
    title: tip.title,
    description: tip.excerpt,
  };
}

export default async function ProTipPage({ params }: ProTipPageProps) {
  const { slug } = await params;
  const tip = getProTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  const otherTips = proTips.filter((t) => t.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: tip.title,
    description: tip.excerpt,
    datePublished: tip.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-white">
        {/* Header */}
        <section className="border-b border-gray-200 bg-gray-50 py-8">
          <div className="mx-auto max-w-3xl px-4">
            <nav className="mb-4 text-sm">
              <Link href="/pro-tips" className="text-brand-600 hover:underline">
                Pro Tips
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{categoryLabels[tip.category]}</span>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {tip.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                {categoryLabels[tip.category]}
              </span>
              <span>{tip.readTime} read</span>
              <span>
                {new Date(tip.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4">
            <div className="rounded-lg border border-brand-200 bg-brand-50 p-4 mb-8">
              <p className="text-gray-700">
                <strong>Summary:</strong> {tip.excerpt}
              </p>
            </div>

            <div
              className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: tip.content }}
            />

            {/* CTA Box */}
            <div className="mt-12 rounded-xl bg-brand-600 p-8 text-center">
              <h2 className="text-xl font-bold text-white">Need Professional Help?</h2>
              <p className="mt-2 text-brand-100">
                Chat with us for expert advice or to schedule a service call.
              </p>
              <div className="mt-4">
                <a
                  href={caseyConfig.phoneHref}
                  className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand-600 shadow-lg transition-all hover:bg-brand-50"
                >
                  Call {caseyConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {otherTips.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-5xl px-4">
              <h2 className="text-2xl font-bold text-gray-900">More Pro Tips</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {otherTips.map((otherTip) => (
                  <Link
                    key={otherTip.slug}
                    href={`/pro-tips/${otherTip.slug}`}
                    className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-brand-600">
                      {categoryLabels[otherTip.category]}
                    </span>
                    <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-brand-600 line-clamp-2">
                      {otherTip.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {otherTip.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
