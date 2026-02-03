import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} for plumbing services in ${siteConfig.city}. Available 24/7 for emergencies. Get instant answers and free quotes.`,
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-700 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-brand-100">
            Get instant answers or schedule service 24/7
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Chat CTA - Primary */}
            <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-2xl text-white">
                💬
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Chat With Us
              </h2>
              <p className="mt-2 text-gray-600">
                The fastest way to get help. Our AI assistant is available 24/7 to answer
                questions, provide quotes, and schedule service.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span>
                  Instant responses, no waiting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span>
                  Accurate pricing estimates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span>
                  Schedule service directly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span>
                  Available 24/7, including holidays
                </li>
              </ul>
              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
                data-casey-trigger="true"
              >
                Start Chat Now
              </button>
            </div>

            {/* Other Contact Methods */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Speak with a team member directly
                    </p>
                    <a
                      href="tel:+1-469-259-4385"
                      className="mt-2 block text-lg font-semibold text-brand-600 hover:underline"
                    >
                      (469) 259-4385
                    </a>
                    <p className="text-xs text-gray-500">Available 7am - 9pm daily</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      For non-urgent inquiries
                    </p>
                    <a
                      href="mailto:hello@dallasproplumbing.com"
                      className="mt-2 block font-semibold text-brand-600 hover:underline"
                    >
                      hello@dallasproplumbing.com
                    </a>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We proudly serve {siteConfig.city} and surrounding areas including:
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Plano, Frisco, Richardson, Garland, Irving, Arlington, Fort Worth,
                      McKinney, Allen, Carrollton, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-50 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-bold text-red-700">Have a Plumbing Emergency?</h2>
          <p className="mt-2 text-red-600">
            For burst pipes, major leaks, or sewer backups, start a chat for immediate assistance
            or call us directly. We respond to emergencies 24/7.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white shadow-lg transition-colors hover:bg-red-700"
              data-casey-trigger="true"
            >
              Emergency Chat
            </button>
            <a
              href="tel:+1-469-259-4385"
              className="rounded-lg border-2 border-red-600 px-6 py-2 font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              Call (469) 259-4385
            </a>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900">Business Information</h2>
          <div className="mt-6 text-gray-600">
            <p className="font-semibold">{siteConfig.name}</p>
            <p>{siteConfig.city}, {siteConfig.state}</p>
            <p className="mt-4 text-sm">
              Licensed & Insured | TX License #12345
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
