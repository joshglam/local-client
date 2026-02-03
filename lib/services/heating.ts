import { siteConfig } from '../config';
import type { ServicePage } from './types';

export const heatingServices: ServicePage[] = [
  {
    slug: 'heater-repair',
    name: 'Heater Repair',
    category: 'heating',
    metaDescription: `Heater repair services in ${siteConfig.city}. Fast, reliable furnace and heating repair for all brands. 24/7 emergency service available.`,
    hero: {
      title: 'Heater Repair Services',
      subtitle: 'Fast, reliable heating repair',
    },
    quickAnswer: `Heater repair in ${siteConfig.city} typically costs $150-$500 for common repairs. Emergency service is available 24/7 during cold weather. Most repairs can be completed same-day to restore your heat quickly.`,
    content: `
      <h2>Common Heater Problems We Fix</h2>
      <ul>
        <li><strong>No heat</strong> — Ignition problems, thermostat issues, or gas supply</li>
        <li><strong>Insufficient heat</strong> — Dirty filters, duct issues, or undersized unit</li>
        <li><strong>Strange noises</strong> — Banging, squealing, or rattling sounds</li>
        <li><strong>Frequent cycling</strong> — Short cycling on and off</li>
        <li><strong>High energy bills</strong> — Inefficient operation</li>
        <li><strong>Yellow pilot light</strong> — Indicates combustion issues (call immediately)</li>
      </ul>

      <h2>Our Heater Repair Process</h2>
      <ol>
        <li>Safety inspection and diagnostic</li>
        <li>Clear explanation of the problem and repair options</li>
        <li>Upfront pricing before any work</li>
        <li>Professional repair using quality parts</li>
        <li>System testing and safety verification</li>
      </ol>

      <h2>Heater Repair Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Diagnostic fee:</strong> $75-$125 (often waived with repair)</li>
        <li><strong>Ignitor replacement:</strong> $150-$300</li>
        <li><strong>Flame sensor cleaning/replacement:</strong> $100-$250</li>
        <li><strong>Blower motor replacement:</strong> $300-$600</li>
        <li><strong>Heat exchanger replacement:</strong> $1,500-$3,000</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does heater repair cost in ${siteConfig.city}?`,
        answer: `Heater repair in ${siteConfig.city} typically costs $150-$500 for common repairs like ignitors, flame sensors, or thermocouples. More complex repairs like blower motors cost $300-$600. Heat exchanger replacement can cost $1,500-$3,000.`,
      },
      {
        question: 'Why is my heater blowing cold air?',
        answer: 'Common causes include a dirty filter restricting airflow, pilot light or ignition problems, thermostat issues, or a tripped safety switch. Check your filter first, then call for service if the problem persists.',
      },
      {
        question: 'Is a yellow pilot light dangerous?',
        answer: 'Yes, a yellow pilot light indicates incomplete combustion and possible carbon monoxide production. Turn off the heater and call for service immediately. Install CO detectors if you don\'t have them.',
      },
    ],
    priceRange: '$150 - $3,000',
    features: ['Same-Day Service', 'All Brands', '24/7 Emergency', 'Safety Inspections'],
  },
  {
    slug: 'heater-installation',
    name: 'Heater Installation',
    category: 'heating',
    metaDescription: `Heater installation in ${siteConfig.city}. Professional furnace and heating system installation. Free estimates and financing available.`,
    hero: {
      title: 'Heater Installation',
      subtitle: 'Professional heating system installation',
    },
    quickAnswer: `Heater installation in ${siteConfig.city} costs $3,500-$10,000+ depending on system type and size. This includes removal of old equipment, new unit installation, and warranty. Most installations are completed in one day.`,
    content: `
      <h2>Heating Systems We Install</h2>
      <ul>
        <li><strong>Gas furnaces</strong> — Most common and efficient for ${siteConfig.city} area</li>
        <li><strong>Heat pumps</strong> — Efficient heating and cooling in one unit</li>
        <li><strong>Electric furnaces</strong> — For homes without gas lines</li>
        <li><strong>Dual fuel systems</strong> — Heat pump with gas furnace backup</li>
      </ul>

      <h2>Choosing the Right Heating System</h2>
      <p>We help you select based on:</p>
      <ul>
        <li>Home size and insulation</li>
        <li>Existing fuel type (gas, electric)</li>
        <li>Energy efficiency goals (AFUE rating)</li>
        <li>Budget and operating costs</li>
        <li>Climate needs (${siteConfig.city} has mild winters)</li>
      </ul>

      <h2>Heater Installation Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Gas furnace (80% AFUE):</strong> $3,500-$5,500</li>
        <li><strong>Gas furnace (95%+ AFUE):</strong> $5,000-$7,500</li>
        <li><strong>Heat pump:</strong> $5,000-$8,000</li>
        <li><strong>Dual fuel system:</strong> $7,000-$12,000</li>
        <li><strong>Electric furnace:</strong> $2,500-$4,500</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does furnace installation cost in ${siteConfig.city}?`,
        answer: `Furnace installation in ${siteConfig.city} ranges from $3,500-$7,500 for gas furnaces depending on efficiency and size. Heat pumps cost $5,000-$8,000. Dual fuel systems that combine both technologies run $7,000-$12,000.`,
      },
      {
        question: 'Should I get a furnace or heat pump?',
        answer: `In ${siteConfig.city}'s mild climate, heat pumps are very efficient for most of the year. However, they lose efficiency below 35-40°F. A dual fuel system gives you the best of both — heat pump efficiency most of the time with gas backup for cold snaps.`,
      },
      {
        question: 'What AFUE rating should I choose?',
        answer: 'AFUE measures furnace efficiency. Standard furnaces are 80% AFUE. High-efficiency furnaces are 90-98% AFUE. Higher efficiency costs more upfront but saves on gas bills. In Texas\'s mild climate, payback periods are longer than in colder regions.',
      },
    ],
    priceRange: '$3,500 - $12,000',
    features: ['Free Estimates', 'All Major Brands', 'Financing Available', '10-Year Warranty'],
  },
  {
    slug: 'heater-maintenance',
    name: 'Heater Maintenance',
    category: 'heating',
    metaDescription: `Heater maintenance and tune-up services in ${siteConfig.city}. Keep your furnace running safely and efficiently with professional maintenance.`,
    hero: {
      title: 'Heater Maintenance & Tune-Up',
      subtitle: 'Keep your heater safe and efficient',
    },
    quickAnswer: `Heater maintenance in ${siteConfig.city} costs $75-$150 for a standard tune-up. Annual maintenance ensures safe operation, prevents breakdowns, and maintains efficiency. Schedule in fall before heating season.`,
    content: `
      <h2>What's Included in Heater Maintenance</h2>
      <ul>
        <li>Safety inspection of heat exchanger</li>
        <li>Clean or replace air filter</li>
        <li>Check and clean burners</li>
        <li>Test ignition system</li>
        <li>Inspect flue and venting</li>
        <li>Check gas connections for leaks</li>
        <li>Lubricate moving parts</li>
        <li>Test thermostat operation</li>
        <li>Check carbon monoxide levels</li>
        <li>Verify safe operation</li>
      </ul>

      <h2>Why Heater Maintenance Matters</h2>
      <ul>
        <li><strong>Safety</strong> — Detect cracked heat exchangers and gas leaks</li>
        <li><strong>Reliability</strong> — Prevent mid-winter breakdowns</li>
        <li><strong>Efficiency</strong> — Clean systems use less energy</li>
        <li><strong>Longevity</strong> — Extend system life 5+ years</li>
        <li><strong>Warranty</strong> — Most warranties require annual maintenance</li>
      </ul>

      <h2>When to Schedule Maintenance</h2>
      <p>Schedule heater maintenance in early fall, before you need heat. This ensures your system is ready and gives time to address any issues before cold weather arrives.</p>
    `,
    faqs: [
      {
        question: 'How often should I service my heater?',
        answer: 'Heaters should be professionally serviced once per year, ideally in fall before heating season. This ensures safe operation and catches problems before they leave you without heat.',
      },
      {
        question: `How much does heater maintenance cost in ${siteConfig.city}?`,
        answer: `Heater maintenance in ${siteConfig.city} costs $75-$150 for a standard tune-up. Maintenance plans that include both heating and cooling service are $150-$300 per year and include discounts on repairs.`,
      },
      {
        question: 'Is heater maintenance really necessary?',
        answer: 'Yes, especially for safety. Heater maintenance includes checking for cracked heat exchangers (carbon monoxide risk), gas leaks, and proper venting. It also prevents breakdowns and maintains efficiency.',
      },
    ],
    priceRange: '$75 - $150',
    features: ['Safety Inspection', 'CO Testing', 'All Brands', 'Maintenance Plans'],
  },
];
