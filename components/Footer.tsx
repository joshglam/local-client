import Link from 'next/link';
import { siteConfig, caseyConfig } from '@/lib/config';
import {
  coolingServices,
  heatingServices,
  plumbingServices,
  electricalServices,
} from '@/lib/services';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold text-sm">
                LA
              </div>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Professional HVAC, plumbing, and electrical services in {siteConfig.city}. Available 24/7.
            </p>
            <a
              href={caseyConfig.phoneHref}
              className="mt-4 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Call {caseyConfig.phone}
            </a>
            <button
              type="button"
              className="mt-2 block text-sm text-gray-400 transition-colors hover:text-white"
              data-casey-trigger="true"
            >
              Get pricing & availability →
            </button>
          </div>
          <div>
            <h4 className="font-semibold text-white">Cooling</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {coolingServices.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/cooling/${service.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Heating</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {heatingServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/heating/${service.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Plumbing</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {plumbingServices.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/plumbing/${service.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Electrical</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {electricalServices.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/electrical/${service.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-6 font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            <div>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
            <div className="text-xs text-gray-600">
              AI chat powered by{' '}
              <a href="https://caseyresponse.com" target="_blank" rel="noopener" className="hover:text-gray-400">
                Casey Response AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
