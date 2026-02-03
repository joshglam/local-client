import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
        <p className="mt-4 text-zinc-600">Last updated: February 2025</p>

        <div className="prose prose-zinc mt-8 max-w-none">
          <h2>Information We Collect</h2>
          <p>
            When you use {siteConfig.name}, we may collect the following
            information:
          </p>
          <ul>
            <li>
              <strong>Contact information:</strong> Phone number and name when
              you request help finding a plumber.
            </li>
            <li>
              <strong>Project details:</strong> Information about your plumbing
              needs, including urgency and job type.
            </li>
            <li>
              <strong>Usage data:</strong> How you interact with our website,
              including pages viewed and features used.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Help connect you with plumbing professionals</li>
            <li>Respond to your inquiries</li>
            <li>Improve our services</li>
            <li>Send relevant communications (with your consent)</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We may share your information with plumbing professionals when you
            request to be connected. We do not sell your personal information to
            third parties.
          </p>

          <h2>Your Consent</h2>
          <p>
            Before contacting you by phone or text, we will ask for your
            explicit consent. You can withdraw consent at any time by contacting
            us.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at privacy@local-answer.com.
          </p>
        </div>
      </div>
    </div>
  );
}
