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
        <p className="mt-4 text-zinc-600">Last updated: February 2026</p>

        <div className="prose prose-zinc mt-8 max-w-none">
          <h2>Information We Collect</h2>
          <p>
            When you use {siteConfig.name}, including our website, AI chat
            assistant (&quot;Casey&quot;), phone services, or contact forms, we
            may collect the following information:
          </p>
          <ul>
            <li>
              <strong>Contact information:</strong> Name, phone number, and
              email address when you request service, submit a quote request,
              or communicate with us through any channel.
            </li>
            <li>
              <strong>Service details:</strong> Information about your home
              service needs, including service type, urgency, problem
              descriptions, and property details.
            </li>
            <li>
              <strong>Chat conversations:</strong> Messages and selections you
              provide when interacting with our AI chat assistant, including
              service category, service type, urgency level, problem details,
              and any contact information you provide. Chat data is stored both
              in your browser (to resume sessions) and on our servers.
            </li>
            <li>
              <strong>Call records:</strong> When you call us, we may record
              your phone number, call duration, and call content for quality
              assurance and training purposes.
            </li>
            <li>
              <strong>Usage data:</strong> How you interact with our website,
              including pages viewed, features used, and device information,
              collected through cookies and analytics tools (Google Analytics).
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide quotes, schedule service, and fulfill your requests</li>
            <li>Respond to your inquiries via phone, email, text message, or chat</li>
            <li>
              Send you service confirmations, appointment reminders, and
              follow-up communications
            </li>
            <li>
              Send promotional messages about our services, special offers, and
              seasonal maintenance reminders (with your consent)
            </li>
            <li>Improve our services, website, and AI chat assistant</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>SMS/Text Messaging</h2>
          <p>
            By providing your phone number and consenting to receive text
            messages, you agree to receive SMS/MMS messages from{' '}
            {siteConfig.name} related to your service requests, including:
          </p>
          <ul>
            <li>Appointment confirmations and reminders</li>
            <li>Service updates and technician arrival notifications</li>
            <li>Quote follow-ups</li>
            <li>Promotional offers and seasonal maintenance reminders</li>
          </ul>
          <p>
            <strong>Message frequency varies.</strong> Message and data rates
            may apply. You can opt out of text messages at any time by replying
            STOP to any message. Reply HELP for assistance.
          </p>
          <p>
            Your consent to receive text messages is not a condition of
            purchasing any goods or services. We will not share your phone
            number with third parties for their marketing purposes.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            provide our services, fulfill the purposes described in this
            policy, and comply with legal obligations. Specifically:
          </p>
          <ul>
            <li>
              <strong>Contact information and service records:</strong>{' '}
              Retained for the duration of our business relationship and up to
              3 years after your last interaction.
            </li>
            <li>
              <strong>Chat conversations:</strong> Your chat session expires
              after 7 days (you cannot resume old conversations), but we retain
              conversation data on our servers for up to 2 years to improve our
              AI assistant, provide customer support, and maintain service
              records. You can request early deletion at any time.
            </li>
            <li>
              <strong>Call records:</strong> Retained for up to 1 year.
            </li>
          </ul>
          <p>
            You may request deletion of your personal information at any time
            by contacting us at privacy@local-answer.com.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>
              <strong>Service technicians and contractors</strong> who perform
              the work you have requested
            </li>
            <li>
              <strong>Service providers</strong> who help us operate our
              business (e.g., SMS platforms, analytics tools, AI processing
              services)
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law or to
              protect our rights
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <h2>Social Media and Third-Party Platforms</h2>
          <p>
            We may collect your personal information through social media
            platforms including but not limited to Facebook, Instagram, Google,
            Yelp, Nextdoor, and TikTok. This includes information you provide
            through:
          </p>
          <ul>
            <li>
              <strong>Lead forms:</strong> When you submit a lead form or
              request a quote through a social media advertisement (e.g.,
              Facebook Lead Ads, Instagram Lead Ads), we collect the
              information you provide, which may include your name, email
              address, phone number, and service needs.
            </li>
            <li>
              <strong>Direct messages:</strong> When you message us through a
              social media platform, we may collect and store the contents of
              those messages.
            </li>
            <li>
              <strong>Comments and interactions:</strong> Public comments,
              reviews, or interactions on our social media pages.
            </li>
          </ul>
          <p>
            Information collected through social media platforms is subject to
            both this privacy policy and the respective platform&apos;s privacy
            policy. We process this information for the same purposes described
            in &quot;How We Use Your Information&quot; above.
          </p>
          <p>
            <strong>Facebook/Meta specific:</strong> We use Meta&apos;s
            advertising tools, including the Meta Pixel and Conversions API, to
            measure ad effectiveness and deliver relevant advertisements. Data
            collected through lead ads is stored securely and used solely for
            the purposes you consented to when submitting the form. We do not
            use data obtained from Meta for purposes other than those permitted
            by Meta&apos;s Platform Terms. You can manage your ad preferences
            through your Facebook/Instagram account settings.
          </p>
          <p>
            <strong>Google specific:</strong> We may use Google Ads and Google
            Business Profile to advertise our services and collect leads. Data
            collected through Google lead forms is handled in accordance with
            Google&apos;s advertising policies.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with
            our website. This service may collect information such as your IP
            address, browser type, pages visited, and time spent on pages. You
            can opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of promotional communications at any time</li>
            <li>Opt out of text messages by replying STOP</li>
            <li>Opt out of the sale or sharing of your personal information</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at
            privacy@local-answer.com. We will respond to your request within 30
            days.
          </p>

          <h2>State Privacy Rights</h2>
          <p>
            <strong>Texas residents:</strong> Under the Texas Data Privacy and
            Security Act (TDPSA), you have additional rights including the
            right to know what personal data we collect, the right to delete
            your data, the right to correct inaccuracies, and the right to opt
            out of targeted advertising and the sale of your data.
          </p>
          <p>
            <strong>California residents:</strong> Under the California
            Consumer Privacy Act (CCPA) and California Privacy Rights Act
            (CPRA), you have the right to know what personal information we
            collect, the right to delete it, the right to opt out of the sale
            or sharing of your information, and the right to non-discrimination
            for exercising your rights. We do not sell your personal
            information. To submit a verifiable consumer request, contact us at
            privacy@local-answer.com.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information, including encryption
            of data in transit and at rest. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any material changes by posting the updated policy on this
            page with a new &quot;Last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or wish to exercise
            your rights, please contact us:
          </p>
          <ul>
            <li>Email: privacy@local-answer.com</li>
            <li>Phone: (469) 259-4385</li>
            <li>
              Mail: {siteConfig.name}, {siteConfig.city}, {siteConfig.state}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
