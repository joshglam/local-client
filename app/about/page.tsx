import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, caseyConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} - professional plumbing services in ${siteConfig.city} powered by modern technology for faster, better service.`,
};

const values = [
  {
    title: 'Instant Response',
    description: 'Our AI-powered system ensures you get answers immediately, 24/7. No waiting on hold or playing phone tag.',
    icon: '⚡',
  },
  {
    title: 'Expert Knowledge',
    description: 'Our team brings decades of combined plumbing experience. We know Dallas plumbing inside and out.',
    icon: '🎓',
  },
  {
    title: 'Transparent Pricing',
    description: 'Get accurate quotes before any work begins. No surprises, no hidden fees.',
    icon: '💰',
  },
  {
    title: 'Quality Guaranteed',
    description: 'All our work is backed by a satisfaction guarantee. We do the job right the first time.',
    icon: '✓',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/local-answer-technician-customer-handshake-happy.png"
          alt="Local Answer technician shaking hands with happy customer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">About {siteConfig.name}</h1>
          <p className="mt-4 text-lg text-brand-100">
            Modern plumbing service for {siteConfig.city} homeowners
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              {siteConfig.name} was founded with a simple mission: make getting plumbing help
              easier than ever. We saw how frustrating it was for homeowners to get quick
              answers and accurate quotes for plumbing work.
            </p>
            <p>
              By combining experienced local plumbers with modern technology, we&apos;ve created
              a service that&apos;s available when you need it. Our AI-powered assistant provides
              instant answers to your questions, accurate pricing estimates, and can schedule
              service right away.
            </p>
            <p>
              Whether you have a midnight emergency or just need advice on your next project,
              we&apos;re here to help. No more waiting on hold, no more playing phone tag. Just
              real answers from real experts, available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">What Sets Us Apart</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-2xl">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-1 text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-12 space-y-8">
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tell Us About Your Issue</h3>
                <p className="mt-1 text-gray-600">
                  Chat with our AI assistant to describe your plumbing problem. Get instant
                  answers, pricing estimates, and expert advice.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Get Your Quote</h3>
                <p className="mt-1 text-gray-600">
                  Receive a detailed, transparent quote based on your specific situation.
                  No hidden fees or surprise charges.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Schedule Service</h3>
                <p className="mt-1 text-gray-600">
                  Book an appointment at your convenience. Our licensed plumbers arrive
                  on time and ready to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Powered by Modern Technology</h2>
          <p className="mt-4 text-gray-600">
            Our AI assistant, Casey, is trained on thousands of plumbing scenarios specific
            to {siteConfig.city}. It understands local codes, common issues in our area, and
            current pricing. When you chat with us, you&apos;re getting the combined knowledge of
            experienced plumbers available instantly.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Interested in this technology for your business? Visit{' '}
            <a
              href="https://caseyresponse.com"
              className="text-brand-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              caseyresponse.com
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Experience the Difference?</h2>
          <p className="mt-4 text-gray-600">
            Chat with us now to see how easy getting plumbing help can be.
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
