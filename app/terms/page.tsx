import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-zinc-900">Terms of Service</h1>
        <p className="mt-4 text-zinc-600">Last updated: February 2025</p>

        <div className="prose prose-zinc mt-8 max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using {siteConfig.name}, you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our service.
          </p>

          <h2>Service Description</h2>
          <p>
            {siteConfig.name} provides information about plumbing services and
            helps connect users with plumbing professionals in the{' '}
            {siteConfig.city} area. We are an information and referral service,
            not a plumbing company.
          </p>

          <h2>No Warranty</h2>
          <p>
            The information provided on this website is for general
            informational purposes only. We make no representations or
            warranties about the accuracy, reliability, or completeness of any
            information.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            When we connect you with plumbing professionals, you are entering
            into an agreement directly with them. {siteConfig.name} is not a
            party to any agreement between you and a service provider and is not
            responsible for their services.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            {siteConfig.name} shall not be liable for any damages arising from
            your use of this website or from any services provided by third
            parties to whom you are referred.
          </p>

          <h2>Directory Listings</h2>
          <p>
            Our directory includes plumbing companies serving the{' '}
            {siteConfig.city} area. Inclusion in our directory does not
            constitute an endorsement or recommendation. We verify licensing
            information where possible but recommend confirming credentials
            directly before hiring any service provider.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and logos, is
            the property of {siteConfig.name} and is protected by copyright
            laws.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the service after changes constitutes acceptance of the new
            terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at
            legal@local-answer.com.
          </p>
        </div>
      </div>
    </div>
  );
}
