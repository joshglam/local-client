import { siteConfig } from '../config';
import type { ServicePage } from './types';

export const plumbingServices: ServicePage[] = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    category: 'plumbing',
    metaDescription: `24/7 emergency plumbing services in ${siteConfig.city}. Fast response for burst pipes, major leaks, and plumbing emergencies. Licensed plumbers available now.`,
    hero: {
      title: 'Emergency Plumbing Services',
      subtitle: 'Available 24/7 for urgent plumbing problems',
    },
    quickAnswer: `Emergency plumbing in ${siteConfig.city} typically costs $150-$500 for most issues, with an average response time under 1 hour. Common emergencies include burst pipes, major leaks, sewer backups, and no hot water situations.`,
    content: `
      <h2>When to Call for Emergency Plumbing</h2>
      <p>A plumbing emergency requires immediate attention to prevent water damage, health hazards, or loss of essential services. Call for emergency service if you have:</p>
      <ul>
        <li><strong>Burst or broken pipes</strong> — causing significant water flow</li>
        <li><strong>Sewer backup</strong> — waste water coming up through drains</li>
        <li><strong>No water</strong> — complete loss of water supply</li>
        <li><strong>Major leaks</strong> — water pooling or dripping rapidly</li>
        <li><strong>Gas line issues</strong> — smell of gas near water heater</li>
        <li><strong>Overflowing toilet</strong> — that won't stop running</li>
      </ul>

      <h2>What to Do Before the Plumber Arrives</h2>
      <ol>
        <li>Locate and turn off the main water shut-off valve</li>
        <li>Turn off the water heater to prevent damage</li>
        <li>Open faucets to drain remaining water</li>
        <li>Clean up standing water to prevent damage</li>
        <li>Document the damage for insurance purposes</li>
      </ol>

      <h2>Emergency Plumbing Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Service call fee:</strong> $75-$150</li>
        <li><strong>After-hours surcharge:</strong> 25-50% additional</li>
        <li><strong>Common repairs:</strong> $150-$500</li>
        <li><strong>Major repairs:</strong> $500-$2,000+</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does an emergency plumber cost in ${siteConfig.city}?`,
        answer: `Emergency plumbing in ${siteConfig.city} typically costs $150-$500 for most repairs. Service call fees range from $75-$150, with an additional 25-50% surcharge for nights, weekends, and holidays.`,
      },
      {
        question: 'What qualifies as a plumbing emergency?',
        answer: 'Plumbing emergencies include burst pipes, sewer backups, major leaks causing water damage, complete loss of water, gas leaks near water heaters, and overflowing toilets that cannot be stopped.',
      },
      {
        question: 'How fast can an emergency plumber arrive?',
        answer: 'Most emergency plumbers aim to arrive within 30-60 minutes. Response times may vary based on location and demand. We prioritize true emergencies.',
      },
    ],
    priceRange: '$150 - $500+',
    features: ['24/7 Availability', 'Under 1 Hour Response', 'Licensed & Insured', 'Upfront Pricing'],
  },
  {
    slug: 'water-heater',
    name: 'Water Heater Services',
    category: 'plumbing',
    metaDescription: `Water heater installation, repair, and replacement in ${siteConfig.city}. Expert service for tankless, gas, and electric water heaters.`,
    hero: {
      title: 'Water Heater Installation & Repair',
      subtitle: 'Expert service for all water heater types',
    },
    quickAnswer: `Water heater replacement in ${siteConfig.city} costs $1,200-$3,500 installed for standard tank units, and $2,500-$5,000+ for tankless systems. Repairs typically range from $150-$500.`,
    content: `
      <h2>Water Heater Services We Offer</h2>
      <ul>
        <li><strong>Tank water heaters</strong> — gas and electric, 30-80 gallon</li>
        <li><strong>Tankless water heaters</strong> — on-demand hot water</li>
        <li><strong>Heat pump water heaters</strong> — energy-efficient option</li>
        <li><strong>Repairs</strong> — all brands and types</li>
      </ul>

      <h2>Signs You Need Water Heater Service</h2>
      <ul>
        <li>Water isn't getting hot enough</li>
        <li>Rusty or discolored water</li>
        <li>Strange noises from the unit</li>
        <li>Water pooling around the base</li>
        <li>Unit is over 10 years old</li>
      </ul>

      <h2>Water Heater Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Tank replacement:</strong> $1,200-$3,500</li>
        <li><strong>Tankless installation:</strong> $2,500-$5,000+</li>
        <li><strong>Repairs:</strong> $150-$500</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does water heater replacement cost in ${siteConfig.city}?`,
        answer: `Water heater replacement costs $1,200-$2,000 for a standard 40-50 gallon tank unit installed. Tankless systems cost $2,500-$5,000+ including installation.`,
      },
      {
        question: 'Should I repair or replace my water heater?',
        answer: 'Consider replacement if your water heater is over 10 years old, repair costs exceed 50% of replacement, or the tank is leaking.',
      },
      {
        question: 'How long does installation take?',
        answer: 'Standard tank installation takes 2-4 hours. Tankless installations take 4-8 hours as they may require upgrades.',
      },
    ],
    priceRange: '$150 - $5,000+',
    features: ['Same-Day Service', 'All Brands', 'Free Estimates', 'Warranty Included'],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    category: 'plumbing',
    metaDescription: `Professional drain cleaning in ${siteConfig.city}. Fast clog removal for kitchen, bathroom, and main sewer drains.`,
    hero: {
      title: 'Professional Drain Cleaning',
      subtitle: 'Fast clog removal and prevention',
    },
    quickAnswer: `Drain cleaning in ${siteConfig.city} costs $100-$300 for simple clogs and $200-$500+ for main line cleaning. Most clogs can be cleared within 1-2 hours.`,
    content: `
      <h2>Drain Cleaning Services</h2>
      <ul>
        <li><strong>Kitchen drains</strong> — grease and food buildup</li>
        <li><strong>Bathroom drains</strong> — hair and soap scum</li>
        <li><strong>Main sewer line</strong> — major blockages and roots</li>
        <li><strong>Floor drains</strong> — basement and garage</li>
      </ul>

      <h2>Our Methods</h2>
      <ul>
        <li><strong>Drain snaking</strong> — mechanical cable</li>
        <li><strong>Hydro jetting</strong> — high-pressure water</li>
        <li><strong>Camera inspection</strong> — diagnose problems</li>
      </ul>

      <h2>Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Simple drain clearing:</strong> $100-$200</li>
        <li><strong>Main line cleaning:</strong> $200-$500</li>
        <li><strong>Hydro jetting:</strong> $300-$600</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does drain cleaning cost in ${siteConfig.city}?`,
        answer: `Drain cleaning costs $100-$200 for simple clogs. Main sewer line cleaning costs $200-$500, and hydro jetting is $300-$600.`,
      },
      {
        question: 'How do I know if I need professional drain cleaning?',
        answer: 'Call a professional if drains are slow despite plunging, multiple drains are clogged, you hear gurgling sounds, or water backs up.',
      },
      {
        question: 'How often should drains be cleaned?',
        answer: 'Most homes benefit from professional cleaning every 1-2 years as preventive maintenance.',
      },
    ],
    priceRange: '$100 - $600+',
    features: ['Camera Inspection', 'Hydro Jetting', 'Same-Day Service', 'Preventive Maintenance'],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection & Repair',
    category: 'plumbing',
    metaDescription: `Professional leak detection in ${siteConfig.city}. Find hidden water leaks using advanced technology. Fast, non-destructive service.`,
    hero: {
      title: 'Leak Detection & Repair',
      subtitle: 'Find hidden leaks without destruction',
    },
    quickAnswer: `Leak detection in ${siteConfig.city} costs $200-$500 for most inspections. Non-invasive technology can locate leaks in walls, under slabs, and underground without demolition.`,
    content: `
      <h2>Signs of Hidden Leaks</h2>
      <ul>
        <li>Unexplained water bill increase</li>
        <li>Sound of running water</li>
        <li>Wet spots on walls or floors</li>
        <li>Musty odors or mold</li>
        <li>Warm spots on floors</li>
      </ul>

      <h2>Detection Technology</h2>
      <ul>
        <li><strong>Acoustic detection</strong></li>
        <li><strong>Thermal imaging</strong></li>
        <li><strong>Video pipe inspection</strong></li>
        <li><strong>Pressure testing</strong></li>
      </ul>

      <h2>Costs</h2>
      <ul>
        <li><strong>Leak detection:</strong> $200-$500</li>
        <li><strong>Pipe repair:</strong> $150-$400</li>
        <li><strong>Slab leak repair:</strong> $1,000-$4,000</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does leak detection cost in ${siteConfig.city}?`,
        answer: `Leak detection typically costs $200-$500 for a standard inspection. The fee is often credited toward repair costs if you proceed.`,
      },
      {
        question: 'How do plumbers find hidden leaks?',
        answer: 'We use acoustic listening devices, thermal imaging, video inspection, and pressure testing to locate leaks non-invasively.',
      },
      {
        question: 'How serious is a slab leak?',
        answer: 'Slab leaks require prompt attention. They can cause foundation damage, mold growth, and significant water waste.',
      },
    ],
    priceRange: '$200 - $5,000+',
    features: ['Non-Invasive Methods', 'Thermal Imaging', 'Video Inspection', 'Same-Day Service'],
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair & Replacement',
    category: 'plumbing',
    metaDescription: `Pipe repair and repiping in ${siteConfig.city}. Expert repair for all pipe materials. Trenchless options available.`,
    hero: {
      title: 'Pipe Repair & Replacement',
      subtitle: 'Expert repairs and repiping solutions',
    },
    quickAnswer: `Pipe repair in ${siteConfig.city} costs $150-$500 for accessible repairs. Full home repiping ranges from $4,000-$15,000 depending on size and materials.`,
    content: `
      <h2>Pipe Services</h2>
      <ul>
        <li><strong>Pipe repair</strong> — fix leaks and damage</li>
        <li><strong>Pipe replacement</strong> — sections or systems</li>
        <li><strong>Repiping</strong> — upgrade old pipes</li>
        <li><strong>Trenchless repair</strong> — minimal digging</li>
      </ul>

      <h2>When to Repipe</h2>
      <ul>
        <li>Galvanized pipes over 50 years old</li>
        <li>Frequent leaks</li>
        <li>Discolored water</li>
        <li>Low water pressure</li>
      </ul>

      <h2>Costs</h2>
      <ul>
        <li><strong>Simple repair:</strong> $150-$500</li>
        <li><strong>Whole house repipe:</strong> $4,000-$15,000</li>
        <li><strong>Trenchless sewer repair:</strong> $3,000-$10,000</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does repiping cost in ${siteConfig.city}?`,
        answer: `Repiping costs $4,000-$8,000 for small homes and $8,000-$15,000 for larger homes. PEX is typically 20-30% less than copper.`,
      },
      {
        question: 'What is trenchless pipe repair?',
        answer: 'Trenchless repair allows pipe replacement without extensive digging, minimizing landscape damage and completing faster.',
      },
      {
        question: 'How long does repiping take?',
        answer: 'Whole house repiping typically takes 2-5 days depending on home size and complexity.',
      },
    ],
    priceRange: '$150 - $15,000+',
    features: ['All Pipe Materials', 'Trenchless Options', 'Full Repiping', 'Warranty Included'],
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation',
    category: 'plumbing',
    metaDescription: `Plumbing fixture installation in ${siteConfig.city}. Professional installation of faucets, toilets, sinks, and more.`,
    hero: {
      title: 'Fixture Installation',
      subtitle: 'Professional installation for kitchens and bathrooms',
    },
    quickAnswer: `Fixture installation in ${siteConfig.city} costs $100-$300 for faucets, $200-$500 for toilets, and $300-$800+ for complex installations.`,
    content: `
      <h2>Fixtures We Install</h2>
      <ul>
        <li><strong>Faucets</strong> — kitchen, bathroom, utility</li>
        <li><strong>Toilets</strong> — standard, low-flow, smart</li>
        <li><strong>Sinks</strong> — all types</li>
        <li><strong>Showers</strong> — heads, valves, systems</li>
        <li><strong>Garbage disposals</strong></li>
        <li><strong>Dishwashers</strong> — water connections</li>
      </ul>

      <h2>Benefits of Professional Installation</h2>
      <ul>
        <li>Proper sealing prevents leaks</li>
        <li>Code-compliant work</li>
        <li>Warranty on workmanship</li>
        <li>Old fixture disposal included</li>
      </ul>

      <h2>Costs</h2>
      <ul>
        <li><strong>Faucet:</strong> $100-$250</li>
        <li><strong>Toilet:</strong> $200-$500</li>
        <li><strong>Garbage disposal:</strong> $150-$350</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does toilet installation cost in ${siteConfig.city}?`,
        answer: `Toilet installation costs $200-$500 for labor. Basic installations are $200-$300, complex jobs with flange repair run $400-$500.`,
      },
      {
        question: 'Do I need a plumber to install a faucet?',
        answer: 'A plumber ensures proper connections, prevents leaks, and handles complications. Professional installation includes workmanship warranty.',
      },
      {
        question: 'How long does installation take?',
        answer: 'Most fixtures take 1-2 hours. Faucets 30-60 minutes, toilets 1-2 hours, sinks 1-3 hours.',
      },
    ],
    priceRange: '$100 - $2,000+',
    features: ['All Fixtures', 'Brands Welcome', 'Same-Day Service', 'Cleanup Included'],
  },
];
