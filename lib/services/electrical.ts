import { siteConfig } from '../config';
import type { ServicePage } from './types';

export const electricalServices: ServicePage[] = [
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    category: 'electrical',
    metaDescription: `Electrical repair services in ${siteConfig.city}. Licensed electricians for outlets, switches, wiring, and electrical problems. 24/7 emergency service.`,
    hero: {
      title: 'Electrical Repair Services',
      subtitle: 'Safe, reliable electrical repairs',
    },
    quickAnswer: `Electrical repair in ${siteConfig.city} typically costs $150-$500 for common repairs. Our licensed electricians handle everything from faulty outlets to circuit breaker issues. 24/7 emergency service is available.`,
    content: `
      <h2>Electrical Problems We Fix</h2>
      <ul>
        <li><strong>Dead outlets</strong> — Not working or intermittent power</li>
        <li><strong>Tripping breakers</strong> — Circuits that won't stay on</li>
        <li><strong>Flickering lights</strong> — Loose connections or wiring issues</li>
        <li><strong>Burning smell</strong> — Overheating wires (call immediately)</li>
        <li><strong>Sparking outlets</strong> — Dangerous condition requiring immediate attention</li>
        <li><strong>Buzzing sounds</strong> — From outlets, switches, or panels</li>
        <li><strong>Warm outlets or switches</strong> — Sign of dangerous overload</li>
      </ul>

      <h2>When to Call an Electrician</h2>
      <p>Call immediately for:</p>
      <ul>
        <li>Burning smells from outlets or panels</li>
        <li>Sparking from any electrical source</li>
        <li>Outlets or switches that are warm to touch</li>
        <li>Frequent breaker trips</li>
        <li>Any shock, even a small one</li>
      </ul>

      <h2>Electrical Repair Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Service call + diagnostic:</strong> $75-$125</li>
        <li><strong>Outlet replacement:</strong> $100-$200</li>
        <li><strong>Switch replacement:</strong> $100-$175</li>
        <li><strong>Circuit breaker replacement:</strong> $150-$300</li>
        <li><strong>GFCI outlet installation:</strong> $150-$250</li>
        <li><strong>Wiring repair:</strong> $200-$500+</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does electrical repair cost in ${siteConfig.city}?`,
        answer: `Electrical repair in ${siteConfig.city} typically costs $150-$500 for common repairs. Simple outlet or switch replacements run $100-$200. Circuit breaker replacement costs $150-$300. Complex wiring repairs vary based on scope.`,
      },
      {
        question: 'Why does my circuit breaker keep tripping?',
        answer: 'Common causes include overloaded circuits (too many devices), short circuits, ground faults, or a failing breaker. If it trips repeatedly, stop resetting it and call an electrician to diagnose the cause.',
      },
      {
        question: 'Is it safe to DIY electrical repairs?',
        answer: 'Minor tasks like replacing light bulbs or resetting breakers are safe. However, any work involving wiring, outlets, or panels should be done by a licensed electrician. Improper electrical work can cause fires or electrocution.',
      },
    ],
    priceRange: '$150 - $500+',
    features: ['Licensed Electricians', '24/7 Emergency', 'Upfront Pricing', 'Code Compliant'],
  },
  {
    slug: 'electrical-installation',
    name: 'Electrical Installation',
    category: 'electrical',
    metaDescription: `Electrical installation services in ${siteConfig.city}. Outlets, lighting, ceiling fans, panels, and more. Licensed electricians with quality workmanship.`,
    hero: {
      title: 'Electrical Installation',
      subtitle: 'Professional electrical installations',
    },
    quickAnswer: `Electrical installation in ${siteConfig.city} varies by project: outlets $150-$300, ceiling fans $150-$400, panel upgrades $1,500-$3,000. All work performed by licensed electricians with permits as required.`,
    content: `
      <h2>Electrical Installations We Offer</h2>
      <ul>
        <li><strong>Outlets and switches</strong> — New installations and upgrades</li>
        <li><strong>Ceiling fans</strong> — Installation and replacement</li>
        <li><strong>Lighting</strong> — Fixtures, recessed lighting, under-cabinet</li>
        <li><strong>Panel upgrades</strong> — Increase capacity for modern needs</li>
        <li><strong>Dedicated circuits</strong> — For appliances, HVAC, workshops</li>
        <li><strong>USB outlets</strong> — Convenient charging stations</li>
        <li><strong>Smart home wiring</strong> — Switches, thermostats, hubs</li>
        <li><strong>EV charger installation</strong> — Electric vehicle charging</li>
      </ul>

      <h2>When You Need Electrical Upgrades</h2>
      <ul>
        <li>Adding major appliances</li>
        <li>Home renovation or addition</li>
        <li>Outdated panel (fuse box)</li>
        <li>Not enough outlets</li>
        <li>Installing EV charger</li>
        <li>Home office setup</li>
      </ul>

      <h2>Installation Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>New outlet:</strong> $150-$300</li>
        <li><strong>Ceiling fan installation:</strong> $150-$400</li>
        <li><strong>Recessed lighting (per light):</strong> $150-$250</li>
        <li><strong>Panel upgrade (200 amp):</strong> $1,500-$3,000</li>
        <li><strong>Dedicated circuit:</strong> $200-$500</li>
        <li><strong>EV charger installation:</strong> $500-$1,500</li>
      </ul>
    `,
    faqs: [
      {
        question: 'How much does it cost to add an outlet?',
        answer: `Adding a new outlet in ${siteConfig.city} costs $150-$300 depending on location and how far from the electrical panel. Adding to existing circuits is less expensive than running new circuits.`,
      },
      {
        question: 'Do I need a permit for electrical work?',
        answer: 'In ${siteConfig.city}, permits are required for new circuits, panel work, and major installations. Simple replacements (same-for-same) typically don\'t need permits. We handle all permitting and inspections.',
      },
      {
        question: 'How much does a panel upgrade cost?',
        answer: `Panel upgrades in ${siteConfig.city} cost $1,500-$3,000 for a 200-amp panel. This is often needed for older homes with 100-amp or fuse panels that can't handle modern electrical loads.`,
      },
    ],
    priceRange: '$150 - $3,000+',
    features: ['Licensed Electricians', 'Permits Included', 'Code Compliant', 'Quality Workmanship'],
  },
  {
    slug: 'electrical-inspection',
    name: 'Electrical Inspection',
    category: 'electrical',
    metaDescription: `Electrical inspection services in ${siteConfig.city}. Home electrical safety inspections, pre-purchase inspections, and code compliance checks.`,
    hero: {
      title: 'Electrical Inspections',
      subtitle: 'Ensure your home is safe and up to code',
    },
    quickAnswer: `Electrical inspections in ${siteConfig.city} cost $150-$300 for a standard home safety inspection. Inspections identify hazards, code violations, and needed repairs. Recommended when buying a home or if your home is 25+ years old.`,
    content: `
      <h2>When You Need an Electrical Inspection</h2>
      <ul>
        <li><strong>Buying a home</strong> — Identify issues before purchase</li>
        <li><strong>Selling a home</strong> — Address issues proactively</li>
        <li><strong>Older home (25+ years)</strong> — Check for outdated wiring</li>
        <li><strong>After storm damage</strong> — Ensure system integrity</li>
        <li><strong>Renovation planning</strong> — Assess capacity for changes</li>
        <li><strong>Insurance requirements</strong> — Some insurers require inspections</li>
        <li><strong>Frequent electrical issues</strong> — Diagnose underlying problems</li>
      </ul>

      <h2>What We Inspect</h2>
      <ul>
        <li>Electrical panel condition and capacity</li>
        <li>Wiring type and condition</li>
        <li>Outlet and switch safety</li>
        <li>GFCI protection in required areas</li>
        <li>Grounding system</li>
        <li>Smoke detector wiring</li>
        <li>Code compliance issues</li>
        <li>Safety hazards</li>
      </ul>

      <h2>Inspection Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Standard home inspection:</strong> $150-$250</li>
        <li><strong>Large home inspection:</strong> $250-$350</li>
        <li><strong>Pre-purchase inspection:</strong> $200-$300</li>
        <li><strong>Insurance inspection:</strong> $150-$250</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does an electrical inspection cost in ${siteConfig.city}?`,
        answer: `Electrical inspections in ${siteConfig.city} cost $150-$300 depending on home size and inspection type. You'll receive a detailed report of findings, safety concerns, and recommended repairs.`,
      },
      {
        question: 'What does an electrical inspection cover?',
        answer: 'A thorough inspection covers the electrical panel, wiring condition, outlets and switches, GFCI protection, grounding, smoke detectors, and general code compliance. We check for safety hazards and outdated components.',
      },
      {
        question: 'How often should I have an electrical inspection?',
        answer: 'Homes should be inspected every 10 years, or when buying/selling, after major storms, before renovations, or if you experience frequent electrical issues. Older homes with outdated wiring should be inspected sooner.',
      },
    ],
    priceRange: '$150 - $350',
    features: ['Detailed Report', 'Licensed Electricians', 'Same-Day Scheduling', 'Code Compliance Check'],
  },
  {
    slug: 'generator-installation',
    name: 'Generator Installation',
    category: 'electrical',
    metaDescription: `Generator installation in ${siteConfig.city}. Whole-home standby generators and portable generator hookups. Never lose power again.`,
    hero: {
      title: 'Generator Installation',
      subtitle: 'Backup power when you need it',
    },
    quickAnswer: `Generator installation in ${siteConfig.city} costs $3,000-$15,000+ depending on generator size and type. Whole-home standby generators start around $5,000 installed. Automatic transfer switches ensure seamless power transition.`,
    content: `
      <h2>Generator Options</h2>
      <ul>
        <li><strong>Whole-home standby</strong> — Automatic backup for entire home</li>
        <li><strong>Essential circuits</strong> — Powers critical circuits only</li>
        <li><strong>Portable generator hookup</strong> — Manual transfer switch for portable units</li>
      </ul>

      <h2>Why ${siteConfig.city} Homeowners Need Generators</h2>
      <ul>
        <li>Summer storms and grid strain</li>
        <li>Ice storms that down power lines</li>
        <li>Medical equipment that requires power</li>
        <li>Home office and remote work needs</li>
        <li>Protect refrigerated food and medications</li>
        <li>Security system and sump pump operation</li>
      </ul>

      <h2>Generator Installation Costs</h2>
      <ul>
        <li><strong>Manual transfer switch (for portable):</strong> $500-$1,000</li>
        <li><strong>7-10kW standby generator:</strong> $3,500-$5,500</li>
        <li><strong>14-20kW standby generator:</strong> $5,500-$9,000</li>
        <li><strong>22kW+ whole-home generator:</strong> $8,000-$15,000+</li>
      </ul>
      <p>Costs include generator, installation, transfer switch, and required permits.</p>
    `,
    faqs: [
      {
        question: `How much does a whole-house generator cost in ${siteConfig.city}?`,
        answer: `Whole-house generators in ${siteConfig.city} cost $5,000-$15,000+ installed. A typical home needs 14-22kW, which runs $5,500-$9,000. Larger homes or those with high electrical demands may need 22kW+, costing $8,000-$15,000+.`,
      },
      {
        question: 'How does an automatic standby generator work?',
        answer: 'When utility power fails, the automatic transfer switch detects the outage and signals the generator to start. Within 10-30 seconds, the generator powers your home. When utility power returns, it switches back automatically.',
      },
      {
        question: 'What size generator do I need?',
        answer: 'Generator size depends on what you want to power. Essential circuits (fridge, lights, HVAC) need 7-14kW. Whole-home backup typically needs 14-22kW. We perform a load calculation to recommend the right size.',
      },
    ],
    priceRange: '$3,000 - $15,000+',
    features: ['Free Load Calculation', 'Automatic Transfer', 'Permits Included', 'Maintenance Plans'],
  },
];
